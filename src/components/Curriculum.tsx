import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PlayCircle, FileText, Clock } from 'lucide-react';

const modules = [
  {
    title: 'Module 1: Foundation & Site Basics',
    duration: '8 lessons',
    topics: [
      'Understanding construction site hierarchy and roles',
      'Reading architectural and structural drawings',
      'Site layout planning and marking',
      'Foundation types and excavation techniques',
      'Soil testing and bearing capacity basics',
      'Safety protocols and PPE requirements',
    ],
  },
  {
    title: 'Module 2: Concrete Works & Quality Control',
    duration: '10 lessons',
    topics: [
      'Concrete mix design and proportioning',
      'Slump test, cube testing, and quality checks',
      'Formwork design and installation',
      'Reinforcement detailing and bar bending schedule',
      'Concreting methods: pouring, compacting, curing',
      'Common concrete defects and remedies',
    ],
  },
  {
    title: 'Module 3: Masonry & Finishing Works',
    duration: '7 lessons',
    topics: [
      'Brick and block masonry techniques',
      'Plastering and pointing procedures',
      'Waterproofing and damp-proofing',
      'Flooring types and installation methods',
      'Door and window installation',
      'Painting and final finishing',
    ],
  },
  {
    title: 'Module 4: Site Estimation & Quantity Surveying',
    duration: '9 lessons',
    topics: [
      'Reading BOQ (Bill of Quantities)',
      'Calculating material quantities accurately',
      'Earthwork and concrete volume calculations',
      'Rate analysis for different works',
      'Material procurement and vendor management',
      'Cost control and budget tracking',
    ],
  },
  {
    title: 'Module 5: Site Management & Supervision',
    duration: '8 lessons',
    topics: [
      'Daily site planning and progress tracking',
      'Managing contractors and subcontractors',
      'Labour management and productivity',
      'Quality assurance and inspection procedures',
      'Site documentation and record keeping',
      'Handling site challenges and problem-solving',
    ],
  },
  {
    title: 'Module 6: Advanced Topics & Career Guidance',
    duration: '6 lessons',
    topics: [
      'MEP coordination basics (Mechanical, Electrical, Plumbing)',
      'Construction equipment and machinery',
      'Project scheduling and timeline management',
      'Professional communication and reporting',
      'Resume building and interview preparation',
      'Career opportunities in construction field',
    ],
  },
];

const Curriculum = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section
      id="curriculum"
      className="py-32 bg-white relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 138, 184, 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 138, 184, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#3B8AB8]/10 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4 text-[#3B8AB8]" />
            <span className="text-[#3B8AB8] font-semibold text-sm">COMPLETE COURSE OUTLINE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Field Engineering <span className="text-[#3B8AB8]">Crash Course</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Fresher to Site-Ready: A comprehensive curriculum designed for real-world success
          </p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#3B8AB8] transition-colors"
            >
              <button
                onClick={() => setOpenModule(openModule === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="bg-[#3B8AB8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{module.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 ml-11 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <PlayCircle className="w-4 h-4" />
                      {module.topics.length} topics
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    openModule === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openModule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-6 py-5 bg-gray-50">
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <div className="mt-1">
                              <div className="w-1.5 h-1.5 bg-[#3B8AB8] rounded-full"></div>
                            </div>
                            <span className="text-gray-700 flex-1">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#3B8AB8] to-[#2d6a8f] rounded-xl p-8 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
              <g fill="none" stroke="white" strokeWidth="2">
                <circle cx="100" cy="80" r="40" />
                <rect x="200" y="50" width="60" height="80" />
                <polygon points="350,50 390,70 390,110 350,130 310,110 310,70" />
                <path d="M 450 70 L 500 70 L 500 110 L 450 110 Z M 460 85 L 490 85 M 475 80 L 475 100" />
                <circle cx="600" cy="90" r="35" />
                <line x1="600" y1="55" x2="600" y2="125" />
                <line x1="565" y1="90" x2="635" y2="90" />
                <rect x="700" y="60" width="50" height="70" />
                <line x1="100" y1="200" x2="150" y2="200" />
                <line x1="125" y1="175" x2="125" y2="225" />
                <polygon points="250,180 280,190 280,220 250,230 220,220 220,190" />
                <circle cx="380" cy="205" r="30" />
                <rect x="480" y="185" width="55" height="55" />
                <path d="M 500 195 L 520 195 M 500 215 L 520 215" />
                <circle cx="640" cy="205" r="28" />
                <polygon points="730,180 750,190 750,220 730,230 710,220 710,190" />
              </g>
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Lifetime Access + Certificate</h3>
          <p className="text-white/90 mb-6">
            Learn at your own pace with permanent access to all course materials and updates
          </p>
          <a
            href="https://wa.me/9779809426540"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#3B8AB8] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get Full Course Access
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
