import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Palette,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  GitBranch,
  CreditCard,
  Smartphone,
  Gauge,
  Workflow,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'Building modern, responsive and interactive user interfaces.',
    icon: Code2,
    color: 'text-cyan-400',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Tailwind CSS',
      'Responsive Web Design',
      'UI/UX Implementation',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Developing APIs, server logic and application functionality.',
    icon: Server,
    color: 'text-emerald-400',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'REST API Development',
      'CRUD Operations',
      'API Integration',
      'Backend Architecture',
    ],
  },
  {
    title: 'Database Management',
    description: 'Storing, organizing and managing application data.',
    icon: Database,
    color: 'text-blue-400',
    skills: [
      'PostgreSQL',
      'SQL',
      'Database Design',
      'Data Modeling',
      'Database Integration',
      'Data Validation',
    ],
  },
  {
    title: 'AI Integration',
    description: 'Integrating AI capabilities into practical web applications.',
    icon: BrainCircuit,
    color: 'text-violet-400',
    skills: [
      'AI-Powered Applications',
      'LLM API Integration',
      'AI Chatbots',
      'AI Dashboard Development',
      'Prompt Engineering',
      'AI-Assisted Workflows',
    ],
  },
  {
    title: 'Authentication & Security',
    description: 'Implementing secure user access and account management.',
    icon: ShieldCheck,
    color: 'text-amber-400',
    skills: [
      'User Authentication',
      'JWT',
      'Password Hashing',
      'Role-Based Access Control',
      'Email Verification',
      'Environment Variables',
    ],
  },
  {
    title: 'Deployment & DevOps',
    description: 'Version control, hosting and application deployment.',
    icon: Cloud,
    color: 'text-sky-400',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'Render',
      'Environment Configuration',
      'Deployment Troubleshooting',
      'Production API Configuration',
    ],
  },
  {
    title: 'E-commerce Development',
    description: 'Creating online stores with customer and admin functionality.',
    icon: CreditCard,
    color: 'text-pink-400',
    skills: [
      'Product Management',
      'Shopping Cart Systems',
      'Order Management',
      'Payment Gateway Integration',
      'Admin Dashboards',
      'Email Notifications',
    ],
  },
  {
    title: 'Software Engineering',
    description: 'Building maintainable, reliable and efficient applications.',
    icon: Workflow,
    color: 'text-orange-400',
    skills: [
      'Component-Based Architecture',
      'Reusable Components',
      'Clean Code',
      'Performance Optimization',
      'Debugging',
      'TypeScript Type Safety',
      'Git-Based Workflows',
    ],
  },
];

const additionalStrengths = [
  {
    icon: Palette,
    title: 'Modern UI Design',
    text: 'Clean layouts, visual hierarchy and engaging interfaces.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    text: 'Responsive experiences across phones, tablets and desktops.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    text: 'Efficient rendering, optimized assets and reliable API calls.',
  },
  {
    icon: GitBranch,
    title: 'Problem Solving',
    text: 'Debugging, troubleshooting and continuous improvement.',
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24 text-white transition-colors"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            What I Work With
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Technical{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-base leading-8 text-slate-400 md:text-lg">
            I build scalable web applications by combining full-stack
            development, database engineering, AI integration and modern
            deployment technologies to solve real-world problems.
          </p>

          <div className="mx-auto mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-transform duration-300 group-hover:scale-110">
                    <Icon className={`h-6 w-6 ${group.color}`} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-bold">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Additional strengths */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h3 className="text-2xl font-bold md:text-3xl">
              Beyond the Code
            </h3>
            <p className="mt-3 text-slate-400">
              Principles I apply when building digital products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {additionalStrengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-emerald-400/30"
                >
                  <Icon className="mx-auto mb-4 h-8 w-8 text-emerald-400" />

                  <h4 className="mb-2 font-bold">{item.title}</h4>

                  <p className="text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-emerald-400/10 p-8 text-center md:p-10"
        >
          <h3 className="mb-3 text-xl font-bold md:text-2xl">
            Building Solutions. Creating Innovation.
          </h3>

          <p className="mx-auto max-w-2xl leading-7 text-slate-300">
            My goal is to combine full-stack engineering and artificial
            intelligence to develop secure, scalable and user-focused
            applications that make a measurable difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;