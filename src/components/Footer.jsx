import React from 'react';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';

const Footer = () => (
  <footer
    className="py-8 border-t"
    style={{
      background: 'transparent',
      borderColor: 'rgba(255,255,255,0.07)',
    }}
  >
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono, monospace' }}>
        <span style={{ color: '#00ff88' }}>{'<V />'}</span> © {new Date().getFullYear()} Vigneshwaran
      </p>

      <p className="text-sm flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Built with <FiHeart style={{ color: '#ff4757' }} size={13} /> React + Tailwind + Framer Motion
      </p>

      <div className="flex items-center gap-4">
        {[
          { icon: <FiGithub size={17} />, href: 'https://github.com/Vigneshwaran2502' },
          { icon: <FiLinkedin size={17} />, href: 'https://www.linkedin.com/in/vigneshwaran7002/' },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#00ff88]"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
