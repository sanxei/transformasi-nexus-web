import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-display font-bold text-secondary-foreground text-lg">
                T
              </div>
              <span className="font-display font-bold text-xl">TRANSFORMASI</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Yayasan Transformasi mendidik generasi unggul melalui pendidikan TK dan SD yang holistik dan berkarakter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-secondary">
              Menu
            </h4>
            <ul className="space-y-2">
              {["Beranda", "Program", "Prestasi", "Galeri", "Pendaftaran"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-secondary">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Jl. Pendidikan No. 123, Jakarta
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone size={16} className="shrink-0" />
                (021) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail size={16} className="shrink-0" />
                info@transformasi.sch.id
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-wider uppercase mb-4 text-secondary">
              Sosial Media
            </h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © 2025 Yayasan Transformasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
