const footerLinks = [
  {
    title: "Products",
    links: ["Cosmetology", "Barbering", "Esthetics", "Eyelashes", "Nail Technology"],
  },
  {
    title: "Resources",
    links: ["Digital Platform", "Continuing Education", "Career Advice", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Impact", "Careers", "Press"],
  },
];

import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <img src={logo} alt="Cosmetique Collective" className="h-12 w-auto mb-4 invert brightness-200" />
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Setting the standard for beauty education worldwide.
          </p>
        </div>
        {footerLinks.map((col) => (
          <div key={col.title}>
            <p className="font-medium text-sm mb-4 tracking-wide uppercase text-primary-foreground/80">
              {col.title}
            </p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-xs text-primary-foreground/40">
          © 2026 Cosmetique Collective. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
