"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Example web development projects
const webProjects = [
  {
    title: "E-Commerce Platform",
    description: "A fully functional online store built with React and Node.js",
    src: "/Images/call.png",
  },
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio showcasing design and development work",
    src: "/projects/web/web-2.jpg",
  },
  {
    title: "SaaS Dashboard",
    description: "Interactive dashboard for managing business data",
    src: "/projects/web/web-3.jpg",
  },
  {
    title: "Blog Platform",
    description: "A modern blogging platform with CMS features",
    src: "/projects/web/web-4.jpg",
  },
];

const WebDevelopmentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? webProjects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === webProjects.length - 1 ? 0 : prev + 1));
  };

  const project = webProjects[currentIndex];

  return (
    <div className="relative px-14 py-8 flex flex-col items-center">
      {/* Project Display */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="glass-card overflow-hidden min-w-[360px] h-80 flex flex-col"
      >
        <img src={project.src} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col gap-2">
          <h4 className="text-lg font-bold text-primary">{project.title}</h4>
          <p className="text-sm text-muted-foreground">{project.description}</p>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="mt-4 text-primary flex items-center gap-2 transition-opacity duration-300"
          >
            Learn more →
          </motion.a>
        </div>
      </motion.div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <button
          onClick={prevProject}
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ArrowLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        <button
          onClick={nextProject}
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WebDevelopmentSection;
