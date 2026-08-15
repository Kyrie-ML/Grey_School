import type { AcademicStage, CurriculumSubject, FAQItem, GalleryImage, NavigationItem, NewsArticle, SchoolEvent, SchoolValue, StaffMember, Testimonial } from "@/types/content";

export const images = {
  hero: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2400&q=88",
  teacher: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85",
  reading: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=85",
  library: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1800&q=85",
  child: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=85",
  science: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=85",
  art: "https://images.unsplash.com/photo-1544776193-32d404ae6081?auto=format&fit=crop&w=1400&q=85",
  sport: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1800&q=85",
  nature: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85",
  pencils: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85",
  music: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1600&q=85",
  campus: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=85",
  community: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1800&q=85",
  detail: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=85",
  heroClassroom: "https://images.pexels.com/photos/5905920/pexels-photo-5905920.jpeg?auto=compress&cs=tinysrgb&w=1400",
  heroTeacher: "https://images.pexels.com/photos/8423072/pexels-photo-8423072.jpeg?auto=compress&cs=tinysrgb&w=900",
  heroScience: "https://images.unsplash.com/photo-1758685734062-165cc0094e61?auto=format&fit=crop&w=900&q=82",
  heroScienceAlt: "https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=900&q=82",
  heroReading: "https://images.pexels.com/photos/8618016/pexels-photo-8618016.jpeg?auto=compress&cs=tinysrgb&w=900",
  heroArt: "https://images.pexels.com/photos/8382373/pexels-photo-8382373.jpeg?auto=compress&cs=tinysrgb&w=900",
  friendship: "https://images.pexels.com/photos/8923877/pexels-photo-8923877.jpeg?auto=compress&cs=tinysrgb&w=1000",
  classroomWide: "https://images.pexels.com/photos/5905919/pexels-photo-5905919.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const navigation: NavigationItem[] = [
  { label: "About", href: "/about", children: [{ label: "Our purpose", href: "/about#purpose" }, { label: "Headteacher's welcome", href: "/about#welcome" }, { label: "Leadership & staff", href: "/about#people" }, { label: "Safeguarding", href: "/safeguarding" }] },
  { label: "Learning", href: "/academics", children: [{ label: "Curriculum", href: "/academics#curriculum" }, { label: "Early Years", href: "/academics#stages" }, { label: "Lower Junior", href: "/academics#stages" }, { label: "Upper Junior", href: "/academics#stages" }, { label: "Learning support", href: "/academics#support" }, { label: "Enrichment", href: "/academics#enrichment" }] },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Community", href: "/about#community" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const stages: AcademicStage[] = [
  { name: "Discover", ages: "Ages 4–5", copy: "A gentle, joyful beginning built around talk, play and the pleasure of finding things out.", priorities: ["Belonging", "Language", "Curiosity"], image: images.child },
  { name: "Build", ages: "Ages 6–8", copy: "Secure foundations meet wider questions as pupils learn to connect ideas and explain their thinking.", priorities: ["Core knowledge", "Independence", "Collaboration"], image: images.reading },
  { name: "Flourish", ages: "Ages 9–11", copy: "Pupils deepen their knowledge, find their voice and step forward with thoughtful confidence.", priorities: ["Scholarship", "Character", "Leadership"], image: images.science },
];

export const curriculum: CurriculumSubject[] = [
  { name: "English", kicker: "Voice & imagination", description: "Rich texts, thoughtful discussion and purposeful writing help pupils become perceptive readers and assured communicators.", outcomes: ["Read with insight", "Write with clarity", "Speak with confidence"], image: images.library },
  { name: "Mathematics", kicker: "Pattern & reasoning", description: "Pupils build fluency and use it boldly, explaining methods, testing ideas and solving unfamiliar problems.", outcomes: ["Secure number sense", "Reason precisely", "Enjoy challenge"], image: images.pencils },
  { name: "Science", kicker: "Question & discover", description: "Practical investigation begins with good questions. Children observe closely, test fairly and learn to trust evidence.", outcomes: ["Investigate safely", "Think critically", "Explain evidence"], image: images.science },
  { name: "Computing", kicker: "Make & understand", description: "Technology is a creative tool. Pupils learn to code, design, collaborate and make considered digital choices.", outcomes: ["Computational thinking", "Digital creativity", "Online wisdom"], image: images.teacher },
  { name: "Humanities", kicker: "People & place", description: "History and geography invite children to understand lives, landscapes and the forces that shape communities.", outcomes: ["Use sources", "Read landscapes", "See perspectives"], image: images.nature },
  { name: "Languages", kicker: "Listen & connect", description: "Songs, stories and conversation make language learning lively while opening a window onto other cultures.", outcomes: ["Listen closely", "Speak readily", "Value difference"], image: images.child },
  { name: "Art & Design", kicker: "Notice & create", description: "Pupils explore materials, study artists and develop the patience to turn an idea into something distinctly their own.", outcomes: ["Experiment freely", "Develop technique", "Reflect on process"], image: images.art },
  { name: "Music", kicker: "Hear & perform", description: "Every child learns to listen, perform and compose—alone and together—growing in skill and self-belief.", outcomes: ["Keep an ensemble", "Read and compose", "Perform with joy"], image: images.music },
  { name: "Physical Education", kicker: "Move & belong", description: "A broad programme develops coordination, teamwork and an active relationship with lifelong wellbeing.", outcomes: ["Move skilfully", "Play fairly", "Build resilience"], image: images.sport },
];

export const values: SchoolValue[] = [
  { name: "Curiosity", description: "We ask good questions and stay open to surprise." },
  { name: "Kindness", description: "We notice others and choose to help." },
  { name: "Courage", description: "We try, speak honestly and begin again." },
  { name: "Responsibility", description: "We care for our choices, our community and our world." },
  { name: "Excellence", description: "We take pride in doing ordinary things exceptionally well." },
];

export const testimonials: Testimonial[] = [
  { quote: "Grey has given our daughter the confidence to speak up, ask questions and enjoy learning.", attribution: "Parent of a Year 4 pupil" },
  { quote: "The teachers know our son properly—what excites him, when to encourage him and when to give him space.", attribution: "Parent of a Year 2 pupil" },
  { quote: "There is ambition here, but it is a kind ambition. Children want to do well and want one another to do well too.", attribution: "Parent of a Year 6 pupil" },
];

export const news: NewsArticle[] = [
  { title: "Year 5 scientists turn the school pond into a living laboratory", category: "Learning", date: "12 June 2026", image: images.science, excerpt: "A term-long study of habitats, water quality and the small decisions that help ecosystems thrive." },
  { title: "A summer concert shaped by every voice", category: "Arts", date: "5 June 2026", image: images.music, excerpt: "Choirs, ensembles and first-time soloists share an evening of generous musicianship." },
  { title: "Grey runners bring home the inter-school cup", category: "Sport", date: "29 May 2026", image: images.sport, excerpt: "A fine afternoon of determined running, team spirit and support from the touchline." },
];

export const events: SchoolEvent[] = [
  { day: "18", month: "SEP", title: "Open Morning", time: "09:30–11:30", audience: "Prospective families" },
  { day: "24", month: "SEP", title: "Curriculum Evening", time: "18:00–19:15", audience: "Current parents" },
  { day: "02", month: "OCT", title: "Inter-House Sports Day", time: "13:00–15:30", audience: "Whole school" },
  { day: "11", month: "OCT", title: "Autumn Music Showcase", time: "17:30–18:30", audience: "School community" },
];

export const gallery: GalleryImage[] = [
  { src: images.science, alt: "Pupils investigating together during a practical science lesson", category: "Learning", span: "wide" },
  { src: images.art, alt: "A colourful collection of art materials ready for a class", category: "Arts", span: "tall" },
  { src: images.sport, alt: "Young pupils taking part in outdoor team sport", category: "Sport" },
  { src: images.library, alt: "A calm library filled with books and natural light", category: "Campus" },
  { src: images.nature, alt: "Children exploring and learning together outdoors", category: "Trips", span: "wide" },
  { src: images.music, alt: "Hands playing a keyboard during a music session", category: "Arts" },
  { src: images.teacher, alt: "Teacher working closely with pupils in class", category: "Community", span: "tall" },
];

export const staff: StaffMember[] = [
  { name: "Amelia Reed", role: "Headteacher", image: images.teacher },
  { name: "Daniel Okafor", role: "Deputy Head — Academic", image: images.child },
  { name: "Priya Shah", role: "Deputy Head — Pastoral", image: images.art },
];

export const faqs: FAQItem[] = [
  { question: "When are the main points of entry?", answer: "Our principal entry point is Reception at age four. A small number of places may become available in other year groups, subject to current roll and a friendly assessment." },
  { question: "How should we arrange a visit?", answer: "You can join an Open Morning or request a personal tour. Both include time in classrooms and a conversation with a member of the admissions team." },
  { question: "What does the admissions meeting involve?", answer: "It is an age-appropriate opportunity for us to get to know your child. Younger children join a relaxed play session; older pupils complete a short set of learning activities." },
  { question: "Is financial assistance available?", answer: "A limited number of means-tested bursaries are available. Please speak confidentially with our admissions team before submitting an application." },
];
