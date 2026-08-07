import { motion } from 'motion/react';
import { Heart, Code, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-bg/50 border-t border-white/5 py-12 relative z-10">
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
            <h3 className="text-3xl font-heading font-bold text-primary-text">
              Sakshi<span className="text-accent-blue">.</span>
            </h3>
            <p className="text-secondary-text font-sans max-w-2xl mx-auto leading-relaxed">
              Aspiring AI Engineer & Full-Stack Developer passionate about creating innovative solutions 
              that make a meaningful impact in healthcare and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-sans">
            <a href="#home" className="text-secondary-text hover:text-accent-blue transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-secondary-text hover:text-accent-blue transition-colors duration-300">
              About
            </a>
            <a href="#experience" className="text-secondary-text hover:text-accent-blue transition-colors duration-300">
              Experience
            </a>
            <a href="#projects" className="text-secondary-text hover:text-accent-blue transition-colors duration-300">
              Projects
            </a>
            <a href="#skills" className="text-secondary-text hover:text-accent-blue transition-colors duration-300">
              Skills
            </a>
            <a href="#contact" className="text-secondary-text hover:text-accent-blue transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/sakshi-panchal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text hover:text-accent-blue transition-colors duration-300 font-sans font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sakshi02110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-text hover:text-accent-blue transition-colors duration-300 font-sans font-medium"
            >
              GitHub
            </a>
            <a
              href="mailto:sakshipanchal648@gmail.com"
              className="text-primary-text hover:text-accent-blue transition-colors duration-300 font-sans font-medium"
            >
              Email
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 my-8"></div>

          {/* Copyright and Made with Love */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-text">
            <div className="font-sans">
              © {currentYear} Sakshi. All rights reserved.
            </div>
            <div className="flex items-center gap-2 font-sans">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-coral fill-current animate-pulse text-red-500" />
              <Code className="h-4 w-4 text-accent-blue" />
              <span>and</span>
              <Coffee className="h-4 w-4 text-yellow-500" />
              <span>in New Delhi</span>
            </div>
          </div>

          {/* Tech Stack Attribution */}
          <div className="text-xs text-secondary-text/60 font-sans mt-2">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  );
}