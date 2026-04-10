import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const TYPING_STRINGS = [
  'Full Stack Developer',
  'Building Scalable Web Apps',
  'Problem Solver',
];

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 70);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex(i => (i + 1) % TYPING_STRINGS.length);
    }

    setDisplayText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  return (
    <span>
      <span style={{ color: '#00d4ff' }}>{displayText}</span>
      <span
        className="inline-block w-0.5 h-[1em] align-middle ml-0.5 animate-pulse"
        style={{ background: '#00d4ff', boxShadow: '0 0 8px #00d4ff' }}
      />
    </span>
  );
};

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(5,5,16,0.75) 0%, transparent 80%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 w-full flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-bold mb-8 border"
          style={{
            background: 'rgba(0,255,136,0.08)',
            borderColor: 'rgba(0,255,136,0.3)',
            color: '#00ff88',
            boxShadow: '0 0 20px rgba(0,255,136,0.15)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" style={{ boxShadow: '0 0 10px #00ff88' }} />
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black leading-tight mb-4 tracking-tight"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #ffffff, #c2c8d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Vigneshwaran
          </span>
        </motion.h1>

        {/* Typing tagline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <div className="text-2xl md:text-4xl font-bold tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <TypingAnimation />
          </div>
          <div className="text-sm md:text-base font-semibold tracking-widest uppercase mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Full Stack Developer | Building Real-World Solutions
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          I build scalable and user-friendly web applications that solve real-world problems. Passionate about creating clean, efficient, and impactful digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-5 w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,136,0.45)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('projects')}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 cursor-target"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
              color: '#050510',
            }}
          >
            View My Work <FiArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.25)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contact')}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm border transition-all duration-200 cursor-target"
            style={{
              borderColor: 'rgba(0,212,255,0.4)',
              color: '#00d4ff',
              background: 'rgba(0,212,255,0.06)',
            }}
          >
            <FiMail size={18} /> Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold' }}
        >
          Scroll to explore
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: 'linear-gradient(to bottom, transparent, #00ff88, transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
