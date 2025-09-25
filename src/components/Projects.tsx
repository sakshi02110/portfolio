import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Award, Clock, Users, Star, TrendingUp, Heart, Trophy, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "MilkShare – Life-Saving Donation Network",
      description: "Engineered India's first digital breast milk donation ecosystem, reducing donor-recipient matching time from weeks to hours through intelligent algorithm design.",
      image: "https://images.unsplash.com/photo-1758127211629-81c0df0592cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NTg3MDg1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Node.js", "Algorithm Design"],
      achievements: [
        "Reduced matching time from weeks to hours",
        "99% component reusability",
        "3 distinct user workflows (donors, medical staff, NGOs)"
      ],
      githubUrl: "https://github.com/sakshi02110/breast-milk-donation-platform",
      liveUrl: "https://breast-milk-donation-platform.vercel.app/",
      featured: true,
      impact: "Social Impact",
      stats: [
        { icon: Clock, label: "Time Reduction", value: "Weeks → Hours" },
        { icon: Users, label: "User Types", value: "3 Workflows" }
      ]
    },
    {
      title: "Cervical Cancer Detection System",
      description: "Built ML-based early detection system using XGBoost, achieving 99.2% precision and reducing false negatives by 38%.",
      image: "https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTg3MzE5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "XGBoost", "Pandas", "NumPy", "Scikit-learn", "Tableau"],
      achievements: [
        "99.2% precision achieved",
        "38% reduction in false negatives",
        "ROC-AUC > 0.98",
        "Processed 800+ clinical profiles"
      ],
      githubUrl: "https://github.com/sakshi02110/Python-Machine-Learning-project",
      featured: true,
      impact: "Healthcare AI",
      stats: [
        { icon: Award, label: "Precision", value: "99.2%" },
        { icon: Award, label: "ROC-AUC", value: ">0.98" }
      ]
    },
    {
      title: "Prescripto – Healthcare Platform",
      description: "Built a comprehensive MERN-stack healthcare ecosystem with JWT authentication, enabling seamless doctor-patient interactions through secure appointment booking and real-time management dashboards.",
      image: "https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBhcHBvaW50bWVudCUyMGJvb2tpbmclMjBzeXN0ZW18ZW58MXx8fHwxNzU4ODE4NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
      achievements: [
        "Secure JWT-based authentication system",
        "Dynamic role-based access control (Admin, Doctor, Patient)",
        "Real-time appointment scheduling with slot management",
        "Integrated payment processing with Stripe"
      ],
      githubUrl: "https://github.com/sakshi02110/prescripto-app",
      liveUrl: "https://prescripto-frontend-beige.vercel.app/",
      featured: true,
      impact: "Healthcare Tech",
      stats: [
        { icon: Users, label: "User Roles", value: "3 Types" },
        { icon: Clock, label: "Booking", value: "Real-time" }
      ]
    },
    {
      title: "Nature Nexus – Eco Awareness Platform",
      description: "Designed biodiversity awareness platform in HTML, CSS, JavaScript; ranked Top 20 in a national hackathon. Delivered accessible UX and educational content in a 36-hour sprint.",
      image: "https://images.unsplash.com/photo-1637751761102-c56e80d466ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjb25zZXJ2YXRpb24lMjBiaW9kaXZlcnNpdHl8ZW58MXx8fHwxNzU4ODE5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UX/UI"],
      achievements: [
        "Top 20 rank in national hackathon",
        "Accessible UX design principles",
        "Educational content delivery",
        "36-hour development sprint"
      ],
      githubUrl: "https://github.com/sakshi02110/NatureNexus",
      featured: true,
      impact: "Environmental",
      stats: [
        { icon: Trophy, label: "Ranking", value: "Top 20" },
        { icon: Clock, label: "Sprint", value: "36 Hours" }
      ]
    },
    {
      title: "Zerodha Trading Platform Clone",
      description: "Developed 5 trading modules including market view, portfolio tracker, and order management. Integrated real-time stock API with interactive charting and responsive UI. Implemented secure authentication using JWT and bcrypt with role-based access control.",
      image: "https://images.unsplash.com/photo-1704391905064-1e7400746c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBzdG9jayUyMG1hcmtldHxlbnwxfHx8fDE3NTg4MTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "JWT", "Real-time API", "Chart.js", "Responsive UI"],
      achievements: [
        "5 comprehensive trading modules",
        "Real-time stock market integration",
        "Interactive charting system",
        "Secure JWT authentication",
        "Role-based access control"
      ],
      githubUrl: "https://github.com/sakshi02110/Zerodha-Clone-Clean",
      featured: true,
      impact: "FinTech",
      stats: [
        { icon: Code, label: "Modules", value: "5 Trading" },
        { icon: TrendingUp, label: "API", value: "Real-time" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-navy font-poppins mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Showcasing innovative solutions that combine AI, healthcare technology, and social impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          {/* Featured Projects */}
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 xl:col-span-1"
            >
              <Card className="h-full border-2 border-teal/20 hover:border-teal/40 transition-all duration-300 hover:shadow-xl group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-coral text-white border-none shadow-lg">
                      {project.impact}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-700 font-inter">Featured</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-navy font-poppins">{project.title}</CardTitle>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <stat.icon className="h-4 w-4 text-teal" />
                        <div>
                          <p className="text-xs text-gray-500 font-inter">{stat.label}</p>
                          <p className="text-sm text-navy font-poppins">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-navy font-poppins mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 font-inter text-sm">
                          <span className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-gray-300 text-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-navy hover:bg-navy/90 text-white font-inter flex-1 group"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        GitHub
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-teal text-teal hover:bg-teal hover:text-white font-inter flex-1 group"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-coral/40 transition-all duration-300 hover:shadow-lg group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-coral text-white border-none">
                      {project.impact}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg text-navy font-poppins">{project.title}</CardTitle>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Stats for non-featured projects */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <stat.icon className="h-3 w-3 text-coral" />
                        <div>
                          <p className="text-xs text-gray-500 font-inter">{stat.label}</p>
                          <p className="text-xs text-navy font-poppins">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-gray-300 text-gray-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-navy hover:bg-navy/90 text-white font-inter flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-teal text-teal hover:bg-teal hover:text-white font-inter flex-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}