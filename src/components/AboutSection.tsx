import { motion } from "framer-motion";
import aboutImage from "@/assets/about-beauty.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-xs mb-3">About Us</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Redefining <span className="text-gradient">beauty</span> professional.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Together, we're changing the industry for the better. And we're expanding the possibilities of what beauty can do. At Cosmetique Collective, we believe in the power of education to shape the future of beauty.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We envision a beauty industry where everyone is treated fairly and a career in beauty is respected. We believe in empowering students to make their ambitions a reality through innovative products, customer obsession, and a keen focus on creating impact.
          </p>
          <a
            href="#education"
            className="inline-block text-sm font-medium text-primary border border-primary px-6 py-2.5 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <img
            src={aboutImage}
            alt="Beauty professional applying serum"
            className="w-full rounded-sm object-cover aspect-[4/5]"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
