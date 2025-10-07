import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Shrestha',
    role: 'BE Civil Graduate',
    image: '👨‍🎓',
    rating: 5,
    text: 'This course filled all the gaps my college education left. Within 3 weeks of completing the course, I got my first site engineer job. The practical knowledge is exactly what I needed!',
  },
  {
    name: 'Priya Thapa',
    role: 'Diploma Student',
    image: '👩‍🎓',
    rating: 5,
    text: 'Alash sir explains everything so clearly. I can now read drawings and calculate quantities confidently. The best investment I made for my career. Worth every rupee!',
  },
  {
    name: 'Bikash Karki',
    role: 'Junior Site Engineer',
    image: '👷‍♂️',
    rating: 5,
    text: 'I was struggling at my job because I did not know practical site work. This course taught me everything from concrete testing to managing labour. Now I am confident on site!',
  },
  {
    name: 'Suman Gurung',
    role: 'Fresh Graduate',
    image: '👨‍💼',
    rating: 5,
    text: 'The course content is extremely practical and relevant. I learned more here in a few weeks than in months of theoretical classes. Highly recommended for all civil engineering students!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#3B8AB8]/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-[#3B8AB8] fill-[#3B8AB8]" />
            <span className="text-[#3B8AB8] font-semibold text-sm">STUDENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of students who transformed their careers with practical field training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#3B8AB8]/10" />

              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="text-5xl">{testimonial.image}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{testimonial.role}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3B8AB8] to-transparent"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#3B8AB8] mb-1">4.8/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#3B8AB8] mb-1">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#3B8AB8] mb-1">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
