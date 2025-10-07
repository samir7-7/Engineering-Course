import { motion } from "framer-motion";
import { Play, Clock, Users, Star } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#3B8AB8]/10 px-4 py-2 rounded-full mb-6">
            <Play className="w-4 h-4 text-[#3B8AB8]" />
            <span className="text-[#3B8AB8] font-semibold text-sm">
              COURSE PREVIEW
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            See What You'll Learn
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Watch this preview to understand how this course will transform you
            from a college student into a confident, job-ready site engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 group cursor-pointer">
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B8AB8]/20 to-[#2d6a8f]/20"></div>

              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
              >
                <div className="text-center z-10 relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-8 inline-block mb-6 group-hover:scale-110 transition-transform">
                    <Play className="w-20 h-20 text-white fill-white" />
                  </div>
                  <p className="text-white text-2xl font-bold">
                    Watch Course Preview
                  </p>
                  <p className="text-white/80 mt-2">5 minutes</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">48+ Hours Content</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">500+ Students</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">4.8/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-100 hover:border-[#3B8AB8] transition-colors"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Practical Focus
              </h3>
              <p className="text-gray-600">
                Learn by doing, not just watching. Real site scenarios and
                hands-on techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-100 hover:border-[#3B8AB8] transition-colors"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Fast Results
              </h3>
              <p className="text-gray-600">
                Become job-ready in weeks. Students report immediate improvement
                in confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-100 hover:border-[#3B8AB8] transition-colors"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Best Value
              </h3>
              <p className="text-gray-600">
                More affordable than any other course. Lifetime access with no
                hidden fees.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default VideoSection;
