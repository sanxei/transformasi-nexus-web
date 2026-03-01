import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Prestasi", href: "#prestasi" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-elevated py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#beranda" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-display font-bold text-secondary-foreground text-lg">
            T
          </div>
          <span className="font-display font-bold text-xl text-primary-foreground">
            TRANSFORMASI
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <Button variant="hero" size="sm">
            Pendaftaran
          </Button>
        </div>

        {/* Lang toggle */}
        <div className="hidden lg:flex items-center gap-2 ml-4">
          <button className="text-xs font-bold text-secondary px-2 py-1 rounded border border-secondary/30">
            ID
          </button>
          <button className="text-xs font-medium text-primary-foreground/60 px-2 py-1 hover:text-primary-foreground/80 transition-colors">
            EN
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2">
                Pendaftaran
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
