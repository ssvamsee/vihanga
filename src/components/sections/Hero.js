import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-white via-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <div className="space-y-6">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium inline-block">
                #1 Education Marketing Agency
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Vihanga</span> Education & Marketing Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                 A one stop shop for all your School and College Marketing activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full transition-all duration-300 text-center font-medium shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 cursor-pointer"
                >
                  Explore Programs
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-full transition-all duration-300 text-center font-medium hover:bg-primary-50 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center gap-12 pt-8 pl-12">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-primary-600"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    50+
                  </motion.div>
                  <div className="text-gray-600">Schools</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 0.2,
                      ease: "easeOut"
                    }
                  }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-primary-600"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  >
                    25+
                  </motion.div>
                  <div className="text-gray-600">Colleges</div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img 
                initial={{ y: 20 }}
                animate={{ 
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src="./rb_1773.png"
                alt="Education"
                className="rounded-2xl shadow-2xl object-contain w-full"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white/80 to-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">

                    <span className="text-2xl">🎓</span>
                  <div>
                    <div className="font-semibold text-gray-800">Success Rate</div>
                      98%
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 