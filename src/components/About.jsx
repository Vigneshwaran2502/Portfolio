import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTarget, FiZap, FiLayout } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const highlights = [
  {
    icon: <FiCode size={20} />,
    title: 'Full Stack',
    desc: 'End-to-end development from UI design to backend APIs and database management.',
  },
  {
    icon: <FiLayout size={20} />,
    title: 'Web Development',
    desc: 'Building responsive, scalable, and high-performance web applications using modern technologies.',
  },
  {
    icon: <FiTarget size={20} />,
    title: 'Problem Solver',
    desc: 'Strong analytical mindset focused on writing clean, efficient, and maintainable code.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Background glow accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 text-center"
        >
          <span
            className="text-xs font-mono font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: '#00ff88' }}
          >
            Get to know me
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Profile visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #00ff88, #00d4ff, #bf00ff, #00ff88)',
                  padding: '3px',
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                }}
              />
              {/* Profile image */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4"
                style={{ borderColor: 'transparent' }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center text-7xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, #0f0f25, #16162a)',
                    color: 'transparent',
                    WebkitTextStroke: '2px #00ff88',
                    fontFamily: 'Outfit, sans-serif',
                    boxShadow: 'inset 0 0 40px rgba(0,255,136,0.1)',
                  }}
                >
                  VR
                </div>
              </div>

              {/* Floating badge — Experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl border text-sm font-semibold"
                style={{
                  background: 'rgba(0,255,136,0.1)',
                  borderColor: 'rgba(0,255,136,0.3)',
                  color: '#00ff88',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Bio & highlights */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15 }}
          >
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Hi, I'm{' '}
              <span style={{ color: '#00ff88' }}>Vigneshwaran</span> 👋
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              I'm a passionate Full Stack Developer with a strong foundation in building scalable and user-friendly web applications. I enjoy turning ideas into real-world solutions that are efficient, clean, and impactful.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
              My journey started with curiosity about how software works, and over time, it has grown into a deep interest in developing complete applications—from designing intuitive user interfaces to building robust backend systems.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
              I specialize in the MERN stack and Java-based development, focusing on creating responsive, high-performance, and user-centric experiences. Whether it's developing dashboards, full-stack platforms, or solving complex problems, I bring consistency and attention to detail to every project.
            </p>

            {/* Highlight cards */}
            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <span
                    className="mt-0.5 p-2 rounded-lg flex-shrink-0"
                    style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88' }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
