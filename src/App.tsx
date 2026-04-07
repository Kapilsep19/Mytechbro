/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  Home, 
  Settings, 
  Briefcase, 
  Info, 
  ChevronRight,
  Cpu,
  Smartphone,
  Globe
} from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "NeuralNexus Core",
    category: "AI",
    tech: "Machine Learning • Python • React Three Fiber",
    description: "A predictive analysis platform utilizing distributed neural networks to forecast market volatility with 94% accuracy.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZe4LAch7_TbFvsSzgO4oG7ahSBLyIj40m24H5qz8IFC-gBDT1_tnIrW6ubhyENmw1MtANZaCtA6qIWY9SYtAY5t6VIG57Wx3J2ylrErgtH9m2nU5MVsaw2ZY1GLczAvV0n2-FrOfdaHLfiKmLy3DhBkocNLwzoaJAhr-UZYHyaR7oUXyReMwINSaMHmrF6sEYhxJd5Nu09ygkxbEwzMIsvRIZHkzdomxvgCK8CTBnRoMrjG4VDxbXQvbHzshrah4vPEoYMhmLgYY",
    featured: true,
    label: "FEATURED AI"
  },
  {
    id: 2,
    title: "VeloCity FinTech",
    category: "MOBILE",
    tech: "MOBILE • FLUTTER • FIREBASE",
    description: "High-performance digital wallet with sub-second transaction latency and biometric encryption layers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ8X-p4UA23NrgsGJ9iu6e1jsx8W3Qp_g72LT3yIZl4LWC_qvb6BL4TCzbdtYIvxYQ6Gc-7Q449rCZpPvnK-MZq7_d9PpVD9Z0G935k5GNc5MTcN7IGJGdNhOd99ptHux31Ql6I6p8ihn1MHeE5XAsPUWkBm5XWnJZOpgFpMJRdTd9fSMRWUwQhgQEABNa38gBjYyWV4q9WhW4j554Y4XGUCtLM6E9EXrHX4F_b2ZSkzy9XbGmaiWnKcIKFmFLtr_qXBQRVofZ2Dw",
    featured: false,
    alignment: 'left'
  },
  {
    id: 3,
    title: "Ethereal CMS",
    category: "WEB",
    tech: "WEB • NEXT.JS • TAILWIND CSS",
    description: "A headless content management system optimized for rapid editorial deployment and kinetic UI transitions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAovUjVKEcDmWWrRF6_zvYUCz98QMukcsbhI3vXxBLufDTP3G20BYQh4HeiXIKgGDayLz7lzdRG5bpIDxhy7JbgPIwJ0FjSSh0Pz7jJbtL_0fh5f4YCX-d15ishMEKvDgUTNU5S04uc-C43Xn_7KhzUT96B16t7SErsgjW-jLrEfwPt0YVVtvueybRX_KvVrQ3qJ479wEvh9neB5PyfRSWxTt2sJ3PtRSxT7u7ggEkcUdLnlxvAm91H1QHW9V9yqTx5-uu6wDNTtc8",
    featured: false,
    alignment: 'right'
  }
];

const CATEGORIES = ["ALL PROJECTS", "WEB", "MOBILE", "AI"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");

  const filteredProjects = activeCategory === "ALL PROJECTS" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-on-primary">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0uiTq5HAF28fGVEljifgJPk9Bp7bbPc2oY9SY56KUxjU8wme-_B6YDXZbX0L6-GoQs_LOOPBUoyOLym3Vja1TWMkgnMNg-BozaNWRiUD-IuhqxqJQiIthQiGYTNPRB9ZXBLmS2cdRh_o83bmmAIQKvOTh9rnfGYPy8S5w_6JNvoL-6anVF94ICwzmbCfAXFpvBwoUtde6aBy9XJhjOXMINqN1maFxoW2T9Ya6bB1V_Vfv5D4y7mWOTn3RhqWh6v9EpmrMYvwIfDw" 
            alt="Mytechbro Logo" 
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <button className="text-on-surface/60 hover:text-primary transition-colors duration-300 active:scale-95">
          <Bell size={24} />
        </button>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-black font-headline tracking-tighter text-on-surface mb-3">
            Portfolio
          </h1>
          <p className="text-on-surface-variant font-sans text-lg leading-relaxed max-w-[90%]">
            Exploring the frontier of digital craftsmanship and kinetic innovation.
          </p>
        </motion.section>

        {/* Filters */}
        <nav className="flex gap-3 mb-12 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-label text-xs font-bold tracking-widest whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-transparent border border-primary text-primary" 
                  : "bg-surface-container-highest text-on-surface-variant hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Project Feed */}
        <div className="grid grid-cols-1 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-container-low">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                  {project.label && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-container text-on-primary-container font-label text-[10px] font-bold tracking-tighter rounded-sm">
                        {project.label}
                      </span>
                    </div>
                  )}
                </div>

                <div className={`mt-8 ${project.alignment === 'right' ? 'text-right flex flex-col items-end' : ''}`}>
                  <h3 className="text-3xl font-bold font-headline mb-3 text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs mb-4 font-label tracking-widest uppercase italic">
                    {project.tech}
                  </p>
                  <p className={`text-on-surface/80 text-lg leading-relaxed ${project.alignment === 'right' ? 'max-w-sm' : 'max-w-xl'}`}>
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-10 glass-card rounded-3xl text-center border border-outline-variant/10"
        >
          <h4 className="text-2xl font-bold font-headline mb-6">Ready to build your monolith?</h4>
          <button className="w-full py-5 bg-primary text-on-primary font-label font-bold tracking-widest rounded-xl active:scale-95 transition-all hover:shadow-[0_0_20px_rgba(255,106,0,0.3)]">
            START A PROJECT
          </button>
        </motion.section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-20 bg-background/90 backdrop-blur-2xl flex justify-around items-center px-4 pb-4 z-50 border-t border-outline-variant/10">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Settings size={20} />} label="Services" />
        <NavItem icon={<Briefcase size={20} />} label="Portfolio" active />
        <NavItem icon={<Info size={20} />} label="About" />
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-90 duration-200 ${active ? 'text-primary' : 'text-on-surface/40 hover:text-primary'}`}>
      {icon}
      <span className="font-label text-[10px] uppercase tracking-widest">{label}</span>
    </button>
  );
}
