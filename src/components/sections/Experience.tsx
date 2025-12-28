export const Experience = () => {
  const experiences = [
    {
      period: "2025 – Present",
      role: "Full-Stack Developer",
      company: "Personal Projects",
      description:
        "Designed and built personal web applications to deepen my understanding of full-stack development. Implemented authentication, CRUD operations, API integration, and deployment while focusing on clean code and maintainability.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "Supabase",
        "React",
        "Tailwind Css",
        "Vue",
        "Laravel",
        "Node.js",
        "MySQL",
        "PostgreSQL",
        "Git",
        "REST API",
      ],
    },

    {
      period: "Sep 2025 - Nov 2025",
      role: "Full-Stack developer",
      company: "Freelance",
      description:
        "Developed a web-based hospital management system to streamline and automate the patient discharge process. The system improves communication between healthcare staff, tracks patient progress across discharge stages, and provides analytics and reporting for better operational insights.",
      technologies: ["Vue", "Vuetify", "Supabase", "Pinia"],
    },

    {
      period: "May 2025 - June 2025",
      role: "Full-Stack developer",
      company: "Freelance",
      description:
        "Built and delivered web applications for clients through commission-based projects. Translated requirements into working features, collaborated through feedback, and deployed applications using modern web technologies.",
      technologies: ["Vue", "Vuetify", "Supabase", "Pinia"],
    },
  ];

  return (
    <section id="experience">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animat-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to a
            continuously improving web developer building real-world projects.
          </p>
        </div>

        {/* Time Line */}

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"></div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
