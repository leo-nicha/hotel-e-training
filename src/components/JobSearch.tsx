import React, { useState } from 'react';
import { Search, MapPin, Briefcase, BookCheck, Monitor, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Course {
  id: string;
  name: string;
  mode: 'Online' | 'Offline';
}

interface Job {
  id: string;
  hotelId: string;
  hotelName: string;
  title: string;
  department: string;
  requiredCourses: Course[];
  description: string;
}

const hotels = [
  { id: '1', name: 'Grand Royal Plaza' },
  { id: '2', name: 'The Emerald Resort' },
  { id: '3', name: 'Skyline Luxury Hotel' },
  { id: '4', name: 'Riverside Boutique' }
];

const jobs: Job[] = [
  {
    id: 'j1',
    hotelId: '1',
    hotelName: 'Grand Royal Plaza',
    title: 'Senior Receptionist',
    department: 'Front Office',
    requiredCourses: [
      { id: 'c1', name: 'ความเป็นเลิศในงานส่วนหน้า', mode: 'Online' },
      { id: 'c1-2', name: 'ภาษาอังกฤษเพื่อธุรกิจการโรงแรม', mode: 'Offline' }
    ],
    description: 'รับผิดชอบการต้อนรับแขกและจัดการการจองห้องพักอย่างมืออาชีพ'
  },
  {
    id: 'j2',
    hotelId: '2',
    hotelName: 'The Emerald Resort',
    title: 'F&B Service Supervisor',
    department: 'Food & Beverage',
    requiredCourses: [
      { id: 'c2', name: 'มาตรฐานบริการไฟน์ไดนิ่ง', mode: 'Online' },
      { id: 'c2-2', name: 'การจัดการความปลอดภัยด้านอาหาร', mode: 'Online' }
    ],
    description: 'ควบคุมดูแลการบริการในห้องอาหารและรักษามาตรฐานระดับสูง'
  },
  {
    id: 'j3',
    hotelId: '3',
    hotelName: 'Skyline Luxury Hotel',
    title: 'Executive Housekeeper',
    department: 'Housekeeping',
    requiredCourses: [
      { id: 'c3', name: 'การจัดการงานแม่บ้านระดับบริหาร', mode: 'Offline' }
    ],
    description: 'บริหารจัดการงานดูแลความสะอาดและระเบียบเรียบร้อยของห้องพักทั้งหมด'
  },
  {
    id: 'j4',
    hotelId: '1',
    hotelName: 'Grand Royal Plaza',
    title: 'Guest Relations Officer',
    department: 'Front Office',
    requiredCourses: [
      { id: 'c4', name: 'การจัดการข้อพิพาทและบริการลูกค้า', mode: 'Online' }
    ],
    description: 'ประสานงานและตอบสนองความต้องการพิเศษของแขก VIP'
  },
  {
    id: 'j5',
    hotelId: '2',
    hotelName: 'The Emerald Resort',
    title: 'Assistant Concierge',
    department: 'Front Office',
    requiredCourses: [
      { id: 'c5', name: 'การบริหารจัดการบริการอำนวยความสะดวก', mode: 'Offline' },
      { id: 'c5-2', name: 'ความรู้เกี่ยวกับแหล่งท่องเที่ยวท้องถิ่น', mode: 'Online' }
    ],
    description: 'ช่วยเหลือแขกในการวางแผนการเดินทางและให้ข้อมูลที่จำเป็นระหว่างการเข้าพัก'
  },
  {
    id: 'j6',
    hotelId: '4',
    hotelName: 'Riverside Boutique',
    title: 'Chef de Partie',
    department: 'Food & Beverage',
    requiredCourses: [
      { id: 'c6', name: 'ศิลปะการปรุงอาหารมหาชน', mode: 'Offline' },
      { id: 'c6-2', name: 'การจัดการต้นทุนอาหาร', mode: 'Online' }
    ],
    description: 'รับผิดชอบการปรุงอาหารในส่วนที่ได้รับมอบหมายและควบคุมคุณภาพอาหาร'
  },
  {
    id: 'j7',
    hotelId: '3',
    hotelName: 'Skyline Luxury Hotel',
    title: 'Bell Captain',
    department: 'Front Office',
    requiredCourses: [
      { id: 'c7', name: 'มารยาทและการบริการที่เป็นเลิศ', mode: 'Offline' }
    ],
    description: 'ดูแลความเรียบร้อยของการรับแผนกบริการส่วนหน้าและสัมภาระของแขก'
  },
  {
    id: 'j8',
    hotelId: '1',
    hotelName: 'Grand Royal Plaza',
    title: 'Pastry Chef',
    department: 'Food & Beverage',
    requiredCourses: [
      { id: 'c8', name: 'เทคนิคการทำเบเกอรี่ขั้นสูง', mode: 'Online' },
      { id: 'c8-2', name: 'มาตรฐานสุขอนามัยในครัว', mode: 'Online' }
    ],
    description: 'รังสรรค์เมนูขนมหวานและขนมอบระดับพรีเมียมสำหรับห้องอาหารลักชูรี'
  },
  {
    id: 'j9',
    hotelId: '2',
    hotelName: 'The Emerald Resort',
    title: 'Spa Receptionist',
    department: 'Wellness/Spa',
    requiredCourses: [
      { id: 'c9', name: 'จิตวิทยาการบริการลูกค้าสปา', mode: 'Online' }
    ],
    description: 'ต้อนรับและให้คำแนะนำโปรแกรมสปาที่เหมาะสมกับความต้องการของลูกลูกค้า'
  },
  {
    id: 'j10',
    hotelId: '4',
    hotelName: 'Riverside Boutique',
    title: 'Marketing Coordinator',
    department: 'Management',
    requiredCourses: [
      { id: 'c10', name: 'การตลาดออนไลน์สำหรับโรงแรม', mode: 'Online' },
      { id: 'c10-2', name: 'การจัดการสื่อโซเชียล', mode: 'Online' }
    ],
    description: 'ประสานงานกิจกรรมทางการตลาดและส่งเสริมการขายผ่านช่องทางต่างๆ'
  },
  {
    id: 'j11',
    hotelId: '4',
    hotelName: 'Riverside Boutique',
    title: 'Housekeeping Supervisor',
    department: 'Housekeeping',
    requiredCourses: [
      { id: 'c11', name: 'การควบคุมมาตรฐานความสะอาดระดับสากล', mode: 'Offline' }
    ],
    description: 'ควบคุมดูแลทีมแม่บ้านและตรวจสอบความสะอาดของห้องพักตามมาตรฐานสูงสุด'
  },
  {
    id: 'j12',
    hotelId: '3',
    hotelName: 'Skyline Luxury Hotel',
    title: 'IT Support Specialist',
    department: 'Maintenance',
    requiredCourses: [
      { id: 'c12', name: 'ระบบการจัดการโรงแรม (PMS)', mode: 'Online' },
      { id: 'c12-2', name: 'ความปลอดภัยของข้อมูลดิจิทัล', mode: 'Online' }
    ],
    description: 'ดูแลรักษาระบบคอมพิวเตอร์และให้ความช่วยเหลือด้านเทคนิคแก่พนักงาน'
  }
];

// Shuffle helper
const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const JobSearch: React.FC = () => {
  const [selectedHotel, setSelectedHotel] = useState<string>('all');
  const [selectedDept, setSelectedDept] = useState<string>('all');
  
  // Store randomized jobs in state to keep order consistent during interaction but random on refresh
  const [randomizedJobs] = useState(() => shuffleArray(jobs));

  const filteredJobs = randomizedJobs.filter(job => {
    const hotelMatch = selectedHotel === 'all' || job.hotelId === selectedHotel;
    const deptMatch = selectedDept === 'all' || job.department === selectedDept;
    return hotelMatch && deptMatch;
  });

  // Limit to maximum 9 jobs
  const displayedJobs = filteredJobs.slice(0, 9);

  const departments = Array.from(new Set(jobs.map(j => j.department)));

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-[72px] z-40 transition-all duration-300">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-grow w-full md:w-auto">
            <label className="text-lg font-bold text-primary uppercase mb-2 block">เลือกโรงแรม</label>
            <div className="relative">
              <select 
                className="w-full h-16 px-4 pr-10 text-lg bg-accent rounded-lg border border-gray-200 outline-none appearance-none cursor-pointer focus:border-secondary transition-colors shadow-sm"
                value={selectedHotel}
                onChange={(e) => setSelectedHotel(e.target.value)}
              >
                <option value="all">โรงแรมทั้งหมด</option>
                {hotels.map((hotel: { id: string, name: string }) => (
                  <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex-grow w-full md:w-auto">
            <label className="text-lg font-bold text-primary uppercase mb-2 block">ตำแหน่งงาน / แผนก</label>
            <div className="relative">
              <select 
                className="w-full h-16 px-4 text-lg bg-accent rounded-lg border border-gray-200 outline-none appearance-none cursor-pointer focus:border-secondary transition-colors shadow-sm"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="all">แผนกทั้งหมด</option>
                {departments.map((dept: string) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Sub-section */}
      <div className="bg-accent py-12">
        <div className="container">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-secondary" />
            <h2 className="text-2xl font-bold text-primary">ตำแหน่งงานที่เปิดรับ</h2>
          </div>

          <div className="grid grid-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedJobs.length > 0 ? displayedJobs.map((job: Job) => (
                <motion.div 
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-secondary/30 flex flex-col h-full"
                >
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{job.title}</h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin size={16} /> {job.hotelName}
                        </div>
                      </div>
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {job.department}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="bg-accent/50 p-4 rounded-lg mb-6">
                      <div className="flex items-center gap-2 mb-3 text-primary font-bold text-sm border-b border-gray-200 pb-2">
                        <BookCheck size={18} className="text-secondary" />
                        หลักสูตรการฝึกอบรมที่จำเป็น
                      </div>
                      <div className="flex flex-col gap-2">
                        {job.requiredCourses.map((course: Course, idx: number) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">{course.name}</span>
                            <span className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                              course.mode === 'Online' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {course.mode === 'Online' ? <Monitor size={12} /> : <Map size={12} />}
                              {course.mode}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="w-full btn btn-outline flex justify-center py-3 text-sm font-bold border-2 rounded-lg hover:bg-primary hover:text-white transition-all">
                    สมัครงานตอนนี้
                  </button>
                </motion.div>
              )) : (
                <div className="col-span-full py-20 text-center bg-white rounded-xl shadow-inner border-2 border-dashed border-gray-100">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={40} className="text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-400">ไม่บตำแหน่งงานที่ค้นหา</h3>
                  <p className="text-gray-400 mt-2">โปรดลองปรับการค้นหาของคุณใหม่อีกครั้ง</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
