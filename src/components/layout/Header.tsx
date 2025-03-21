
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
      <div className="w-12" /> {/* Spacer */}
      
      <Link 
        to="/" 
        className="flex flex-col items-center group"
        aria-label="Home"
      >
        <span className="font-cormorant text-3xl font-light tracking-widest text-primary">27 Ramona</span>
        <span className="font-montserrat text-xs tracking-[0.3em] text-primary/70 mt-1">GUEST PORTAL</span>
      </Link>
      
      <Button 
        variant="ghost" 
        size="sm"
        onClick={handleLogout}
        className="text-muted-foreground hover:text-primary transition-colors w-12"
      >
        <LogOut className="h-4 w-4" />
        <span className="sr-only">Sign out</span>
      </Button>
    </header>
  );
};

export default Header;
