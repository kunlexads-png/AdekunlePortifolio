import React from 'react';
import { motion } from 'motion/react';
import kunwite from '../assets/kunwite.jpg';
const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative transition-colors">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-secondary dark:text-white">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mb-8 rounded-full" />
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a results-driven <span className="text-secondary dark:text-emerald-400 font-semibold"> For Both Frontend & Backend Developer</span> with a deep passion for building high-performance web applications. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
              </p>
              <p>
                My journey started with a curiosity for how things work on the web, which evolved into a career dedicated to crafting seamless user experiences. I specialize in <span className="text-primary font-medium">React, TypeScript, and modern CSS frameworks</span>, always striving to write clean, maintainable code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Experience</p>
                <p className="text-lg font-semibold text-secondary dark:text-white">3+ Years</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Projects</p>
                <p className="text-lg font-semibold text-secondary dark:text-white">20+ Completed</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src={kunwite}
                alt="About Me" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
