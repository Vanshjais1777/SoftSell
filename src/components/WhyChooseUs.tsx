import React from 'react';
import { ShieldCheck, TrendingUp, Clock, Users, CheckCircle2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Secure Transactions',
      description:
        'Enterprise-grade encryption and security protocols protect your data and financial transactions at every step.',
      icon: <ShieldCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      color: 'bg-blue-50 dark:bg-blue-900/20',
      iconBg: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      title: 'Best Value Guarantee',
      description:
        'Our proprietary valuation algorithm ensures you get the maximum market value for your software licenses.',
      icon: <TrendingUp className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      color: 'bg-teal-50 dark:bg-teal-900/20',
      iconBg: 'bg-teal-100 dark:bg-teal-900',
    },
    {
      title: 'Fast Payouts',
      description:
        'Get paid in as little as 48 hours after accepting an offer, with multiple payment options available.',
      icon: <Clock className="h-10 w-10 text-orange-600 dark:text-orange-400" />,
      color: 'bg-orange-50 dark:bg-orange-900/20',
      iconBg: 'bg-orange-100 dark:bg-orange-900',
    },
    {
      title: 'Trusted Network',
      description:
        'Connect with our verified network of enterprise buyers eager to purchase quality software licenses.',
      icon: <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
      color: 'bg-purple-50 dark:bg-purple-900/20',
      iconBg: 'bg-purple-100 dark:bg-purple-900',
    },
  ];

  const features = [
    'Instant license valuation',
    'Secure payment processing',
    'Verified enterprise buyers',
    'Dedicated support team',
    'Compliance verification',
    'Money-back guarantee',
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose <span className="text-blue-600 dark:text-blue-400">SoftSell</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We've helped businesses recover over $15M in unused software value. Here's why companies trust us.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`${reason.color} rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="flex justify-center">
                <div className={`rounded-lg p-3 ${reason.iconBg}`}>
                  {reason.icon}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white text-center">
                {reason.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Industry-Leading Features
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-600 dark:bg-blue-700 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  Ready to unlock the value in your unused software?
                </h3>
                <p className="mt-4 text-lg text-blue-100">
                  Join thousands of businesses that have already recovered millions in software investments.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;