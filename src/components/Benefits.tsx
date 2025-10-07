import { motion } from "framer-motion";
import {
  Target,
  Wrench,
  BookOpen,
  Award,
  Users,
  Briefcase,
} from "lucide-react";
import concreteTexture from "../assets/concrete-texture.png";

const benefits = [
  {
    icon: Target,
    title: "Site-Specific Skills",
    description:
      "Master the exact skills you'll use daily on construction sites, not just theory.",
  },
  {
    icon: Wrench,
    title: "Hands-On Training",
    description:
      "Learn by doing with real equipment and actual site scenarios.",
  },
  {
    icon: BookOpen,
    title: "Industry Standards",
    description:
      "Stay current with the latest safety protocols and industry best practices.",
  },
  {
    icon: Award,
    title: "Certification Ready",
    description:
      "Prepare for professional certifications that boost your career prospects.",
  },
  {
    icon: Users,
    title: "Network Building",
    description:
      "Connect with industry professionals and fellow engineers in the field.",
  },
  {
    icon: Briefcase,
    title: "Career Advancement",
    description:
      "Fast-track your journey from entry-level to senior site positions.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Concrete texture background */}
      <div
        className="absolute inset-0 contrast-more:"
        style={{
          backgroundImage: `url(${concreteTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />

      {/* Light overlay to maintain readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/70 to-white/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 font-bold text-sm mb-4 relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-4 bg-black"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 4px, #FCD34D 4px, #FCD34D 8px)",
              }}
            ></div>
            <div
              className="absolute right-0 top-0 bottom-0 w-4 bg-black"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 4px, #FCD34D 4px, #FCD34D 8px)",
              }}
            ></div>
            <span className="ml-6 mr-6">WHAT YOU'LL MASTER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transform From Student to{" "}
            <span className="text-[#3B8AB8]">Site Professional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the real-world skills that separate great field engineers from
            the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#3B8AB8] group"
              >
                <div className="bg-[#3B8AB8]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3B8AB8] transition-colors">
                  <Icon className="w-7 h-7 text-[#3B8AB8] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/9779809426540"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3B8AB8] text-white px-8 py-4 rounded-lg hover:bg-[#2d6a8f] transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
