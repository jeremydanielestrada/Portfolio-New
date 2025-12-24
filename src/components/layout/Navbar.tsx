import { Button } from "../common/Button";

const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 bg-transparent py-5 right-0">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          JDE<span className="text-primary">.</span>
        </a>
        {/* Desktop Nav */}
        <div className="flex items-center gap-1">
          <div className="glass rounded-full  px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm  text-muted-foreground  hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA-BUTTON */}
        <div>
          <Button size="sm">Contact Me</Button>
        </div>
      </nav>
    </header>
  );
};
