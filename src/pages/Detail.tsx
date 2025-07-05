
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  FileText, 
  Award,
  MapPin,
  Users,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for demonstration
  const mockData = {
    title: "โครงการพัฒนานวัตกรรมเทคโนโลยี AI สำหรับธุรกิจ",
    type: "ค่ายอบรม",
    category: "งานไอที/คอมพิวเตอร์",
    description: "โครงการพัฒนาทักษะด้านปัญญาประดิษฐ์และการประยุกต์ใช้ในธุรกิจ เพื่อเตรียมความพร้อมสำหรับอนาคตของเทคโนโลยี",
    registrationPeriod: "1 มกราคม 2025 - 31 มกราคม 2025",
    activityPeriod: "15 กุมภาพันธ์ 2025 - 20 กุมภาพันธ์ 2025",
    location: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    benefits: [
      "ใบประกาศนียบัตรจากหน่วยงานรัฐ",
      "ทุนสนับสนุนโครงการ 50,000 บาท",
      "โอกาสฝึกงานกับบริษัทชั้นนำ",
      "เครือข่ายความร่วมมือทางธุรกิจ"
    ],
    requirements: [
      "นักศึกษาระดับปริญญาตรี สาขาที่เกี่ยวข้อง",
      "มีผลการเรียนเฉลี่ยไม่ต่ำกว่า 2.75",
      "มีความสนใจด้านเทคโนโลยี AI",
      "สามารถเข้าร่วมกิจกรรมได้ครบตามระยะเวลา"
    ],
    contact: {
      phone: "02-123-4567",
      email: "info@nia-platform.org",
      website: "www.nia-platform.org"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-white/20">
        <div className="text-2xl font-bold">
          <span className="text-blue-400">NIA</span> Platform
        </div>
        <Button
          variant="ghost"
          onClick={() => navigate('/category')}
          className="text-white hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          กลับไปหมวดหมู่
        </Button>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-600">{mockData.type}</Badge>
            <Badge className="bg-purple-600">{mockData.category}</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">{mockData.title}</h1>
          <p className="text-xl text-gray-300">{mockData.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Registration Period */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="text-blue-400" />
                เวลาที่รับสมัคร
              </h2>
              <p className="text-lg">{mockData.registrationPeriod}</p>
            </Card>

            {/* Activity Period */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="text-green-400" />
                ระยะเวลาเข้าร่วม
              </h2>
              <p className="text-lg">{mockData.activityPeriod}</p>
              <div className="mt-4 flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span>{mockData.location}</span>
              </div>
            </Card>

            {/* Activity Details */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="text-yellow-400" />
                รายละเอียดกิจกรรม
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">หลักสูตรการอบรม</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>พื้นฐาน Machine Learning และ Deep Learning</li>
                    <li>การพัฒนาแอปพลิเคชัน AI สำหรับธุรกิจ</li>
                    <li>การใช้งาน Python และ TensorFlow</li>
                    <li>Case Study และ Workshop ปฏิบัติ</li>
                    <li>การนำเสนอโครงการ</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">คุณสมบัติผู้สมัคร</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {mockData.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="text-purple-400" />
                ผลที่จะได้รับ
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {mockData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <Award className="text-yellow-400 flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h3 className="text-xl font-semibold mb-4">ข้อมูลสรุป</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="text-blue-400" size={16} />
                  <span className="text-sm">เปิดรับ 50 คน</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-green-400" size={16} />
                  <span className="text-sm">6 วัน</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-sm">มีใบประกาศ</span>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <h3 className="text-xl font-semibold mb-4">ติดต่อสอบถาม</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="text-blue-400" size={16} />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-green-400" size={16} />
                  <span className="text-sm">{mockData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-purple-400" size={16} />
                  <span className="text-sm">{mockData.contact.website}</span>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                สมัครเข้าร่วม
              </Button>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20 py-3">
                บันทึกไว้ดูภายหลัง
              </Button>
              <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20 py-3">
                แชร์กิจกรรม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
