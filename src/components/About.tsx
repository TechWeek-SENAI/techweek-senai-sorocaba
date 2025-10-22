import { motion } from "framer-motion";
import { Lightbulb, Users, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Discover cutting-edge technologies and emerging trends in software and mechatronics.",
  },
  {
    icon: Wrench,
    title: "Workshops",
    description: "Hands-on sessions with industry experts covering practical skills and tools.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with professionals, peers, and companies shaping the future of technology.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            Why Join <span className="text-primary">Technology Week</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An immersive experience designed for the next generation of tech professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow group h-full">
                <motion.div
                  className="mb-6 inline-flex p-4 rounded-xl bg-gradient-accent"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                </motion.div>
                
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
