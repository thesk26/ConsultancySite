import { motion } from "framer-motion";
import { FileText, TrendingUp, Eye, Building, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Project Feasibility & Planning",
    description:
      "Comprehensive feasibility studies, site analysis, and strategic planning to ensure project viability and success from the ground up.",
  },
  {
    icon: TrendingUp,
    title: "Real Estate Advisory",
    description:
      "Expert market insights, investment strategies, and property valuation services to guide your real estate decisions.",
  },
  {
    icon: Eye,
    title: "Construction Supervision",
    description:
      "On-site project monitoring, quality assurance, and progress tracking to ensure adherence to plans, budgets, and timelines.",
  },
  {
    icon: Building,
    title: "Commercial Property Consultancy",
    description:
      "Specialized guidance for commercial developments including retail, office, and mixed-use projects with focus on ROI optimization.",
  },
  {
    icon: FileCheck,
    title: "Government Approvals & Liaison",
    description:
      "Streamlined approval processes, regulatory compliance assistance, and government liaison for permits and clearances.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consultancy solutions tailored to your property and construction needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`card-service-${index}`}
            >
              <Card className="p-8 h-full hover-elevate transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-background border-border">
                <div className="w-12 h-12 rounded-md bg-gold/20 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

