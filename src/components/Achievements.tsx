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
      color: "coral"
    },
    {
      year: "2023-2025",
      title: "Head Coordinator",
      organization: "Taarangana, IGDTUW",
      description: "Directed the annual cultural fest with 10,000+ attendees, managing 15+ large-scale events",
      impact: "10,000+ attendees",
      category: "Leadership",
      icon: Users,
      color: "teal"
    },
    {
      year: "2024-2025",
      title: "Associate",
      organization: "CSD IGDTUW",
      description: "Organized 3+ university events promoting UN Sustainable Development Goals (SDGs) 4, 5, and 10",
      impact: "UN SDGs 4, 5, 10",
      category: "Social Impact",
      icon: Target,
      color: "navy"
    },
    {
      year: "2024",
      title: "ML Research Excellence",
      organization: "Centre of Excellence, IGDTUW",
      description: "Achieved 99% accuracy in disease detection ML model using XGBoost optimization",
      impact: "99% Accuracy",
      category: "Research",
      icon: Trophy,
      color: "teal"
    }
  ];

  const stats = [
    { number: "99%", label: "ML Model Accuracy", icon: Target },
    { number: "10K+", label: "Event Attendees", icon: Users },
    { number: "50+", label: "Team Members Led", icon: Users },
    { number: "Top 20", label: "National Ranking", icon: Trophy }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-navy font-poppins mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
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
              <Card className="border-2 border-teal/20 hover:border-teal/40 transition-colors duration-300 p-6">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-teal/10 rounded-full">
                    <stat.icon className="h-6 w-6 text-teal" />
                  </div>
                  <div className="text-2xl md:text-3xl text-navy font-poppins">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-inter">{stat.label}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-coral to-navy"></div>

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
                <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-${achievement.color} rounded-full border-4 border-white shadow-lg z-10`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className={`border-2 border-${achievement.color}/20 hover:border-${achievement.color}/40 transition-all duration-300 hover:shadow-lg`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-${achievement.color}/10 rounded-lg`}>
                            <achievement.icon className={`h-5 w-5 text-${achievement.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg text-navy font-poppins">{achievement.title}</h3>
                            <p className="text-gray-600 font-inter">{achievement.organization}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1 text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-inter">{achievement.year}</span>
                          </div>
                          <Badge className={`bg-${achievement.color}/10 text-${achievement.color} border-${achievement.color}/20`}>
                            {achievement.category}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-700 font-inter mb-4 leading-relaxed">
                        {achievement.description}
                      </p>

                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${achievement.color}/10 rounded-full`}>
                        <Trophy className={`h-4 w-4 text-${achievement.color}`} />
                        <span className={`text-sm text-${achievement.color} font-inter`}>
                          {achievement.impact}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Year Badge (Hidden on mobile, shown on desktop) */}
                <div className={`hidden md:block w-2/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block px-3 py-1 bg-${achievement.color}/10 rounded-full`}>
                    <span className={`text-sm text-${achievement.color} font-poppins`}>{achievement.year}</span>
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
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto border-2 border-gradient-to-r from-teal to-coral/20 hover:border-teal/30 transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl text-navy font-poppins mb-4">Ready for New Challenges</h3>
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
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