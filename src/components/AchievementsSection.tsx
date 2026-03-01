import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Juara 1 Olimpiade Sains",
    desc: "Tingkat Kota 2025",
    category: "Akademik",
  },
  {
    icon: Medal,
    title: "Juara 2 Lomba Menari",
    desc: "Festival Seni Nasional",
    category: "Seni",
  },
  {
    icon: Star,
    title: "Best School Award",
    desc: "Dinas Pendidikan 2024",
    category: "Sekolah",
  },
  {
    icon: Trophy,
    title: "Juara 1 Robotik",
    desc: "Kompetisi Regional",
    category: "STEM",
  },
  {
    icon: Medal,
    title: "Juara 3 Tahfidz",
    desc: "Tingkat Provinsi",
    category: "Keagamaan",
  },
  {
    icon: Star,
    title: "Best Innovation",
    desc: "Young Inventor Fair",
    category: "Inovasi",
  },
];

const AchievementsSection = () => {
  return (
    <section id="prestasi" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            Prestasi
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-3">
            Kebanggaan Kami
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-xs font-bold text-secondary tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-display font-semibold text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
