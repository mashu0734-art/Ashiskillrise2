import json
import os
import re

with open('scripts/english_courses_dump.json') as f:
    en_courses = json.load(f)

with open('scripts/topic_videos.json') as f:
    topic_videos = json.load(f)

# The 10 already matched courses:
MATCHED_EN_TO_UR = {
    'course-1': 'course-ur-1',
    'course-prog-1': 'course-ur-2',
    'course-prog-2': 'course-ur-3',
    'course-9': 'course-ur-4',
    'course-crt-1': 'course-ur-5',
    'course-3': 'course-ur-6',
    'course-6': 'course-ur-7',
    'course-8': 'course-ur-8',
    'course-5': 'course-ur-9',
    'course-prod-6': 'course-ur-10'
}

# The remaining 50 courses to match
unmatched_en = [c for c in en_courses if c['id'] not in MATCHED_EN_TO_UR]
print(f"Generating Urdu versions for {len(unmatched_en)} courses...")

# Translation dictionaries for domain-specific terminology
TITLE_MAP = {
    'English for Everyday Communication': 'روزمرہ گفتگو کے لیے انگریزی (English for Everyday Communication)',
    'Customer Service and Support': 'کسٹمر سروس اور سپورٹ میں مہارت (Customer Service & Support in Urdu)',
    'Professional Email Writing in English': 'انگریزی میں پیشہ ورانہ ای میل نویسی (Professional Email Writing in Urdu)',
    'Public Speaking and Presentation Skills': 'عوامی تقریر اور پریزنٹیشن کی مہارت (Public Speaking & Presentation Skills in Urdu)',
    'Graphic Design Basics': 'گرافک ڈیزائن کے بنیادی اصول (Graphic Design Basics in Urdu)',
    'Figma for Beginners': 'فگما برائے مبتدی (Figma for Beginners in Urdu)',
    'Color Theory and Typography': 'رنگوں کی تھیوری اور ٹائپوگرافی (Color Theory & Typography in Urdu)',
    'Logo Design Principles': 'لوگو ڈیزائن کے بنیادی اصول (Logo Design Principles in Urdu)',
    'Thumbnail Design for YouTube': 'یوٹیوب کے لیے تھمب نیل ڈیزائن (YouTube Thumbnail Design in Urdu)',
    'Video Editing for Beginners': 'ویڈیو ایڈیٹنگ برائے مبتدی (Video Editing for Beginners in Urdu)',
    'Audio Editing with Audacity': 'اوڈیسیٹی کے ساتھ آڈیو ایڈیٹنگ (Audio Editing with Audacity in Urdu)',
    'Smartphone Videography': 'اسمارٹ فون سے ویڈیو گرافی (Smartphone Videography in Urdu)',
    'CV Writing and Interview Preparation': 'سی وی سازی اور انٹرویو کی تیاری (CV Writing & Interview Preparation in Urdu)',
    'Finding and Evaluating Remote Work': 'ریموٹ جابز تلاش کرنا اور جانچنا (Finding & Evaluating Remote Work in Urdu)',
    'Critical Thinking and Problem Solving': 'تنقیدی سوچ اور مسائل کا حل (Critical Thinking & Problem Solving in Urdu)',
    'Habit Building and Focus Mastery': 'مثبت عادات اپنانا اور ارتکاز میں مہارت (Habit Building & Focus Mastery in Urdu)',
    'Responsive Web Design': 'ریسپانسیو ویب ڈیزائن (Responsive Web Design in Urdu)',
    'React Fundamentals': 'ری ایکٹ کے بنیادی اصول (React Fundamentals in Urdu)',
    'TypeScript Fundamentals': 'ٹائپ اسکرپٹ کے بنیادی اصول (TypeScript Fundamentals in Urdu)',
    'Git and GitHub for Beginners': 'گٹ اور گٹ ہب برائے مبتدی (Git & GitHub for Beginners in Urdu)',
    'SQL and Database Basics': 'ایس کیو ایل اور ڈیٹا بیس کی بنیادیں (SQL & Database Basics in Urdu)',
    'API Development Fundamentals': 'اے پی آئی ڈویلپمنٹ کے بنیادی اصول (API Development Fundamentals in Urdu)',
    'Web Accessibility & Inclusive Design': 'ویب رسائی اور شمولیتی ڈیزائن (Web Accessibility & Inclusive Design in Urdu)',
    'Build and Deploy Your First Website': 'اپنی پہلی ویب سائٹ بنائیں اور لائیو کریں (Build & Deploy Your First Website in Urdu)',
    'AI Productivity Tools': 'پیداواری صلاحیت کے لیے AI ٹولز (AI Productivity Tools in Urdu)',
    'Prompt Engineering Fundamentals': 'پرامپٹ انجینئرنگ کے بنیادی اصول (Prompt Engineering Fundamentals in Urdu)',
    'Responsible AI and Fact Checking': 'ذمہ دارانہ AI اور حقائق کی تصدیق (Responsible AI & Fact Checking in Urdu)',
    'Introduction to Machine Learning': 'مشین لرننگ کا تعارف (Introduction to Machine Learning in Urdu)',
    'Data Analysis Fundamentals': 'ڈیٹا اینالیسس کے بنیادی اصول (Data Analysis Fundamentals in Urdu)',
    'Cybersecurity for Beginners': 'سائبر سیکیورٹی برائے مبتدی (Cybersecurity for Beginners in Urdu)',
    'Internet Privacy and Digital Safety': 'انٹرنیٹ پرائیویسی اور ڈیجیٹل تحفظ (Internet Privacy & Digital Safety in Urdu)',
    'Computer and Internet Essentials': 'کمپیوٹر اور انٹرنیٹ کی لازمی معلومات (Computer & Internet Essentials in Urdu)',
    'Notion for Personal Organization': 'نوشن کے ذریعے ذاتی تنظیم اور کام کا انتظام (Notion for Personal Organization in Urdu)',
    'Google Workspace Mastery': 'گوگل ورک اسپیس میں مہارت (Google Workspace Mastery in Urdu)',
    'Building a Freelance Portfolio': 'کامیاب فری لانس پورٹ فولیو کی تیاری (Building a Freelance Portfolio in Urdu)',
    'Freelance Proposal Writing': 'فری لانس پرپوزل لکھنے کی موثر تکنیک (Freelance Proposal Writing in Urdu)',
    'Client Communication Skills': 'کلائنٹ کے ساتھ بات چیت اور ڈیلنگ (Client Communication Skills in Urdu)',
    'Personal Branding on LinkedIn': 'لنکڈ ان پر ذاتی برانڈنگ (Personal Branding on LinkedIn in Urdu)',
    'Upwork and Fiverr Starter Guide': 'اپ ورک اور فائیور سے کمانے کی گائیڈ (Upwork & Fiverr Starter Guide in Urdu)',
    'Pricing Your Freelance Services': 'فری لانس سروسز کی قیمتوں کا درست تعین (Pricing Your Freelance Services in Urdu)',
    'Time Management for Freelancers': 'فری لانسرز کے لیے ٹائم مینجمنٹ (Time Management for Freelancers in Urdu)',
    'Storytelling for Digital Creators': 'ڈیجیٹل تخلیق کاروں کے لیے اسٹوری ٹیلنگ (Storytelling for Digital Creators in Urdu)',
    'Copywriting for Sales Pages': 'سیلز پیجز کے لیے کاپی رائٹنگ (Copywriting for Sales Pages in Urdu)',
    'Speed Reading and Information Retention': 'تیز رفتاری سے پڑھنا اور یاد رکھنا (Speed Reading & Information Retention in Urdu)',
    'Social Media Marketing Strategy': 'سوشل میڈیا مارکیٹنگ کی حکمت عملی (Social Media Marketing Strategy in Urdu)',
    'Search Engine Optimization (SEO) Basics': 'سرچ انجن آپٹیمائزیشن (SEO) کے بنیادی اصول (SEO Basics in Urdu)',
    'Email Marketing Essentials': 'ای میل مارکیٹنگ کے لازمی اصول (Email Marketing Essentials in Urdu)',
    'Digital Advertising Fundamentals': 'ڈیجیٹل ایڈورٹائزنگ کے بنیادی اصول (Digital Advertising Fundamentals in Urdu)',
    'E-commerce Store Setup': 'ای کامرس آن لائن اسٹور کا سیٹ اپ (E-commerce Store Setup in Urdu)',
    'Affiliate Marketing for Beginners': 'ایفیلی ایٹ مارکیٹنگ برائے مبتدی (Affiliate Marketing for Beginners in Urdu)'
}

print(f"Title mappings count: {len(TITLE_MAP)}")
