import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Schedule } from "@/components/Schedule";
import { Speakers } from "@/components/Speakers";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { toast } from "sonner";

interface EventData {
  event: {
    title: string;
    subtitle: string;
    description: string;
    date: string;
    location: string;
  };
  schedule: Array<{
    date: string;
    talks: Array<{
      title: string;
      speaker: string;
      company: string;
      location: string;
      description: string;
      registrationLink: string;
    }>;
  }>;
  speakers: Array<{
    name: string;
    company: string;
    photo: string;
    bio: string;
  }>;
  gallery: Array<{
    image: string;
    caption: string;
  }>;
}

const Index = () => {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEventData = async () => {
      try {
        const response = await fetch("/data/event.json");
        
        if (!response.ok) {
          throw new Error("Failed to load event data");
        }

        const data: EventData = await response.json();
        setEventData(data);
      } catch (error) {
        console.error("Error loading event data:", error);
        toast.error("Failed to load event information. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    };

    loadEventData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading event information...</p>
        </div>
      </div>
    );
  }

  if (!eventData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Unable to Load Event</h1>
          <p className="text-muted-foreground mb-4">
            We couldn't load the event information. Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero
        title={eventData.event.title}
        subtitle={eventData.event.subtitle}
        description={eventData.event.description}
        date={eventData.event.date}
        location={eventData.event.location}
      />
      
      <About />
      
      <Schedule schedule={eventData.schedule} />
      
      <Speakers speakers={eventData.speakers} />
      
      <Gallery gallery={eventData.gallery} />
      
      <Footer />
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
