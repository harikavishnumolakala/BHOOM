import React from 'react';

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    items: string[];
    color: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const { icon, title, description, items, color } = service;
  
  const getBgColor = () => {
    switch (color) {
      case 'blue': return 'bg-blue-50 hover:bg-blue-100';
      case 'teal': return 'bg-teal-50 hover:bg-teal-100';
      case 'orange': return 'bg-orange-50 hover:bg-orange-100';
      case 'indigo': return 'bg-indigo-50 hover:bg-indigo-100';
      default: return 'bg-gray-50 hover:bg-gray-100';
    }
  };

  return (
    <div 
      className={`rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 ${getBgColor()}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <div className={`h-1.5 w-1.5 rounded-full bg-${color}-500 mr-2`}></div>
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;