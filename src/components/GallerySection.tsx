import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop", caption: "Kegiatan Belajar" },
  { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", caption: "Upacara Bendera" },
  { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop", caption: "Kelas Seni" },
  { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop", caption: "Perpustakaan" },
  { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", caption: "Olahraga" },
  { url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop", caption: "Wisuda" },
];

const GallerySection = () => {
  return (
    <section id="galeri" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            Galeri
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-3">
            Momen Berharga
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display font-semibold text-primary-foreground text-sm">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
