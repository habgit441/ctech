import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{7,15}$/;

const countryCodes = [
  { code: "+234", label: "Nigeria" },
  { code: "+1", label: "USA" },
  { code: "+44", label: "UK" },
  { code: "+49", label: "Germany" },
  { code: "+33", label: "France" },
  { code: "+91", label: "India" },
];

type Errors = {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const baseInput =
  "w-full rounded-xl px-4 py-3 bg-white/80 dark:bg-white/5 backdrop-blur-md border text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 shadow-lg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+234",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid phone number";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      countryCode: "+234",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    max-w-5xl mx-auto p-10 md:p-16 rounded-3xl
   backdrop-blur-xl
    border 
   
    relative

    transition-all duration-300 hover:border-primary/50 hover:glow-box
  "
>
          <h2 className="text-4xl font-bold text-center mb-8">
            Contact <span className="gradient-text">Us</span>
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`${baseInput} ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-500/40"
                      : "border-gray-300/40 focus:ring-primary/50"
                  }`}
                />
                {errors.fullName && <ErrorText text={errors.fullName} />}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${baseInput} ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500/40"
                      : "border-gray-300/40 focus:ring-primary/50"
                  }`}
                />
                {errors.email && <ErrorText text={errors.email} />}
              </div>
            </div>

            {/* Phone */}
            <div className="grid sm:grid-cols-[160px_1fr] gap-4">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className={`${baseInput} border-gray-300/40 focus:ring-primary/50`}
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label} ({c.code})
                  </option>
                ))}
              </select>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${baseInput} ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500/40"
                      : "border-gray-300/40 focus:ring-primary/50"
                  }`}
                />
                {errors.phone && <ErrorText text={errors.phone} />}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`${baseInput} resize-none     transition-all duration-300 hover:border-primary/50 hover:glow-box ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500/40"
                    : "border-gray-300/40 focus:ring-primary/50"
                }`}
              />
              {errors.message && <ErrorText text={errors.message} />}
            </div>

            {success && (
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle className="w-5 h-5" />
                Message sent successfully!
              </div>
            )}

            <Button type="submit" size="xl" className="group w-full">
              Send Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const ErrorText = ({ text }: { text: string }) => (
  <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
    <AlertCircle className="w-4 h-4" />
    {text}
  </p>
);

export default ContactSection;
