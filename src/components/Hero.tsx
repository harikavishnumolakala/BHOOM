import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Seamless Data Migration{' '}
              <span className="text-blue-600">Powered by Bhoom</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transition smoothly with expert support — your data, your way. We handle your products, customers, orders, and inventory with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors text-lg">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10 transform transition-transform hover:scale-[1.02] duration-300">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-teal-500 mr-2"></div>
                  <p className="text-sm font-medium text-gray-600">Migration Status: Active</p>
                </div>
                <p className="text-sm font-medium text-blue-600">96% Complete</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '96%' }}></div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Products & Variants</p>
                    <p className="text-sm text-gray-500">5,234 items migrated</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Customer Data</p>
                    <p className="text-sm text-gray-500">10,452 profiles migrated</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Order History</p>
                    <p className="text-sm text-gray-500">24,837 records migrated</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Inventory Data</p>
                    <p className="text-sm text-gray-500">In progress: 4,562/5,120</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Estimated completion time: 12 minutes
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-50 z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-teal-100 rounded-full filter blur-3xl opacity-50 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;