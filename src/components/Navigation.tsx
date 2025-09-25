import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-poppins text-2xl text-navy"
          >
            Sakshi
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative text-navy hover:text-teal transition-colors duration-300 font-inter cursor-pointer ${
                  activeSection === item.href.substring(1) ? 'text-teal' : ''
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal rounded-full"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Button
                size="sm"
                className="bg-teal hover:bg-teal/90 text-white font-inter group"
                onClick={() => window.open('https://drive.google.com/file/d/10x2FyJdl6xgUIPNU811-lsj3cphLKSaK/view?usp=sharing', '_blank')}
              >
                <Download className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-teal transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block py-2 text-navy hover:text-teal transition-colors duration-300 font-inter text-left w-full"
              >
                {item.name}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <Button
                size="sm"
                className="bg-teal hover:bg-teal/90 text-white font-inter group w-full"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/10x2FyJdl6xgUIPNU811-lsj3cphLKSaK/view?usp=sharing', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View Resume
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}