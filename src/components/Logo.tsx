import React from 'react';
import { Database } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <Database className="h-8 w-8 text-blue-600" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Logo;