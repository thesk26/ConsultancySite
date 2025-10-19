import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_construction_background_image_4ab804d7.png";

export default function HeroSection({ onContactClick }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Shreevariya Consultancy Services
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gold mb-8 tracking-wide">
            Building Visions. Guiding Growth.
          </p>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Expert guidance in property, construction, and commercial project consultancy
            — from planning to completion.
          </p>
          <Button
            size="lg"
            onClick={onContactClick}
            className="group text-base"
            data-testid="button-hero-contact"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

