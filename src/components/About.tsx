import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, Award, Heart, Download } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-primary-text font-heading font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-text max-w-3xl mx-auto font-sans">
            I'm a passionate B.Tech Computer Science student specializing in Artificial Intelligence, 
            dedicated to creating innovative solutions that make a real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glass-card border-white/5 hover:border-white/20 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 mr-4 shadow-inner">
                    <GraduationCap className="h-6 w-6 text-accent-blue" />
                  </div>
                  <h3 className="text-xl text-primary-text font-heading font-semibold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-heading font-medium text-primary-text">B.Tech Computer Science (AI)</h4>
                    <p className="text-secondary-text font-sans text-sm mt-1">Indira Gandhi Delhi Technical University for Women</p>
                    <p className="text-sm text-secondary-text/70 font-sans mt-1">2023 - 2027</p>
                    <div className="mt-3 inline-block px-3 py-1 bg-accent-blue/10 rounded-full border border-accent-blue/20">
                      <p className="text-accent-blue font-sans text-sm font-medium">CGPA: 8.5/10.0</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glass-card border-white/5 hover:border-white/20 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 mr-4 shadow-inner">
                    <Heart className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl text-primary-text font-heading font-semibold">Core Strengths</h3>
                </div>
                <ul className="space-y-3 text-secondary-text font-sans mt-4">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Strong Leadership Skills
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Creative Problem Solving
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Team Collaboration
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Project Management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="h-full glass-card border-white/5 hover:border-white/20 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 mr-4 shadow-inner">
                    <Award className="h-6 w-6 text-accent-purple" />
                  </div>
                  <h3 className="text-xl text-primary-text font-heading font-semibold">Mission</h3>
                </div>
                <p className="text-secondary-text font-sans leading-relaxed text-sm">
                  To leverage AI and technology to solve real-world problems, 
                  particularly in healthcare, climate, and social impact domains. 
                  I believe in creating solutions that not only demonstrate 
                  technical excellence but also make a meaningful difference in people's lives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto glass-panel border-white/5 hover:border-white/20 transition-colors duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-primary-text/90 font-sans leading-relaxed mb-8">
                As a dedicated computer science student with a specialization in AI, I combine technical expertise 
                with leadership experience to create innovative solutions. My journey spans from developing 
                machine learning models with 99%+ accuracy to leading large-scale events with 10,000+ attendees. 
                I'm passionate about the intersection of technology and social impact, constantly seeking 
                opportunities to apply my skills in meaningful ways.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent-purple to-accent-blue hover:opacity-90 text-white font-sans border-none shadow-[0_0_20px_rgba(139,92,246,0.3)] group transition-all"
                  onClick={() => window.open('/Resume_Sakshi.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}