export interface NavigationItem { label: string; href: string; children?: { label: string; href: string }[] }
export interface AcademicStage { name: string; ages: string; copy: string; priorities: string[]; image: string }
export interface CurriculumSubject { name: string; kicker: string; description: string; outcomes: string[]; image: string }
export interface SchoolValue { name: string; description: string }
export interface NewsArticle { title: string; category: string; date: string; image: string; excerpt: string }
export interface SchoolEvent { day: string; month: string; title: string; time: string; audience: string }
export interface Testimonial { quote: string; attribution: string }
export interface GalleryImage { src: string; alt: string; category: string; span?: "wide" | "tall" | "standard" }
export interface StaffMember { name: string; role: string; image: string }
export interface FAQItem { question: string; answer: string }
