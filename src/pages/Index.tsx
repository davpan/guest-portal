
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Lightbulb, Tv, Music, CircleParking, Plug } from 'lucide-react';
import ActionCard from '@/components/ui-custom/ActionCard';
import PageTransition from '@/components/layout/PageTransition';

const Index = () => {
  const menuItems = [
    { title: 'Wifi', description: 'Get connected to the internet', icon: Wifi, to: '/wifi' },
    { title: 'Parking', description: 'Where to park your vehicle', icon: CircleParking, to: '/parking' },
    { title: 'Amenities', description: 'Find items around the house', icon: Plug, to: '/amenities' },
    { title: 'Lighting', description: 'Control the lights around the house', icon: Lightbulb, to: '/lighting' },
    { title: 'Music', description: 'How to play music through the speakers', icon: Music, to: '/music' },
    { title: 'TV', description: 'Instructions for using the television', icon: Tv, to: '/tv' },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-3 h-full">
        <div className="grid grid-cols-2 gap-2.5">
          {menuItems.map((item, index) => (
            <ActionCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              to={item.to}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
