import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiEthereum, SiReact, SiNodedotjs, SiMongodb, SiPython, SiMysql, SiSpringboot, SiExpress } from 'react-icons/si';
import { FaJava, FaChartBar } from 'react-icons/fa';
import BorderGlow from './BorderGlow';

const projects = [
  {
    title: 'GreenLedger',
    subtitle: 'Blockchain Platform',
    highlights: [
      'Carbon tracking and sustainability platform',
      'Transparent supply chain monitoring',
      'Analytics dashboard for environmental insights',
      'Secure and reliable ledger-based records',
      'Built with React, Node.js, and MongoDB'
    ],
    tags: [
      { name: 'Ethereum', icon: <SiEthereum />, color: '#627eea' },
      { name: 'React', icon: <SiReact />, color: '#61dafb' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
    ],
    github: 'https://github.com/Vigneshwaran2502/Blockchain.git',
    live: 'https://greenledgerblockchain.netlify.app/',
    accent: '#00ff88',
    glowColorHsl: '152 100 50',
    badge: '🌿 Blockchain',
  },
  {
    title: 'FileFlowPro',
    subtitle: 'Data Visualization Platform',
    highlights: [
      'Excel and CSV data visualization platform',
      'Interactive dashboards and chart rendering',
      'Drag-and-drop file upload support',
      'Real-time data processing and reporting',
      'Built with React, Python, D3.js, and Node.js'
    ],
    tags: [
      { name: 'React', icon: <SiReact />, color: '#61dafb' },
      { name: 'Python', icon: <SiPython />, color: '#3572A5' },
      { name: 'D3.js', icon: <FaChartBar />, color: '#f9a03a' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    ],
    github: 'https://github.com/Vigneshwaran2502',
    live: '#',
    accent: '#00d4ff',
    glowColorHsl: '190 100 50',
    badge: '📊 Analytics',
  },
  {
    title: 'Library Management',
    subtitle: 'Management System',
    highlights: [
      'Book catalog and member management',
      'Fine calculation and checkout workflows',
      'Admin dashboard with inventory insights',
      'Automated notifications and tracking',
      'Built with Java, Spring Boot, MySQL, and React'
    ],
    tags: [
      { name: 'Java', icon: <FaJava />, color: '#f89820' },
      { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
      { name: 'MySQL', icon: <SiMysql />, color: '#00758f' },
      { name: 'React', icon: <SiReact />, color: '#61dafb' },
    ],
    github: 'https://github.com/Vigneshwaran2502',
    live: '#',
    accent: '#bf00ff',
    glowColorHsl: '285 100 50',
    badge: '📚 Enterprise',
  },
  {
    title: 'EcoSense',
    subtitle: 'Smart Environmental Monitoring Platform',
    highlights: [
      'Real-time environmental data monitoring',
      'Tracks air quality, temperature, and pollution',
      'Smart alerts for abnormal conditions',
      'Interactive dashboards and analytics',
      'Clean and responsive user interface'
    ],
    tags: [
      { name: 'React', icon: <SiReact />, color: '#61dafb' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
    ],
    github: 'https://github.com/Vigneshwaran2502/ecosense-live.git',
    live: 'https://ecosense-live.vercel.app/',
    accent: '#10b981',
    glowColorHsl: '160 84 40',
    badge: '🌱 Sustainability',
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -8 }}
    className="group relative transition-all duration-300 h-full"
  >
    <BorderGlow
      edgeSensitivity={30}
      glowColor={project.glowColorHsl}
      backgroundColor="#0a0a1a"
      borderRadius={16}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={[project.accent, project.accent, project.accent]}
      className="flex flex-col h-full !border-0"
    >
      {/* Top accent bar */}
      <div
        className="h-px w-full transition-all duration-500 group-hover:opacity-100 opacity-50 absolute top-0"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      <div className="flex flex-col h-full z-10 relative rounded-2xl overflow-hidden pointer-events-auto">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: `${project.accent}18`,
                color: project.accent,
                border: `1px solid ${project.accent}30`,
              }}
            >
              {project.badge}
            </span>
            <div className="flex gap-2">
              <motion.a
                whileHover={{ scale: 1.15, color: project.accent }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-colors cursor-target"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <FiGithub size={17} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, color: project.accent }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-colors cursor-target"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <FiExternalLink size={17} />
              </motion.a>
            </div>
          </div>

          <h3
            className="text-xl font-bold text-white mb-1"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {project.title}
          </h3>
          <p className="text-xs font-medium mb-3" style={{ color: project.accent }}>
            {project.subtitle}
          </p>
          {project.description && (
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {project.description}
            </p>
          )}
          {project.highlights && (
            <ul className="list-disc list-inside text-sm leading-relaxed space-y-1.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Tags */}
        <div className="mt-auto p-6 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium"
                style={{
                  background: `${tag.color}12`,
                  color: tag.color,
                  border: `1px solid ${tag.color}30`,
                }}
              >
                <span className="text-xs">{tag.icon}</span>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BorderGlow>
  </motion.div>
);

const Projects = () => (
  <section
    id="projects"
    className="py-28 relative overflow-hidden"
    style={{ background: 'transparent' }}
  >
    <div
      className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(191,0,255,0.05) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }}
    />

    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span
          className="text-xs font-mono font-semibold tracking-widest uppercase mb-3 block"
          style={{ color: '#00ff88' }}
        >
          My Work
        </span>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Featured{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projects
          </span>
        </h2>
        <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
          A selection of projects built with passion, precision, and purpose.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,136,0.2)' }}
          href="https://github.com/Vigneshwaran2502"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold transition-all cursor-target"
          style={{
            borderColor: 'rgba(0,255,136,0.3)',
            color: '#00ff88',
            background: 'rgba(0,255,136,0.05)',
          }}
        >
          <FiGithub size={16} /> View All on GitHub
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
