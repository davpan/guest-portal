
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

const Header = () => {
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  return (
    <header className="w-full py-8 px-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-primary/10">
      <div className="flex items-center">
        <Link 
          to="/" 
          className="flex flex-col items-start group"
          aria-label="Home"
        >
          <span className="font-cormorant text-3xl font-light tracking-widest text-primary">RAMONA</span>
          <span className="font-montserrat text-xs tracking-[0.3em] text-primary/70 mt-1">GUEST PORTAL</span>
        </Link>
      </div>
      
      <Button 
        variant="ghost" 
        onClick={handleLogout}
        className="btn-luxury group"
      >
        <span>Sign Out</span>
        <LogOut className="h-4 w-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
      </Button>
    </header>
  );
};

export default Header;
