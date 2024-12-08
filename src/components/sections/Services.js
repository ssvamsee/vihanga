import GradientText from "../common/GradientText";
import { Link } from 'react-scroll';

function Services() {
  const services = [
    {
      title: "Digital Ad Campaigns",
      description: "Strategic digital marketing campaigns to reach your target audience effectively across multiple platforms",
      icon: "💻",
      features: [
        "Social Media Marketing",
        "Google Ads Management",
        "Email Marketing",
        "SEO Optimization"
      ]
    },
    {
      title: "Pamphlet Distribution",
      description: "Targeted pamphlet and leaflet distribution services to reach potential students in key locations",
      icon: "📄",
      features: [
        "Strategic Area Coverage",
        "Door-to-Door Distribution",
        "Event-based Distribution",
        "Response Tracking"
      ]
    },
    {
      title: "Design Services",
      description: "Professional brochure and catalogue design services that capture your institution's essence",
      icon: "🎨",
      features: [
        "Brochure Design",
        "Catalogue Creation",
        "Logo Design",
        "Marketing Collateral"
      ]
    },
    {
      title: "Media Production",
      description: "High-quality video production and photography services to showcase your institution",
      icon: "🎥",
      features: [
        "Campus Photography",
        "Promotional Videos",
        "Event Coverage",
        "Aerial Shots"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <GradientText>Our Services</GradientText>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            Comprehensive Marketing Solutions for Educational Institutions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We provide end-to-end marketing services designed specifically for schools and colleges to enhance their reach and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <GradientText>{service.title}</GradientText>
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer hover:scale-105 transform"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services; 