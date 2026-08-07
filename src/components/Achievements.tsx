import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Users, Target, Calendar } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      year: "2024",
      title: "Hack-4-Purpose Finalist",
      organization: "IIT Delhi",
      description: "Ranked Top 20 among 300+ teams for developing an AI-powered education solution",
      impact: "Top 20 of 300+ teams",
      category: "Competition",
      icon: Trophy,
      color: "accent-blue"
    },
    {
      year: "2023-2025",
      title: "Head Coordinator",
      organization: "Taarangana, IGDTUW",
      description: "Directed the annual cultural fest with 10,000+ attendees, managing 15+ large-scale events",
      impact: "10,000+ attendees",
      category: "Leadership",
      icon: Users,
      color: "accent-purple"
    },
    {
      year: "2024-2025",
      title: "Associate",
      organization: "CSD IGDTUW",
      description: "Organized 3+ university events promoting UN Sustainable Development Goals (SDGs) 4, 5, and 10",
      impact: "UN SDGs 4, 5, 10",
      category: "Social Impact",
      icon: Target,
      color: "emerald-400"
    },
    {
      year: "2024",
      title: "ML Research Excellence",
      organization: "Centre of Excellence, IGDTUW",
      description: "Achieved 99% accuracy in disease detection ML model using XGBoost optimization",
      impact: "99% Accuracy",
      category: "Research",
      icon: Trophy,
      color: "yellow-400"
    }
  ];

  const stats = [
    { number: "99%", label: "ML Model Accuracy", icon: Target, color: "yellow-400" },
    { number: "10K+", label: "Event Attendees", icon: Users, color: "accent-purple" },
    { number: "50+", label: "Team Members Led", icon: Users, color: "accent-blue" },
    { number: "Top 20", label: "National Ranking", icon: Trophy, color: "emerald-400" }
  ];

  return (
    <section id="achievements" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-primary-text font-heading font-bold mb-4">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-text max-w-3xl mx-auto font-sans">
            Recognized for excellence in technical innovation, leadership, and social impact initiatives.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="glass-card border-white/5 hover:border-white/20 transition-colors duration-300 p-6 h-full flex flex-col justify-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className={`p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                  <div className="text-2xl md:text-3xl text-primary-text font-heading font-bold">{stat.number}</div>
                  <div className="text-xs text-secondary-text font-sans uppercase tracking-wider">{stat.label}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-emerald-400 opacity-50"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-center`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 bg-${achievement.color} rounded-full border-4 border-primary-bg shadow-[0_0_15px_rgba(255,255,255,0.2)] z-10`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className={`glass-card border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-glow`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-white/5 rounded-xl border border-white/10 shadow-inner`}>
                            <achievement.icon className={`h-5 w-5 text-${achievement.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg text-primary-text font-heading font-semibold">{achievement.title}</h3>
                            <p className="text-secondary-text font-sans text-sm">{achievement.organization}</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <div className="flex items-center gap-1.5 text-secondary-text/80">
                            <Calendar className="h-4 w-4" />
                            <span className="text-xs font-sans">{achievement.year}</span>
                          </div>
                          <Badge className={`bg-${achievement.color}/10 text-${achievement.color} border border-${achievement.color}/20 font-sans shadow-none`}>
                            {achievement.category}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-primary-text/80 font-sans mb-5 leading-relaxed text-sm">
                        {achievement.description}
                      </p>

                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-${achievement.color}/10 rounded-full border border-${achievement.color}/20`}>
                        <Trophy className={`h-4 w-4 text-${achievement.color}`} />
                        <span className={`text-xs text-${achievement.color} font-sans font-medium tracking-wide`}>
                          {achievement.impact}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Year Badge (Hidden on mobile, shown on desktop) */}
                <div className={`hidden md:block w-2/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block px-4 py-1.5 bg-white/5 rounded-full border border-white/10 shadow-inner backdrop-blur-sm`}>
                    <span className={`text-sm text-${achievement.color} font-heading font-semibold tracking-wider`}>{achievement.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="max-w-3xl mx-auto glass-panel border-white/5 hover:border-white/20 transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl text-primary-text font-heading font-bold mb-4">Ready for New Challenges</h3>
              <p className="text-lg text-secondary-text font-sans leading-relaxed">
                These achievements represent my commitment to excellence, innovation, and making a positive impact. 
                I'm excited to bring this same energy and dedication to new opportunities in AI engineering and 
                full-stack development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}