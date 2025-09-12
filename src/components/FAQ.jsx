import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: 'What is Larafast?',
      answer: 'Larafast is a comprehensive Laravel development toolkit that provides pre-built components, authentication systems, admin dashboards, and more to help you build Laravel applications faster than ever before.'
    },
    {
      question: 'How does it save development time?',
      answer: 'Larafast eliminates the need to build common features from scratch. Instead of spending weeks on authentication, admin panels, and payment integration, you get production-ready code that you can customize and deploy immediately.'
    },
    {
      question: 'What\'s included in each package?',
      answer: 'Each package includes different features. The Starter package includes basic authentication and admin panel. The Full Package adds payment integration, API docs, and multi-tenancy. The Premium package includes white-label solutions and custom development.'
    },
    {
      question: 'Do you provide support?',
      answer: 'Yes! All packages include 24/7 support. We have a dedicated support team that responds to questions within 24 hours. Premium customers get priority support with faster response times.'
    },
    {
      question: 'Can I use it for client projects?',
      answer: 'Absolutely! Larafast is perfect for client projects. It helps you deliver faster, which means you can take on more clients or charge premium rates for faster delivery.'
    },
    {
      question: 'What Laravel versions are supported?',
      answer: 'Larafast supports Laravel 8.x, 9.x, 10.x, and 11.x. We regularly update our codebase to support the latest Laravel versions and maintain backward compatibility.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with Larafast for any reason, contact us within 30 days of purchase for a full refund.'
    },
    {
      question: 'How do updates work?',
      answer: 'All packages include lifetime updates at no additional cost. You\'ll receive notifications when new updates are available, and you can download them from your account dashboard.'
    },
    {
      question: 'Can I customize the code?',
      answer: 'Yes! Larafast provides you with the source code, so you can customize it however you need. The code is well-documented and follows Laravel best practices.'
    },
    {
      question: 'Do you offer team licenses?',
      answer: 'Yes, we offer team licenses for companies with multiple developers. Contact us for custom pricing based on your team size and requirements.'
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark-gray">
            Everything you need to know about Larafast
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-navy pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-pink transition-transform duration-200 ${
                      openItems.has(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openItems.has(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t pt-4">
                    <p className="text-dark-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-navy mb-4 font-sora">
              Still have questions?
            </h3>
            <p className="text-dark-gray mb-6">
              Our support team is here to help you get the most out of Larafast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink text-white px-6 py-3 rounded-lg font-medium hover:bg-pink/90 transition-colors duration-300">
                Contact Support
              </button>
              <button className="border-2 border-pink text-pink px-6 py-3 rounded-lg font-medium hover:bg-pink hover:text-white transition-colors duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
