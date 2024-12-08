import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", id: "home" },
    { title: "About Us", id: "about" },
    { title: "Services", id: "services" },
    { title: "Universities", id: "universities" },
    { title: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              {/* Logo Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center text-white">
                <img src="./logo1.svg" alt="Vihanga Logo" className="w-8 h-8" />
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-700 bg-clip-text text-transparent">
                  Vihanga
                </span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                hashSpy={true}
                spyThrottle={500}
                activeClass="text-primary-600 font-semibold"
                className="cursor-pointer transition-colors hover:text-primary-600 text-gray-700 font-medium"
                isDynamic={true}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 focus:outline-none text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl rounded-2xl mt-2 py-4 px-2 border border-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                hashSpy={true}
                spyThrottle={500}
                activeClass="text-primary-600 font-semibold bg-primary-50"
                className="block py-2.5 px-4 text-gray-700 hover:bg-gray-50 rounded-xl cursor-pointer font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
                isDynamic={true}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 