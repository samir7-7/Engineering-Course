import { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-[#3B8AB8] p-2 rounded-lg">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">CivilCraft Design</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-[#3B8AB8] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-gray-700 hover:text-[#3B8AB8] transition-colors font-medium"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('certificate')}
              className="text-gray-700 hover:text-[#3B8AB8] transition-colors font-medium"
            >
              Certificate
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#3B8AB8] transition-colors font-medium"
            >
              Contact
            </button>
            <a
              href="https://wa.me/9779809426540"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3B8AB8] text-white px-6 py-2.5 rounded-lg hover:bg-[#2d6a8f] transition-colors font-semibold"
            >
              Enroll Now
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 gap-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('certificate')}
              className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
            >
              Certificate
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
            >
              Contact
            </button>
            <a
              href="https://wa.me/9779809426540"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3B8AB8] text-white px-6 py-3 rounded-lg hover:bg-[#2d6a8f] transition-colors font-semibold text-center mt-2"
            >
              Enroll Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
