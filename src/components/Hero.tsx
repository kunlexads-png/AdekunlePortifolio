import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import TypingText from './TypingText';
import profile from '../assets/profile.jp.jpg';
import cvfile from '../assets/kuncv.pdf';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-900 transition-colors">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full md:w-1/2 h-full bg-emerald-50/50 dark:bg-emerald-900/10 md:rounded-l-[100px] transition-colors" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold mb-6">
            Available for new opportunities
          </span>
          
<h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-slate-900 dark:text-white">
  <span className="block">
    Building Scalable,
  </span>

  <span className="block">
    High-Performance
  </span>

  <span className="block mt-2 min-h-[1.5em]">
    <TypingText
      texts={[
        'Web Applications',
        'AI-Powered Solutions',
        'Intelligent Chatbots',
        'Responsive Websites',
        'Innovative Digital Experiences',
      ]}
    />
  </span>
</h1>


          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            Hi, I'm{' '}
            <span className="font-semibold text-secondary dark:text-emerald-400">
              Ashaolu Adekunle
            </span>
            . A passionate Full Stack Developer specializing in creating
            beautiful, functional, and user-centered digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className="w-full sm:w-auto bg-secondary dark:bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-secondary/20 dark:hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              View Projects
              <ChevronDown className="w-4 h-4" />
            </button>

            <a
              href={cvfile}
              download="Ashaolu_Adekunle_CV.pdf"
              className="w-full sm:w-auto border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-6">
            <a
              href="https://github.com/kunlexads-png"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/ashaolu-kunlex-4bb9b7118/"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
  href="mailto:Kunlex4star@gmail.com"
  aria-label="Send me an email"
  className="text-slate-400 hover:text-primary transition-colors"
>
  <Mail className="w-6 h-6" />
</a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 aspect-square rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;