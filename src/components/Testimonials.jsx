import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Senior Developer',
      company: 'TechCorp',
      avatar: 'SJ',
      rating: 5,
      text: 'Larafast saved me weeks of development time. The authentication system alone is worth the price. Highly recommended!',
      twitter: '@sarahj_dev'
    },
    {
      name: 'Mike Chen',
      title: 'Founder',
      company: 'StartupXYZ',
      avatar: 'MC',
      rating: 5,
      text: 'I was able to launch my SaaS product 3 months earlier thanks to Larafast. The admin dashboard is beautiful and fully functional.',
      twitter: '@mikechen'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      avatar: 'ER',
      rating: 5,
      text: 'The payment integration was seamless. My client was impressed with how quickly we could get their e-commerce site up and running.',
      twitter: '@emilyrodriguez'
    },
    {
      name: 'David Kim',
      title: 'CTO',
      company: 'InnovateLab',
      avatar: 'DK',
      rating: 5,
      text: 'Larafast has become an essential part of our development workflow. The code quality is excellent and the documentation is comprehensive.',
      twitter: '@davidkim_cto'
    },
    {
      name: 'Lisa Wang',
      title: 'Lead Developer',
      company: 'CloudTech',
      avatar: 'LW',
      rating: 5,
      text: 'The multi-tenancy support is exactly what we needed for our B2B platform. Larafast made complex features simple to implement.',
      twitter: '@lisawang_dev'
    },
    {
      name: 'Alex Thompson',
      title: 'Freelance Developer',
      company: 'Independent',
      avatar: 'AT',
      rating: 5,
      text: 'As a freelancer, time is money. Larafast helps me deliver projects faster and take on more clients. Game changer!',
      twitter: '@alexthompson'
    },
    {
      name: 'Maria Garcia',
      title: 'Product Manager',
      company: 'SaaS Solutions',
      avatar: 'MG',
      rating: 5,
      text: 'The API documentation feature is incredible. Our frontend team was able to integrate with our backend in record time.',
      twitter: '@mariagarcia_pm'
    },
    {
      name: 'James Wilson',
      title: 'Technical Lead',
      company: 'Enterprise Corp',
      avatar: 'JW',
      rating: 5,
      text: 'We\'ve been using Larafast for 6 months now. The support team is responsive and the updates keep getting better.',
      twitter: '@jameswilson_tech'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="relative py-20 bg-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 opacity-82"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-4">
            Wall of Love
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            See what developers are saying about Larafast
          </p>
        </div>

        {/* Interactive Tech Logos */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="tech-logo-container">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-tech-bounce">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 mt-2 block text-center">Vue.js</span>
          </div>
          
          <div className="tech-logo-container">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-tech-pulse" style={{animationDelay: '0.5s'}}>
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 mt-2 block text-center">Inertia</span>
          </div>
          
          <div className="tech-logo-container">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-tech-rotate" style={{animationDelay: '1s'}}>
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 mt-2 block text-center">Laravel</span>
          </div>
          
          <div className="tech-logo-container">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-tech-bounce" style={{animationDelay: '1.5s'}}>
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 mt-2 block text-center">Tailwind</span>
          </div>
          
          <div className="tech-logo-container">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-tech-pulse" style={{animationDelay: '2s'}}>
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 mt-2 block text-center">Alpine.js</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-light-gray rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-pink/20">
                  <img 
                    src={`https://i.pravatar.cc/80?img=${index + 1}`} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-700">{testimonial.title}</p>
                  <p className="text-sm text-gray-700">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <blockquote className="text-gray-700 mb-4 italic font-medium">
                "{testimonial.text}"
              </blockquote>

              <div className="text-sm text-pink font-medium">
                {testimonial.twitter}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-sora">
              Join thousands of happy developers
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Start building faster with Larafast today
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-pink px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
