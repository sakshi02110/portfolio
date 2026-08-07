import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Code2, Rocket, Briefcase, GraduationCap } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2 }: { value: number | string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      if (typeof value === 'number') {
        let start = 0;
        const increment = value / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }
  }, [isInView, value, duration]);

  if (typeof value === 'string') {
    return (
      <span ref={ref} className="text-3xl font-bold font-heading text-primary-text">
        {isInView ? value : "0.0"}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-3xl font-bold font-heading text-primary-text">
      {count}
      {value > 200 ? "+" : ""}
    </span>
  );
};

export function GithubStats() {
  const stats = [
    { label: "DSA Problems", value: 250, icon: Code2, color: "emerald-400" },
    { label: "AI Products Built", value: 4, icon: Rocket, color: "accent-blue" },
    { label: "Internships", value: 3, icon: Briefcase, color: "accent-purple" },
    { label: "CGPA", value: "8.5", icon: GraduationCap, color: "yellow-400" },
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-white/5 hover:border-white/20 transition-all duration-300 text-center py-6 h-full flex flex-col items-center justify-center group">
                <CardContent className="p-0 flex flex-col items-center gap-3">
                  <div className={`p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                    <stat.icon className={`h-8 w-8 text-${stat.color}`} />
                  </div>
                  <AnimatedCounter value={stat.value} />
                  <p className="text-sm font-sans text-secondary-text uppercase tracking-wider">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
