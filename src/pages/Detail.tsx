
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">NIA</span> Platform
        </div>
        <Button
          variant="ghost"
          onClick={() => navigate('/category')}
          className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          กลับไปหมวดหมู่
        </Button>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">{mockData.type}</Badge>
            <Badge className="bg-purple-100 text-purple-800 border-purple-200">{mockData.category}</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{mockData.title}</h1>
          <p className="text-xl text-gray-600">{mockData.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Registration Period */}
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                <Calendar className="text-blue-500" />
                เวลาที่รับสมัคร
              </h2>
              <p className="text-lg text-gray-700">{mockData.registrationPeriod}</p>
            </Card>

            {/* Activity Period */}
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                <Clock className="text-green-500" />
                ระยะเวลาเข้าร่วม
              </h2>
              <p className="text-lg text-gray-700">{mockData.activityPeriod}</p>
              <div className="mt-4 flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>{mockData.location}</span>
              </div>
            </Card>

            {/* Activity Details */}
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                <FileText className="text-yellow-500" />
                รายละเอียดกิจกรรม
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">หลักสูตรการอบรม</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>พื้นฐาน Machine Learning และ Deep Learning</li>
                    <li>การพัฒนาแอปพลิเคชัน AI สำหรับธุรกิจ</li>
                    <li>การใช้งาน Python และ TensorFlow</li>
                    <li>Case Study และ Workshop ปฏิบัติ</li>
                    <li>การนำเสนอโครงการ</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">คุณสมบัติผู้สมัคร</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {mockData.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                <Award className="text-purple-500" />
                ผลที่จะได้รับ
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {mockData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <Award className="text-yellow-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">ข้อมูลสรุป</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="text-blue-500" size={16} />
                  <span className="text-sm text-gray-700">เปิดรับ 50 คน</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-green-500" size={16} />
                  <span className="text-sm text-gray-700">6 วัน</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-500" size={16} />
                  <span className="text-sm text-gray-700">มีใบประกาศ</span>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">ติดต่อสอบถาม</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="text-blue-500" size={16} />
                  <span className="text-sm text-gray-700">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-green-500" size={16} />
                  <span className="text-sm text-gray-700">{mockData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-purple-500" size={16} />
                  <span className="text-sm text-gray-700">{mockData.contact.website}</span>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 shadow-lg">
                สมัครเข้าร่วม
              </Button>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3 shadow-lg">
                บันทึกไว้ดูภายหลัง
              </Button>
              <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-3 shadow-lg">
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
