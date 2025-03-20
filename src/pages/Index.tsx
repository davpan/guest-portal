
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Lightbulb, Tv, Music, CircleParking, HelpCircle } from 'lucide-react';
import ActionCard from '@/components/ui-custom/ActionCard';
import PageTransition from '@/components/layout/PageTransition';

const Index = () => {
  const menuItems = [
    { title: 'Wifi', description: 'Get connected to the internet', icon: Wifi, to: '/wifi' },
    { title: 'Lighting', description: 'Control the lights around the house', icon: Lightbulb, to: '/lighting' },
    { title: 'TV', description: 'Instructions for using the television', icon: Tv, to: '/tv' },
    { title: 'Music', description: 'How to play music through the speakers', icon: Music, to: '/music' },
    { title: 'Parking', description: 'Where to park your vehicle', icon: CircleParking, to: '/parking' },
    { title: 'Other', description: 'Additional helpful information', icon: HelpCircle, to: '/other' },
  ];

  return (
    <PageTransition>
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to 27 Ramona</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know for a comfortable stay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
