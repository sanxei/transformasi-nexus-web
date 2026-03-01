import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              Tentang Kami
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-3 leading-tight">
              Transformasi Pendidikan{" "}
              <span className="text-primary">Indonesia</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Yayasan Transformasi berdiri dengan visi menciptakan generasi yang berkarakter kuat, 
              kreatif, dan siap menghadapi tantangan global. Melalui pendidikan TK dan SD yang inovatif, 
              kami menggabungkan kurikulum nasional dengan program bilingual dan pendekatan STEM.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Didukung oleh tenaga pengajar profesional dan fasilitas modern, 
              kami berkomitmen memberikan pengalaman belajar terbaik untuk setiap anak.
            </p>
            <Button className="mt-8 group" size="lg">
              Pelajari Lebih Lanjut
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=500&fit=crop"
                alt="Kegiatan belajar di Yayasan Transformasi"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-secondary/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
