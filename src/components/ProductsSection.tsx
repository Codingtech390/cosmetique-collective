import { motion } from "framer-motion";
import skincareImg from "@/assets/products-skincare.jpg";
import makeupImg from "@/assets/products-makeup.jpg";

const products = [
  {
    image: skincareImg,
    label: "Skincare",
    title: "Advanced Esthetics Collection",
    desc: "Give your program a competitive advantage. Our latest edition offers an elevated curriculum your students crave and prepares them on the advanced procedures clients want most.",
  },
  {
    image: makeupImg,
    label: "Cosmetology",
    title: "Standard Cosmetology Edition",
    desc: "We've reimagined cosmetology education from the inside out. With a stronger focus on all hair types, a modern approach to learning, and a bold new look designed to boost engagement.",
  },
];

const ProductsSection = () => (
  <section id="catalog" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-xs mb-3">Our Catalog</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
          Let's get digital.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Experience the benefits of a digital-first beauty education — designed to streamline your day-to-day and keep your curriculum on the cutting edge.
        </p>
      </motion.div>

      <div className="space-y-20">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
          >
            <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-sm object-cover aspect-square"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              />
            </div>
            <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
              <p className="text-primary font-medium tracking-widest uppercase text-xs mb-2">{product.label}</p>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-4">{product.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.desc}</p>
              <a
                href="#"
                className="inline-block text-sm font-medium text-primary border border-primary px-6 py-2.5 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Get the Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
