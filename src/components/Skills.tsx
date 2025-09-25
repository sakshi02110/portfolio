import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Code, Globe, Brain, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "teal",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "coral",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "navy",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "XGBoost", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "purple",
      skills: [
        { name: "Git", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Figma", level: 75 },
        { name: "JWT", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    }
  ];

  const softSkills = [
    "Leadership & Team Management",
    "Event Management",
    "Problem Solving",
    "Critical Thinking",
    "Project Coordination",
    "Public Speaking",
    "Cross-functional Collaboration",
    "Mentoring & Training"
  ];

  const concepts = [
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Data Structures & Algorithms",
    "Machine Learning Algorithms",
    "Web Security (JWT)",
    "API Development",
    "Agile Methodology"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-navy font-poppins mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            A comprehensive toolkit spanning AI/ML, full-stack development, and leadership capabilities.
          </p>
        </motion.div>

        {/* Technical Skills with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border-2 border-${category.color}/20 hover:border-${category.color}/40 transition-colors duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-${category.color}/10 rounded-lg`}>
                      <category.icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <CardTitle className="text-xl text-navy font-poppins">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-inter">{skill.name}</span>
                          <span className="text-sm text-gray-500 font-inter">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: (index * 0.1) + (idx * 0.1) }}
                          viewport={{ once: true }}
                          className="origin-left"
                        >
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills and Concepts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-coral/20 hover:border-coral/40 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-navy font-poppins flex items-center gap-3">
                  <div className="p-3 bg-coral/10 rounded-lg">
                    <Users className="h-6 w-6 text-coral" />
                  </div>
                  Soft Skills & Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="outline" 
                        className="w-full justify-center p-2 border-coral/30 text-gray-700 hover:bg-coral/10 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Concepts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-navy/20 hover:border-navy/40 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-navy font-poppins flex items-center gap-3">
                  <div className="p-3 bg-navy/10 rounded-lg">
                    <Brain className="h-6 w-6 text-navy" />
                  </div>
                  Technical Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {concepts.map((concept, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="outline" 
                        className="w-full justify-center p-2 border-navy/30 text-gray-700 hover:bg-navy/10 transition-colors duration-300"
                      >
                        {concept}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="max-w-4xl mx-auto border-2 border-teal/20 hover:border-teal/30 transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl text-navy font-poppins mb-4">Professional Highlights</h3>
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                With expertise spanning from machine learning algorithms achieving 99%+ accuracy to 
                leading teams of 50+ members in large-scale events, I bring a unique combination of 
                technical depth and leadership experience. My skills bridge the gap between cutting-edge 
                AI research and practical, user-centered application development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Import Users icon
import { Users } from 'lucide-react';