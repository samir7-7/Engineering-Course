import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(
      `https://wa.me/9779809426540?text=${whatsappMessage}`,
      "_blank"
    );
    setStatus("Redirecting to WhatsApp...");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-32 bg-white relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 138, 184, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 138, 184, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#3B8AB8]/10 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-[#3B8AB8]" />
            <span className="text-[#3B8AB8] font-semibold text-sm">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today and take the first step toward becoming a
            professional site engineer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3B8AB8] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3B8AB8] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3B8AB8] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your goals and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3B8AB8] text-white px-8 py-4 rounded-lg hover:bg-[#2d6a8f] transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send
                </button>

                {status && (
                  <p className="text-center text-[#3B8AB8] font-semibold">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#3B8AB8]/10 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-[#3B8AB8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/9779809426540"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3B8AB8] hover:underline"
                    >
                      +977 980-9426540
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Best way to reach us for quick responses
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#3B8AB8]/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#3B8AB8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:hello@civilcraft.com"
                      className="text-[#3B8AB8] hover:underline"
                    >
                      hello@civilcraft.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Send us detailed inquiries via email
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#3B8AB8]/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#3B8AB8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-700">Nepal</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Serving students across the country
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3B8AB8] to-[#2d6a8f] rounded-xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 300"
                >
                  <g fill="none" stroke="white" strokeWidth="2">
                    <circle cx="80" cy="80" r="35" />
                    <rect x="160" y="55" width="50" height="65" />
                    <line x1="172" y1="70" x2="198" y2="70" />
                    <line x1="172" y1="88" x2="198" y2="88" />
                    <line x1="172" y1="106" x2="198" y2="106" />
                    <polygon points="280,60 310,72 310,98 280,110 250,98 250,72" />
                    <circle cx="80" cy="180" r="30" />
                    <path d="M 80 150 L 80 210 M 50 180 L 110 180" />
                    <rect x="160" y="160" width="55" height="50" />
                    <path d="M 172 172 L 203 172 M 172 188 L 203 188" />
                    <polygon points="280,155 305,165 305,195 280,205 255,195 255,165" />
                    <circle cx="350" cy="85" r="28" />
                    <rect x="330" y="165" width="45" height="55" />
                  </g>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Quick Enrollment</h3>
                <p className="text-white/90 mb-6">
                  Skip the form and enroll directly via WhatsApp for instant
                  access to the course
                </p>
                <a
                  href="https://wa.me/9779809426540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#3B8AB8] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enroll via WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">
                Why Choose CivilCraft Design?
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3B8AB8] mt-1">✓</span>
                  <span>Practical, real-world field engineering training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B8AB8] mt-1">✓</span>
                  <span>Taught by experienced field engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B8AB8] mt-1">✓</span>
                  <span>Best price in the market</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B8AB8] mt-1">✓</span>
                  <span>Lifetime access to all materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B8AB8] mt-1">✓</span>
                  <span>Official certificate upon completion</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
