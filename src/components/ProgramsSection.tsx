import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    level: "TK",
    title: "Taman Kanak-Kanak",
    subtitle: "Usia 4–6 Tahun",
    description:
      "Program belajar melalui bermain yang mengembangkan kreativitas, motorik, dan karakter anak sejak dini.",
    features: ["Kurikulum Merdeka", "Bilingual Program", "Seni & Kreativitas", "Pengembangan Karakter"],
    icon: Heart,
    accent: "border-secondary",
  },
  {
    level: "SD",
    title: "Sekolah Dasar",
    subtitle: "Kelas 1–6",
    description:
      "Pendidikan dasar berkualitas dengan pendekatan holistik yang membangun fondasi akademik dan karakter.",
    features: ["Kurikulum Merdeka", "English Immersion", "STEM Education", "Life Skills"],
    icon: Sparkles,
    accent: "border-primary",
  },
];

const ProgramsSection = () => {
  return (
    <section id="program" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            Program Kami
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-3">
            Jenjang Pendidikan
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Dua jenjang pendidikan yang dirancang untuk mengoptimalkan potensi setiap anak.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`bg-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-all duration-500 border-t-4 ${prog.accent} group`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                  <prog.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-primary">
                    {prog.level}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    {prog.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2 font-medium">{prog.subtitle}</p>
              <p className="text-muted-foreground mb-6">{prog.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {prog.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Button variant="default" className="w-full">
                Selengkapnya
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
