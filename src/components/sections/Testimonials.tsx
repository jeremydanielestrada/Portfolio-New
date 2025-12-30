import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Jeremy delivered a well-structured and functional web application that met all our requirements. He was responsive, easy to work with, and committed to improving the product through feedback.",
    author: "Project Client",
    role: "Commission-Based Project",
  },

  {
    quote:
      "Working with Jeremy was a smooth experience. He showed strong problem-solving skills and a clear understanding of both frontend and backend development.",
    author: "Collaborator",
    role: "Development Partner",
  },

  {
    quote:
      "Jeremy delivers tasks quickly and consistently completes work ahead of deadlines. Communication was smooth, and the quality of work exceeded expectations.",
    author: "Freelance Client",
    role: "Commission-Based Project",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className=" text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animat-fade-in">
            What people say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}

            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>
              <div>
                <div className="font-semibold">
                  {testimonials[activeIdx].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[activeIdx].role}
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial Navigation */}

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="p-3 rounded-full glass hover: bg-primary/10 hover:text-primary transition-all"
              onClick={previous}
            >
              <ChevronLeft />
            </button>
            <div>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              className="p-3 rounded-full glass hover: bg-primary/10 hover:text-primary transition-all"
              onClick={next}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
