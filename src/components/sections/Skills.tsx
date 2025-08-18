import { 
  Code2, 
  Figma, 
  Palette, 
  Smartphone, 
  Globe, 
  Database 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 size={40} />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3']
    },
    {
      title: 'Design Tools',
      icon: <Figma size={40} />,
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={40} />,
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={40} />,
      skills: ['React Native', 'Flutter', 'iOS Design', 'Android Design', 'Mobile UX']
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={40} />,
      skills: ['Node.js', 'GraphQL', 'REST APIs', 'Progressive Web Apps', 'SEO Optimization']
    },
    {
      title: 'Backend & Database',
      icon: <Database size={40} />,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'AWS', 'Vercel']
    }
  ];

  const techStack = [
    { name: 'React', level: 99 },
    { name: 'TypeScript', level: 95 },
    { name: 'Figma', level: 98 },
    { name: 'Tailwind CSS', level: 97 },
    { name: 'Node.js', level: 85 },
    { name: 'UX Research', level: 95 }
  ];

  return (
    <section id="skills" className="py-20 bg-surface-elevated">
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
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;