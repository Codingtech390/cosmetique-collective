import { motion } from "framer-motion";

const CTASection = () => (
  <section id="contact" className="section-padding bg-card">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Join our email list.
        </h2>
        <p className="text-muted-foreground mb-8">
          Stay up to date with the latest from Cosmetique Collective. Get exclusive content, product updates, and professional development resources.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shrink-0"
            style={{ background: "var(--gradient-warm)" }}
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
