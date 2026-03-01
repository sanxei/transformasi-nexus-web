import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const instaPosts = [
  { img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=400&fit=crop", likes: 128 },
  { img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=400&fit=crop", likes: 95 },
  { img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=400&fit=crop", likes: 203 },
  { img: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=400&fit=crop", likes: 156 },
];

const InstagramSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              Instagram
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl text-foreground">
            @transformasi_official
          </h2>
          <p className="text-muted-foreground mt-2">Ikuti kami untuk update terbaru</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {instaPosts.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={post.img}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                  <Instagram size={20} />
                  <span>{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
