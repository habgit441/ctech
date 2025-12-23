import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Shield,
  Palette,
  Video,
  Camera,
  Building,
  Sparkles,
  Layout,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "User-centered interface and experience designs that improve usability and engagement.",
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    description:
      "Creative visual designs for branding, flyers, social media, and marketing materials.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing for ads, content creation, and promotional videos.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built for performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Cross-platform mobile applications for Android and iOS using modern technologies.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security solutions to protect websites, applications, and digital assets.",
  },
  {
    icon: Building,
    title: "Architecture Design",
    description:
      "Innovative architectural designs, 3D concepts, and structural visualizations.",
  },
  {
    icon: Camera,
    title: "Photoshoot Editing",
    description:
      "Professional photo retouching, enhancement, and creative image editing.",
  },
  {
    icon: Sparkles,
    title: "AI Photoshoot",
    description:
      "AI-powered photoshoots that generate studio-quality images without a physical shoot.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive technology solutions tailored to your unique
            business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card p-8 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:glow-box"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="mt-4 text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn more →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
