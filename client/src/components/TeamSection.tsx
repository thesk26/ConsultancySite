import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import team1 from "@assets/generated_images/Team_member_1_headshot_fe79badc.png";
import team2 from "@assets/generated_images/Team_member_2_headshot_656cb41d.png";
import team3 from "@assets/generated_images/Team_member_3_headshot_63cee6e6.png";
import team4 from "@assets/generated_images/Team_member_4_headshot_772e739e.png";

const team = [
  {
    name: "Vikram Shreevariya",
    role: "Founder & CEO",
    image: team1,
    initials: "VS",
  },
  {
    name: "Ananya Desai",
    role: "Head of Operations",
    image: team2,
    initials: "AD",
  },
  {
    name: "Karthik Menon",
    role: "Senior Construction Advisor",
    image: team3,
    initials: "KM",
  },
  {
    name: "Meera Iyer",
    role: "Real Estate Specialist",
    image: team4,
    initials: "MI",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            Our Team
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experts dedicated to your project's success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`card-team-${index}`}
            >
              <Card className="p-6 text-center hover-elevate transition-all duration-300 hover:shadow-md group">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-2 border-border">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <button
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md hover-elevate active-elevate-2 transition-all opacity-0 group-hover:opacity-100"
                  onClick={() => console.log(`LinkedIn: ${member.name}`)}
                  data-testid={`link-linkedin-${index}`}
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
