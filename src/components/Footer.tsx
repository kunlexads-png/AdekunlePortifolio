import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-16 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
          <div className="text-2xl font-display font-bold text-primary text-center md:text-left">
            AK<span className="text-secondary dark:text-white">.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex justify-center md:justify-end gap-6">
            <a href="https://github.com/kunlexads-png" className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ashaolu-kunlex-4bb9b7118/" className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="" className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-slate-600 dark:text-slate-300 font-semibold">kunlex</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
