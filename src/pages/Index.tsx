
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Users, Target, Award, BookOpen } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-pink-200 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">NIA</span> Platform
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            HOME
          </button>
          <button 
            onClick={() => navigate('/category')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            CATEGORY
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-800">
            Regional Innovation
            <span className="block text-blue-600">Business Platform</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-600 animate-fade-in opacity-90">
            แพลตฟอร์มสำหรับนวัตกรรมและธุรกิจระดับภูมิภาค
            <br />
            เชื่อมโยงโอกาส สร้างอนาคต
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => navigate('/category')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              เริ่มต้นสำรวจ
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all shadow-lg"
            >
              เรียนรู้เพิ่มเติม
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 p-6 text-center hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Users className="mx-auto mb-4 text-blue-500" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">กิจกรรมและค่าย</h3>
              <p className="text-gray-600 text-sm">ร่วมกิจกรรมและค่ายอบรมที่หลากหลาย</p>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 p-6 text-center hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Target className="mx-auto mb-4 text-green-500" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">การแข่งขัน</h3>
              <p className="text-gray-600 text-sm">แข่งขันและประกวดโครงงานนวัตกรรม</p>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 p-6 text-center hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Award className="mx-auto mb-4 text-yellow-500" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">แหล่งทุน</h3>
              <p className="text-gray-600 text-sm">ค้นหาแหล่งทุนสำหรับโครงการของคุณ</p>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 p-6 text-center hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              <BookOpen className="mx-auto mb-4 text-purple-500" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">ฝึกงาน</h3>
              <p className="text-gray-600 text-sm">โอกาสฝึกงานกับองค์กรชั้นนำ</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronRight className="rotate-90 text-gray-400" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Index;
