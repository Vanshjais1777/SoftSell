import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-blue-200 dark:bg-blue-800 transform -skew-y-6 translate-y-24"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-blue-200 dark:bg-blue-800 transform skew-y-6 -translate-y-24"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 md:text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
              <span className="animate-pulse h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Now accepting enterprise licenses</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="block">Turn Unused Software</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 text-transparent bg-clip-text">Into Real Value</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
              SoftSell helps businesses reclaim value from unused software licenses. Our secure marketplace connects sellers with verified buyers, ensuring maximum return on your software investments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-200 dark:border-blue-800 text-base font-medium rounded-md text-blue-700 bg-transparent hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-800 transition-all duration-300"
              >
                How It Works
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$15M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Value Recovered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">48hrs</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Payout Time</div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/10">
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">SoftSell Dashboard</div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center text-blue-600 dark:text-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Adobe Creative Cloud</div>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">$1,250 Valuation</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-md flex items-center justify-center text-green-600 dark:text-green-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Microsoft Office 365</div>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">$890 Valuation</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="h-12 w-12 bg-yellow-100 dark:bg-yellow-900 rounded-md flex items-center justify-center text-yellow-600 dark:text-yellow-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Autodesk AutoCAD</div>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">$1,875 Valuation</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Total Potential Value</div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">$4,015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
    </div>
  );
};

export default Hero;