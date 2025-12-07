"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { TimelineModal } from "./timeline-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Heart, Coffee, Book, Plus, X, Settings, Calendar, Building, User, Trophy, Star, Lightbulb, Target, Rocket, Shield, Sparkles, Code, Database, Palette, Megaphone, BarChart3, LineChart, PieChart, Activity, Brain, Cpu, Layers, Package, Server, Smartphone, Monitor, Wifi, Cloud, Lock, Key, Eye, Search, Filter, Edit, FileText, FolderOpen, GitBranch, Hash, Inbox, Send, MessageSquare, Music, Camera, Video, Mic, Volume2, Headphones, Radio, Zap, Globe, Users, TrendingUp, BookOpen, MapPin, Clock, CheckCircle, AlertCircle, Home, School } from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"
import { COMMON_STYLES } from "@/lib/constants"

// 사용 가능한 아이콘들 - 경험 카드용
const AVAILABLE_ICONS = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  award: Award,
  trophy: Trophy,
  star: Star,
  lightbulb: Lightbulb,
  target: Target,
  rocket: Rocket,
  shield: Shield,
  building: Building,
  calendar: Calendar,
  book: Book,
  heart: Heart,
  coffee: Coffee,
  user: User,
  zap: Zap,
  globe: Globe,
  users: Users,
  trending: TrendingUp,
  bookOpen: BookOpen,
  mapPin: MapPin,
  clock: Clock,
  check: CheckCircle,
  alert: AlertCircle,
  home: Home,
  school: School,
}

// 사용 가능한 아이콘들 - 스킬용
const SKILL_ICONS = {
  trophy: Trophy,
  sparkles: Sparkles,
  target: Target,
  rocket: Rocket,
  star: Star,
  zap: Zap,
  lightbulb: Lightbulb,
  brain: Brain,
  code: Code,
  database: Database,
  palette: Palette,
  megaphone: Megaphone,
  barChart: BarChart3,
  lineChart: LineChart,
  pieChart: PieChart,
  activity: Activity,
  cpu: Cpu,
  layers: Layers,
  package: Package,
  server: Server,
  smartphone: Smartphone,
  monitor: Monitor,
  wifi: Wifi,
  cloud: Cloud,
  lock: Lock,
  key: Key,
  eye: Eye,
  search: Search,
  filter: Filter,
  edit: Edit,
  fileText: FileText,
  folderOpen: FolderOpen,
  gitBranch: GitBranch,
  hash: Hash,
  inbox: Inbox,
  send: Send,
  messageSquare: MessageSquare,
  music: Music,
  camera: Camera,
  video: Video,
  mic: Mic,
  volume: Volume2,
  headphones: Headphones,
  radio: Radio,
  heart: Heart,
  shield: Shield,
  globe: Globe,
  users: Users,
}

export function About() {
  const { getData, saveData, isEditMode, saveToFile } = useInlineEditor()
  // 기본 데이터
  const defaultInfo = {
    title: "소개",
    subtitle: "당신의 전문성과 열정을 소개해주세요.",
    background: {"image":"","video":"","color":"#8ce6e6","opacity":0.3},
    experienceCards: [{"icon":"graduation","title":"단국대학교 죽전캠퍼스","period":"도시계획부동산학부 부동산학전공","description":"2019.03~2027.02"},{"icon":"award","title":"자격증/수상","period":"공인중개사(2022년도 33회)","description":"한국산업인력공단"},{"icon":"target","title":"목표","period":"감정평가사 자격증 준비","description":""},{"icon":"building","title":"직무경험","period":"인성엔지니어링 기술사사무소[법원감정] (2023.01 ~ 2023.04) [단기]","description":"신축/준신축 아파트 하자 진단 실무 및 건축물 결함 리스크 관리 지원 / 누수 및 시공 불량에 대한 현장 정밀 진단 및 원인 조사 / 건축물 구조 안전진단 실무 보조"},{"icon":"building","title":"직무경험","period":"앱티브코리아[Project Manager Team] (2023.11 ~ 2024.08)","description":"글로벌 자동차 부품 제조 기업의 공급망 관리(SCM) 프로세스 지원 / 글로벌 무역 및 통관 관리 / 사내 재고 및 물류 운영 최적화 / 전략적 협력사 관리(SRM)"},{"icon":"building","title":"직무경험","period":"코리아런드리[CRM & Sales Team](2024.09 ~ 현재)","description":"점주CS 및 영업관리 / 전국 셀프빨래방 데이터베이스 기반의 위치 기반 O2O 서비스 기획, 제작 참여(현재진행중) / 전략적 제휴 및 시장 조사"}],
    skills: [{"icon":"code","title":"[Python, R 등]을 활용한 데이터 기반 가치 예측","description":"감정평가 전문 지식에 AI 기반 데이터 분석 기술을 접목하여 부동산 시장을 다각도로 분석합니다. [Python, R] 등 실질적인 분석 플랫폼을 능숙하게 활용하여 미래 시장 변화를 예측하고, 창업 아이템의 핵심인 개인 맞춤형 최적화 솔루션을 설계 및 구현합니다."},{"icon":"barChart","title":"시계열 분석 및 실증 모형을 활용한 금융 리스크 분석","description":"감정평가 전문 지식과 부동산 금융 공학적 관점을 융합하여 시장을 분석합니다. 시계열 분석(Time Series Analysis)을 활용하여 부동산 가격 변동 및 금리 추이를 예측하고, 나아가 블랙-숄즈 모형(Black-Scholes Model), 몬테카를로 시뮬레이션(Monte Carlo Simulation) 등의 실증 모형을 능숙하게 적용하여 PF(프로젝트 파이낸싱) 리스크, 옵션 가치 평가 등 복잡한 금융 문제를 정량적으로 분석하고 최적의 솔루션을 제시합니다."},{"icon":"users","title":"사무 실무 경험을 통한 책임감 및 협업 태세 확립","description":"사무 경험을 통해 문서 관리, 업무 프로세스 이해, 기한 준수 등 조직 운영에 필수적인 사무 실무 능력을 숙련했습니다. 또한, 부동산 금융 프로젝트 및 프롭테크 앱 기획(형과의 협업)을 병행하며 다양한 이해관계자와 원활히 소통하고 의견을 조율하는 능력을 갖추었습니다. 이는 어떤 환경에서도 책임감 있는 자세로 팀워크에 기여하며 공동의 목표를 달성할 수 있는 기반이 됩니다."}],
    storyTitle: "STORY",
    story: ["1. '예비 감정평가사로서 부동산의 가치를 읽다.' / \n저는 단국대학교 부동산학과에서 부동산 가치 평가 및 분석에 대한 전문 지식을 깊이 있게 탐구하고 있습니다. 현재 감정평가사 자격시험을 준비하며, 단순한 학문적 지식을 넘어 법규와 실무 원리를 체계적으로 습득하고 있습니다. 특히, 4학년을 앞두고 진행한 다양한 프로젝트들은 저를 공정하고 합리적인 가치 판단을 수행하는 예비 전문가로 성장시키는 밑거름이 되었습니다.","2. '기술 융합을 통한 시장 혁신: 프롭테크를 향한 비전' / \n저는 기술을 통해 사람들의 삶을 더 편리하고 의미 있게 만드는 일'에 강한 열정을 가지고 있습니다. 현재 형과 함께 기획 중인 개인 맞춤형 주택 구매 자동화 서비스(앱) 창업 아이템은 이러한 비전의 구체적인 결과물입니다. 복잡하고 불투명한 부동산 시장에서 빅데이터 분석 및 프롭테크 기술을 융합하여, 사용자들이 가장 합리적인 주택 구매 결정을 내릴 수 있도록 돕는 혁신적인 솔루션을 제시하고자 합니다.","3. '문제 해결 능력과 지속적인 성장' / \nPF 금융구조 분석, DSR 규제 영향 분석, 그리고 빅데이터 활용 주택구매 시뮬레이션 등 다양한 프로젝트 경험을 통해 실무적인 문제 해결 능력과 창의적인 사고를 키워왔습니다. 또한, 사무 아르바이트를 병행하며 얻은 책임감과 성실함은 팀워크와 협업의 가치를 이해하고 어떤 환경에서든 기여할 수 있는 능력을 배양하는 데 큰 도움이 되었습니다. 앞으로도 지속적인 학습과 도전을 통해 부동산 가치 평가와 기술 혁신을 선도하는 전문가로 거듭나겠습니다."],
    storyImage: "/uploads/about-image-1765082809513.png",
    hobbies: ["✈️ 여행","🎬 영화 감상","📸 사진"]
  }
  
  const [aboutInfo, setAboutInfo] = useState(defaultInfo)
  const [backgroundData, setBackgroundData] = useState(
    defaultInfo.background
  )
  const [showTimelineModal, setShowTimelineModal] = useState(false)
  const [showCareerModal, setShowCareerModal] = useState(false)
  const [showSkillModal, setShowSkillModal] = useState(false)
  const [showHobbyModal, setShowHobbyModal] = useState(false)
  
  // localStorage에서 데이터 로드 - 편집 모드가 변경될 때마다 실행
  useEffect(() => {
    const savedData = getData('about-info') as typeof defaultInfo | null
    if (savedData) {
      setAboutInfo({ ...defaultInfo, ...savedData })
      // background 데이터가 있으면 설정
      if (savedData.background) {
        setBackgroundData(savedData.background)
      }
    }
    
    const savedBg = getData('about-background') as { image: string; video: string; color: string; opacity: number } | null
    if (savedBg) {
      setBackgroundData(savedBg)
    }
  }, [isEditMode]) // isEditMode가 변경될 때마다 데이터 다시 로드
  
  const updateAboutInfo = (key: string, value: string | boolean | typeof aboutInfo.skills | typeof aboutInfo.experienceCards | typeof aboutInfo.story | typeof aboutInfo.hobbies | number) => {
    const newInfo = { ...aboutInfo, [key]: value }
    setAboutInfo(newInfo)
    saveData('about-info', newInfo)
  }
  
  const updateExperienceCard = (index: number, field: string, value: string) => {
    const newCards = [...aboutInfo.experienceCards]
    newCards[index] = { ...newCards[index], [field]: value }
    updateAboutInfo('experienceCards', newCards)
  }
  
  const addExperienceCard = () => {
    updateAboutInfo('experienceCards', [...aboutInfo.experienceCards, { 
      icon: "briefcase", 
      title: "새 경험", 
      period: "2024", 
      description: "설명을 입력하세요" 
    }])
  }
  
  const removeExperienceCard = (index: number) => {
    updateAboutInfo('experienceCards', aboutInfo.experienceCards.filter((_, i) => i !== index))
  }
  
  const updateSkill = (index: number, field: string, value: string) => {
    const newSkills = [...aboutInfo.skills]
    newSkills[index] = { ...newSkills[index], [field]: value }
    updateAboutInfo('skills', newSkills)
  }
  
  const addSkill = () => {
    updateAboutInfo('skills', [...aboutInfo.skills, { icon: "star", title: "새 스킬", description: "스킬 설명" }])
  }
  
  const removeSkill = (index: number) => {
    updateAboutInfo('skills', aboutInfo.skills.filter((_, i) => i !== index))
  }
  
  const updateStory = (index: number, value: string) => {
    const newStory = [...aboutInfo.story]
    newStory[index] = value
    updateAboutInfo('story', newStory)
  }
  
  const addStory = () => {
    updateAboutInfo('story', [...aboutInfo.story, "새로운 문단"])
  }
  
  const removeStory = (index: number) => {
    updateAboutInfo('story', aboutInfo.story.filter((_, i) => i !== index))
  }
  
  const updateHobby = (index: number, value: string) => {
    const newHobbies = [...aboutInfo.hobbies]
    newHobbies[index] = value
    updateAboutInfo('hobbies', newHobbies)
  }
  
  const addHobby = () => {
    updateAboutInfo('hobbies', [...aboutInfo.hobbies, "🎯 새 취미"])
  }
  
  const removeHobby = (index: number) => {
    updateAboutInfo('hobbies', aboutInfo.hobbies.filter((_, i) => i !== index))
  }
  return (
    <EditableBackground
      image={backgroundData.image}
      video={backgroundData.video}
      color={backgroundData.color}
      opacity={backgroundData.opacity}
      onChange={(data) => {
        const newData = { ...backgroundData, ...data }
        setBackgroundData(newData)
        saveData('about-background', newData)
        
        // aboutInfo도 업데이트 (파일 저장을 위해)
        const updatedAboutInfo = { ...aboutInfo, background: newData }
        setAboutInfo(updatedAboutInfo)
        saveData('about-info', updatedAboutInfo)
      }}
      storageKey="about-background"
      className="py-20 bg-muted/30 relative"
    >
      <section id="about" className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 섹션 제목 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <EditableText
                value={aboutInfo.title}
                onChange={(value) => updateAboutInfo('title', value)}
                storageKey="about-title"
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <EditableText
                value={aboutInfo.subtitle}
                onChange={(value) => updateAboutInfo('subtitle', value)}
                storageKey="about-subtitle"
                multiline
              />
            </p>
          </div>

          {/* 경험 카드 (경력/학력/자격증 등) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* 경험 카드들 */}
            {aboutInfo.experienceCards?.map((card, index) => {
              const Icon = AVAILABLE_ICONS[card.icon as keyof typeof AVAILABLE_ICONS] || Briefcase
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <CardContent className="p-6">
                    {isEditMode && (
                      <button
                        onClick={() => removeExperienceCard(index)}
                        className={COMMON_STYLES.deleteButton}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          <EditableText
                            value={card.title}
                            onChange={(value) => updateExperienceCard(index, 'title', value)}
                            storageKey={`about-experience-${index}-title`}
                          />
                        </h3>
                        <p className="text-sm text-primary mb-2">
                          <EditableText
                            value={card.period}
                            onChange={(value) => updateExperienceCard(index, 'period', value)}
                            storageKey={`about-experience-${index}-period`}
                          />
                        </p>
                      {card.title.includes('목표') ? (
    <div className="mt-3">
        {/* 목표 카드는 텍스트 입력란을 출력하지 않고 버튼만 출력합니다. */}
        
        <button
            onClick={() => setShowTimelineModal(true)} 
            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
        >
            🔽 계획 펼치기
        </button>
    </div>
) : (
    // 목표 카드가 아닐 경우 기존 텍스트 입력란 출력 방식 유지
    <p className="text-sm text-muted-foreground">
        <EditableText 
            value={card.description}
            onChange={(value) => updateExperienceCard(index, 'description', value)}
            storageKey={`about-experience-${index}-description`}
            multiline
        />
    </p>
)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
            
            {/* 추가 버튼 */}
            {isEditMode && (
              <Card className="border-2 border-dashed border-muted-foreground/30 shadow-none hover:border-primary transition-all cursor-pointer"
                    onClick={() => setShowCareerModal(true)}>
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">경험 카드 편집</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* 핵심 역량 */}
          {(aboutInfo.skills.length > 0 || isEditMode) && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                핵심 역량
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutInfo.skills.map((skill, index) => {
                  const Icon = SKILL_ICONS[skill.icon as keyof typeof SKILL_ICONS] || Trophy
                  return (
                    <div key={index} className="text-center relative">
                      {isEditMode && (
                        <button
                          onClick={() => removeSkill(index)}
                          className={COMMON_STYLES.deleteButton}
                        >
                          <X className={COMMON_STYLES.deleteIcon} />
                        </button>
                      )}
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        <EditableText
                          value={skill.title}
                          onChange={(value) => updateSkill(index, 'title', value)}
                          storageKey={`about-skill-${index}-title`}
                        />
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <EditableText
                          value={skill.description}
                          onChange={(value) => updateSkill(index, 'description', value)}
                          storageKey={`about-skill-${index}-description`}
                          multiline
                        />
                      </p>
                    </div>
                  )
                })}
                {isEditMode && (
                  <div 
                    className="text-center border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 flex items-center justify-center cursor-pointer hover:border-primary transition-all"
                    onClick={() => setShowSkillModal(true)}
                  >
                    <div>
                      <Settings className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">스킬 편집</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 자기소개 상세 */}
          {(aboutInfo.story.length > 0 || isEditMode) && (
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    <EditableText
                      value={aboutInfo.storyTitle}
                      onChange={(value) => updateAboutInfo('storyTitle', value)}
                      storageKey="about-storyTitle"
                    />
                  </h3>
                  {aboutInfo.story.map((paragraph, index) => (
                    <div key={index} className="relative mb-4">
                      {isEditMode && (
                        <button
                          onClick={() => removeStory(index)}
                          className={COMMON_STYLES.deleteButton}
                        >
                          <X className={COMMON_STYLES.deleteIcon} />
                        </button>
                      )}
                      <p className="text-muted-foreground leading-relaxed">
                        <EditableText
                          value={paragraph}
                          onChange={(value) => updateStory(index, value)}
                          storageKey={`about-story-${index}`}
                          multiline
                        />
                      </p>
                    </div>
                  ))}
                  {isEditMode && (
                    <button
                      onClick={addStory}
                      className="mt-2 px-4 py-2 border border-dashed border-muted-foreground/30 rounded-lg hover:border-primary transition-all"
                    >
                      <Plus className="h-4 w-4 inline mr-2" />
                      문단 추가
                    </button>
                  )}
                </div>
                
                {/* 이미지 영역 */}
                <div className="relative w-full h-full min-h-[500px] lg:min-h-full">
                  <EditableMedia
                    src={aboutInfo.storyImage}
                    onChange={(src) => updateAboutInfo('storyImage', src)}
                    type="image"
                    storageKey="about-storyImage"
                    className="w-full h-full object-cover"
                    alt="소개 이미지"
                    purpose="about-image"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 취미 & 관심사 */}
          {(aboutInfo.hobbies.length > 0 || isEditMode) && (
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                취미 & 관심사
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {aboutInfo.hobbies.map((hobby, index) => (
                  <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm relative group flex items-center justify-center">
                    {isEditMode && (
                      <button
                        onClick={() => removeHobby(index)}
                        className={`${COMMON_STYLES.deleteButton} opacity-0 group-hover:opacity-100 transition-opacity`}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    <EditableText
                      value={hobby}
                      onChange={(value) => updateHobby(index, value)}
                      storageKey={`about-hobby-${index}`}
                    />
                  </span>
                ))}
                {isEditMode && (
                  <button
                    onClick={() => setShowHobbyModal(true)}
                    className="px-4 py-2 border border-dashed border-muted-foreground/30 rounded-full text-sm hover:border-primary transition-all"
                  >
                    <Settings className="h-4 w-4 inline mr-1" />
                    편집
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* 경험 카드 편집 모달 */}
      {showCareerModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">경험 카드 편집</h3>
              <button
                onClick={() => setShowCareerModal(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {aboutInfo.experienceCards?.map((card, index) => {
                const Icon = AVAILABLE_ICONS[card.icon as keyof typeof AVAILABLE_ICONS] || Briefcase
                return (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg bg-muted/30">
                    {/* 아이콘 선택 */}
                    <select
                      value={card.icon}
                      onChange={(e) => updateExperienceCard(index, 'icon', e.target.value)}
                      className="w-40 px-2 py-2 border rounded-lg bg-background"
                    >
                      <option value="briefcase">💼 직장</option>
                      <option value="graduation">🎓 학교</option>
                      <option value="award">🏆 수상</option>
                      <option value="trophy">🏅 성과</option>
                      <option value="star">⭐ 우수</option>
                      <option value="lightbulb">💡 아이디어</option>
                      <option value="target">🎯 목표</option>
                      <option value="rocket">🚀 시작</option>
                      <option value="shield">🛡️ 보안</option>
                      <option value="building">🏢 회사</option>
                      <option value="calendar">📅 기간</option>
                      <option value="book">📚 교육</option>
                      <option value="heart">❤️ 열정</option>
                      <option value="coffee">☕ 일상</option>
                      <option value="user">👤 개인</option>
                    </select
>
                    
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => updateExperienceCard(index, 'title', e.target.value)}
                        placeholder="예: ABC 회사, 서울대학교, 구글 자격증"
                        className="w-full px-3 py-2 border rounded-lg bg-background font-semibold"
                      />
                      
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={card.period}
                          onChange={(e) => updateExperienceCard(index, 'period', e.target.value)}
                          placeholder="예: 2020 - 현재"
                          className="flex-1 px-3 py-2 border rounded-lg bg-background"
                        />
                        
                        <input
                          type="text"
                          value={card.description}
                          onChange={(e) => updateExperienceCard(index, 'description', e.target.value)}
                          placeholder="예: 마케팅 매니저, 경영학 학사, GAIQ 인증"
                          className="flex-1 px-3 py-2 border rounded-lg bg-background"
                        />
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeExperienceCard(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )
              })}
              
              <button
                onClick={addExperienceCard}
                className="w-full py-3 border-2 border-dashed rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Plus className="h-4 w-4 inline mr-2" />
                카드 추가
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCareerModal(false)}
                  className="flex-1 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80"
                >
                  닫기
                </button>
                <button
                  onClick={async () => {
                    const success = await saveToFile('about', 'Info', aboutInfo)
                    if (success) {
                      alert('✅ 소개 설정이 파일에 저장되었습니다!')
                      setShowCareerModal(false)
                    } else {
                      alert('❌ 파일 저장에 실패했습니다.')
                    }
                  }}
                  className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                >
                  📁 파일에 저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 스킬 편집 모달 */}
      {showSkillModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[2147483647]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">핵심 역량 편집</h3>
              <button
                onClick={() => setShowSkillModal(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {aboutInfo.skills.map((skill, index) => {
                const Icon = SKILL_ICONS[skill.icon as keyof typeof SKILL_ICONS] || Trophy
                return (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg bg-muted/30">
                    {/* 아이콘 선택 */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <select
                        value={skill.icon}
                        onChange={(e) => updateSkill(index, 'icon', e.target.value)}
                        className="w-32 px-2 py-1 text-xs border rounded-lg bg-background"
                      >
                        <optgroup label="기술 스킬">
                          <option value="code">💻 코드/개발</option>
                          <option value="database">🗜️ 데이터베이스</option>
                          <option value="server">🌐 서버/클라우드</option>
                          <option value="smartphone">📱 모바일</option>
                          <option value="monitor">🖥️ 프론트엔드</option>
                          <option value="cpu">🤖 AI/ML</option>
                          <option value="gitBranch">🌿 Git/버전관리</option>
                          <option value="lock">🔒 보안</option>
                        </optgroup>
                        <optgroup label="비즈니스">
                          <option value="barChart">📊 데이터 분석</option>
                          <option value="lineChart">📈 성과 분석</option>
                          <option value="pieChart">🥧 통계/시각화</option>
                          <option value="megaphone">📢 마케팅</option>
                          <option value="target">🎯 전략/기획</option>
                          <option value="users">👥 팀워크</option>
                        </optgroup>
                        <optgroup label="창의적 스킬">
                          <option value="palette">🎨 디자인</option>
                          <option value="camera">📷 사진/영상</option>
                          <option value="music">🎵 음악/오디오</option>
                          <option value="edit">✏️ 글쓰기/편집</option>
                          <option value="video">🎬 영상 제작</option>
                        </optgroup>
                        <optgroup label="일반 역량">
                          <option value="trophy">🏆 리더십</option>
                          <option value="sparkles">✨ 혁신</option>
                          <option value="rocket">🚀 실행력</option>
                          <option value="brain">🧠 분석력</option>
                          <option value="lightbulb">💡 창의력</option>
                          <option value="zap">⚡ 속도/효율</option>
                          <option value="star">⭐ 전문성</option>
                          <option value="heart">❤️ 열정</option>
                          <option value="shield">🛡️ 신뢰성</option>
                          <option value="globe">🌍 글로벌</option>
                        </optgroup>
                      </select>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        value={skill.title}
                        onChange={(e) => updateSkill(index, 'title', e.target.value)}
                        placeholder="예: 프론트엔드 개발, 데이터 분석, 프로젝트 관리"
                        className="w-full px-3 py-2 border rounded-lg bg-background font-semibold"
                      />
                      
                      <textarea
                        value={skill.description}
                        onChange={(e) => updateSkill(index, 'description', e.target.value)}
                        placeholder="예: React와 TypeScript를 활용한 모던 웹 애플리케이션 개발"
                        className="w-full px-3 py-2 border rounded-lg bg-background resize-none"
                        rows={2}
                      />
                    </div>
                    
                    <button
                      onClick={() => removeSkill(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )
              })}
              
              <button
                onClick={addSkill}
                className="w-full py-3 border-2 border-dashed rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Plus className="h-4 w-4 inline mr-2" />
                스킬 추가
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                💡 팁: 아이콘을 선택하고 제목과 설명을 입력하세요. 필요한 만큼 자유롭게 추가할 수 있습니다.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowSkillModal(false)}
                  className="flex-1 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80"
                >
                  닫기
                </button>
                <button
                  onClick={async () => {
                    const success = await saveToFile('about', 'Info', aboutInfo)
                    if (success) {
                      alert('✅ 소개 설정이 파일에 저장되었습니다!')
                      setShowSkillModal(false)
                    } else {
                      alert('❌ 파일 저장에 실패했습니다.')
                    }
                  }}
                  className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                >
                  📁 파일에 저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 취미 편집 모달 */}
      {showHobbyModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[2147483647]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">취미 & 관심사 편집</h3>
              <button
                onClick={() => setShowHobbyModal(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {aboutInfo.hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <input
                    type="text"
                    value={hobby}
                    onChange={(e) => updateHobby(index, e.target.value)}
                    placeholder="예: 📚 독서"
                    className="flex-1 px-3 py-2 border rounded-lg bg-background"
                  />
                  
                  <button
                    onClick={() => removeHobby(index)}
                    className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              <button
                onClick={addHobby}
                className="w-full py-3 border-2 border-dashed rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Plus className="h-4 w-4 inline mr-2" />
                취미 추가
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">🎯 취미 예시:</p>
                <div className="flex flex-wrap gap-2">
                  {['📚 독서', '☕ 카페 투어', '🎨 전시회 관람', '✈️ 여행', '🏃 러닝', '📸 사진', '🎮 게임', '🎬 영화 감상', '🎵 음악 감상', '🍳 요리', '🌱 가드닝', '🏊 수영', '🧘 요가', '🎸 기타 연주', '✍️ 글쓰기', '🏕️ 캠핑', '🎭 연극 관람', '🎪 공연 관람', '🚴 자전거', '⛷️ 스키'].map((example) => (
                    <button
                      key={example}
                      className="px-3 py-1 text-sm bg-muted hover:bg-primary/10 rounded-full transition-all"
                      onClick={() => {
                        if (!aboutInfo.hobbies.includes(example)) {
                          updateAboutInfo('hobbies', [...aboutInfo.hobbies, example])
                        }
                      }}
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                💡 팁: 이모지와 함께 취미를 입력하세요. 예시를 클릭하면 새 취미가 추가됩니다.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowHobbyModal(false)}
                  className="flex-1 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80"
                >
                  닫기
                </button>
                <button
                  onClick={async () => {
                    const success = await saveToFile('about', 'Info', aboutInfo)
                    if (success) {
                      alert('✅ 소개 설정이 파일에 저장되었습니다!')
                      setShowHobbyModal(false)
                    } else {
                      alert('❌ 파일 저장에 실패했습니다.')
                    }
                  }}
                  className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                >
                  📁 파일에 저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showTimelineModal && (
        <TimelineModal onClose={() => setShowTimelineModal(false)} />
      )}
    </EditableBackground>
  )
}