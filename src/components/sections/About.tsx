import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desciprtion:
      "Writing maintainable code, scalable code that stands the test of time.",
  },

  {
    icon: Rocket,
    title: "Performance",
    desciprtion:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },

  {
    icon: Users,
    title: "Collaborating",
    desciprtion: "Working",
  },

  {
    icon: Lightbulb,
    title: "Innovation",
    desciprtion: "Stay ahead with the latest technologies and best practices",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Jeremy, an aspiring web developer who enjoys building
                practical and user-focused applications. I started learning web
                development out of curiosity and grew passionate about turning
                ideas into working, meaningful solutions through code.
              </p>

              <p>
                I primarily work with JavaScript, modern frameworks, and backend
                technologies, focusing on projects that help me strengthen my
                fundamentals and real-world development skills. I enjoy writing
                clean code, solving problems, and improving my understanding of
                how full-stack applications work.
              </p>

              <p>
                Outside of coding, I spend time exploring new tools, refining my
                projects on GitHub, and continuously learning to grow as a
                well-rounded developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to build clean, reliable, and user-friendly
                applications that solve real problems and continuously improve
                through learning and iteration.
              </p>
            </div>
          </div>

          {/* Right Column */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4  hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.desciprtion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
