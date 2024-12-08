import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import GradientText from '../common/GradientText';

function About() {
  return (
    <section id="about" className="py-20">
      {/* Hero Section with Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 py-20 mb-16 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <GradientText>About Vihanga</GradientText>
            </h2>
            <p className="text-xl md:text-2xl text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reach More Students With the Right Educational Marketing Company in Hyderabad!
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Successful Projects" },
            { number: "98%", label: "Success Rate" },
            { number: "10+", label: "States Covered" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid gap-6"
          >
            {[
              {
                icon: "🎯",
                title: "10+ Years of Excellence",
                description: (
                  <>
                    <GradientText className="text-l font-bold">Vihanga</GradientText> offers the best educational marketing services for Schools and institutes in Hyderabad, for the past 10 years with a great success rate.
                  </>
                )
              },
              {
                icon: "💡",
                title: "Our Solutions",
                description: "As an education marketing agency, we strive to create solutions that enhance the businesses of our clients' operational in the educational sector. Our digital marketing strategy for educational institutions has helped many schools, colleges, and coaching centres."
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="group h-full bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 flex flex-col"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  <GradientText>{card.title}</GradientText>
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-6"
          >
            {[
              {
                icon: "🎓",
                title: "Our Approach",
                description: (
                  <>
                    The consistent progress of&nbsp;
                    <GradientText className="text-l font-bold">Vihanga</GradientText> dwells upon the right modus-operandi. Our first approach as an educational marketing agency in Hyderabad is to effectively map out the pre-set goals and objectives of our clients'.
                  </>
                )
              },
              {
                icon: "🎯",
                title: "Target Audience",
                description: "If you're engaged in the education sector, then it's highly probable that your target audience is students and parents. Our team perceives this ultimate fact and creates customized techniques to attract the targeted students and parents of a particular zone."
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="group h-full bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 flex flex-col"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  <GradientText>{card.title}</GradientText>
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA with modern design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl transform -skew-y-2"></div>
          <div className="relative bg-white rounded-3xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 p-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  <GradientText>Ready to Grow?</GradientText>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Even after having all kinds of amenities in your educational Institute, if you aren't able to attract talented students, then quickly approach&nbsp;
                  <GradientText className="text-l font-bold">Vihanga</GradientText>. With a long-stretch experience in educational marketing,&nbsp;
                  <GradientText className="text-l font-bold">Vihanga</GradientText> is a premier destination that can help you grow your business.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer hover:scale-105 transform"
                  >
                    Get Started Today
                    {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg> */}
                  </Link>
                  {/* <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center">
                          <span className="text-sm">🎓</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Joined by <span className="font-semibold">500+</span> institutions
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl -rotate-3 transform"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Success Rate</h4>
                      <p className="text-primary-600 font-bold text-2xl">98%</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Expert Team Support",
                      "Customized Solutions",
                      "Proven Track Record",
                      "Guaranteed Results"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 