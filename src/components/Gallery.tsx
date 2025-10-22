import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface GalleryImage {
  image: string;
  caption: string;
}

interface GalleryProps {
  gallery: GalleryImage[];
}

export const Gallery = ({ gallery }: GalleryProps) => {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlights from previous Technology Week events.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            className="gallery-swiper"
          >
            {gallery.map((item, index) => (
              <SwiperSlide key={index} className="max-w-3xl">
                <div className="relative rounded-2xl overflow-hidden shadow-card group">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-[400px] sm:h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-lg font-semibold text-foreground">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .gallery-swiper {
          padding: 40px 0 80px;
        }
        .gallery-swiper .swiper-slide {
          width: 80%;
        }
        @media (max-width: 768px) {
          .gallery-swiper .swiper-slide {
            width: 90%;
          }
        }
        .gallery-swiper .swiper-pagination-bullet {
          background: hsl(var(--accent));
        }
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: hsl(var(--accent));
        }
      `}</style>
    </section>
  );
};
