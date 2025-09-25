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
      color: "teal"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9971579040",
      href: "tel:+919971579040",
      color: "coral"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
      color: "navy"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sakshi-panchal",
      color: "blue"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sakshi02110",
      color: "gray"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:sakshipanchal648@gmail.com",
      color: "teal"
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-navy font-poppins mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter mb-6">
            Ready to collaborate on innovative AI solutions or discuss exciting opportunities? 
            I'd love to hear from you!
          </p>
          <div className="flex items-center justify-center gap-2 text-coral font-inter">
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
            <Card className="border-2 border-teal/20 hover:border-teal/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-navy font-poppins flex items-center gap-3">
                  <div className="p-3 bg-teal/10 rounded-lg">
                    <Send className="h-6 w-6 text-teal" />
                  </div>
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy font-inter">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="border-gray-300 focus:border-teal focus:ring-teal"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-inter">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-gray-300 focus:border-teal focus:ring-teal"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-navy font-inter">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-teal focus:ring-teal resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-teal hover:bg-teal/90 text-white font-inter group"
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
            <Card className="border-2 border-coral/20 hover:border-coral/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-navy font-poppins">Get in Touch</CardTitle>
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
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                    >
                      <div className={`p-3 bg-${info.color}/10 rounded-lg group-hover:bg-${info.color}/20 transition-colors duration-300`}>
                        <info.icon className={`h-5 w-5 text-${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-inter">{info.label}</p>
                        <p className="text-navy font-inter">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-2 border-navy/20 hover:border-navy/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-navy font-poppins">Connect on Social</CardTitle>
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
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-teal hover:bg-teal/5 transition-all duration-300 group"
                    >
                      <social.icon className="h-5 w-5 text-gray-600 group-hover:text-teal transition-colors duration-300" />
                      <span className="text-gray-700 group-hover:text-teal font-inter transition-colors duration-300">
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
              <Card className="border-2 border-gradient-to-r from-teal to-coral/20 hover:border-teal/30 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg text-navy font-poppins mb-3">Ready to Collaborate?</h3>
                  <p className="text-gray-600 font-inter mb-4 leading-relaxed">
                    Whether you're looking for an AI engineer, full-stack developer, or a passionate 
                    team leader, I'm excited to discuss how we can create something amazing together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="sm"
                      className="bg-teal hover:bg-teal/90 text-white font-inter flex-1"
                      asChild
                    >
                      <a href="mailto:sakshipanchal648@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Me
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-coral text-coral hover:bg-coral hover:text-white font-inter flex-1"
                      asChild
                    >
                      <a href="https://linkedin.com/in/sakshi-panchal" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-navy hover:bg-navy/90 text-white font-inter flex-1"
                      asChild
                    >
                      <a href="https://drive.google.com/file/d/10x2FyJdl6xgUIPNU811-lsj3cphLKSaK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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