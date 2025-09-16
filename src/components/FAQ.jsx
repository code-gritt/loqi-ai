import React, { useState } from "react";

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
      question: "What is Loqi AI?",
      answer:
        'Loqi AI is a cutting-edge code generation tool that lets you input prompts, like "Generate a Python function for sorting," and receive AI-generated code instantly using the Google Gemini free tier.',
    },
    {
      question: "How does it help developers?",
      answer:
        "Loqi AI streamlines coding by generating ready-to-use code snippets based on your prompts, saving time and allowing developers to focus on logic, architecture, and problem-solving rather than boilerplate.",
    },
    {
      question: "Which technologies does Loqi AI use?",
      answer:
        "Loqi AI uses Next.js, TypeScript, Tailwind CSS, Zustand for frontend state, GraphQL for backend queries, ASP.NET Core backend, Neon DB for database storage, and is deployed via Vercel (frontend) and Render (backend).",
    },
    {
      question: "Do I need an account to use it?",
      answer:
        "Yes, you can register with your email, username, and password. All sessions are authenticated with JWT and persisted securely.",
    },
    {
      question: "Is Loqi AI a SaaS platform?",
      answer:
        "No. Loqi AI is free to use and non-SaaS. There are no credits, subscriptions, or payment requirements—just instant, ephemeral code generation.",
    },
    {
      question: "Does Loqi AI store my code?",
      answer:
        "By default, generated code is ephemeral and not stored. Optionally, you can save your prompt history if desired, which is queried via GraphQL and stored in Neon DB.",
    },
    {
      question: "Which programming languages are supported?",
      answer:
        "Loqi AI can generate code in multiple programming languages based on your prompt, including Python, JavaScript, TypeScript, C#, and more.",
    },
    {
      question: "How do updates work?",
      answer:
        "Loqi AI is continuously updated on the backend. Users automatically benefit from the latest improvements to the Gemini model and platform features.",
    },
    {
      question: "Can I customize the generated code?",
      answer:
        "Absolutely! Loqi AI generates editable code snippets that you can integrate and modify directly in your projects.",
    },
    {
      question: "Is there support available?",
      answer:
        "Yes. The Loqi AI team provides guidance and answers questions to help you make the most of the platform, even though it is free to use.",
    },
  ];

  return (
    <section className="relative py-20 bg-white dark:bg-dark-bg overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink/15 via-transparent to-blue-500/15"></div>

        <div className="absolute top-16 right-16 w-24 h-24 bg-pink/12 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-16 left-16 w-28 h-28 bg-blue-500/12 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-500/12 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "5s" }}
        ></div>

        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
            linear-gradient(rgba(248, 74, 167, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 74, 167, 0.12) 1px, transparent 1px)
          `,
            backgroundSize: "44px 44px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-dark-text font-sora mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark-gray dark:text-dark-text-secondary">
            Everything you need to know about Loqi AI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-navy dark:text-dark-text pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-pink transition-transform duration-200 ${
                      openItems.has(index) ? "rotate-180" : ""
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
                  <div className="border-t dark:border-gray-700 pt-4">
                    <p className="text-dark-gray dark:text-dark-text-secondary leading-relaxed">
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
          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-2xl font-bold text-navy dark:text-dark-text mb-4 font-sora">
              Still have questions?
            </h3>
            <p className="text-dark-gray dark:text-dark-text-secondary mb-6">
              Our team is here to help you get the most out of Loqi AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink text-white px-6 py-3 rounded-lg font-medium hover:bg-pink/90 transition-all duration-300 shadow-lg shadow-pink/30 hover:shadow-pink/50">
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
