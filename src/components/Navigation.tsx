import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-bg/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading font-bold text-2xl text-primary-text"
          >
            Sakshi<span className="text-accent-blue">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative px-4 py-2 text-sm font-sans cursor-pointer transition-colors duration-300 ${
                  activeSection === item.href.substring(1) ? 'text-accent-blue font-medium' : 'text-secondary-text hover:text-primary-text'
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[1.2rem] left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue rounded-t-full"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="ml-4"
            >
              <Button
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white font-sans group border border-white/10"
                onClick={() => window.open('/Resume_Sakshi.pdf', '_blank')}
              >
                <Download className="mr-1.5 h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-text hover:text-primary-text transition-colors p-2"
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
            className="md:hidden pb-6 overflow-hidden glass-panel mt-2 rounded-2xl p-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl mb-1 font-sans text-sm transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'bg-white/10 text-accent-blue font-medium'
                    : 'text-secondary-text hover:bg-white/5 hover:text-primary-text'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="mt-4 px-4 pt-4 border-t border-white/10">
              <Button
                size="default"
                className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-sans border-none shadow-lg shadow-accent-purple/20"
                onClick={() => {
                  window.open('/Resume_Sakshi.pdf', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}