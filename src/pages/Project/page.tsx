"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const projectSections = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built for performance and scalability.",
    moreLink: "/projects/web",
    projects: [
      {
        type: "image",
        src: "/Images/habdev.png",
        title: "Call App",
        description: "A modern call web app",
        link: "https://habdevtech.vercel.app/",
      },
      {
        type: "image",
        src: "/projects/web/web-2.jpg",
        title: "Portfolio",
        description: "Personal portfolio website",
        link: "https://portfolio.example.com",
      },
      {
        type: "image",
        src: "/Images/call.png",
        title: "Call App",
        description: "A modern call web app",
        link: "https://call-app.example.com",
      },
      {
        type: "image",
        src: "/projects/web/web-2.jpg",
        title: "Portfolio",
        description: "Personal portfolio website",
        link: "https://portfolio.example.com",
      },
      {
        type: "image",
        src: "/Images/call.png",
        title: "Call App",
        description: "A modern call web app",
        link: "https://call-app.example.com",
      },
      {
        type: "image",
        src: "/projects/web/web-2.jpg",
        title: "Portfolio",
        description: "Personal portfolio website",
        link: "https://portfolio.example.com",
      },
    ],
  },
  {
    id: "graphics",
    title: "Graphics Design",
    description:
      "Creative visual designs for branding, flyers, social media, and marketing materials.",
    moreLink: "/projects/graphics",
    projects: [
      {
        type: "image",
        src: "/Images/call.png",
        title: "Flyer",
        description: "Promotional flyer",
        link: "https://instagram.com/post/flyer",
      },
      {
        type: "image",
        src: "/Images/graphics.png",
        title: "Poster",
        description: "Event poster",
        link: "https://behance.net/poster",
      },
      {
        type: "image",
        src: "/Images/call.png",
        title: "Flyer",
        description: "Promotional flyer",
        link: "https://instagram.com/post/flyer",
      },
      {
        type: "image",
        src: "/projects/graphics/graphic-2.jpg",
        title: "Poster",
        description: "Event poster",
        link: "https://behance.net/poster",
      },
      {
        type: "image",
        src: "/Images/call.png",
        title: "Flyer",
        description: "Promotional flyer",
        link: "https://instagram.com/post/flyer",
      },
      {
        type: "image",
        src: "/projects/graphics/graphic-2.jpg",
        title: "Poster",
        description: "Event poster",
        link: "https://behance.net/poster",
      },
    ],
  },
  {
    id: "motion",
    title: "Motion Design",
    description:
      "High-quality motion graphics and video edits for brands, ads, and campaigns.",
    moreLink: "/projects/motion",
    projects: [
      {
        type: "video",
        src: "/Videos/motion.mp4",
        title: "Promo Video",
        description: "Promo video for brand",
        link: "https://youtu.be/promo_video",
      },
      {
        type: "video",
        src: "/Videos/focus.mp4",
        title: "Ad Video",
        description: "Social media ad video",
        link: "https://instagram.com/ad_video",
      },
      {
        type: "video",
        src: "/Videos/motion.mp4",
        title: "Ad Video",
        description: "Social media ad video",
        link: "https://instagram.com/ad_video",
      },
      {
        type: "video",
        src: "/Videos/motion.mp4",
        title: "Ad Video",
        description: "Social media ad video",
        link: "https://instagram.com/ad_video",
      },
      {
        type: "video",
        src: "/Videos/motion.mp4",
        title: "Ad Video",
        description: "Social media ad video",
        link: "https://instagram.com/ad_video",
      },
    ],
  },

  {
    id: "Video Editing",
    title: "Video editing",
    description:
      "Professional video editing for ads, content creation, and promotional videos.",
    moreLink: "",
    projects: [
      {
        type: "video",
        src: "/Videos/vix.mp4",
        title: "Promo Video",
        description: "Promo video for brand",
        link: "https://youtu.be/promo_video",
      },
      {
        type: "video",
        src: "/Videos/vix.mp4",
        title: "Ad Video",
        description: "Social media ad video",
        link: "https://instagram.com/ad_video",
      },
      {
        type: "video",
        src: "/Videos/vix.mp4",
        title: "Ad Video",
        description: "Social media ad video",
        link: "https://instagram.com/ad_video",
      },
      {
        type: "video",
        src: "/Videos/fucus.mp4",
        title: "Ad Video",
        description: "Social media ad video",
        link: "https://instagram.com/ad_video",
      },
      {
        type: "video",
        src: "/Videos/fucus.mp4",
        title: "Ad Video",
        description: "Social media ad video",
        link: "https://instagram.com/ad_video",
      },
    ],
  },
];

function ScrollRow({ projects }: { projects: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 420 : -420,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Left */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <ArrowLeft />
      </button>

      {/* Right */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <ArrowRight />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth py-4 px-14 scrollbar-hide"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="min-w-[360px] h-80 border rounded-lg overflow-hidden shadow-sm flex flex-col bg-background"
          >
            {project.type === "video" ? (
              <div className="relative w-full aspect-video bg-black">
                <video
                  src={project.src}
                  controls
                 className="min-w-[420px] border rounded-lg overflow-hidden shadow-sm flex flex-col bg-background"

                />

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-primary/90 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
                  >
                    View <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </a>
            )}

            <div className="p-4">
              <h4 className="text-lg font-semibold text-primary">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <Link
          to="/#home"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-primary font-mono text-sm uppercase block mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Projects grouped by the services we offer.
          </p>
        </motion.div>

        <div className="space-y-2">
          {projectSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold gradient-text">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground max-w-xl mt-2">
                    {section.description}
                  </p>
                </div>
              </div>

              <ScrollRow projects={section.projects} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
