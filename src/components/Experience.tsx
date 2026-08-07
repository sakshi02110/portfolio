import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase, Award, Star } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Institute for Systems Studies & Analyses (ISSA), DRDO, Ministry of Defence",
      duration: "Jan 2026 – Feb 2026",
      location: "Delhi, India",
      type: "Research Internship",
      featured: true,
      description: "Developing a research-grade rainfall prediction framework using 65 years (1960–2024) of IMD gridded climate data.",
      achievements: [
        "Implemented and compared ARIMA, SARIMA, LSTM, GRU, CNN-LSTM, and MLP models for daily rainfall forecasting.",
        "Designed an end-to-end ML pipeline including geospatial preprocessing, feature engineering, model training, evaluation, and visualization.",
        "Generated publication-ready results supporting an ongoing research paper on AI-based climate forecasting."
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "GeoPandas", "Xarray", "Matplotlib"],
      icon: Star,
      color: "accent-purple"
    },
    {
      title: "Machine Learning Intern",
      company: "Centre of Excellence, IGDTUW",
      duration: "June 2024 – July 2024",
      location: "New Delhi",
      type: "Internship",
      description: "Drove the creation of an ML pipeline incorporating data preprocessing and SMOTE-based balancing, reducing data noise by 70% and optimizing feature sets for disease detection modeling.",
      achievements: [
        "Developed and compared 4+ ML models (Decision Tree, Random Forest, AdaBoost, XGBoost)",
        "Achieved 99% accuracy and high recall with optimized XGBoost",
        "Improved early disease detection outcomes"
      ],
      technologies: ["Python", "XGBoost", "Scikit-learn", "SMOTE", "Pandas", "NumPy"],
      icon: Award,
      color: "accent-blue"
    },
    {
      title: "Head Coordinator",
      company: "Taarangana, IGDTUW",
      duration: "October 2023 – May 2025",
      location: "New Delhi",
      type: "Leadership",
      description: "Directed the annual cultural fest with 10,000+ attendees, managing 15+ large-scale events, leading 50+ team members, and securing key sponsorships.",
      achievements: [
        "Managed events for 10,000+ attendees",
        "Led a team of 50+ members",
        "Secured multiple key sponsorships",
        "Coordinated 15+ large-scale events"
      ],
      technologies: ["Event Management", "Team Leadership", "Sponsorship", "Project Coordination"],
      icon: Briefcase,
      color: "emerald-400"
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-primary-text font-heading font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto font-sans">
            My professional journey across AI research, product development, and technical leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col sm:flex-row items-start ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} group`}>
                
                {/* Timeline Dot */}
                <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full glass-panel items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <exp.icon className={`w-5 h-5 text-${exp.color}`} />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`w-full sm:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`}
                >
                  <div className="glass-card p-6 cursor-glow relative overflow-hidden">
                    {exp.featured && (
                      <div className="absolute top-0 right-0 bg-accent-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                        Featured Experience
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-primary-text font-heading mb-1">{exp.title}</h3>
                    <h4 className={`text-lg font-medium text-${exp.color} font-sans mb-4`}>{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-secondary-text font-sans">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-primary-text/80 font-sans mb-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-secondary-text font-sans">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mt-1.5 flex-shrink-0`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium bg-white/5 text-primary-text/90 rounded-full border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}