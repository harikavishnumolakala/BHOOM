import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    dataTypes: {
      products: false,
      customers: false,
      orders: false,
      inventory: false
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      dataTypes: {
        ...prev.dataTypes,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-blue-600 text-white p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8 text-blue-100">
                  Ready to discuss your data migration needs? Fill out the form and our team will contact you shortly.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <p className="font-medium">Expert Consultation</p>
                      <p className="text-sm text-blue-100">Free assessment of your migration needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <p className="font-medium">Tailored Solutions</p>
                      <p className="text-sm text-blue-100">Custom migration plans for your specific data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <p className="font-medium">Ongoing Support</p>
                      <p className="text-sm text-blue-100">Dedicated assistance through the entire process</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8 md:p-12">
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your message has been received. One of our data migration specialists will be in touch with you shortly.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <p className="block text-sm font-medium text-gray-700 mb-2">
                        What type of data do you need to migrate? (Select all that apply)
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="products"
                            checked={formData.dataTypes.products}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Products & Variants</span>
                        </label>
                        
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="customers"
                            checked={formData.dataTypes.customers}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Customer Data</span>
                        </label>
                        
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="orders"
                            checked={formData.dataTypes.orders}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Order History</span>
                        </label>
                        
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="inventory"
                            checked={formData.dataTypes.inventory}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Inventory Data</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Tell us about your migration needs..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-lg"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;