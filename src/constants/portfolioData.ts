/**
 * Portfolio Data Source
 * This file contains all the information about ASHAOLU ADEKUNLE 
 * that the chatbot uses to answer questions.
 */

export const PORTFOLIO_DATA = {
  about: {
    name: "ASHAOLU ADEKUNLE",
    title: "Frontend Developer",
    experience: "5+ years",
    completedProjects: "50+",
    bio: "A results-driven Frontend Developer with a deep passion for building high-performance web applications. Bridges the gap between aesthetics and functionality with a background in both design and engineering. Specializes in React, TypeScript, and modern CSS frameworks.",
    location: "Remote / Global",
    interests: ["Design trends", "Open-source projects", "Developer community"]
  },
  skills: [
    { name: "React / Next.js", level: "95%" },
    { name: "JavaScript / TypeScript", level: "90%" },
    { name: "HTML5 / CSS3", level: "98%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "Node.js / Express", level: "85%" },
    { name: "Firebase / SQL", level: "80%" },
    { name: "Clean Code", level: "Expert" },
    { name: "Responsive Design", level: "Expert" },
    { name: "Performance Optimization", level: "Expert" },
    { name: "Accessibility", level: "Expert" }
  ],
  projects: [
    {
      title: "AI Inventory Dashboard",
      description: "An intelligent inventory management system using AI to predict stock levels and optimize supply chain operations.",
      tech: ["React", "Python", "TensorFlow", "Tailwind"]
    },
    {
      title: "Quality Dashboard",
      description: "A real-time monitoring system for quality control metrics, featuring interactive charts and automated reporting.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "Crypto News Hub",
      description: "A centralized platform for real-time cryptocurrency news, market trends, and live price tracking.",
      tech: ["Next.js", "WebSockets", "CoinGecko API"]
    },
    {
      title: "Cocoa Processing Dashboard",
      description: "Industrial dashboard for monitoring cocoa bean processing stages and yield analytics.",
      tech: ["React", "IoT", "MQTT", "Chart.js"]
    },
    {
      title: "Charity Web",
      description: "Modern donation platform for non-profits with secure payment integration.",
      tech: ["React", "Stripe", "Firebase", "Framer Motion"]
    }
    // ... more projects can be added here
  ],
  contact: {
    email: "kunlexads@gmail.com",
    linkedin: "linkedin.com/in/ashola-adekunle",
    github: "github.com/kunlexads-png",
    availability: "Available for new opportunities"
  }
};

export type PortfolioData = typeof PORTFOLIO_DATA;
