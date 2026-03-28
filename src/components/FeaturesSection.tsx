import { motion } from "framer-motion";
import { Sparkles, Heart, BookOpen } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Innovative Products",
    items: [
      "Strong alignment within all State Board Exams",
      "Robust instructor resources like support slides and lesson plans",
      "Course content available in both English and Spanish",
      "Advanced, skills-based courses",
    ],
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    items: [
      "Fair and transparent pricing — no hidden fees or contracts",
      "Dedicated Account Manager and expert support",
      "Free onboarding and training",
      "Continuous feedback to meet customer needs",
    ],
  },
  {
    icon: BookOpen,
    title: "Empowering Impact",
    items: [
      "Content covering all hair textures and skin tones",
      "Raise domestic violence and human trafficking awareness",
      "Scholarship programs for aspiring professionals",
      "Community of 9000+ educators sharing best practices",
    ],
  },
];

const FeaturesSection = () => (
  <section id="education" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-xs mb-3">Why Choose Us</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
          Meeting your needs.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background rounded p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <feature.icon className="w-8 h-8 text-primary mb-5" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
            <ul className="space-y-3">
              {feature.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
