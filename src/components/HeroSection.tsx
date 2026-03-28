import { motion } from "framer-motion";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Beauty editorial" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    </div>

    <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-16">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-medium tracking-widest uppercase text-sm mb-4"
        >
          Cosmetique Collective
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-5xl md:text-7xl font-bold leading-tight text-primary-foreground mb-6"
        >
          Push the industry forward.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed text-primary-foreground/80 mb-8 max-w-xl"
        >
          We lead the pack — and we never settle. Cosmetique Collective education sets students on the path to professional success, personal fulfillment, and community impact.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          href="#about"
          className="inline-block font-medium text-sm tracking-wide uppercase px-8 py-3.5 rounded transition-opacity hover:opacity-90"
          style={{ background: "var(--gradient-warm)", color: "hsl(var(--primary-foreground))" }}
        >
          Meet Cosmetique Collective
        </motion.a>
      </div>
    </div>
  </section>
);

export default HeroSection;
