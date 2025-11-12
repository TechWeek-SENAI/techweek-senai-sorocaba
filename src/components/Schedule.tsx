import { motion } from "framer-motion";
import { Calendar, ExternalLink, User, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Talk {
  title: string;
  speaker: string;
  company: string;
  location: string;
  description: string;
  registrationLink: string;
}

interface DaySchedule {
  date: string;
  talks: Talk[];
}

interface ScheduleProps {
  schedule: DaySchedule[];
}

export const Schedule = ({ schedule }: ScheduleProps) => {
  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            Agenda do <span className="text-primary">Evento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três dias repletos de palestras inspiradoras, workshops práticos e oportunidades de networking.
          </p>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl text-center font-bold font-heading mb-4">Agenda parcial</h1>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-6 w-6 text-accent" />
                <h3 className="text-2xl sm:text-3xl font-bold font-heading">{day.date}</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {day.talks.map((talk, talkIndex) => (
                  <motion.div
                    key={talkIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: talkIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-card group h-full flex flex-col">
                      <h4 className="text-xl font-bold font-heading mb-3 group-hover:text-accent transition-colors">
                        {talk.title}
                      </h4>

                      <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-accent" />
                          <span className="font-medium">{talk.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-accent" />
                          <span>{talk.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium text-foreground">{talk.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {talk.description}
                      </p>

                      <Button
                        variant="accent"
                        asChild
                        className="w-full group/btn"
                      >
                        <a href={talk.registrationLink} target="_blank" rel="noopener noreferrer">
                          Faça a inscrição já
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};
