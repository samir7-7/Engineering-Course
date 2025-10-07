import { Hammer, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#3B8AB8] p-2 rounded-lg">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">CivilCraft Design</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Empowering civil engineering students and freshers with practical site execution
              skills for real-world success.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#3B8AB8] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#3B8AB8] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#3B8AB8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#3B8AB8] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('curriculum')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Course Curriculum
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('certificate')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Certificate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Course Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Field Engineering Training</li>
              <li>Practical Site Skills</li>
              <li>Drawing & Estimation</li>
              <li>Site Supervision</li>
              <li>Career Guidance</li>
              <li>Lifetime Access</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://wa.me/9779809426540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +977 980-9426540
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@civilcraft.com"
                  className="hover:text-white transition-colors"
                >
                  hello@civilcraft.com
                </a>
              </li>
              <li>Nepal</li>
            </ul>
            <a
              href="https://wa.me/9779809426540"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-[#3B8AB8] text-white px-6 py-2 rounded-lg hover:bg-[#2d6a8f] transition-colors font-semibold"
            >
              Enroll Now
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CivilCraft Design. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
