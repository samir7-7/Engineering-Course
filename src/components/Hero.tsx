import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 138, 184, 0.07) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 138, 184, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-20 border-b-2 mt-12 border-[#3B8AB8]/20 flex items-center px-8">
        <div className="flex gap-4 text-xs text-gray-500 font-mono">
          <span>SCALE: 1:100</span>
          <span>|</span>
          <span>SHEET 01</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#3B8AB8]/10 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3B8AB8] font-semibold text-sm">
                Taught by Alash Dhakal
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Become a Real Site Engineer —{" "}
              <span className="text-[#3B8AB8]">Not Just a PDF Reader</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              The ultimate practical training for civil engineering students and
              freshers — learn real field execution skills that no college
              teaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/9779809426540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#3B8AB8] text-white px-8 py-4 rounded-lg hover:bg-[#2d6a8f] transition-all font-semibold text-lg shadow-lg hover:shadow-xl group"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 font-bold group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/9779809426540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#3B8AB8] border-2 border-[#3B8AB8] px-8 py-4 rounded-lg hover:bg-[#3B8AB8] hover:text-white transition-all font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3B8AB8] mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3B8AB8] mb-1">
                  4.8/5
                </div>
                <div className="text-sm text-gray-600">Course Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3B8AB8] mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">Practical Focus</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-2xl border-4 border-white">
              <div className="absolute -top-4 -right-4 bg-[#3B8AB8] text-white px-6 py-2 rounded-full font-bold shadow-lg">
                Site-Ready Training
              </div>

              <div className="bg-white rounded-xl p-6 mb-4 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#3B8AB8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    AD
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Alash Dhakal</div>
                    <div className="text-sm text-gray-600">
                      Field Engineer & Instructor
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  "I've worked on real construction sites and know exactly what
                  skills you need. This course bridges the gap between theory
                  and practice."
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-1">📐</div>
                  <div className="text-xs font-semibold text-gray-700">
                    Drawing Reading
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-1">📊</div>
                  <div className="text-xs font-semibold text-gray-700">
                    Site Estimation
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-1">👷</div>
                  <div className="text-xs font-semibold text-gray-700">
                    Labour Management
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-1">🏗️</div>
                  <div className="text-xs font-semibold text-gray-700">
                    Site Supervision
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 opacity-10">
              <svg viewBox="0 0 100 100" className="text-[#3B8AB8]">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="50"
                  y1="5"
                  x2="50"
                  y2="95"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="5"
                  y1="50"
                  x2="95"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"
        style={{
          backgroundSize: "40px 100%",
          backgroundImage:
            "repeating-linear-gradient(45deg, #FCD34D 0px, #FCD34D 10px, #1F2937 10px, #1F2937 20px)",
        }}
      ></div>
    </section>
  );
};

export default Hero;
