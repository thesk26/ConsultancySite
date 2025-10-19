import { motion } from "framer-motion";
import { useState } from "react";
import project1 from "@assets/generated_images/Portfolio_project_1_2da4c450.png";
import project2 from "@assets/generated_images/Portfolio_project_2_9cd4b3d7.png";
import project3 from "@assets/generated_images/Portfolio_project_3_2d104e01.png";
import project4 from "@assets/generated_images/Portfolio_project_4_48c8221e.png";
import project5 from "@assets/generated_images/Portfolio_project_5_7b9f04cb.png";
import project6 from "@assets/generated_images/Portfolio_project_6_e8b96587.png";

const projects = [
  {
    image: project1,
    name: "Azure Business Park",
    category: "Commercial Development",
  },
  {
    image: project2,
    name: "Skyline Residency",
    category: "Residential Complex",
  },
  {
    image: project3,
    name: "Metro Plaza Mall",
    category: "Retail & Shopping",
  },
  {
    image: project4,
    name: "Logistics Hub Central",
    category: "Industrial Facility",
  },
  {
    image: project5,
    name: "Crown Towers",
    category: "High-Rise Development",
  },
  {
    image: project6,
    name: "Tech Corporate HQ",
    category: "Corporate Offices",
  },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            Our Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of successful projects we've delivered across various sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative aspect-square overflow-hidden rounded-md group cursor-pointer"
              data-testid={`card-project-${index}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gold text-sm font-medium">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
