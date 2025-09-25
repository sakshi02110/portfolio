import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, Award, Heart, Download } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-navy font-poppins mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
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
            <Card className="h-full border-2 border-teal/20 hover:border-teal/40 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-teal/10 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl text-navy font-poppins">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-poppins text-navy">B.Tech Computer Science (AI)</h4>
                    <p className="text-gray-600 font-inter">Indira Gandhi Delhi Technical University for Women</p>
                    <p className="text-sm text-gray-500 font-inter">2023 - 2027</p>
                    <p className="text-teal font-inter">CGPA: 8.37/10.0</p>
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
            <Card className="h-full border-2 border-coral/20 hover:border-coral/40 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-coral/10 rounded-lg mr-4">
                    <Heart className="h-6 w-6 text-coral" />
                  </div>
                  <h3 className="text-xl text-navy font-poppins">Personal Qualities</h3>
                </div>
                <ul className="space-y-2 text-gray-600 font-inter">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                    Strong Leadership Skills
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                    Creative Problem Solving
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                    Team Collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                    Event Management
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
            <Card className="h-full border-2 border-navy/20 hover:border-navy/40 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-navy/10 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="text-xl text-navy font-poppins">Mission</h3>
                </div>
                <p className="text-gray-600 font-inter leading-relaxed">
                  To leverage AI and technology to solve real-world problems, 
                  particularly in healthcare and social impact domains. 
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
          <Card className="max-w-4xl mx-auto border-2 border-gray-100 hover:border-teal/20 transition-colors duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 font-inter leading-relaxed mb-6">
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
                  className="bg-coral hover:bg-coral/90 text-white font-inter group shadow-lg"
                  onClick={() => window.open('https://drive.google.com/file/d/10x2FyJdl6xgUIPNU811-lsj3cphLKSaK/view?usp=sharing', '_blank')}
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