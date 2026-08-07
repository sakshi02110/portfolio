import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Rocket, Download } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sakshipanchal648@gmail.com",
      href: "mailto:sakshipanchal648@gmail.com",
      color: "accent-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9971579040",
      href: "tel:+919971579040",
      color: "emerald-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
      color: "accent-purple"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sakshi-panchal-79456b283/",
      color: "blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sakshi02110",
      color: "white"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:sakshipanchal648@gmail.com",
      color: "accent-blue"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Hi Sakshi,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;
    const mailtoLink = `mailto:sakshipanchal648@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-primary-text font-heading font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-text max-w-3xl mx-auto font-sans mb-6">
            Ready to collaborate on innovative AI solutions or discuss exciting opportunities? 
            I'd love to hear from you!
          </p>
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-sans font-medium">
            <span>Let's build something impactful together</span>
            <Rocket className="h-5 w-5" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-white/5 hover:border-white/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-text font-heading flex items-center gap-3">
                  <div className="p-3 bg-white/5 rounded-xl shadow-inner border border-white/10">
                    <Send className="h-6 w-6 text-accent-blue" />
                  </div>
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary-text font-sans">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-primary-bg/50 border-white/10 text-primary-text focus:border-accent-blue focus:ring-accent-blue/20 placeholder:text-secondary-text/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary-text font-sans">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-primary-bg/50 border-white/10 text-primary-text focus:border-accent-blue focus:ring-accent-blue/20 placeholder:text-secondary-text/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary-text font-sans">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="bg-primary-bg/50 border-white/10 text-primary-text focus:border-accent-blue focus:ring-accent-blue/20 placeholder:text-secondary-text/50 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent-purple to-accent-blue hover:opacity-90 text-white font-sans group border-none shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                  >
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="glass-card border-white/5 hover:border-white/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary-text font-heading">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group"
                    >
                      <div className={`p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                        <info.icon className={`h-5 w-5 text-${info.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-secondary-text font-sans uppercase tracking-wider">{info.label}</p>
                        <p className="text-primary-text font-sans font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-white/5 hover:border-white/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary-text font-heading">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300 group"
                    >
                      <social.icon className="h-5 w-5 text-secondary-text group-hover:text-accent-blue transition-colors duration-300" />
                      <span className="text-secondary-text group-hover:text-primary-text font-sans font-medium transition-colors duration-300">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass-panel border-white/5 hover:border-white/20 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg text-primary-text font-heading font-semibold mb-3">Ready to Collaborate?</h3>
                  <p className="text-secondary-text font-sans text-sm mb-5 leading-relaxed">
                    Whether you're looking for an AI engineer, full-stack developer, or a passionate 
                    team leader, I'm excited to discuss how we can create something amazing together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="sm"
                      className="bg-accent-blue hover:bg-accent-blue/90 text-white font-sans flex-1"
                      asChild
                    >
                      <a href="mailto:sakshipanchal648@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Me
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white font-sans flex-1 border border-white/10"
                      asChild
                    >
                      <a href="https://linkedin.com/in/sakshi-panchal" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white font-sans flex-1 border border-white/10"
                      asChild
                    >
                      <a href="/Resume_Sakshi.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Resume
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}