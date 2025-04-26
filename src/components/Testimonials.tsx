import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechRetail",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "Bhoom transformed our complex data migration from a potential nightmare into a seamless transition. Our product catalog with over 10,000 SKUs and customer data migrated flawlessly.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Director, GlobalMart",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "The inventory management migration was our biggest concern, but Bhoom's team handled it with precision. Zero downtime and 100% data integrity - couldn't ask for more.",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "CEO, Boutique Brands",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "As a growing business, maintaining our order history and customer relationships during platform migration was critical. Bhoom delivered beyond our expectations.",
    rating: 5
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "IT Manager, Fashion Forward",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote: "The attention to detail during our product variant migration was impressive. Complex customization options transferred perfectly, saving us countless hours of manual work.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const testimonial = testimonials[currentIndex];
  
  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have successfully migrated their data with Bhoom.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className={`bg-blue-50 rounded-2xl p-8 md:p-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;