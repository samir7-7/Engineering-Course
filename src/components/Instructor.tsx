import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Users,
  GraduationCap,
  CheckCircle,
  Star,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Instructor = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Civil Engineering Expert",
      description: "Qualified civil engineer with academic excellence",
    },
    {
      icon: Briefcase,
      title: "5+ Years Field Experience",
      description: "Worked on major construction projects across Nepal",
    },
    {
      icon: Users,
      title: "500+ Students Trained",
      description: "Successfully mentored hundreds of aspiring engineers",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Known for practical, results-driven teaching approach",
    },
  ];

  const expertise = [
    "Site Execution & Management",
    "Quantity Surveying & Estimation",
    "Drawing Interpretation",
    "Quality Control & Testing",
    "Labour & Contractor Management",
    "Safety Protocol Implementation",
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B8AB8' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#3B8AB8]/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-[#3B8AB8] fill-[#3B8AB8]" />
            <span className="text-[#3B8AB8] font-semibold text-sm">
              YOUR MENTOR
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meet Your Instructor
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn from someone who has actually worked on construction sites and
            knows exactly what it takes to succeed
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 shadow-2xl border-4 border-white">
              <div className="absolute -top-6 -right-6 bg-[#3B8AB8] text-white px-6 py-3 rounded-full font-bold shadow-lg">
                Expert Instructor
              </div>

              <div className="bg-gradient-to-br from-[#3B8AB8] to-[#2d6a8f] rounded-2xl p-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 600"
                  >
                    <g fill="none" stroke="white" strokeWidth="2">
                      <circle cx="100" cy="100" r="40" />
                      <rect x="200" y="50" width="80" height="100" />
                      <path d="M 350 80 L 400 80 L 400 150 L 350 150 Z M 360 90 L 390 90 L 390 120 L 360 120 Z" />
                      <polygon points="500,50 550,80 550,140 500,170 450,140 450,80" />
                      <line x1="50" y1="250" x2="150" y2="250" />
                      <line x1="100" y1="200" x2="100" y2="300" />
                      <path d="M 200 250 Q 250 200 300 250 T 400 250" />
                      <rect
                        x="450"
                        y="220"
                        width="60"
                        height="60"
                        transform="rotate(45 480 250)"
                      />
                      <circle cx="600" cy="250" r="30" />
                      <path d="M 650 220 L 680 250 L 650 280 L 620 250 Z" />
                      <path d="M 100 400 L 150 350 L 200 400 L 150 450 Z" />
                      <rect x="250" y="370" width="70" height="80" />
                      <circle cx="400" cy="410" r="35" />
                      <polygon points="500,380 530,390 540,420 520,450 490,440 480,410" />
                      <line x1="600" y1="380" x2="650" y2="430" />
                      <line x1="650" y1="380" x2="600" y2="430" />
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-6xl shadow-lg">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQFU3EPZlnBeGg/profile-displayphoto-shrink_800_800/B4DZaBcMR6GwAg-/0/1745928375716?e=1762992000&v=beta&t=Yne6w3337_AwlD-dHq9pMgY5MmeKnQZFjrf76noUdjw"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    {" "}
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Alash Dhakal
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      Field Engineer & Course Instructor
                    </p>
                  </div>

                  <div className="socials text-white flex gap-7">
                    <a href="">
                      <Facebook className="w-5 h-5 hover:text-gray-300" />
                    </a>
                    <a href="">
                      <Instagram className="w-5 h-5 hover:text-gray-300" />
                    </a>
                    <a href="">
                      <Linkedin className="w-5 h-5 hover:text-gray-300" />
                    </a>
                    <a href="">
                      <Twitter className="w-5 h-5 hover:text-gray-300" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 opacity-20">
                <svg viewBox="0 0 100 100" className="text-[#3B8AB8]">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    x1="50"
                    y1="5"
                    x2="50"
                    y2="95"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    x1="5"
                    y1="50"
                    x2="95"
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Learn From Real Experience, Not Just Theory
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Alash Dhakal is a qualified civil engineer with extensive hands-on
              experience in construction site management. Having worked on
              numerous projects, he understands the gap between college
              education and real-world requirements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              His practical, no-nonsense teaching approach has helped hundreds
              of students transition from nervous freshers to confident site
              engineers. He focuses on the skills that truly matter on
              construction sites, not just textbook theory.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 mb-8">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#3B8AB8]" />
                Areas of Expertise
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#3B8AB8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="border-l-4 border-[#3B8AB8] pl-6 py-4 bg-[#3B8AB8]/5 rounded-r-lg">
              <p className="text-gray-700 italic mb-3">
                "I created this course because I saw too many talented
                engineering graduates struggling on sites due to lack of
                practical training. My mission is to bridge that gap and prepare
                you for real-world success."
              </p>
              <footer className="text-sm font-semibold text-gray-900">
                — Alash Dhakal
              </footer>
            </blockquote>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#3B8AB8] transition-all text-center group"
              >
                <div className="bg-[#3B8AB8]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3B8AB8] transition-colors">
                  <Icon className="w-8 h-8 text-[#3B8AB8] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {credential.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {credential.description}
                </p>
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
          <div className="bg-gradient-to-r from-[#3B8AB8] to-[#2d6a8f] rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 400"
              >
                <g fill="none" stroke="white" strokeWidth="2.5">
                  <rect x="50" y="100" width="100" height="150" />
                  <line x1="50" y1="150" x2="150" y2="150" />
                  <line x1="50" y1="200" x2="150" y2="200" />
                  <circle cx="250" cy="175" r="60" />
                  <path d="M 250 115 L 250 235 M 190 175 L 310 175" />
                  <polygon points="400,100 480,140 480,210 400,250 320,210 320,140" />
                  <rect x="550" y="120" width="80" height="110" />
                  <path d="M 560 140 L 620 140 M 560 170 L 620 170 M 560 200 L 620 200" />
                  <circle cx="720" cy="175" r="50" />
                  <path d="M 720 125 L 720 225 M 720 175 L 770 175" />
                </g>
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Learn From an Expert?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join hundreds of students who have transformed their careers
                under Alash's guidance
              </p>
              <a
                href="https://wa.me/9779809426540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#3B8AB8] px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
              >
                Start Learning Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructor;
