import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Who is this course for?',
    answer:
      'This course is perfect for civil engineering students (Diploma, BE, B.Tech), fresh graduates, and anyone who wants to learn practical site execution skills. Whether you are preparing for your first job or want to improve your existing site knowledge, this course will help you.',
  },
  {
    question: 'Do I need a laptop or can I learn on mobile?',
    answer:
      'You can access the course on both laptop and mobile devices. However, we recommend using a laptop for better viewing experience, especially when studying technical drawings and detailed diagrams. The course materials are accessible via Google Drive, which works on all devices.',
  },
  {
    question: 'Will I get lifetime access?',
    answer:
      'Yes! Once you enroll, you get lifetime access to all course materials. You can learn at your own pace, revisit lessons anytime, and access any future updates to the course content at no additional cost.',
  },
  {
    question: 'Is this suitable for Diploma / BE / B.Tech students?',
    answer:
      'Absolutely! This course is designed for students from all educational backgrounds in civil engineering. Whether you are pursuing Diploma, BE, or B.Tech, the practical knowledge covered here will complement your theoretical education and prepare you for real site work.',
  },
  {
    question: 'What if I do not understand something?',
    answer:
      'You can contact Alash sir directly via WhatsApp for any doubts or clarifications. We provide ongoing support to ensure you fully understand every concept. Additionally, you have lifetime access to review lessons as many times as needed.',
  },
  {
    question: 'How is this different from other courses?',
    answer:
      'Unlike theoretical courses, we focus purely on practical, real-world site execution skills. The course is taught by someone with actual field experience, covers topics that matter on construction sites, and is priced affordably to make quality education accessible to all students.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'Yes, you will receive an official certificate of completion from CivilCraft Design after successfully finishing the course. This certificate can be added to your resume and LinkedIn profile to showcase your practical training.',
  },
  {
    question: 'How long does it take to complete the course?',
    answer:
      'The course is self-paced, so you can complete it according to your schedule. On average, students complete it in 3-6 weeks if they dedicate a few hours per week. Since you have lifetime access, you can take as much time as you need.',
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#3B8AB8]/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-[#3B8AB8]" />
            <span className="text-[#3B8AB8] font-semibold text-sm">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Got Questions? <span className="text-[#3B8AB8]">We've Got Answers</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about the Field Engineering Crash Course
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#3B8AB8] transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-6 py-5 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#3B8AB8] to-[#2d6a8f] rounded-xl p-10 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
              <g fill="none" stroke="white" strokeWidth="2">
                <rect x="50" y="60" width="70" height="90" />
                <line x1="65" y1="80" x2="105" y2="80" />
                <line x1="65" y1="100" x2="105" y2="100" />
                <line x1="65" y1="120" x2="105" y2="120" />
                <circle cx="200" cy="105" r="45" />
                <path d="M 200 60 L 200 150 M 155 105 L 245 105" />
                <polygon points="330,70 370,85 380,115 360,145 320,145 300,115 310,85" />
                <rect x="450" y="75" width="60" height="70" />
                <path d="M 465 90 L 495 90 M 465 110 L 495 110 M 480 85 L 480 135" />
                <circle cx="600" cy="110" r="38" />
                <line x1="600" y1="72" x2="600" y2="148" />
                <line x1="562" y1="110" x2="638" y2="110" />
                <rect x="700" y="80" width="55" height="65" transform="rotate(10 727.5 112.5)" />
                <circle cx="120" cy="220" r="35" />
                <polygon points="240,190 270,205 270,235 240,250 210,235 210,205" />
                <rect x="350" y="200" width="60" height="50" />
                <line x1="365" y1="215" x2="395" y2="215" />
                <line x1="365" y1="235" x2="395" y2="235" />
                <circle cx="500" cy="225" r="32" />
                <path d="M 500 193 L 500 257 M 468 225 L 532 225" />
                <polygon points="620,195 650,208 650,242 620,255 590,242 590,208" />
                <rect x="715" y="205" width="50" height="50" />
              </g>
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
          <p className="text-white/90 mb-6">
            Contact us directly on WhatsApp and we'll be happy to help you
          </p>
          <a
            href="https://wa.me/9779809426540"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#3B8AB8] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Chat on WhatsApp
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
