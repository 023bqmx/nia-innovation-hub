
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Trophy, 
  BookOpen, 
  Briefcase, 
  DollarSign, 
  UserCheck,
  ChevronDown,
  ChevronRight,
  Home
} from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories?: CategoryItem[];
}

const Category = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');
  const [selectedClassification, setSelectedClassification] = useState<string>('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
  const [expandedCategory, setExpandedCategory] = useState<string>('');

  const types: CategoryItem[] = [
    { id: 'activity', name: 'กิจกรรม', icon: <Users size={20} /> },
    { id: 'camp', name: 'ค่ายอบรม', icon: <BookOpen size={20} /> },
    { id: 'competition', name: 'แข่งขัน', icon: <Trophy size={20} /> },
    { id: 'project', name: 'ประกวดโครงงาน', icon: <Briefcase size={20} /> },
    { id: 'funding', name: 'หาทุน', icon: <DollarSign size={20} /> },
    { id: 'internship', name: 'ประกาศหาพนักงานฝึกงาน', icon: <UserCheck size={20} /> }
  ];

  const ageRanges: CategoryItem[] = [
    { id: 'kindergarten', name: 'อนุบาล', icon: <Users size={20} /> },
    { id: 'elementary', name: 'ประถม', icon: <Users size={20} /> },
    { id: 'secondary', name: 'มัธยม', icon: <Users size={20} /> },
    { id: 'adult', name: 'ผู้ใหญ่', icon: <Users size={20} /> }
  ];

  const workFieldsData: CategoryItem[] = [
    {
      id: 'science-tech',
      name: 'สายงานวิทยาศาสตร์และเทคโนโลยี',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'engineering', name: 'งานวิศวกรรม', icon: <Briefcase size={16} /> },
        { id: 'it-computer', name: 'งานไอที/คอมพิวเตอร์', icon: <Briefcase size={16} /> },
        { id: 'science', name: 'งานวิทยาศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'agriculture', name: 'งานเกษตร/ประมง/ป่าไม้', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'health-science',
      name: 'สายงานวิทยาศาสตร์สุขภาพ',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'medical', name: 'งานการแพทย์', icon: <Briefcase size={16} /> },
        { id: 'nursing', name: 'งานพยาบาล/สาธารณสุข', icon: <Briefcase size={16} /> },
        { id: 'psychology', name: 'งานจิตวิทยา', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'business-economics',
      name: 'สายงานบริหารธุรกิจและเศรษฐศาสตร์',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'management', name: 'งานบริหาร/การจัดการ', icon: <Briefcase size={16} /> },
        { id: 'marketing', name: 'งานการตลาด/การขาย', icon: <Briefcase size={16} /> },
        { id: 'accounting', name: 'งานบัญชี/การเงิน', icon: <Briefcase size={16} /> },
        { id: 'economics', name: 'งานเศรษฐศาสตร์', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'social-humanities',
      name: 'สายงานสังคมศาสตร์และมนุษยศาสตร์',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'law', name: 'งานกฎหมาย', icon: <Briefcase size={16} /> },
        { id: 'politics', name: 'งานรัฐศาสตร์/การปกครอง', icon: <Briefcase size={16} /> },
        { id: 'communication', name: 'งานสื่อสารมวลชน/นิเทศศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'language', name: 'งานภาษา/วรรณคดี', icon: <Briefcase size={16} /> },
        { id: 'arts-culture', name: 'งานศิลปะ/วัฒนธรรม', icon: <Briefcase size={16} /> },
        { id: 'social-work', name: 'งานสังคมสงเคราะห์', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'education',
      name: 'สายงานการศึกษา',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'teacher', name: 'งานครู/อาจารย์', icon: <Briefcase size={16} /> },
        { id: 'researcher', name: 'งานนักวิชาการ/นักวิจัย', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'specialized',
      name: 'สายงานเฉพาะทางอื่นๆ',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'architecture', name: 'งานสถาปัตยกรรม/มัณฑนศิลป์', icon: <Briefcase size={16} /> },
        { id: 'tourism', name: 'งานการท่องเที่ยว/โรงแรม', icon: <Briefcase size={16} /> },
        { id: 'aviation', name: 'งานการบิน', icon: <Briefcase size={16} /> }
      ]
    }
  ];

  const universityData: CategoryItem[] = [
    {
      id: 'science-tech-faculty',
      name: 'กลุ่มคณะวิทยาศาสตร์และเทคโนโลยี',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'science-faculty', name: 'คณะวิทยาศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'engineering-faculty', name: 'คณะวิศวกรรมศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'it-faculty', name: 'คณะเทคโนโลยีสารสนเทศ (IT)', icon: <Briefcase size={16} /> },
        { id: 'agriculture-faculty', name: 'คณะเกษตรศาสตร์/วนศาสตร์/ประมง', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'health-faculty',
      name: 'กลุ่มคณะวิทยาศาสตร์สุขภาพ',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'medicine-faculty', name: 'คณะแพทยศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'dentistry-faculty', name: 'คณะทันตแพทยศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'veterinary-faculty', name: 'คณะสัตวแพทยศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'nursing-faculty', name: 'คณะพยาบาลศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'pharmacy-faculty', name: 'คณะเภสัชศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'allied-health-faculty', name: 'คณะสहเวชศาสตร์/เทคนิคการแพทย์/กายภาพบำบัด/รังสีเทคนิค', icon: <Briefcase size={16} /> },
        { id: 'public-health-faculty', name: 'คณะสาธารณสุขศาสตร์', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'business-faculty',
      name: 'กลุ่มคณะบริหารธุรกิจและเศรษฐศาสตร์',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'business-admin-faculty', name: 'คณะบริหารธุรกิจ', icon: <Briefcase size={16} /> },
        { id: 'accounting-faculty', name: 'คณะบัญชี', icon: <Briefcase size={16} /> },
        { id: 'economics-faculty', name: 'คณะเศรษฐศาสตร์', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'social-humanities-faculty',
      name: 'กลุ่มคณะสังคมศาสตร์และมนุษยศาสตร์',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'law-faculty', name: 'คณะนิติศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'political-science-faculty', name: 'คณะรัฐศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'communication-faculty', name: 'คณะนิเทศศาสตร์/วารสารศาสตร์/สื่อสารมวลชน', icon: <Briefcase size={16} /> },
        { id: 'liberal-arts-faculty', name: 'คณะศิลปศาสตร์/มนุษยศาสตร์/อักษรศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'social-work-faculty', name: 'คณะสังคมสงเคราะห์ศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'archaeology-faculty', name: 'คณะโบราณคดี', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'education-faculty',
      name: 'กลุ่มคณะครุศาสตร์/ศึกษาศาสตร์',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'teacher-education-faculty', name: 'คณะครุศาสตร์/ศึกษาศาสตร์', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'architecture-arts-faculty',
      name: 'กลุ่มคณะสถาปัตยกรรมศาสตร์และศิลปกรรมศาสตร์',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'architecture-faculty', name: 'คณะสถาปัตยกรรมศาสตร์', icon: <Briefcase size={16} /> },
        { id: 'decorative-arts-faculty', name: 'คณะมัณฑนศิลป์/ศิลปกรรมศาสตร์', icon: <Briefcase size={16} /> }
      ]
    },
    {
      id: 'specialized-faculty',
      name: 'กลุ่มคณะอื่นๆ ที่มีความเฉพาะทาง',
      icon: <BookOpen size={20} />,
      subcategories: [
        { id: 'music-faculty', name: 'คณะดุริยางคศิลป์', icon: <Briefcase size={16} /> },
        { id: 'international-faculty', name: 'คณะวิทยาลัยนานาชาติ', icon: <Briefcase size={16} /> }
      ]
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory('');
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const handleSubCategoryClick = (subCategoryId: string) => {
    setSelectedSubCategory(subCategoryId);
    navigate(`/detail/${subCategoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-white/20">
        <div className="text-2xl font-bold">
          <span className="text-blue-400">NIA</span> Platform
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => navigate('/')}
            className="text-white hover:text-blue-400 transition-colors font-medium flex items-center gap-2"
          >
            <Home size={20} />
            HOME
          </button>
          <button 
            className="text-blue-400 font-medium"
          >
            CATEGORY
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          หมวดหมู่ <span className="text-blue-400">กิจกรรม</span>
        </h1>

        <div className="grid gap-8">
          {/* Type Selection */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="text-yellow-400" />
              เลือกประเภท (TYPE)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {types.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "outline"}
                  className={`p-4 h-auto flex flex-col items-center gap-2 ${
                    selectedType === type.id 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "border-white/30 text-white hover:bg-white/20"
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.icon}
                  <span className="text-sm text-center">{type.name}</span>
                </Button>
              ))}
            </div>
          </Card>

          {/* Age Range Selection */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Users className="text-green-400" />
              เลือกช่วงอายุ (Age Range)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ageRanges.map((age) => (
                <Button
                  key={age.id}
                  variant={selectedAge === age.id ? "default" : "outline"}
                  className={`p-4 h-auto flex flex-col items-center gap-2 ${
                    selectedAge === age.id 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "border-white/30 text-white hover:bg-white/20"
                  }`}
                  onClick={() => setSelectedAge(age.id)}
                >
                  {age.icon}
                  <span className="text-sm text-center">{age.name}</span>
                </Button>
              ))}
            </div>
          </Card>

          {/* Classification Selection */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="text-purple-400" />
              เลือกหมวดหมู่ (Classification)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Fields */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">1. ตามสายงาน</h3>
                <div className="space-y-3">
                  {workFieldsData.map((category) => (
                    <div key={category.id}>
                      <Button
                        variant="ghost"
                        className="w-full justify-between p-4 border border-white/20 hover:bg-white/20 text-left"
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <div className="flex items-center gap-3">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                        <ChevronDown 
                          className={`transition-transform ${
                            expandedCategory === category.id ? 'rotate-180' : ''
                          }`} 
                          size={20} 
                        />
                      </Button>
                      
                      {expandedCategory === category.id && category.subcategories && (
                        <div className="ml-6 mt-2 space-y-2">
                          {category.subcategories.map((sub) => (
                            <Button
                              key={sub.id}
                              variant="ghost"
                              className="w-full justify-start p-3 text-sm hover:bg-blue-600/20 border-l-2 border-blue-400/50"
                              onClick={() => handleSubCategoryClick(sub.id)}
                            >
                              <div className="flex items-center gap-2">
                                {sub.icon}
                                <span>{sub.name}</span>
                              </div>
                              <ChevronRight size={16} className="ml-auto" />
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Universities */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">2. ตามมหาวิทยาลัย</h3>
                <div className="space-y-3">
                  {universityData.map((category) => (
                    <div key={category.id}>
                      <Button
                        variant="ghost"
                        className="w-full justify-between p-4 border border-white/20 hover:bg-white/20 text-left"
                        onClick={() => handleCategoryClick(`uni-${category.id}`)}
                      >
                        <div className="flex items-center gap-3">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                        <ChevronDown 
                          className={`transition-transform ${
                            expandedCategory === `uni-${category.id}` ? 'rotate-180' : ''
                          }`} 
                          size={20} 
                        />
                      </Button>
                      
                      {expandedCategory === `uni-${category.id}` && category.subcategories && (
                        <div className="ml-6 mt-2 space-y-2">
                          {category.subcategories.map((sub) => (
                            <Button
                              key={sub.id}
                              variant="ghost"
                              className="w-full justify-start p-3 text-sm hover:bg-green-600/20 border-l-2 border-green-400/50"
                              onClick={() => handleSubCategoryClick(sub.id)}
                            >
                              <div className="flex items-center gap-2">
                                {sub.icon}
                                <span>{sub.name}</span>
                              </div>
                              <ChevronRight size={16} className="ml-auto" />
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Selected Filters Summary */}
          {(selectedType || selectedAge || selectedClassification) && (
            <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-400/30 p-6">
              <h3 className="text-xl font-semibold mb-4">ตัวกรองที่เลือก</h3>
              <div className="flex flex-wrap gap-2">
                {selectedType && (
                  <Badge className="bg-blue-600 text-white">
                    ประเภท: {types.find(t => t.id === selectedType)?.name}
                  </Badge>
                )}
                {selectedAge && (
                  <Badge className="bg-green-600 text-white">
                    อายุ: {ageRanges.find(a => a.id === selectedAge)?.name}
                  </Badge>
                )}
                {selectedClassification && (
                  <Badge className="bg-purple-600 text-white">
                    หมวดหมู่: {selectedClassification}
                  </Badge>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
