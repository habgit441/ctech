import React from "react";

type ProjectItem = {
  title: string;
  category: string;
  type: "image" | "video";
  src: string;
};

const projects: ProjectItem[] = [
  {
    title: "Architecture Design",
    category: "Architecture Design",
    type: "image",
    src: "/projects/architecture.jpg",
  },
  {
    title: "AI Photoshoot",
    category: "AI Photoshoot",
    type: "image",
    src: "/projects/ai-photo.jpg",
  },
  {
    title: "UI/UX Showcase",
    category: "UI/UX Design",
    type: "video",
    src: "/projects/uiux-demo.mp4",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">View Projects</h1>
        <p className="text-gray-400">
          Take a view of our creative works
        </p>
      </div>

      {/* Projects Grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:scale-[1.02] transition"
          >
            {/* IMAGE */}
            {project.type === "image" && (
              <img
                src={project.src}
                alt={project.title}
                className="h-56 w-full object-cover"
              />
            )}

            {/* VIDEO */}
            {project.type === "video" && (
              <video
                src={project.src}
                controls
                className="h-56 w-full object-cover"
              />
            )}

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
