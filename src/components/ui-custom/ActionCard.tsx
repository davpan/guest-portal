
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActionCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  to: string;
  delay?: number;
}

const ActionCard = ({ title, description, icon: Icon, to, delay = 0 }: ActionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Link to={to} className="block h-full">
        <div className="glass h-full rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="mb-3 inline-flex p-2 rounded-xl bg-primary/5">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-base font-medium mb-1">{title}</h3>
          {description && (
            <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ActionCard;
