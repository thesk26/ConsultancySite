import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Developers",
    role: "Managing Director",
    quote:
      "Shreevariya Consultancy Services transformed our commercial project with their expert guidance. Their attention to detail and deep market knowledge was invaluable throughout the development process.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    company: "Skyline Properties",
    role: "CEO",
    quote:
      "The team's professionalism and expertise in navigating government approvals saved us months of delays. Their strategic planning ensured our project stayed on track and within budget.",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    company: "Metro Constructions",
    role: "Project Head",
    quote:
      "From feasibility studies to final execution, their comprehensive consultancy services provided the confidence we needed to proceed with our ambitious development plans.",
    initials: "AP",
  },
  {
    name: "Neha Verma",
    company: "Verma Real Estate Group",
    role: "Director",
    quote:
      "Outstanding real estate advisory services! Their market insights and investment strategies helped us identify opportunities that significantly enhanced our portfolio value.",
    initials: "NV",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-background relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/20" />
            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-foreground mb-8 italic leading-relaxed">
                  "{current.quote}"
                </p>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {current.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-foreground">{current.name}</h4>
                    <p className="text-sm text-muted-foreground">{current.role}</p>
                    <p className="text-sm text-gold">{current.company}</p>
                  </div>
                </div>
              </motion.div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={prevTestimonial}
                  data-testid="button-prev-testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-border hover-elevate"
                      }`}
                      data-testid={`button-testimonial-dot-${index}`}
                    />
                  ))}
                </div>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={nextTestimonial}
                  data-testid="button-next-testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

