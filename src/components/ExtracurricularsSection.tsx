import { motion } from "framer-motion";
import {
  Palette,
  Music,
  Cpu,
  Dumbbell,
  BookOpen,
  Globe,
  Camera,
  Leaf,
} from "lucide-react";

const extras = [
  { icon: Palette, name: "Seni Rupa", color: "bg-secondary/15 text-secondary" },
  { icon: Music, name: "Paduan Suara", color: "bg-primary/15 text-primary" },
  { icon: Cpu, name: "Robotik & Coding", color: "bg-secondary/15 text-secondary" },
  { icon: Dumbbell, name: "Olahraga", color: "bg-primary/15 text-primary" },
  { icon: BookOpen, name: "Literasi", color: "bg-secondary/15 text-secondary" },
  { icon: Globe, name: "English Club", color: "bg-primary/15 text-primary" },
  { icon: Camera, name: "Fotografi", color: "bg-secondary/15 text-secondary" },
  { icon: Leaf, name: "Pramuka", color: "bg-primary/15 text-primary" },
];

const ExtracurricularsSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            Ekstrakurikuler
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-3">
            Kembangkan Bakatmu
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {extras.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 text-center group cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-7 h-7" />
              </div>
              <p className="font-display font-semibold text-sm text-foreground">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsSection;
