import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Download, Mail, ChevronDown, Rocket, FileText, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const roles = [
  "AI Engineer",
  "Machine Learning Researcher",
  "Full Stack Developer"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-accent-blue font-inter font-medium tracking-wide uppercase text-sm"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-primary-text font-heading"
              >
                Sakshi
              </motion.h1>
              
              <div className="h-10 md:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl md:text-4xl text-gradient font-heading font-semibold"
                  >
                    {roles[currentRoleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-secondary-text max-w-xl font-sans leading-relaxed"
            >
              Transforming data into impactful AI solutions and building scalable web applications. 
              Currently applying deep learning to climate forecasting at DRDO while building 
              intelligent SaaS platforms for healthcare and career guidance.
            </motion.p>

            {/* Achievement Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 max-w-2xl"
            >
              <div className="flex items-center gap-3 p-4 glass-card cursor-glow">
                <div className="p-2 bg-accent-blue/10 rounded-lg">
                  <Rocket className="h-5 w-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-text font-heading">AI Products Built</p>
                  <p className="text-xs text-secondary-text font-sans">Udaan, Sanjeevani</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 glass-card cursor-glow">
                <div className="p-2 bg-accent-purple/10 rounded-lg">
                  <FileText className="h-5 w-5 text-accent-purple" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-text font-heading">Research @ DRDO</p>
                  <p className="text-xs text-secondary-text font-sans">Rainfall DL Models</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 glass-card cursor-glow">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Code2 className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-text font-heading">250+ DSA Problems</p>
                  <p className="text-xs text-secondary-text font-sans">Problem Solving</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                size="lg"
                className="bg-accent-blue hover:bg-accent-blue/80 text-white font-sans group shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                onClick={() => window.open('/Resume_Sakshi.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 text-primary-text hover:bg-white/5 font-sans group glass-card"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform text-accent-purple" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Image Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex flex-col items-center justify-center animate-float"
          >
            <div className="relative z-10 p-2 glass-panel rounded-3xl w-4/5 max-w-sm mx-auto">
              <ImageWithFallback
                src="/profile.jpg"
                alt="Sakshi"
                className="rounded-2xl object-cover w-full h-auto shadow-[0_0_40px_rgba(139,92,246,0.2)]"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="mt-6 italic text-secondary-text font-serif text-sm text-center leading-relaxed max-w-sm mx-auto relative z-10"
            >
              "I believe every challenge is an opportunity to learn, and every idea has the potential to create impact. I'm passionate about building intelligent systems that solve real-world problems while continuously growing as an engineer and as a person."
            </motion.div>
            
            {/* Ambient glows behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-accent-purple/20 to-accent-blue/20 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-secondary-text font-sans">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => {
              const element = document.querySelector('#about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="h-6 w-6 text-accent-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
