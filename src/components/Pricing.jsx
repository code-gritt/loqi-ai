import React from 'react';
import Button from './Button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'one-time',
      description: 'Perfect for small projects and getting started',
      features: [
        'Authentication System',
        'Basic Admin Panel',
        'User Management',
        'Email Templates',
        'Database Migrations',
        'Basic Documentation'
      ],
      popular: false,
      buttonText: 'Choose Starter',
      buttonVariant: 'outline'
    },
    {
      name: 'Full Package',
      price: '$129',
      period: 'one-time',
      description: 'Most popular choice for professional projects',
      features: [
        'Everything in Starter',
        'Advanced Admin Dashboard',
        'Payment Integration (Stripe)',
        'API Documentation',
        'SEO Optimization',
        'Multi-tenancy Support',
        'Priority Support',
        'Custom Branding'
      ],
      popular: true,
      buttonText: 'Choose Full Package',
      buttonVariant: 'primary'
    },
    {
      name: 'Premium',
      price: '$899',
      period: 'one-time',
      description: 'For agencies and large-scale applications',
      features: [
        'Everything in Full Package',
        'White-label Solution',
        'Custom Development',
        'Dedicated Support',
        'Source Code Access',
        'Commercial License',
        'Training Sessions',
        'Custom Integrations'
      ],
      popular: false,
      buttonText: 'Choose Premium',
      buttonVariant: 'outline'
    }
  ];

  return (
    <section id="pricing" className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 opacity-78"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink/16 via-transparent to-blue-500/16"></div>
        
        {/* Animated Geometric Patterns */}
        <div className="absolute top-14 left-14 w-26 h-26 bg-pink/14 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-14 right-14 w-30 h-30 bg-blue-500/14 rounded-full blur-lg animate-bounce" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-22 h-22 bg-purple-500/14 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3.5s'}}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `
            linear-gradient(rgba(248, 74, 167, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 74, 167, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '46px 46px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include lifetime updates and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-pink scale-105' 
                  : 'hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2 font-sora">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy">{plan.price}</span>
                  <span className="text-dark-gray ml-2">/{plan.period}</span>
                </div>
                <p className="text-dark-gray">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-dark-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.buttonVariant}
                className="w-full"
                onClick={() => {
                  // Handle plan selection
                  console.log(`Selected plan: ${plan.name}`);
                }}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-navy mb-4 font-sora">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="font-semibold text-navy">Lifetime Updates</h4>
                <p className="text-sm text-dark-gray">Free updates forever</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">🎧</div>
                <h4 className="font-semibold text-navy">24/7 Support</h4>
                <p className="text-sm text-dark-gray">We're here to help</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">📚</div>
                <h4 className="font-semibold text-navy">Documentation</h4>
                <p className="text-sm text-dark-gray">Comprehensive guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
