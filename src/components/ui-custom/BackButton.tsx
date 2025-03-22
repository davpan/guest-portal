import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleBack}
      className="mr-4"
      aria-label="Back to home"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
};

export default BackButton;
