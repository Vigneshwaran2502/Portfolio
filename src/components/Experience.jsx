import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiStar, FiExternalLink } from 'react-icons/fi';

const timeline = [
  {
    type: 'achievement',
    icon: <FiStar size={16} />,
    color: '#eab308',
    title: 'Hackcelerate 2026 Finalist',
    company: 'Hackcelerate 2026 Hackathon | Top 30 out of 4000+ Registrations',
    period: '2026',
    description: 'Finalist in Hackcelerate 2026, building EcoSense during a 24-hour hackathon.',
    highlights: [
      <span key="h1" style={{ color: '#00ff88', fontWeight: 'bold', textShadow: '0 0 10px rgba(0,255,136,0.3)' }}>Top 30 out of 4000+ registrations</span>,
      '24-hour offline hackathon finalist',
      'Built EcoSense (Edge AI monitoring system)',
      'Real-time power tracking & insights',
      'Smart safety cut-off for overload conditions'
    ],
    team: 'Team: Vigneshwaran R, Vishaal M, Thenith Ranjan P. S, Vishal Krishna',
    link: 'https://www.linkedin.com/posts/vigneshwaran7002_hackathon-24hourhackathon-iot-activity-7424508687010091008-0YgU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKf9wEBO1YMmHj8FklbqPDrQfnzvBLkXqY',
    tags: ['Edge AI', 'IoT', 'React', 'Node.js'],
  },
  {
    type: 'internship',
    icon: <FiBriefcase size={16} />,
    color: '#00ff88',
    title: (
      <span className="flex items-center flex-wrap gap-2">
        Green Intern 
        <span
          className="inline-flex items-center px-2 py-0.5 text-xs rounded border font-semibold tracking-wide"
          style={{
            color: '#00ff88',
            borderColor: 'rgba(0,255,136,0.4)',
            background: 'rgba(0,255,136,0.1)',
            boxShadow: '0 0 8px rgba(0,255,136,0.4)'
          }}
        >
          ⭐ Top Performer
        </span>
      </span>
    ),
    company: '1M1B (One Million for One Billion)',
    period: 'Nov 2025 – Dec 2025',
    description: 'Worked as a Top Performer in the 1M1B Green Internship, contributing to a sustainability-focused platform for environmental impact tracking.',
    highlights: [
      'Built GreenLedger platform for sustainability tracking',
      'Developed transparent and reliable data handling',
      'Designed carbon analytics dashboard',
      'Generated verified carbon certificates',
      'Worked with React, Node.js, PostgreSQL'
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    type: 'internship',
    icon: <FiBriefcase size={16} />,
    color: '#00d4ff',
    title: 'Web Development Intern',
    company: 'Zidio Development',
    period: 'Aug 2025 – Sep 2025',
    highlights: [
      'Built Excel data visualization platform (DataViz Pro)',
      'Developed interactive dashboards and UI components',
      'Implemented role-based access control',
      'Worked with React, Node.js, Express.js, MongoDB',
      'Collaborated in a remote, deadline-driven environment'
    ],
    tags: ['React', 'Tailwind CSS'],
  },

  {
    type: 'achievement',
    icon: <FiStar size={16} />,
    color: '#f7df1e',
    title: 'B.E. Computer Science and Engineering',
    company: 'Easwari Engineering College, Chennai',
    period: '2024 – 2028',
    description: 'Pursuing a Bachelor\'s degree in Computer Science with a focus on software development, data structures, and problem-solving. Strong academic performance with consistent learning and practical application.',
    tags: ['Data Structures', 'Algorithms', 'Problem Solving', 'Software Development'],
  },
];

const TimelineItem = ({ item, index, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
    className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row gap-4 md:gap-0 items-start`}
  >
    {/* Card — takes up ~5/12 */}
    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-5 rounded-2xl border transition-all duration-300 group"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        {/* Color accent top */}
        <div
          className="h-0.5 rounded-full mb-4 opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
        />

        <div className="flex items-center gap-2 mb-1">
          <span
            className="px-2 py-0.5 rounded text-xs font-semibold"
            style={{ background: `${item.color}18`, color: item.color }}
          >
            {item.period}
          </span>
        </div>

        <h3 className="text-base font-bold text-white mt-2 mb-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {item.title}
        </h3>
        <p className="text-sm font-medium mb-3" style={{ color: item.color }}>
          {item.company}
        </p>
        <div className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {item.description && <p className="mb-2">{item.description}</p>}
          {item.highlights && (
            <ul className="list-disc list-inside mb-2 mt-3 space-y-1 opacity-90" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          )}
          {item.team && (
            <p className="mt-3 text-xs italic" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.team}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 items-center">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {tag}
            </span>
          ))}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="ml-auto transition-transform hover:scale-110 cursor-target"
              style={{ color: item.color }}
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </motion.div>
    </div>

    {/* Center icon — hidden on mobile, shown md+ */}
    <div className="hidden md:flex w-2/12 flex-col items-center">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center border-2 z-10"
        style={{
          background: '#0f0f25',
          borderColor: item.color,
          color: item.color,
          boxShadow: `0 0 16px ${item.color}50`,
        }}
      >
        {item.icon}
      </div>
    </div>

    {/* Spacer */}
    <div className="hidden md:block w-5/12" />

    {/* Mobile icon */}
    <div
      className="md:hidden flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border mt-1"
      style={{
        background: '#0f0f25',
        borderColor: item.color,
        color: item.color,
        boxShadow: `0 0 10px ${item.color}50`,
      }}
    >
      {item.icon}
    </div>
  </motion.div>
);

const Experience = () => (
  <section
    id="experience"
    className="py-28 relative overflow-hidden"
    style={{ background: 'transparent' }}
  >
    <div
      className="absolute top-1/4 left-0 w-64 h-64 rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />

    <div className="max-w-5xl mx-auto px-6">
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
          My Journey
        </span>
        <h2
          className="text-4xl md:text-5xl font-black text-white"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Experience &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Achievements
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
          style={{
            background: 'linear-gradient(to bottom, #00ff8840, #00d4ff40, #bf00ff40)',
            transform: 'translateX(-50%)',
          }}
        />

        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
