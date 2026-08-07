import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code, Globe, Brain, Wrench, Users } from 'lucide-react';
import React from 'react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "accent-purple",
      skills: ["Python", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "accent-blue",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML/CSS", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "emerald-400",
      skills: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "purple",
      skills: ["Git", "Tableau", "Figma", "Docker", "AWS", "REST APIs", "Postman"]
    }
  ];

  const softSkills = [
    "Leadership & Team Management",
    "Problem Solving",
    "Critical Thinking",
    "Project Coordination",
    "Cross-functional Collaboration",
    "Public Speaking"
  ];

  const featuredTech = [
    "React", "TypeScript", "Python", "TensorFlow", "PyTorch", "Node.js", "XGBoost", "MongoDB", "TailwindCSS", "Next.js"
  ];

  return (
    <section id="skills" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-primary-text font-heading font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-text max-w-3xl mx-auto font-sans">
            A comprehensive toolkit spanning AI/ML, full-stack development, and leadership capabilities.
          </p>
        </motion.div>

        {/* Scrolling Marquee for Featured Tech */}
        <div className="mb-20 w-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary-bg to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary-bg to-transparent z-10"></div>
          
          <div className="flex w-[200%] gap-4 animate-[scroll_20s_linear_infinite]">
            {[...featuredTech, ...featuredTech, ...featuredTech].map((tech, index) => (
              <div 
                key={index}
                className="flex-shrink-0 px-6 py-3 glass-card rounded-2xl flex items-center justify-center min-w-max border border-white/5 bg-card-bg/50 backdrop-blur-md hover:bg-card-bg/80 transition-colors"
              >
                <span className="text-primary-text font-heading font-medium tracking-wide">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card border-white/5 hover:border-white/20 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                      <category.icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <CardTitle className="text-xl text-primary-text font-heading">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 text-sm font-medium bg-white/5 text-primary-text/90 rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="glass-panel border-white/5 hover:border-white/20 transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-primary-text font-heading flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                  <Users className="h-6 w-6 text-emerald-400" />
                </div>
                Soft Skills & Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 text-sm font-medium bg-white/5 text-primary-text/80 rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
      
      {/* Add custom keyframe animation for the marquee if not in tailwind config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </section>
  );
}