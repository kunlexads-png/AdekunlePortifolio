import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Code2,
  Sparkles,
} from 'lucide-react';

const EMAIL = 'kunlexads@gmail.com';
const PHONE = '2348038065948';

const socialLinks = [
  {
    name: 'GitHub',
    description: 'Explore my code',
    href: 'https://github.com/kunlexads-png',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    description: 'Connect professionally',
    href: 'https://www.linkedin.com/in/ashaolu-kunlex-4bb9b7118/',
    icon: Linkedin,
  },
];

const ContactMe: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const { name, email, subject, message } = form;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please complete all fields before continuing.');
      return;
    }

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Hello,\n\n${message}\n\nBest regards,\n${name}\nReply email: ${email}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 transition-colors dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Let's Connect
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
            Have an idea?
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            Whether you need a modern website, a full-stack web application,
            an AI-powered solution, or a developer for your next project,
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main contact panel */}
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-slate-950 p-8 text-white md:p-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950">
                <Code2 className="h-7 w-7" />
              </div>

              <h3 className="mb-4 text-3xl font-bold">
                Let's create something meaningful.
              </h3>

              <p className="mb-10 leading-7 text-slate-400">
                I enjoy turning ideas into useful digital products through
                full-stack development, AI integration and creative problem
                solving.
              </p>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group mb-6 flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-cyan-400/20">
                  <Mail className="h-5 w-5 text-cyan-300" />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Email Me
                  </p>
                  <p className="break-all font-medium transition-colors group-hover:text-cyan-300">
                    {EMAIL}
                  </p>
                </div>

                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-6 flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-emerald-400/20">
                  <MessageCircle className="h-5 w-5 text-emerald-300" />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    WhatsApp
                  </p>
                  <p className="font-medium transition-colors group-hover:text-emerald-300">
                    +234 803 806 5948
                  </p>
                </div>

                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              {/* Location */}
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-violet-300" />
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Location
                  </p>
                  <p className="font-medium">Nigeria · Available for remote work</p>
                </div>
              </div>

              <div className="mb-8 h-px bg-white/10" />

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Find me online
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name} - ${social.description}`}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-cyan-400/40 hover:bg-white/10"
                    >
                      <Icon className="h-5 w-5 text-cyan-300" />

                      <div>
                        <p className="font-semibold">{social.name}</p>
                        <p className="text-xs text-slate-400">
                          {social.description}
                        </p>
                      </div>

                      <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-12"
          >
            <div className="mb-8">
              <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                Send me a message
              </h3>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                Tell me a little about your project or opportunity.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Website development, AI integration..."
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your idea, goals or project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-red-500">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20 focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                Your message will be prepared in your default email app.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Full-Stack Development <span className="mx-2 text-cyan-500">•</span>
            AI Integration <span className="mx-2 text-cyan-500">•</span>
            Digital Innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
