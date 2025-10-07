import { motion } from 'framer-motion';
import { Award, CheckCircle, Linkedin } from 'lucide-react';

const Certificate = () => {
  return (
    <section
      id="certificate"
      className="py-32 bg-gradient-to-br from-[#3B8AB8] to-[#2d6a8f] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
          <g fill="none" stroke="white" strokeWidth="2">
            <circle cx="150" cy="150" r="60" />
            <circle cx="150" cy="150" r="40" />
            <rect x="280" y="100" width="100" height="140" />
            <line x1="300" y1="130" x2="360" y2="130" />
            <line x1="300" y1="160" x2="360" y2="160" />
            <line x1="300" y1="190" x2="360" y2="190" />
            <polygon points="500,120 560,150 560,210 500,240 440,210 440,150" />
            <path d="M 480 180 L 520 180 M 500 160 L 500 200" />
            <rect x="650" y="130" width="80" height="100" transform="rotate(15 690 180)" />
            <circle cx="850" cy="180" r="50" />
            <path d="M 850 130 L 850 230 M 800 180 L 900 180" />
            <path d="M 1000 150 L 1050 150 L 1050 210 L 1000 210 Z M 1010 170 L 1040 170 L 1040 190 L 1010 190 Z" />
            <line x1="100" y1="400" x2="200" y2="400" />
            <line x1="150" y1="350" x2="150" y2="450" />
            <path d="M 250 400 Q 300 350 350 400 T 450 400" />
            <rect x="520" y="370" width="70" height="70" />
            <line x1="540" y1="390" x2="580" y2="390" />
            <line x1="540" y1="410" x2="580" y2="410" />
            <polygon points="700,370 730,385 730,415 700,430 670,415 670,385" />
            <circle cx="850" cy="400" r="45" />
            <path d="M 850 355 L 850 445 M 805 400 L 895 400 M 820 370 L 880 430 M 880 370 L 820 430" />
            <rect x="980" y="380" width="60" height="80" />
            <path d="M 990 400 L 1030 400 M 1010 390 L 1010 440 M 990 420 L 1030 420" />
            <circle cx="200" cy="600" r="55" />
            <line x1="200" y1="545" x2="200" y2="655" />
            <line x1="145" y1="600" x2="255" y2="600" />
            <path d="M 350 580 L 400 560 L 450 580 L 450 620 L 400 640 L 350 620 Z" />
            <rect x="550" y="570" width="90" height="60" />
            <path d="M 565 590 L 625 590 M 565 610 L 625 610" />
            <polygon points="750,560 790,575 810,610 790,645 750,660 710,645 690,610 710,575" />
            <circle cx="950" cy="610" r="50" />
            <path d="M 950 560 L 950 660 M 900 610 L 1000 610 M 925 585 L 975 635 M 975 585 L 925 635" />
            <rect x="1080" y="580" width="70" height="70" />
            <line x1="1095" y1="595" x2="1135" y2="635" />
            <line x1="1135" y1="595" x2="1095" y2="635" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">OFFICIAL CERTIFICATION</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Your Professional Certificate
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Receive an official certificate from <strong>CivilCraft Design</strong> upon course completion.
              Add credibility to your resume and LinkedIn profile.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-white/90 text-lg">
                  Recognized certificate of completion with course details
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-white/90 text-lg">
                  Showcase your practical field engineering skills to employers
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-white/90 text-lg">
                  Digital certificate ready for LinkedIn and job applications
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-white/90 text-lg">
                  Stand out from other candidates with verified training
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/9779809426540"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#3B8AB8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              Get Certified Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-8 border-yellow-400 relative">
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg border-4 border-white">
                OFFICIAL CERTIFICATE
              </div>

              <div className="border-4 border-gray-200 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 text-[#3B8AB8] mb-4">
                    <Award className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Certificate of Completion
                  </h3>
                  <p className="text-gray-600 text-sm">This is to certify that</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-center text-2xl font-bold text-gray-900 border-b-2 border-[#3B8AB8] pb-2">
                    [Your Name]
                  </p>
                </div>

                <p className="text-center text-gray-600 mb-6">
                  has successfully completed the
                </p>

                <div className="bg-[#3B8AB8]/10 rounded-lg p-4 mb-6">
                  <p className="text-center font-bold text-gray-900">
                    Field Engineering Crash Course
                  </p>
                  <p className="text-center text-sm text-gray-600">
                    From Fresher to Site-Ready
                  </p>
                </div>

                <div className="flex justify-between items-end pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Date</div>
                    <div className="font-semibold text-gray-900">[DD/MM/YYYY]</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Instructor</div>
                    <div className="font-bold text-gray-900">Alash Dhakal</div>
                    <div className="text-xs text-gray-600">CivilCraft Design</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#3B8AB8] rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
