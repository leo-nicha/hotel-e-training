import React from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-primary/40 opacity-70" style={{ backgroundColor: 'rgba(0, 45, 88, 0.5)' }}></div>
      </div>

      <div className="container relative z-10 text-white">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ยกระดับอาชีพของคุณในบริบท <span className="text-secondary">การโรงแรม</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-xl">
            เชี่ยวชาญศิลปะการบริการด้วยหลักสูตรที่ออกแบบโดยผู้เชี่ยวชาญในอุตสาหกรรม เพื่อรองรับธุรกิจโรงแรมในอนาคต
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-secondary py-4 px-8 text-lg">
              ดูหลักสูตรทั้งหมด <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline border-white text-white py-4 px-8 text-lg hover:bg-white hover:text-primary">
              <PlayCircle size={20} /> ดูวิดีโอ
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent to-transparent"></div>
    </section>
  );
};

export default Hero;
