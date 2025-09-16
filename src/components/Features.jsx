import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Code Generation",
      description:
        "Generate functional code snippets instantly from your prompts across multiple programming languages.",
    },
    {
      icon: "📂",
      title: "Project Templates",
      description:
        "Pre-configured project scaffolds for React, Next.js, TypeScript, and more to accelerate development.",
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description:
        "Get working code in seconds without spending hours on boilerplate or repetitive tasks.",
    },
    {
      icon: "🛠️",
      title: "Multi-Language Support",
      description:
        "Supports Python, JavaScript, TypeScript, C#, and many other popular languages for diverse projects.",
    },
    {
      icon: "💾",
      title: "Optional History",
      description:
        "Keep track of your previous prompts and generated code for reference and reuse.",
    },
    {
      icon: "🧩",
      title: "Composable Snippets",
      description:
        "Combine multiple AI-generated snippets to quickly build complex features and applications.",
    },
    {
      icon: "📦",
      title: "Ready-to-Use Components",
      description:
        "Prebuilt components for dashboards, forms, authentication, and more, ready to drop in your app.",
    },
    {
      icon: "🔍",
      title: "Code Insights",
      description:
        "Get clear, concise explanations of generated code to understand its structure and purpose.",
    },
    {
      icon: "🌐",
      title: "Framework Compatibility",
      description:
        "Works seamlessly with Next.js, React, ASP.NET Core, and other modern frameworks.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 bg-white dark:bg-dark-bg overflow-hidden"
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface opacity-75"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink/16 via-transparent to-blue-500/16"></div>
        <div className="absolute top-16 left-16 w-32 h-32 bg-pink/14 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-16 right-16 w-28 h-28 bg-blue-500/14 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/14 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
            linear-gradient(rgba(248, 74, 167, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 74, 167, 0.14) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-dark-text font-sora mb-4">
            Build smarter with Loqi AI
          </h2>
          <p className="text-lg text-dark-gray dark:text-dark-text-secondary max-w-2xl mx-auto">
            Everything you need to generate code and accelerate development
            effortlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-card rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-navy dark:text-dark-text mb-3 font-sora">
                {feature.title}
              </h3>
              <p className="text-dark-gray dark:text-dark-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy dark:text-dark-text mb-4 font-sora">
              Ready to generate code instantly?
            </h3>
            <p className="text-dark-gray dark:text-dark-text-secondary mb-6">
              Join developers who are already accelerating their workflow with
              Loqi AI
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("dashboard");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-pink text-white px-8 py-3 rounded-lg font-medium hover:bg-pink/90 transition-all duration-300 shadow-lg shadow-pink/30 hover:shadow-pink/50"
            >
              Try Loqi AI Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
