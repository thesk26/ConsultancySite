import { motion } from "framer-motion";
import { Building2, HardHat, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const expertise = [
  {
    icon: Building2,
    title: "Property Consulting",
    description:
      "Strategic advisory for real estate investments, feasibility studies, and market analysis to maximize your property portfolio value.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description:
      "End-to-end project supervision, quality control, and timeline management ensuring successful delivery of construction projects.",
  },
  {
    icon: Briefcase,
    title: "Commercial Solutions",
    description:
      "Comprehensive business property consultancy including space planning, lease negotiation, and commercial development strategies.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Shreevariya Consultancy Services specializes in property, construction, and
            commercial project consultancy — providing expert guidance in planning,
            development, approvals, architecture coordination, and project management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover-elevate transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

