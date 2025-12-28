/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { Button } from "../common/Button";
import { ArrowRight } from "lucide-react";
import { Download, ChevronDown } from "lucide-react";
import { Github } from "lucide-react";
import { AnimatedBorderButton } from "../common/AnimatedButton";
import {
  Code2,
  FileCode,
  Server,
  Database,
  Rocket,
  Paintbrush,
  GitBranch,
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "Laravel", icon: Server },
  { name: "Vue", icon: Code2 },
  { name: "Vueify", icon: Code2 },
  { name: "Supabase", icon: Database },
  { name: "Vercel", icon: Rocket },
  { name: "Tailwind CSS", icon: Paintbrush },
  { name: "Git", icon: GitBranch },
  { name: "GitHub Actions", icon: GitBranch },
  { name: "Postman", icon: GitBranch },
];

export const Hero = () => {
  const particles = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);
  return (
    <section className="relative min-h-screen  flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* DOTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: particle.left,
              top: particle.top,
              animation: particle.animation,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Aspiring Junior Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I&apos;m Jeremy Daniel Estrada, an aspiring web and app
                developer passionate about building modern, user-friendly
                applications. I enjoy solving problems through code and
                continuously learning new technologies. I&apos;m a quick
                learner, a team player, and motivated to grow into a
                well-rounded developer.
              </p>
            </div>

            {/* CTA'S */}

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                <a href="#contact">Contact Me</a>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[{ icon: Github, href: "#" }].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile-Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2  glow-border">
                <img
                  src="/images/profile.png"
                  alt="Jeremy Daniel Estrada"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/*Floating Badge */}
                <div className="absolute -bottom-4 -right-4  glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <div className="flex items-center gap-3 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    <skill.icon className="w-6 h-6" />
                    <span className="text-xl font-semibold">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
