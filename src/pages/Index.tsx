
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Lightbulb, Tv, Music, CircleParking, HelpCircle } from 'lucide-react';
import ActionCard from '@/components/ui-custom/ActionCard';
import PageTransition from '@/components/layout/PageTransition';

const Index = () => {
  const menuItems = [
    { title: 'Wifi', description: 'Get connected to the internet', icon: Wifi, to: '/wifi' },
    { title: 'Parking', description: 'Where to park your vehicle', icon: CircleParking, to: '/parking' },
    { title: 'Lighting', description: 'Control the lights around the house', icon: Lightbulb, to: '/lighting' },
    { title: 'Music', description: 'How to play music through the speakers', icon: Music, to: '/music' },
    { title: 'TV', description: 'Instructions for using the television', icon: Tv, to: '/tv' },
    { title: 'Other', description: 'Additional helpful information', icon: HelpCircle, to: '/other' },
  ];

  return (
    <PageTransition>
      <div className="container max-w-4xl mx-auto h-full">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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
