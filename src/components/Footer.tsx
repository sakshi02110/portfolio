import { motion } from 'motion/react';
import { Heart, Code, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-poppins">Sakshi</h3>
            <p className="text-gray-300 font-inter max-w-2xl mx-auto">
              Aspiring AI Engineer & Full-Stack Developer passionate about creating innovative solutions 
              that make a meaningful impact in healthcare and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-gray-300 hover:text-teal transition-colors duration-300 font-inter">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-teal transition-colors duration-300 font-inter">
              About
            </a>
            <a href="#experience" className="text-gray-300 hover:text-teal transition-colors duration-300 font-inter">
              Experience
            </a>
            <a href="#projects" className="text-gray-300 hover:text-teal transition-colors duration-300 font-inter">
              Projects
            </a>
            <a href="#skills" className="text-gray-300 hover:text-teal transition-colors duration-300 font-inter">
              Skills
            </a>
            <a href="#achievements" className="text-gray-300 hover:text-teal transition-colors duration-300 font-inter">
              Achievements
            </a>
            <a href="#contact" className="text-gray-300 hover:text-teal transition-colors duration-300 font-inter">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/sakshi-panchal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sakshi02110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="mailto:sakshipanchal648@gmail.com"
              className="text-gray-300 hover:text-teal transition-colors duration-300"
            >
              Email
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600"></div>

          {/* Copyright and Made with Love */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="font-inter">
              © {currentYear} Sakshi. All rights reserved.
            </div>
            <div className="flex items-center gap-2 font-inter">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-coral fill-current" />
              <Code className="h-4 w-4 text-teal" />
              <span>and</span>
              <Coffee className="h-4 w-4 text-yellow-500" />
              <span>in New Delhi</span>
            </div>
          </div>

          {/* Tech Stack Attribution */}
          <div className="text-xs text-gray-500 font-inter">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  );
}