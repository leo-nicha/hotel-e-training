import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import JobSearch from '../components/JobSearch';
import { Award, BookOpen, ShieldCheck, Globe } from 'lucide-react';

// Import images
import course1 from '../assets/images/course1.png';

const Home: React.FC = () => {
  const courses = [
    {
      title: "ความเป็นเลิศในงานส่วนหน้าและการสร้างความสัมพันธ์กับแขก",
      category: "ส่วนหน้า (Front Office)",
      image: course1,
      duration: "8 สัปดาห์",
      students: "1,200",
      rating: 4.8
    },
    {
      title: "มาตรฐานการบริการอาหารระดับไฟน์ไดนิ่ง",
      category: "งานบริการห้องอาหาร",
      image: course1, // Reusing for demo
      duration: "6 สัปดาห์",
      students: "850",
      rating: 4.9
    },
    {
      title: "การจัดการงานแม่บ้านและสุขอนามัย",
      category: "งานแม่บ้าน",
      image: course1, // Reusing for demo
      duration: "10 สัปดาห์",
      students: "920",
      rating: 4.7
    }
  ];

  return (
    <div className="bg-accent">
      <Navbar />
      <Hero />
      
      {/* Job Search Section */}
      <JobSearch />

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-20 -mt-20 container rounded-xl shadow-xl">
        <div className="grid grid-3 text-center">
          <div className="p-4">
            <h2 className="text-4xl font-bold text-primary mb-2">15,000+</h2>
            <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm">ผู้เรียนที่ใช้งานอยู่</p>
          </div>
          <div className="p-4 border-l border-gray-100 border-r">
            <h2 className="text-4xl font-bold text-primary mb-2">120+</h2>
            <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm">วิทยากรผู้เชี่ยวชาญ</p>
          </div>
          <div className="p-4">
            <h2 className="text-4xl font-bold text-primary mb-2">98%</h2>
            <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm">อัตราความพึงพอใจ</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">ทำไมต้องเลือกเรียนกับ Grand Academy?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">เรามอบแพลตฟอร์มการฝึกอบรมด้านการโรงแรมที่ครอบคลุมที่สุด ออกแบบมาเพื่อตอบสนองมาตรฐานสากล</p>
        </div>
        
        <div className="grid grid-3">
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">การอบรมที่ได้รับการรับรอง</h3>
            <p className="text-gray-500">ใบรับรองที่ได้รับการยอมรับในอุตสาหกรรมเพื่อส่งเสริมอาชีพการโรงแรมระดับสากลของคุณ</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-secondary" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">เครือข่ายระดับโลก</h3>
            <p className="text-gray-500">เชื่อมต่อกับเครือโรงแรมชั้นนำและบุคลากรมืออาชีพจากทั่วโลก</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">ทีมวิทยากรผู้เชี่ยวชาญ</h3>
            <p className="text-gray-500">เรียนรู้จากผู้บริหารที่มีประสบการณ์ในโรงแรมระดับลักชูรีมานานหลายทศวรรษ</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">หลักสูตรแนะนำของเรา</h2>
              <p className="text-gray-500">สำรวจโมดูลการฝึกอบรมยอดนิยมของเรา</p>
            </div>
            <button className="btn btn-outline">ดูหลักสูตรทั้งหมด</button>
          </div>
          
          <div className="grid grid-3">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-blue-500 py-12">
        <div className="container">
          <div className="grid grid-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={30} className="text-secondary" />
                <span className="text-2xl font-bold brand-font">Grand Academy</span>
              </div>
              <p className="text-gray-100 text-sm leading-relaxed mb-6">
                ผู้นำด้านการศึกษาการโรงแรมระบบดิจิทัล เสริมสร้างศักยภาพให้กับบุคลากรโรงแรมรุ่นใหม่
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">ลิงก์ด่วน</h3>
              <ul className="flex flex-col gap-3 text-sm text-blue-500">
                <li><a href="#" className="hover:text-secondary">เกี่ยวกับเรา</a></li>
                <li><a href="#" className="hover:text-secondary">หลักสูตรของเรา</a></li>
                <li><a href="#" className="hover:text-secondary">พันธมิตร</a></li>
                <li><a href="#" className="hover:text-secondary">ติดต่อเรา</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">หมวดหมู่</h3>
              <ul className="flex flex-col gap-3 text-sm text-blue-500">
                <li><a href="#" className="hover:text-secondary">งานส่วนหน้า</a></li>
                <li><a href="#" className="hover:text-secondary">งานบริการอาหารและเครื่องดื่ม</a></li>
                <li><a href="#" className="hover:text-secondary">งานแม่บ้าน</a></li>
                <li><a href="#" className="hover:text-secondary">การจัดการ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">จดหมายข่าว</h3>
              <p className="text-sm text-blue-500 mb-4">สมัครสมาชิกเพื่อรับข่าวสารล่าสุด</p>
            </div>
          </div>
          <hr className="border-white/10 mb-10" />
          <div className="text-center text-sm text-blue-500">
            &copy; 2026 Grand Academy E-Training. สงวนลิขสิทธิ์
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
