import React from 'react';
import { Code2, Terminal, Palette, Cpu } from 'lucide-react';
import { Project, Skill } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI AIIVENTORYDASBORD",
    description: "An intelligent inventory management system using AI to predict stock levels and optimize supply chain operations.",
    image: "https://picsum.photos/seed/inventory/800/600",
    tags: ["React", "Python", "TensorFlow", "Tailwind"],
    link: "https://kunlexads-png.github.io/AIIVENTORYDASBORD/",
    github:"https://kunlexads-png.github.io/AIIVENTORYDASBORD/"
  },
  {
    id: 2,
    title: "Quality Dashboard",
    description: "A real-time monitoring system for quality control metrics, featuring interactive charts and automated reporting.",
    image: "https://picsum.photos/seed/quality/800/600",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link:"https://kunlexads-png.github.io/qualitydashboard/",
    github: "https://kunlexads-png.github.io/qualitydashboard/"
  },
  {
    id: 3,
    title: "Crypto News Hub",
    description: "A centralized platform for real-time cryptocurrency news, market trends, and live price tracking across major exchanges.",
    image: "https://picsum.photos/seed/crypto/800/600",
    tags: ["Next.js", "WebSockets", "CoinGecko API", "CSS Modules"],
    link: "https://kunlexcrypto.vercel.app",
    github: "https://kunlexcrypto.vercel.app"
  },
  {
    id: 4,
    title: "Cocoa Processing Dashboard",
    description: "A specialized industrial dashboard for monitoring cocoa bean processing stages, temperature controls, and yield analytics.",
    image: "https://picsum.photos/seed/cocoa/800/600",
    tags: ["React", "IoT", "MQTT", "Chart.js"],
    link: "https://cocoa-processing-dashboard.vercel.app",
    github: "https://cocoa-processing-dashboard.vercel.app"
  },
  {
    id: 5,
    title: "Charity Web",
    description: "A modern donation platform for non-profits, featuring secure payment integration and transparent impact tracking.",
    image: "https://picsum.photos/seed/charity/800/600",
    tags: ["React", "Stripe", "Firebase", "Framer Motion"],
    link: "https://Charity-Website-git-main-kunlexs-projects.vercel.app",
    github: "https://Charity-Website-git-main-kunlexs-projects.vercel.app"
  },
  {
    id: 6,
    title: "My ECOMMERCE Web",
    description: "A comprehensive health and fitness tracking application with personalized workout plans and nutrition monitoring.",
    image: "https://picsum.photos/seed/health/800/600",
    tags: ["React Native", "Redux", "Node.js", "MongoDB"],
    link: "https://my-ecommerce-site-git-main-kunlexs-projects.vercel.app",
    github: "https://my-ecommerce-site-git-main-kunlexs-projects.vercel.app"
  },
  {
    id: 7,
    title: "Smart Home Controller",
    description: "An intuitive interface for managing smart home devices, featuring automation scheduling and energy usage insights.",
    image: "https://picsum.photos/seed/smarthome/800/600",
    tags: ["React", "WebSockets", "Express", "Tailwind"],
    link: "https://home-controller-zeta.vercel.app/#/dashboard",
    github: "https://home-controller-zeta.vercel.app/#/dashboard"
  },
  {
    id: 8,
    title: "EduLearn Platform",
    description: "An interactive e-learning platform with course management, student progress tracking, and live virtual classrooms.",
    image: "https://picsum.photos/seed/education/800/600",
    tags: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    link: "https://learning-platform-self-three.vercel.app/",
    github: "https://learning-platform-self-three.vercel.app/"
  },
  {
    id: 9,
    title: "EcoMap Explorer",
    description: "A community-driven map application for discovering and sharing eco-friendly locations and sustainable businesses.",
    image: "https://picsum.photos/seed/eco/800/600",
    tags: ["React", "Leaflet", "Firebase", "Tailwind"],
    link: "https://ecomapexplorer.vercel.app/",
    github: "https://ecomapexplorer.vercel.app/"
  },
  {
    id: 10,
    title: "FinTech Wallet",
    description: "A secure digital wallet application for managing personal finances, tracking expenses, and making instant payments.",
    image: "https://picsum.photos/seed/finance/800/600",
    tags: ["React", "TypeScript", "Node.js", "Stripe"],
    link: "https://finteh-wallet-git-main-kunlexs-projects.vercel.app/",
    github: "https://finteh-wallet-git-main-kunlexs-projects.vercel.app/"
  },
  {
    id: 11,
    title: "Recipe Finder",
    description: "A culinary application that suggests recipes based on available ingredients, featuring nutritional information and meal planning.",
    image: "https://picsum.photos/seed/recipe/800/600",
    tags: ["React", "Spoonacular API", "Tailwind", "Redux"],
    link: "https://recipe-finder-bay-kappa.vercel.app/",
    github: "https://recipe-finder-bay-kappa.vercel.app/"
  },
  {
    id: 12,
    title: "Event Planner",
    description: "A collaborative tool for organizing events, managing guest lists, and coordinating logistics with real-time updates.",
    image: "https://picsum.photos/seed/event/800/600",
    tags: ["Next.js", "Firebase", "Tailwind", "Framer Motion"],
    link: "https://eventplanner-git-main-kunlexs-projects.vercel.app/",
    github: "https://eventplanner-git-main-kunlexs-projects.vercel.app/"
  },
  {
    id: 13,
    title: "Music Streamer",
    description: "A modern music streaming application with personalized playlists, artist discovery, and high-fidelity audio playback.",
    image: "https://picsum.photos/seed/music/800/600",
    tags: ["React", "Spotify API", "Node.js", "Express"],
    link: "https://music-streamer-six.vercel.app/",
    github: "https://music-streamer-six.vercel.app/"
  },
  {
    id: 14,
    title: "Real Estate Portal",
    description: "A comprehensive platform for browsing property listings, featuring advanced search filters and interactive virtual tours.",
    image: "https://picsum.photos/seed/realestate/800/600",
    tags: ["React", "Google Maps API", "Prisma", "PostgreSQL"],
    link: "https://estateportal-git-main-kunlexs-projects.vercel.app/",
    github: "https://estateportal-git-main-kunlexs-projects.vercel.app/"
  },
  {
    id: 15,
    title: "Task Master",
    description: "A productivity-focused task management application with kanban boards, time tracking, and team collaboration features.",
    image: "https://picsum.photos/seed/task/800/600",
    tags: ["React", "Redux Toolkit", "Tailwind", "Firebase"],
    link: "https://task-app-rho-pearl.vercel.app/login",
    github: "https://task-app-rho-pearl.vercel.app/login"
  },
  {
  id: 16,
  title: "Luxury Hotel Booking",
  description: "A modern hotel reservation platform with room booking, date selection, payment integration, guest reviews, and an admin dashboard.",
  image: "https://picsum.photos/seed/hotel/800/600",
  tags: ["React", "TypeScript", "Tailwind", "Stripe"],
  link: " https://hotel-bookingwebsite-eight.vercel.app/",
  github: "https://hotel-bookingwebsite-eight.vercel.app/"
},
{
  id: 17,
  title: "Travel & Tour Platform",
  description: "A complete travel booking website featuring flight search, hotel reservations, travel packages, and destination recommendations.",
  image: "https://picsum.photos/seed/travel/800/600",
  tags: ["Next.js", "Tailwind", "Firebase", "API"],
  link: "https://travel-ease-coral.vercel.app/",
  github: "https://travel-ease-coral.vercel.app/"
},
{
  id: 18,
  title: "Food Delivery App",
  description: "An online food ordering system with restaurant listings, real-time order tracking, payment gateway integration, and delivery management.",
  image: "https://picsum.photos/seed/food/800/600",
  tags: ["React", "Node.js", "MongoDB", "Stripe"],
  link: "https://quickbite-virid.vercel.app/",
  github: "https://quickbite-virid.vercel.app/"
},
{
  id: 19,
  title: "Hospital Management System",
  description: "A healthcare platform for managing patient records, appointments, doctors, billing, and medical reports.",
  image: "https://picsum.photos/seed/hospital/800/600",
  tags: ["React", "Express", "MongoDB", "Chart.js"],
  link: "https://medicare-eight-omega.vercel.app/",
  github: "https://medicare-eight-omega.vercel.app/"
},
{
  id: 20,
  title: "Job Portal",
  description: "A recruitment platform connecting employers and job seekers with resume uploads, job applications, and candidate tracking.",
  image: "https://picsum.photos/seed/jobs/800/600",
  tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
  link: "https://job-portal-opal-rho.vercel.app/",
  github: "https://job-portal-opal-rho.vercel.app/"
},
{
  id: 21,
  title: "AI Resume Builder",
  description: "An AI-powered resume and cover letter generator with customizable templates and PDF export functionality.",
  image: "https://picsum.photos/seed/resume/800/600",
  tags: ["React", "OpenAI API", "Tailwind", "PDF"],
  link: "https://resune-ginus.vercel.app/",
  github: "https://resune-ginus.vercel.app/"
},
{
  id: 22,
  title: "Vehicle Rental Platform",
  description: "A car rental management system with booking schedules, online payments, customer management, and fleet tracking.",
  image: "https://picsum.photos/seed/car/800/600",
  tags: ["React", "Firebase", "Tailwind", "Stripe"],
  link: "https://vahicle-rentalplatform.vercel.app/",
  github: "https://vahicle-rentalplatform.vercel.app/"
},
{
  id: 23,
  title: "Social Media Dashboard",
  description: "A centralized dashboard for managing posts, analytics, engagement metrics, and multi-platform scheduling.",
  image: "https://picsum.photos/seed/social/800/600",
  tags: ["React", "Chart.js", "Node.js", "REST API"],
  link: "https://socialkunlexmedial.vercel.app/",
  github: "https://socialkunlexmedial.vercel.app/"
},
{
  id: 24,
  title: "AI Chat Assistant",
  description: "A conversational AI application with intelligent responses, file uploads, speech-to-text, and conversation history.",
  image: "https://picsum.photos/seed/ai/800/600",
  tags: ["React", "OpenAI API", "TypeScript", "Tailwind"],
  link: "#",
  github: "#"
},
{
  id: 25,
  title: "Online Banking System",
  description: "A secure banking dashboard featuring account management, transfers, transaction history, budgeting, and analytics.",
  image: "https://picsum.photos/seed/bank/800/600",
  tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  link: "https://onlinebankingsystem-xi.vercel.app/",
  github: "https://onlinebankingsystem-xi.vercel.app/"
}
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", icon: <Code2 className="w-5 h-5" />, level: 95 },
  { name: "JavaScript / TypeScript", icon: <Terminal className="w-5 h-5" />, level: 90 },
  { name: "HTML5 / CSS3", icon: <Palette className="w-5 h-5" />, level: 98 },
  { name: "Tailwind CSS", icon: <Cpu className="w-5 h-5" />, level: 95 },
  { name: "Node.js / Express", icon: <Terminal className="w-5 h-5" />, level: 85 },
  { name: "Firebase / SQL", icon: <Cpu className="w-5 h-5" />, level: 80 }
];
