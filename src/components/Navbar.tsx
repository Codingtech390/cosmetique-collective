import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Our Story", href: "#catalog" },

  {
    label: "Continued Education",
    href: "#digital",
    dropdown: [
      { label: "Virtual", href: "#" },
      { label: "In-person", href: "#" },
    ],
  },

  {
    label: "Our Shop",
    href: "#education",
    dropdown: [
      { label: "Beauty, Cosmetic & Personal Care", href: "#" },
      { label: "Nutricosmetics", href: "#" },
      { label: "Beauty Devices", href: "#" },
    ],
  },

  {
    label: "Get Support",
    href: "#impact",
    dropdown: [{ label: "Consultancy", href: "#" }],
  },

  { label: "Beauty Cast", href: "#contact" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border overflow-visible">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Cosmetique Collective" className="h-10 w-auto" />
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>

              {/* DROPDOWN */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999]">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded hover:opacity-90 transition-opacity"
          >
            Get Support
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>

                  {/* MOBILE DROPDOWN */}
                  {link.dropdown && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setOpen(false)}
                        >
                          • {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="#contact"
                className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded text-center hover:opacity-90 transition-opacity"
              >
                Get Support
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;