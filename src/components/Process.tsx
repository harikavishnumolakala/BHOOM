import React from 'react';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "We analyze your current data structure and migration needs to create a tailored plan.",
      details: "Our team works with you to understand your data architecture, identify critical components, and establish migration priorities."
    },
    {
      number: "02",
      title: "Preparation",
      description: "We prepare your data for migration, ensuring integrity and compatibility.",
      details: "Data cleaning, normalization, and mapping to ensure smooth transition without loss of information or relationships."
    },
    {
      number: "03",
      title: "Migration",
      description: "We execute the migration with real-time monitoring and validation checks.",
      details: "Using our proprietary tools, we transfer your data with continuous verification to maintain accuracy and completeness."
    },
    {
      number: "04",
      title: "Verification",
      description: "We perform comprehensive testing to ensure everything transferred correctly.",
      details: "Extensive validation procedures confirm data integrity, relationships, and functionality in the new environment."
    },
    {
      number: "05",
      title: "Optimization",
      description: "We optimize your data structure for improved performance in the new system.",
      details: "Fine-tuning indexes, relationships, and structures to maximize efficiency and usability after migration."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Migration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A methodical approach ensuring smooth, secure data transitions with minimal disruption.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="mb-16 last:mb-0 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 lg:pr-24' : 'md:order-2 md:pl-16 lg:pl-24'}`}>
                  <div className={`bg-white p-6 md:p-8 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="text-sm text-blue-600 font-semibold">{step.number}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">{step.title}</h3>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <p className="text-gray-600 text-sm">{step.details}</p>
                  </div>
                </div>

                {/* Circle in the middle for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg z-10">
                    {index + 1}
                  </div>
                </div>

                {/* Circle for mobile */}
                <div className="md:hidden flex items-center justify-center my-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2 hidden md:block' : 'hidden md:block'}`}>
                  {/* This div is intentionally empty for layout purposes */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors text-lg">
            Schedule a consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;