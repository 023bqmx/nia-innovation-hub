
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Users, Target, Award, BookOpen } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-at-night-42036-large.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-black/60 to-black/80"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-white">
          <span className="text-blue-400">NIA</span> Platform
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => navigate('/')}
            className="text-white hover:text-blue-400 transition-colors font-medium"
          >
            HOME
          </button>
          <button 
            onClick={() => navigate('/category')}
            className="text-white hover:text-blue-400 transition-colors font-medium"
          >
            CATEGORY
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Regional Innovation
            <span className="block text-blue-400">Business Platform</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in opacity-90">
            แพลตฟอร์มสำหรับนวัตกรรมและธุรกิจระดับภูมิภาค
            <br />
            เชื่อมโยงโอกาส สร้างอนาคต
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => navigate('/category')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
            >
              เริ่มต้นสำรวจ
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transition-all"
            >
              เรียนรู้เพิ่มเติม
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
              <Users className="mx-auto mb-4 text-blue-400" size={40} />
              <h3 className="text-lg font-semibold mb-2">กิจกรรมและค่าย</h3>
              <p className="text-gray-300 text-sm">ร่วมกิจกรรมและค่ายอบรมที่หลากหลาย</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
              <Target className="mx-auto mb-4 text-green-400" size={40} />
              <h3 className="text-lg font-semibold mb-2">การแข่งขัน</h3>
              <p className="text-gray-300 text-sm">แข่งขันและประกวดโครงงานนวัตกรรม</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
              <Award className="mx-auto mb-4 text-yellow-400" size={40} />
              <h3 className="text-lg font-semibold mb-2">แหล่งทุน</h3>
              <p className="text-gray-300 text-sm">ค้นหาแหล่งทุนสำหรับโครงการของคุณ</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300">
              <BookOpen className="mx-auto mb-4 text-purple-400" size={40} />
              <h3 className="text-lg font-semibold mb-2">ฝึกงาน</h3>
              <p className="text-gray-300 text-sm">โอกาสฝึกงานกับองค์กรชั้นนำ</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronRight className="rotate-90 text-white/60" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Index;
