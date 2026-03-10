import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  category: string;
  image: string;
  duration: string;
  students: string;
  rating: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, category, image, duration, students, rating }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-300 hover:scale-110" />
        <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="text-secondary fill-secondary" />
          <span className="text-sm font-semibold">{rating}</span>
          <span className="text-xs text-gray-500">(120+ รีวิว)</span>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-primary leading-tight flex-grow">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
          <div className="flex items-center gap-1">
            <Clock size={16} /> {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} /> {students} ผู้เรียน
          </div>
        </div>
        
        <button className="flex items-center justify-between w-full btn btn-secondary">
          ดูรายละเอียด
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
