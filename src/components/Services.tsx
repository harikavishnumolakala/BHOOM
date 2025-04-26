import React from 'react';
import { ShoppingCart, Users, Receipt, Package, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: "Products & Variants",
      description: "Transfer your entire product catalog with all variants, options, images, and custom attributes intact.",
      items: ["Product details & metadata", "Variants & options", "Custom fields", "Media & assets"],
      color: "blue"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Customer Data",
      description: "Safely migrate customer profiles, including purchase history, preferences, and account details.",
      items: ["Contact information", "Account history", "Saved preferences", "Loyalty data"],
      color: "teal"
    },
    {
      icon: <Receipt className="h-8 w-8 text-orange-600" />,
      title: "Order History",
      description: "Preserve your complete order history with all transaction details for seamless business continuity.",
      items: ["Order details", "Payment records", "Shipping info", "Refund history"],
      color: "orange"
    },
    {
      icon: <Package className="h-8 w-8 text-indigo-600" />,
      title: "Inventory Management",
      description: "Transfer inventory levels, warehouse allocations, and supply chain data without disruption.",
      items: ["Stock levels", "Warehouse data", "Supplier details", "Reorder points"],
      color: "indigo"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Data Migration Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle all aspects of your business data with precision and care, ensuring a smooth transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg">
            View detailed migration capabilities
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;