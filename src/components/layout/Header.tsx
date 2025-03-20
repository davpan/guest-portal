
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link 
          to="/" 
          className="flex items-center group"
          aria-label="Home"
        >
          <div className="p-2 rounded-full bg-accent/50 mr-3 transition-colors group-hover:bg-accent">
            <Home className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-medium tracking-tight">27 Ramona</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
