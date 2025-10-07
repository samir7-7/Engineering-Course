import { motion } from 'framer-motion';
import { CheckCircle2, Ruler, Users, Shield, TrendingUp, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Ruler,
    title: 'Learn SITE EXECUTION SKILLS Step-by-Step',
    description: 'Master practical field techniques that matter on real construction sites',
  },
  {
    icon: CheckCircle2,
    title: 'Understand Drawings, Estimation & Supervision',
    description: 'Read blueprints, calculate quantities, and supervise work like a professional',
  },
  {
    icon: Users,
    title: 'Handle Contractors, Labour & Safety Protocols',
    description: 'Learn people management, safety standards, and site coordination',
  },
  {
    icon: TrendingUp,
    title: 'Become Job-Ready in Weeks, Not Years',
    description: 'Fast-track your career with practical knowledge that colleges skip',
  },
  {
    icon: DollarSign,
    title: 'Best Value Training Available',
    description: 'More comprehensive and affordable than any other course in the market',
  },
  {
    icon: Shield,
    title: 'Lifetime Access & Support',
    description: 'Learn at your own pace with permanent access to all course materials',
  },
];

const Benefits = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
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
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 font-bold text-sm mb-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-black" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #FCD34D 4px, #FCD34D 8px)' }}></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-black" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #FCD34D 4px, #FCD34D 8px)' }}></div>
            <span className="ml-6 mr-6">WHAT YOU'LL MASTER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transform From Student to{' '}
            <span className="text-[#3B8AB8]">Site Professional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the real-world skills that separate great field engineers from the rest
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
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

export default Benefits;
