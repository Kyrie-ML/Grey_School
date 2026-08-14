param(
  [Parameter(Position = 0)]
  [ValidateSet('dev', 'build', 'start', 'typecheck')]
  [string]$Mode = 'dev',

  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$NextArguments
)

$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$runtimeRoot = 'D:\GreySchoolRuntime'
$runtimeSite = Join-Path $runtimeRoot 'site'
$runtimeCache = 'D:\GreySchoolNpmCache'
$runtimeModules = Join-Path $runtimeRoot 'node_modules'

if (-not (Test-Path -LiteralPath 'D:\')) {
  throw 'Grey School development needs the D: runtime because C: does not have enough free space.'
}

New-Item -ItemType Directory -Path $runtimeRoot -Force | Out-Null
New-Item -ItemType Directory -Path $runtimeSite -Force | Out-Null

$sourceLock = Join-Path $projectRoot 'package-lock.json'
$runtimeLock = Join-Path $runtimeRoot 'package-lock.json'
$needsInstall = -not (Test-Path -LiteralPath $runtimeModules)

if (-not $needsInstall) {
  if (-not (Test-Path -LiteralPath $runtimeLock)) {
    $needsInstall = $true
  } else {
    $sourceHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $sourceLock).Hash
    $runtimeHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $runtimeLock).Hash
    $needsInstall = $sourceHash -ne $runtimeHash
  }
}

if ($needsInstall) {
  Write-Host 'Preparing Grey School dependencies on D:...'
  Copy-Item -LiteralPath (Join-Path $projectRoot 'package.json') -Destination (Join-Path $runtimeRoot 'package.json') -Force
  Copy-Item -LiteralPath $sourceLock -Destination $runtimeLock -Force
  & npm.cmd ci --prefix $runtimeRoot --cache $runtimeCache
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

foreach ($directory in @('app', 'components', 'data', 'types')) {
  $source = Join-Path $projectRoot $directory
  $destination = Join-Path $runtimeSite $directory
  if (Test-Path -LiteralPath $destination) {
    Remove-Item -LiteralPath $destination -Recurse -Force
  }
  Copy-Item -LiteralPath $source -Destination $destination -Recurse -Force
}

foreach ($file in @('next-env.d.ts', 'next.config.ts', 'package.json', 'package-lock.json', 'postcss.config.mjs', 'tailwind.config.ts', 'tsconfig.json')) {
  Copy-Item -LiteralPath (Join-Path $projectRoot $file) -Destination (Join-Path $runtimeSite $file) -Force
}

if ($Mode -in @('dev', 'build')) {
  $nextOutput = Join-Path $runtimeSite '.next'
  if (Test-Path -LiteralPath $nextOutput) {
    Remove-Item -LiteralPath $nextOutput -Recurse -Force
  }
}

$env:NEXT_TELEMETRY_DISABLED = '1'
$env:GREY_RUNTIME_ROOT = $runtimeRoot
Push-Location $runtimeSite
try {
  if ($Mode -eq 'typecheck') {
    & (Join-Path $runtimeModules '.bin\tsc.cmd') --noEmit --incremental false
  } else {
    & (Join-Path $runtimeModules '.bin\next.cmd') $Mode @NextArguments
  }
  exit $LASTEXITCODE
} finally {
  Pop-Location
}
