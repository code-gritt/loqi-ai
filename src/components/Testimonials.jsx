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
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 opacity-82"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink/17 via-transparent to-blue-500/17"></div>
        
        {/* Animated Geometric Patterns */}
        <div className="absolute top-18 left-18 w-28 h-28 bg-pink/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-18 right-18 w-32 h-32 bg-blue-500/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute top-1/2 right-1/2 w-24 h-24 bg-purple-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4.2s'}}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-9" style={{
          backgroundImage: `
            linear-gradient(rgba(248, 74, 167, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 74, 167, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '47px 47px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-4">
            Wall of Love
          </h2>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            See what developers are saying about Larafast
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
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
                  <p className="text-sm text-dark-gray">{testimonial.title}</p>
                  <p className="text-sm text-dark-gray">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <blockquote className="text-dark-gray mb-4 italic">
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
