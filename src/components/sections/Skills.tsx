"use client";
import { 
  Code2, 
  Figma, 
  Palette, 
  Globe, 
  Database 
} from 'lucide-react';
import { Section } from '@/components/ui/section';
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 size={40} />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={40} />,
      skills: ['Figma', 'Wireframing', 'Prototyping', 'Mockup Design']
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={40} />,
      skills: ['Node.js', 'REST APIs']
    },
  ];

  const techStack = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 70 },
    { name: 'Tailwind CSS', level: 97 },
    { name: 'Figma', level: 75 },
    { name: 'GSAP', level: 60 },
    { name: 'Framer Motion', level: 60 },
    { name: 'Restful APIs', level: 50 },
    { name: 'Node.js', level: 60 },
    { name: 'Git & Github', level: 50 }
  ];

  return (
    <Section id="skills" className="py-20 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            MY SKILLS
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning design, development, and user experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-border"
            >
              <div className="text-primary mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Proficiency */}
        <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{tech.name}</span>
                  <span className="text-primary font-bold">{tech.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true, amount: 0.3 }} 
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
