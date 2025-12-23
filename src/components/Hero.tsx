import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Download, Mail, ChevronDown, Sparkles, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-off-white to-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-teal font-inter"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl text-navy font-poppins"
              >
                Sakshi
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-600 font-poppins"
              >
                Aspiring AI Engineer & Full-Stack Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 max-w-xl font-inter leading-relaxed"
            >
              Transforming data into impactful AI solutions and building scalable web applications. 
              Passionate about machine learning, healthcare technology, and creating meaningful user experiences.
            </motion.p>

            {/* Achievement Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-2 gap-4 max-w-xl"
            >
              <div className="flex items-center gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-teal/20">
                <Award className="h-5 w-5 text-teal" />
                <div>
                  <p className="text-sm text-navy font-poppins">99% ML Accuracy</p>
                  <p className="text-xs text-gray-500 font-inter">Disease Detection</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-coral/20">
                <Sparkles className="h-5 w-5 text-coral" />
                <div>
                  <p className="text-sm text-navy font-poppins">Top 20/300+</p>
                  <p className="text-xs text-gray-500 font-inter">IIT Delhi Hackathon</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-teal hover:bg-teal/90 text-white font-inter group shadow-lg"
                onClick={() => window.open('https://drive.google.com/file/d/10x2FyJdl6xgUIPNU811-lsj3cphLKSaK/view?usp=sharing', '_blank')}
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-coral text-coral hover:bg-coral hover:text-white font-inter group shadow-lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Hire Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-4 pt-4"
            >
              <a
                href="https://linkedin.com/in/sakshi-panchal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-teal transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sakshi02110"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-teal transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="mailto:sakshipanchal648@gmail.com"
                className="text-navy hover:text-teal transition-colors duration-300"
              >
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <ImageWithFallback
                src="https://drive.google.com/file/d/1jfJKKIKqPWQitYvshPBOlqW0XD3txKJ6/view?usp=sharing"
                alt="Sakshi - AI Engineer and Full-Stack Developer"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-coral/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500 font-inter">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => {
              const element = document.querySelector('#about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="h-6 w-6 text-teal" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
