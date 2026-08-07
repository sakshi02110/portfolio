import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Award, Clock, Users, Star, TrendingUp, Trophy, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Udaan – AI Career Guidance Platform",
      description: "Engineered an intelligent career guidance platform with AI-driven resume analysis, skill gap identification, and personalized learning roadmaps.",
      image: "/projects/udaan-mockup.png",
      technologies: ["React", "TypeScript", "Node.js", "AI Integration"],
      achievements: [
        "Automated resume parsing and analysis",
        "Personalized learning roadmaps generation",
        "Dynamic skill gap identification"
      ],
      githubUrl: "https://github.com/sakshi02110/Udaan",
      liveUrl: "https://udaan-career.vercel.app/", // Assuming a vercel deployment or placeholder
      featured: true,
      impact: "EdTech AI",
      stats: [
        { icon: Clock, label: "Analysis Time", value: "< 2 mins" },
        { icon: Users, label: "Target Audience", value: "Students & Pros" }
      ]
    },
    {
      title: "Sanjeevani – Medical Report Analyzer",
      description: "Built an intelligent medical platform that simplifies complex medical reports, highlights key values, and provides easy-to-understand health summaries.",
      image: "/projects/sanjeevani-mockup.png",
      technologies: ["React", "Node.js", "Machine Learning", "NLP"],
      achievements: [
        "Automated medical report parsing",
        "Highlighted critical health indicators",
        "Generated patient-friendly explanations"
      ],
      githubUrl: "https://github.com/sakshi02110/Sanjeevani",
      liveUrl: "https://sanjeevani.streamlit.app/",
      featured: true,
      impact: "Healthcare AI",
      stats: [
        { icon: Award, label: "Accuracy", value: "98.5%" },
        { icon: Clock, label: "Processing", value: "Real-time" }
      ]
    },
    {
      title: "Rainfall Forecasting framework @ DRDO",
      description: "Developed a research-grade rainfall prediction framework using 65 years (1960–2024) of IMD gridded climate data.",
      image: "/projects/rainfall-mockup.png",
      technologies: ["Python", "TensorFlow", "PyTorch", "GeoPandas", "LSTM"],
      achievements: [
        "Compared ARIMA, SARIMA, LSTM, GRU, CNN-LSTM",
        "End-to-end ML pipeline with geospatial preprocessing",
        "Generated publication-ready results for research paper"
      ],
      githubUrl: "#", // Add DRDO repo link if open source
      featured: true,
      impact: "Climate Tech",
      stats: [
        { icon: Trophy, label: "Dataset", value: "65 Years Data" },
        { icon: TrendingUp, label: "Models", value: "6 Architectures" }
      ]
    },
    {
      title: "MilkShare – Life-Saving Donation Network",
      description: "Engineered India's first digital breast milk donation ecosystem, reducing donor-recipient matching time from weeks to hours through intelligent algorithm design.",
      image: "https://images.unsplash.com/photo-1758127211629-81c0df0592cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NTg3MDg1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Node.js", "Algorithm Design"],
      achievements: [
        "Reduced matching time from weeks to hours",
        "99% component reusability",
        "3 distinct user workflows"
      ],
      githubUrl: "https://github.com/sakshi02110/breast-milk-donation-platform",
      liveUrl: "https://breast-milk-donation-platform.vercel.app/",
      featured: false,
      impact: "Social Impact",
      stats: [
        { icon: Clock, label: "Time Reduction", value: "Weeks → Hours" },
        { icon: Users, label: "User Types", value: "3 Workflows" }
      ]
    },
    {
      title: "Zerodha Trading Platform Clone",
      description: "Developed 5 trading modules including market view, portfolio tracker, and order management. Integrated real-time stock API with interactive charting.",
      image: "https://images.unsplash.com/photo-1704391905064-1e7400746c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBzdG9jayUyMG1hcmtldHxlbnwxfHx8fDE3NTg4MTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "JWT", "Chart.js"],
      achievements: [
        "5 comprehensive trading modules",
        "Real-time stock market integration",
        "Interactive charting system"
      ],
      githubUrl: "https://github.com/sakshi02110/Zerodha-Clone-Clean",
      featured: false,
      impact: "FinTech",
      stats: [
        { icon: Code, label: "Modules", value: "5 Trading" },
        { icon: TrendingUp, label: "API", value: "Real-time" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-primary-text font-heading font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-text max-w-3xl mx-auto font-sans">
            Showcasing innovative AI solutions, intelligent healthcare platforms, and robust data products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
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
              <Card className="h-full glass-card border-white/10 group bg-card-bg/40 hover:bg-card-bg/60 transition-colors">
                <div className="relative overflow-hidden rounded-t-2xl border-b border-white/5">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent-blue/90 text-white border-none shadow-lg backdrop-blur-md">
                      {project.impact}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                      <span className="text-xs text-white font-sans font-medium">Featured</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-80"></div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary-text font-heading">{project.title}</CardTitle>
                  <p className="text-secondary-text font-sans leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
                        <stat.icon className="h-4 w-4 text-accent-purple" />
                        <div>
                          <p className="text-xs text-secondary-text font-sans">{stat.label}</p>
                          <p className="text-sm text-primary-text font-heading font-medium">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-5">
                    <ul className="space-y-2">
                      {project.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-primary-text/80 font-sans text-sm">
                          <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium bg-white/5 text-primary-text/90 rounded-full border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white font-sans flex-1 group border border-white/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-accent-purple to-accent-blue hover:opacity-90 text-white font-sans flex-1 group border-none shadow-[0_0_15px_rgba(139,92,246,0.3)]"
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
        <h3 className="text-2xl text-primary-text font-heading font-bold mb-8 text-center">Other Notable Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card border-white/5 hover:border-white/20 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-xl border-b border-white/5">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/10 text-white border-none backdrop-blur-md">
                      {project.impact}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-primary-text font-heading">{project.title}</CardTitle>
                  <p className="text-secondary-text font-sans text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Stats for non-featured projects */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                        <stat.icon className="h-3 w-3 text-accent-blue" />
                        <div>
                          <p className="text-[10px] text-secondary-text font-sans uppercase tracking-wider">{stat.label}</p>
                          <p className="text-xs text-primary-text font-heading font-medium">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-secondary-text rounded-md border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-white/5 hover:bg-white/10 text-white font-sans flex-1 text-xs h-8"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-accent-blue/20 hover:bg-accent-blue/30 text-accent-blue font-sans flex-1 text-xs h-8"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1.5 h-3 w-3" />
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