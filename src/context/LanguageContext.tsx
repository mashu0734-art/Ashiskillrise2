import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  isUrdu: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  tCategory: (slugOrName: string) => string;
}

export const categoryTranslations: Record<string, string> = {
  'artificial-intelligence': 'مصنوعی ذہانت (AI)',
  'english-communication': 'انگلش بول چال',
  'freelancing': 'فری لانسنگ',
  'graphic-design': 'گرافک ڈیزائننگ',
  'web-development': 'ویب ڈویلپمنٹ',
  'digital-marketing': 'ڈیجیٹل مارکیٹنگ',
  'video-editing': 'ویڈیو ایڈیٹنگ',
  'content-writing': 'کنٹینٹ رائٹنگ',
  'microsoft-office': 'مائیکروسافٹ آفس',
  'career-development': 'کیریئر ڈویلپمنٹ',
  'programming': 'پروگرامنگ',
  'data-analysis': 'ڈیٹا اینالیسز',
  'e-commerce': 'ای کامرس',
  'personal-finance': 'پرسنل فنانس'
};

export const translations: Record<string, Record<Language, string>> = {
  // Navigation & General
  exploreCourses: { en: 'Explore Courses', ur: 'کورسز دریافت کریں' },
  learningPaths: { en: 'Learning Paths', ur: 'لرننگ پاتھس' },
  dailyChallenges: { en: 'Daily Challenges', ur: 'روزانہ چیلنجز' },
  practiceProjects: { en: 'Practice Projects', ur: 'پریکٹس پروجیکٹس' },
  freeResources: { en: 'Free Resources', ur: 'مفت وسائل' },
  career: { en: 'Career', ur: 'کیریئر' },
  community: { en: 'Community', ur: 'کمیونٹی' },
  searchCourses: { en: 'Search courses...', ur: 'کورس تلاش کریں...' },
  dashboard: { en: 'Dashboard', ur: 'ڈیش بورڈ' },
  login: { en: 'Sign In', ur: 'لاگ ان' },
  signup: { en: 'Get Started', ur: 'شروع کریں' },
  subtitle: { en: 'Learn, Practice & Grow', ur: 'سیکھیں، مشق کریں اور آگے بڑھیں' },
  watchVideo: { en: 'Watch Video', ur: 'ویڈیو دیکھیں' },
  urduModeActive: { en: 'Urdu Language Mode Active', ur: 'اردو زبان کا موڈ فعال ہے' },
  more: { en: 'More', ur: 'مزید' },
  home: { en: 'Home', ur: 'ہوم' },
  menu: { en: 'Menu', ur: 'مینیو' },
  account: { en: 'Account', ur: 'اکاؤنٹ' },
  achievements: { en: 'Achievements', ur: 'کامیابیاں' },
  settings: { en: 'Settings', ur: 'سیٹنگز' },
  signOut: { en: 'Sign Out', ur: 'لاگ آؤٹ' },
  uploadPic: { en: 'Upload Profile Picture', ur: 'گیلری سے تصویر لگائیں' },
  navMenuLabel: { en: 'Navigation Menu', ur: 'نیویگیشن مینیو' },

  // Hero Section
  heroBadge: { en: '100% Free · No Subscription Paywalls · 15 Skill Categories', ur: '100% مفت · کوئی فیس یا سبسکرپشن نہیں · 15 اسکل کیٹیگریز' },
  heroTitle: { en: 'Master Real-World Digital Skills. Free, Forever.', ur: 'مارکیٹ کی اہم ترین ڈیجیٹل اسکلز مفت سیکھیں۔ ہمیشہ کے لیے۔' },
  heroSubtitle: { en: 'Practical, self-paced courses in Web Development, Graphic Design, Freelancing, AI, Digital Marketing, and Video Editing. Build job-ready projects and earn verified completion certificates.', ur: 'ویب ڈویلپمنٹ، گرافک ڈیزائننگ، فری لانسنگ، مصنوعی ذہانت (AI)، ڈیجیٹل مارکیٹنگ اور ویڈیو ایڈیٹنگ کے عملی کورسز۔ ریئل پروجیکٹس بنائیں اور تصدیق شدہ سرٹیفکیٹ حاصل کریں۔' },
  heroSearchPlaceholder: { en: 'Search courses, skills, tools...', ur: 'کورس، اسکل یا ٹول تلاش کریں...' },
  browseCourses: { en: 'Browse Courses', ur: 'کورسز براؤز کریں' },
  roadmaps: { en: 'Roadmaps', ur: 'روڈ میپس' },
  clear: { en: 'Clear', ur: 'صاف کریں' },

  // Hero Stats
  statCourses: { en: 'Hands-on Courses', ur: 'عملی کورسز' },
  statCategories: { en: 'In-Demand Categories', ur: 'اہم کیٹیگریز' },
  statDrills: { en: 'Daily Practice Drills', ur: 'روزانہ پریکٹس ڈرلز' },
  statCerts: { en: 'Free Certificates', ur: 'مفت سرٹیفکیٹس' },

  // Categories Section
  exploreByCategory: { en: 'Explore by Category', ur: 'کیٹیگری کے لحاظ سے دریافت کریں' },
  exploreByCategorySub: { en: 'Choose your discipline and start learning practical skills today', ur: 'اپنا پسندیدہ شعبہ منتخب کریں اور آج ہی عملی مہارتیں سیکھنا شروع کریں' },
  allCategories: { en: 'All Categories', ur: 'تمام کیٹیگریز' },
  coursesCountSuffix: { en: 'Courses', ur: 'کورسز' },

  // Featured Courses Section
  featuredCourses: { en: 'Featured Courses', ur: 'نمایاں کورسز' },
  featuredCoursesSub: { en: 'Structured modules designed for direct real-world application', ur: 'مارکیٹ میں فوری ملازمت اور فری لانسنگ کے لیے تیار کردہ کورسز' },
  filterAll: { en: 'All', ur: 'تمام' },
  filterAi: { en: 'AI & Tech', ur: 'AI اور ٹیکنالوجی' },
  filterWeb: { en: 'Web Dev', ur: 'ویب ڈویلپمنٹ' },
  filterDesign: { en: 'Design', ur: 'گرافک ڈیزائن' },
  filterFreelance: { en: 'Freelancing', ur: 'فری لانسنگ' },
  viewAllCourses: { en: 'View All Courses', ur: 'تمام کورسز دیکھیں' },

  // Roadmaps Section
  stepByStepRoadmaps: { en: 'Step-by-Step Roadmaps', ur: 'مرحلہ وار رہنمائی' },
  curatedLearningPaths: { en: 'Curated Learning Paths', ur: 'منتخب لرننگ روڈ میپس' },
  curatedLearningPathsSub: { en: 'Take the guesswork out of learning. Follow comprehensive, sequential career paths.', ur: 'بغیر الجھن کے سیکھیں — زیرو سے پروفیشنل بننے کے مکمل مرحلہ وار راستے۔' },
  allPaths: { en: 'All Paths', ur: 'تمام روڈ میپس' },
  hours: { en: 'Hours', ur: 'گھنٹے' },
  coursesIncluded: { en: 'Core Courses Included', ur: 'اہم کورسز شامل ہیں' },
  certIncluded: { en: 'Certificate Included', ur: 'سرٹیفکیٹ شامل ہے' },
  startPath: { en: 'Start Path', ur: 'روڈ میپ شروع کریں' },

  // Daily Challenge
  dailyDrillBadge: { en: 'Daily Skill Drill', ur: 'روزانہ کی اسکل مشق' },
  todayQuickChallenge: { en: "Today's Quick Challenge", ur: 'آج کا فوری چیلنج' },
  moreDrills: { en: 'More Drills →', ur: 'مزید چیلنجز ←' },
  scenarioQuestion: { en: 'Scenario: You are designing an Upwork proposal for an international client. What is the most effective opening hook?', ur: 'صورتحال: آپ کسی بین الاقوامی کلائنٹ کے لیے اپ ورک (Upwork) پروپوزل لکھ رہے ہیں۔ سب سے بہترین ابتدائی جملہ کیا ہوگا؟' },
  optA: { en: '“Hi, I have 5 years of experience and I can do this easily.”', ur: '”ہیلو، میرے پاس 5 سال کا تجربہ ہے اور میں یہ کام آسانی سے کر سکتا ہوں۔“' },
  optB: { en: '“I noticed in your brief you need your bounce rate cut on checkout. Here is how I solved that for a Shopify brand.”', ur: '”میں نے آپ کی تفصیل دیکھی کہ آپ کو چیک آؤٹ پر باؤنس ریٹ کم کرنا ہے۔ میں نے ایک برانڈ کے لیے اس طرح حل کیا تھا۔“' },
  optC: { en: '“Dear Sir/Madam, please review my resume attached here.”', ur: '”جناب عالی، برائے مہربانی ساتھ منسلک میری سی وی کا جائزہ لیں۔“' },
  optD: { en: '“I am the cheapest freelancer on this platform and ready now.”', ur: '”میں اس پلیٹ فارم پر سب سے سستا فری لانسر ہوں اور ابھی کام شروع کر سکتا ہوں۔“' },
  correctFeedback: { en: 'Correct! Specific proof addressing the client\'s direct pain point achieves a 4x higher response rate.', ur: 'بالکل درست! کلائنٹ کے اصل مسئلے پر بات کرنے سے 4 گنا زیادہ جواب ملتا ہے۔' },
  incorrectFeedback: { en: 'Option B is the winning approach! Lead with the client\'s problem, not your bio.', ur: 'آپشن B سب سے بہترین طریقہ ہے! کلائنٹ کے مسئلے سے بات شروع کریں، اپنے تعارف سے نہیں۔' },

  // Career Toolkit
  toolkitBadge: { en: 'Toolkit', ur: 'ٹول کٹ' },
  careerHubTitle: { en: 'Career & Freelance Hub', ur: 'فری لانسنگ اور کیریئر مرکز' },
  careerHubDesc: { en: 'Equip yourself with practical tools to launch your freelance career and win client contracts.', ur: 'اپنا فری لانس کیریئر شروع کرنے اور کلائنٹس کے آرڈرز حاصل کرنے کے لیے عملی ٹولز۔' },
  toolRateCalc: { en: 'Freelance Rate Calculator', ur: 'فری لانس ریٹ کیلکولیٹر' },
  toolProposalGen: { en: 'Client Proposal Generator', ur: 'کلائنٹ پروپوزل جنریٹر' },
  toolInterviewBank: { en: 'Interview Question Bank', ur: 'انٹرویو سوالات بینک' },
  toolContractTemp: { en: 'Contract & Invoice Templates', ur: 'کنٹریکٹ اور انوائس ٹیمپلیٹس' },
  launchToolkit: { en: 'Launch Career Toolkit', ur: 'کیریئر ٹول کٹ کھولیں' },

  // Why Ashiskillrise
  whyAshiskillriseTitle: { en: 'Why Learn on Ashiskillrise?', ur: 'Ashiskillrise پر کیوں سیکھیں؟' },
  whyAshiskillriseSub: { en: 'Democratizing world-class practical skills without financial barriers', ur: 'بغیر کسی فیس کے بہترین عالمی معیار کی عملی تعلیم ہر ایک کے لیے' },
  freeForeverTitle: { en: '100% Free Forever', ur: 'ہمیشہ 100% مفت' },
  freeForeverDesc: { en: 'Every course, interactive quiz, and downloadable resource is fully available without subscriptions or hidden costs.', ur: 'ہر کورس، کوئز اور ڈاؤن لوڈ کے قابل وسائل بغیر کسی فیس یا پوشیدہ چارجز کے دستیاب ہیں۔' },
  projectBasedTitle: { en: 'Project-Based Learning', ur: 'عملی پروجیکٹس پر مبنی' },
  projectBasedDesc: { en: 'No endless lectures. Learn by building real portfolios, writing production-ready code, and crafting design deliverables.', ur: 'صرف تھیوری نہیں! اصلی پورٹ فولیو پروجیکٹس بنا کر، معیاری کوڈ لکھ کر اور ڈیزائن تیار کر کے سیکھیں۔' },
  verifiedCredsTitle: { en: 'Verified Credentials', ur: 'تصدیق شدہ سرٹیفکیٹ' },
  verifiedCredsDesc: { en: 'Complete course modules to receive unique verifiable certificates that you can showcase on LinkedIn, Upwork, and resumes.', ur: 'کورس مکمل کریں اور منفرد تصدیق شدہ سرٹیفکیٹ حاصل کریں جسے آپ لنکڈ اِن اور سی وی پر دکھا سکتے ہیں۔' },

  // Bottom CTA
  bottomCtaTitle: { en: 'Ready to Build In-Demand Skills Today?', ur: 'کیا آپ نئی ڈیجیٹل اسکلز سیکھنے کے لیے تیار ہیں؟' },
  bottomCtaSub: { en: 'Join thousands of learners mastering web development, graphic design, AI prompting, and freelance careers on Ashiskillrise.', ur: 'ہزاروں طلباء کے ساتھ ویب ڈویلپمنٹ، گرافک ڈیزائن، AI اور فری لانسنگ میں مہارت حاصل کرنا شروع کریں۔' },
  createFreeAccount: { en: 'Create Free Account', ur: 'مفت اکاؤنٹ بنائیں' },
  exploreCatalog: { en: 'Explore Catalog', ur: 'کورسز براؤز کریں' },

  // Cards
  free: { en: 'Free', ur: 'مفت' },
  premium: { en: 'Premium', ur: 'پریمیم' },
  beginner: { en: 'Beginner', ur: 'ابتدائی' },
  intermediate: { en: 'Intermediate', ur: 'درمیانی' },
  advanced: { en: 'Advanced', ur: 'اعلیٰ' },
  lessons: { en: 'lessons', ur: 'اسباق' },
  minutes: { en: 'm', ur: 'منٹ' },
  explore: { en: 'Explore', ur: 'دیکھیں' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('ashiskillrise_lang') as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ashiskillrise_lang', lang);
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const t = (key: string, fallback?: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key].en;
    }
    return fallback || key;
  };

  const tCategory = (slugOrName: string): string => {
    if (language === 'ur' && categoryTranslations[slugOrName]) {
      return categoryTranslations[slugOrName];
    }
    return slugOrName;
  };

  const isUrdu = language === 'ur';

  return (
    <LanguageContext.Provider value={{ language, isUrdu, setLanguage, toggleLanguage, t, tCategory }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
