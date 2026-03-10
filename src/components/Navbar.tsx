import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, LogIn, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen size={30} className={isScrolled ? 'text-primary' : 'text-white'} />
          <span className={`text-2xl font-bold brand-font ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>Grand Academy</span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium ${
          isScrolled ? 'text-text' : 'text-white'
        }`}>
          <a href="#" className="hover:text-secondary">หน้าแรก</a>
          <a href="#" className="hover:text-secondary flex items-center gap-1">
            หลักสูตร <ChevronDown size={16} />
          </a>
          <a href="#" className="hover:text-secondary">เกี่ยวกับเรา</a>
          <a href="#" className="hover:text-secondary">ติดต่อเรา</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className={`btn btn-secondary ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            <LogIn size={18} /> เข้าสู่ระบบ
          </button>
          <button className="btn btn-secondary">
            ลงทะเบียนตอนนี้
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className={isScrolled ? 'text-text' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-text' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 text-text animate-fade-in">
          <a href="#" className="hover:text-secondary">หน้าแรก</a>
          <a href="#" className="hover:text-secondary">หลักสูตร</a>
          <a href="#" className="hover:text-secondary">เกี่ยวกับเรา</a>
          <a href="#" className="hover:text-secondary">ติดต่อเรา</a>
          <hr className="w-4/5 border-gray-100" />
          <button className="flex items-center gap-1 font-semibold text-primary">
            <LogIn size={18} /> เข้าสู่ระบบ
          </button>
          <button className="btn btn-secondary w-4/5 text-center">
            ลงทะเบียนตอนนี้
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
