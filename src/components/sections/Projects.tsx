import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../common/AnimatedButton";

const projects = [
  {
    title: "Moto Go",
    description:
      "A ride hailing platform built with Vue.js ,Supabase for database management and leaflet for mapping with rest API.",
    image: "/projects/moto-go.jpg",
    tags: ["Vue", "Vuetify", "Supabase"],
    link: "",
    github: "https://github.com/jeremydanielestrada/MotoGo",
  },

  {
    title: "Inventory Manager",
    description:
      "This project is a full-stack inventory management application designed to help businesses track and manage their inventory efficiently. It features a modern, responsive UI and robust backend capabilities.",
    image: "/projects/inventory-manager.png",
    tags: ["Laravel", "Vuetify", "Vue", "Inertia", "Pinia"],
    link: "",
    github: "https://github.com/jeremydanielestrada/Inventory-Manager",
  },

  {
    title: "Lorricards",
    description:
      "Lorricards leverages the Groq AI API to automatically generate high-quality flashcards from your study materials. Simply input your content, and let AI create effective question-answer pairs for better learning and retention.",
    image: "/projects/lorricards.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Google OAUTH",
      "Node.js",
      "Express.js",
      "Groq AI",
    ],
    link: "https://lorricards.vercel.app/",
    github: "https://github.com/jeremydanielestrada/Lorricards",
  },

  {
    title: "DesignSnap-Edu",
    description:
      "A powerful Chrome extension that analyzes your website's HTML and CSS to provide intelligent suggestions for better design, improved readability, and enhanced accessibility using Groq AI.",
    image: "/projects/designSnap-edu.png",
    tags: ["HTML", "CSS", "JavaScript", "GROQ AI", "Node.js"],
    link: "",
    github: "https://github.com/jeremydanielestrada/DesignSnap-Edu",
  },

  {
    title: "Task Manager",
    description:
      "A modern Kanban-style Task Management System built using React, Zustand, Supabase, and Tailwind CSS, featuring authentication, CRUD operations, and drag-and-drop task management.",
    image: "/projects/task-management.png",
    tags: ["React", "React Router", "Zustand", "Tailwind Css", "Supabase"],
    link: "https://task-manangement-ten.vercel.app/",
    github: "https://github.com/jeremydanielestrada/Task-Manangement",
  },

  {
    title: "Expense Tracker",
    description:
      "My personal modern expense tracking application built with Vue 3, featuring real-time data synchronization and user authentication.",
    image: "/projects/trackspense.jpg",
    tags: ["Vue", "Vuetify", "Supabase"],
    link: "https://expense-tracker-azure-one-75.vercel.app/",
    github: "https://github.com/jeremydanielestrada/Expense-Tracker",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 overflow-hidden relative">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium  tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground  animate-fade-in animation-delat-200">
            A selection of my recent projects that reflect my continuous
            learning and passion for building real-world applications.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link != "" && (
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                    >
                      <ArrowUpRight className="w-5 h-5 " />
                    </a>
                  )}

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-5 h-5 " />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between ">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5  text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex items-center flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50  hover:text-pretty transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
