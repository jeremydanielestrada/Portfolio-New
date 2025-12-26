import { Button } from "../common/Button";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 transition-all duration-500  ${
        isScrolled ? "glass-strong py-3" : "bg-transparent"
      }  py-5 right-0 z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          JDE<span className="text-primary">.</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
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
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile Menu  Button */}
        <button
          className="md:hidden px-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container  mx-auto px-6 flex flex-col gap-4 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground rounded-full hover:bg-surface px-4 py-2"
              >
                {link.label}
              </a>
            ))}

            <Button size="sm" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
