import { motion } from "framer-motion";

const partners = [
  "Microsoft Education",
  "Cambridge Assessment",
  "Dinas Pendidikan",
  "British Council",
  "UNICEF",
  "Google for Education",
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            Partnership
          </span>
          <h2 className="font-display font-bold text-3xl text-foreground mt-3">
            Mitra Kami
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 rounded-xl bg-card shadow-card text-muted-foreground font-display font-semibold text-sm hover:text-primary hover:shadow-elevated transition-all duration-300 cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
