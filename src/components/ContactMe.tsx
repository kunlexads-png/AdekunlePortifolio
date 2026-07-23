import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const ContactMe = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[40px] p-8 md:p-16 overflow-hidden relative border border-slate-100 dark:border-slate-800">
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 text-slate-900 dark:text-white">Let's work together</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Reach me on Email Or whatapp</p>
                    <p className="font-semibold text-slate-900 dark:text-white">kunlexads@gmail.com /+2348038065948</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Follow Me</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/kunlexads-png" className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:shadow-md transition-all">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/ashaolu-kunlex-4bb9b7118/" className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:shadow-md transition-all">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:shadow-md transition-all">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
              />
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-slate-900 dark:text-white placeholder:text-slate-400"
              ></textarea>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
