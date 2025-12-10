import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Lightbulb } from "lucide-react";

const features = [
  "Industry-leading expertise",
  "Agile development methodology",
  "24/7 dedicated support",
  "Transparent communication",
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering excellence in every project.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our primary measure of achievement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Constantly pushing boundaries with cutting-edge solutions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              About C-Tech
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the{" "}
              <span className="gradient-text">Digital Future</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over a decade of experience, C-Tech has been at the forefront
              of digital innovation. We combine technical excellence with
              creative problem-solving to deliver solutions that drive real
              business results.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-4 glass-card px-6 py-4 rounded-xl"
            >
              <div className="text-4xl font-bold gradient-text">10+</div>
              <div>
                <div className="font-semibold">Years of Experience</div>
                <div className="text-sm text-muted-foreground">
                  Delivering Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 10 }}
                className="glass-card p-6 flex items-start gap-5 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
