import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub
} from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FiServer } from 'react-icons/fi';
import BorderGlow from './BorderGlow';

const skillCategories = [
  {
    title: '💻 Languages',
    skills: [
      { name: 'Java', icon: <FaJava />, color: '#f89820', glowColorHsl: '33 93 55' },
      { name: 'Python', icon: <FaPython />, color: '#3572A5', glowColorHsl: '207 53 43' },
      { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', glowColorHsl: '53 93 54' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6', glowColorHsl: '211 60 48' },
    ]
  },
  {
    title: '🎨 Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, color: '#61dafb', glowColorHsl: '193 95 68' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8', glowColorHsl: '198 93 60' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26', glowColorHsl: '12 79 52' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4', glowColorHsl: '228 79 52' },
    ]
  },
  {
    title: '⚙️ Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', glowColorHsl: '120 50 40' },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', glowColorHsl: '0 0 100' },
      { name: 'REST APIs', icon: <FiServer />, color: '#00ff88', glowColorHsl: '152 100 50' },
    ]
  },
  {
    title: '🗄️ Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', glowColorHsl: '121 39 46' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', glowColorHsl: '207 48 38' },
    ]
  },
  {
    title: '🛠️ Tools & Technologies',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032', glowColorHsl: '9 86 57' },
      { name: 'GitHub', icon: <FaGithub />, color: '#ffffff', glowColorHsl: '0 0 100' },
      { name: 'VS Code', icon: <VscVscode />, color: '#007acc', glowColorHsl: '204 100 40' },
    ]
  }
];

const SkillPill = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 + 0.2 }}
    whileHover={{ y: -3, scale: 1.05 }}
    className="w-full h-full"
  >
    <BorderGlow
      edgeSensitivity={30}
      glowColor={skill.glowColorHsl}
      backgroundColor="rgba(255,255,255,0.03)"
      borderRadius={10}
      glowRadius={30}
      glowIntensity={1.2}
      coneSpread={25}
      animated={false}
      colors={[skill.color, skill.color, skill.color]}
      className="w-full h-[56px] transition-all duration-300 cursor-target !border-0"
      style={{ boxShadow: `0 4px 20px ${skill.color}15` }}
    >
      <div className="w-full h-full px-2 flex flex-row items-center justify-center gap-2.5">
        <span
          className="text-xl transition-transform duration-300 flex-shrink-0"
          style={{ color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color}80)` }}
        >
          {skill.icon}
        </span>
        <span className="text-xs sm:text-sm font-bold text-white tracking-wide text-center leading-tight truncate">
          {skill.name}
        </span>
      </div>
    </BorderGlow>
  </motion.div>
);

const CategoryCard = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="p-6 md:p-8 rounded-2xl border"
    style={{
      background: 'rgba(255,255,255,0.05)',
      borderColor: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-wide flex items-center gap-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {category.title}
    </h3>
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {category.skills.map((skill, i) => (
        <SkillPill key={skill.name} skill={skill} index={i} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Dark gradient overlay to improve readability and prevent Galaxy clash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(5,5,16,0.85) 0%, rgba(5,5,16,0.4) 100%)',
          zIndex: -1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            Tech Stack
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Skills &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Technologies
            </span>
          </h2>
          <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            A curated toolkit honed through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <CategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
