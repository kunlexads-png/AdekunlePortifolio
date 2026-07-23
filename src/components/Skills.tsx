import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden relative transition-colors">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-white/5 rounded-lg text-primary">{skill.icon}</span>
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span className="text-sm text-slate-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Clean Code', 'Responsive Design', 'Performance Optimization', 'Accessibility'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
