import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

interface Speaker {
  name: string;
  company: string;
  photo: string;
  bio: string;
}

interface SpeakersProps {
  speakers: Speaker[];
}

export const Speakers = ({ speakers }: SpeakersProps) => {
  return (
    <section id="speakers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            Conheça nossos <span className="text-primary">Palestrantes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda com líderes e inovadores da indústria que estão moldando o futuro da tecnologia.
          </p>
        </motion.div>

        {/* <h1 className="text-3xl sm:text-4xl text-center font-heading mb-4">Palestrantes a definir</h1>        */}

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow group h-full">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-accent transition-colors">
                    {speaker.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4 text-accent" />
                    <span className="font-medium">{speaker.company}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
