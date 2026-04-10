import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 50);
      setProgress((scrollY / maxScroll) * 100);

      // Determine active section
      const sections = navLinks.map(l => l.label);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].toLowerCase());
        if (el && scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    
    setMenuOpen(false);
    
    // Exact navbar offset to prevent content obscuring
    const targetPosition = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - 80;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    
    // Scale duration dynamically by distance so long jumps aren't jarringly fast
    // Min: 750ms, Max: 1800ms
    const baseDuration = 750;
    const distanceDelay = Math.abs(distance) / 4; 
    const duration = Math.min(Math.max(baseDuration + distanceDelay, 800), 1800);
    
    let start = null;

    // Premium Ease-in-out easing function
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-all duration-100"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00ff88, #00d4ff, #bf00ff)',
          boxShadow: '0 0 8px #00ff88',
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
        style={scrolled ? { background: 'rgba(5, 5, 16, 0.85)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            whileHover={{ scale: 1.05 }}
            className="font-mono text-xl font-bold cursor-target"
            style={{ color: '#00ff88', textShadow: '0 0 12px #00ff88' }}
          >
            {'<V />'}
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-200 group cursor-target"
                  style={{
                    color: active === link.label ? '#00ff88' : 'rgba(255,255,255,0.7)',
                    textShadow: active === link.label ? '0 0 10px #00ff88' : 'none',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: 'linear-gradient(90deg, #00ff88, #00d4ff)' }}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,136,0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="/assets/Vigneshwaran_Resume.pdf"
              download="Vigneshwaran_Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 cursor-target"
              style={{
                borderColor: '#00ff88',
                color: '#00ff88',
                background: 'rgba(0,255,136,0.05)',
              }}
            >
              <FiDownload size={14} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white cursor-target"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10"
              style={{ background: 'rgba(5, 5, 16, 0.97)' }}
            >
              <ul className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm font-medium w-full text-left py-2 cursor-target"
                      style={{
                        color: active === link.label ? '#00ff88' : 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="/assets/Vigneshwaran_Resume.pdf"
                    download="Vigneshwaran_Resume.pdf"
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold py-2 cursor-target"
                    style={{ color: '#00ff88' }}
                  >
                    <FiDownload size={14} /> Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
