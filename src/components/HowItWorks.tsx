import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Upload License',
      description:
        'Securely upload your unused software license information through our encrypted platform.',
      icon: <Upload className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      color: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      id: 2,
      title: 'Get Valuation',
      description:
        'Our AI-powered system analyzes your license and provides an instant market valuation.',
      icon: <DollarSign className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      color: 'bg-teal-100 dark:bg-teal-900/30',
    },
    {
      id: 3,
      title: 'Get Paid',
      description:
        'Accept the offer and receive payment via your preferred method within 2 business days.',
      icon: <CreditCard className="h-10 w-10 text-orange-600 dark:text-orange-400" />,
      color: 'bg-orange-100 dark:bg-orange-900/30',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How It <span className="text-blue-600 dark:text-blue-400">Works</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Turn your unused software licenses into cash with our simple three-step process.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl z-10"
              >
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                  {step.icon}
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.id}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white text-center">
                  {step.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;