import { motion } from "framer-motion";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Total Siswa", color: "text-secondary" },
  { icon: GraduationCap, value: "45+", label: "Guru Profesional", color: "text-primary" },
  { icon: Award, value: "120+", label: "Prestasi", color: "text-secondary" },
  { icon: BookOpen, value: "15+", label: "Ekstrakurikuler", color: "text-primary" },
];

const StatsSection = () => {
  return (
    <section className="relative -mt-20 z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 text-center group"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
              <p className="font-display font-bold text-3xl md:text-4xl text-foreground">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
