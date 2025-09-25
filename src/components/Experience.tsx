import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
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
      icon: TrendingUp,
      color: "teal"
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
      icon: Users,
      color: "coral"
    },
    {
      title: "Associate",
      company: "CSD IGDTUW",
      duration: "January 2024 – March 2025",
      location: "New Delhi",
      type: "Social Impact",
      description: "Organized 3+ university events promoting UN Sustainable Development Goals (SDGs) 4, 5, and 10, driving student engagement in social initiatives.",
      achievements: [
        "Promoted UN SDGs 4, 5, and 10",
        "Increased student engagement in social initiatives",
        "Successfully organized multiple university events",
        "Focused on women empowerment and community development"
      ],
      technologies: ["Event Planning", "Social Impact", "Community Engagement", "UN SDGs"],
      icon: Users,
      color: "navy"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-navy font-poppins mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            My journey spans across machine learning research, leadership roles, and social impact initiatives.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`border-2 border-${exp.color}/20 hover:border-${exp.color}/40 transition-all duration-300 hover:shadow-lg`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-${exp.color}/10 rounded-lg`}>
                        <exp.icon className={`h-6 w-6 text-${exp.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-navy font-poppins">{exp.title}</CardTitle>
                        <p className="text-lg text-gray-700 font-inter">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span className="font-inter">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="font-inter">{exp.location}</span>
                      </div>
                      <Badge variant="secondary" className={`bg-${exp.color}/10 text-${exp.color} border-${exp.color}/20`}>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-inter mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-navy font-poppins mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 font-inter">
                          <span className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-navy font-poppins mb-2">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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