import { motion } from "framer-motion";
import { Lightbulb, Users, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Descubra tecnologias de ponta e tendências emergentes em software e mecatrônica.",
  },
  {
    icon: Wrench,
    title: "Workshops",
    description: "Sessões práticas com especialistas da indústria, abordando habilidades e ferramentas essenciais.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Conecte-se com profissionais, colegas e empresas que estão moldando o futuro da tecnologia.",
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
            Por que participar da <span className="text-primary">Semana de Tecnologia</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma experiência imersiva pensada para a próxima geração de profissionais de tecnologia.
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
