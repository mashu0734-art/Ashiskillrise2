import { Course } from './types';

export const URDU_COURSES: Course[] = [
  {
    id: 'course-ur-1',
    slug: 'intro-to-ai-urdu',
    title: 'مصنوعی ذہانت کا تعارف (Introduction to AI in Urdu)',
    description: 'مصنوعی ذہانت (AI) کے بنیادی اصولوں، نیورل نیٹ ورکس، پرامپٹ انجینئرنگ اور روزمرہ کے کاروباری کاموں میں خودکار ٹولز کے استعمال کو عملی مشق کے ساتھ سیکھیں۔',
    categoryId: 'cat_ai',
    categoryName: 'مصنوعی ذہانت (Artificial Intelligence)',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'مشین لرننگ، جنریٹیو AI اور ڈیپ لرننگ کے درمیان فرق سمجھیں',
      'متن، کوڈ اور تصاویر کی تیاری کے لیے اعلیٰ معیار کے پرامپٹس لکھیں',
      'روزمرہ کے کاموں میں AI پیداواری ٹولز کو شامل کریں',
      'AI سسٹمز کی اخلاقیات، حدود اور حفاظتی پہلوؤں کا جائزہ لیں',
      'اپنا پہلا AI اسسٹڈ پراجیکٹ ورک فلو بنائیں'
    ],
    completionRequirements: 'تمام 5 اسباق مکمل کریں، کوئز پاس کریں اور پرامپٹ آٹومیشن پراجیکٹ جمع کروائیں۔',
    prerequisites: ['بنیادی کمپیوٹر کی معلومات', 'انٹرنیٹ اور براؤزر کا استعمال'],
    instructor: {
      name: 'ڈاکٹر ایلینا روسٹووا (ترجمہ و تدوین: ماہرینِ ٹیم)',
      role: 'اپلائیڈ AI محقق اور ایجوکیٹر',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-1',
        title: 'جدید مصنوعی ذہانت کی بنیادیں',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-ai-1',
            slug: 'what-is-artificial-intelligence-urdu',
            title: '1. مصنوعی ذہانت (AI) کیا ہے؟',
            durationMinutes: 25,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=2ePf9rue1Ao',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `مصنوعی ذہانت (AI) سے مراد ایسے کمپیوٹر سسٹمز ہیں جو انسانی ذہانت کے مختلف پہلوؤں — مثلاً پیٹرن کی شناخت، زبان کی فہم، اور فیصلہ سازی — کی نقل کرنے کے لیے بنائے گئے ہیں۔\n\n### کمپیوٹنگ کے تین اہم دور\n1. **قاعدہ پر مبنی سسٹمز (Rule-Based Systems)**: روایتی پروگرام سخت منطق پر عمل کرتے ہیں ("اگر X ہے تو Y کریں")۔\n2. **شماریاتی مشین لرننگ**: ماڈلز تاریخی ڈیٹا سے پیٹرنز تلاش کرتے ہیں۔\n3. **جنریٹیو فاؤنڈیشن ماڈلز**: گہرے نیورل نیٹ ورکس جو نیا متن، تصاویر اور آڈیو تیار کرتے ہیں۔\n\n### اہم نکات\n- بڑے زبان کے ماڈلز (LLMs) اگلے الفاظ کی احتمالی پیشگوئی کرتے ہیں۔\n- جدید AI انسانی فیصلوں کا متبادل نہیں بلکہ معاون ہے۔`,
            practicePrompt: 'روایتی پروگرامنگ اور جنریٹیو AI میں فرق کو 100 الفاظ میں بیان کریں۔ اپنے روزمرہ کے کاموں میں سے ایک کام کی نشاندہی کریں جسے خودکار بنایا جا سکتا ہے۔',
            quiz: {
              question: 'جدید لارج لینگویج ماڈلز (LLMs) بنیادی طور پر متن کیسے تیار کرتے ہیں؟',
              options: [
                'گوگل پر تلاش کر کے سب سے اوپر والا پیراگراف کاپی کر کے',
                'سیاق و سباق کی بنیاد پر سب سے زیادہ ممکنہ اگلے ٹوکن (لفظ) کی پیشگوئی کر کے',
                'سخت منطقی ضوابط (if/else) کے ذریعے',
                'پہلے سے لکھے گئے جوابات کے ڈیٹا بیس سے'
              ],
              correctIndex: 1,
              explanation: 'LLMs احتمالی ریاضیاتی حساب کے ذریعے سیاق و سباق کے مطابق اگلا لفظ تخلیق کرتے ہیں۔'
            },
            resources: [{ title: 'AI تعارفی گائیڈ (PDF)', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-ai-2',
            slug: 'prompt-engineering-fundamentals-urdu',
            title: '2. پرامپٹ انجینئرنگ کی بنیادی باتیں',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `پرامپٹ انجینئرنگ سے مراد AI ماڈلز کے ساتھ مؤثر انداز میں بات چیت کرنے اور درست نتائج حاصل کرنے کا فن ہے۔ ایک اچھے پرامپٹ میں یہ اجزاء شامل ہونے چاہئیں:\n\n1. **کردار (Role)**: AI کو بتائیں کہ وہ کون ہے (مثلاً: "آپ ایک ماہر استاد ہیں")۔\n2. **موضوع (Context)**: پس منظر کی معلومات فراہم کریں۔\n3. **ٹاسک (Task)**: واضح حکم دیں کہ کیا کرنا ہے۔\n4. **آؤٹ پٹ فارمیٹ (Format)**: بتائیں کہ جواب کس شکل میں چاہیے (بلٹس، جدول، یا پیراگراف)۔`,
            practicePrompt: 'ایک ایسا پرامپٹ لکھیں جو AI کو ہدایت کرے کہ وہ نوکری کی درخواست کے لیے ایک پروفیشنل کور لیٹر لکھے۔',
            quiz: {
              question: 'موثر پرامپٹ میں کون سا جزو سب سے اہم ہے؟',
              options: ['صرف ایک لفظ', 'واضح کردار، سیاق و سباق اور آؤٹ پٹ کی فرمائش', 'صرف تصاویر', 'کمپیوٹر کا پاس ورڈ'],
              correctIndex: 1,
              explanation: 'واضح ہدایات اور پس منظر دینے سے AI انتہائی درست اور مفید جوابات دیتا ہے۔'
            },
            resources: [{ title: 'پرامپٹ ٹیمپلیٹس (Markdown)', url: '#', type: 'Templates' }]
          },
          {
            id: 'l-ur-ai-3',
            slug: 'generative-ai-tools-urdu',
            title: '3. جنریٹیو AI ٹولز کا عملی استعمال',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=jC4v5AS4RIM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `مختلف شعبوں میں جنریٹیو AI ٹولز کا استعمال تیزی سے بڑھ رہا ہے۔ متن کے لیے ChatGPT اور Claude، تصاویر کے لیے Midjourney اور DALL-E، اور کوڈنگ کے لیے GitHub Copilot نمایاں ہیں۔`,
            practicePrompt: 'کسی ایک AI ٹول کی مدد سے اپنے کاروباری خیال کے لیے تین مارکیٹنگ آئیڈیاز تیار کریں۔',
            quiz: {
              question: 'کوڈنگ میں مدد کے لیے کون سا AI ٹول زیادہ مقبول ہے؟',
              options: ['GitHub Copilot', 'MS Paint', 'Notepad', 'Calculator'],
              correctIndex: 0,
              explanation: 'GitHub Copilot ڈویلپرز کو کوڈ لکھنے میں فوری مدد فراہم کرتا ہے۔'
            },
            resources: [{ title: 'ٹول کٹ مینوئل', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-ai-4',
            slug: 'ai-ethics-and-limitations-urdu',
            title: '4. اخلاقیات اور اے آئی کی حدود',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=5p248yoa3oE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `AI کا استعمال کرتے وقت ڈیٹا کی رازداری، کاپی رائٹ، اور غلط معلومات (Hallucinations) جیسی خامیوں کا خیال رکھنا ضروری ہے۔ ہمیں ہمیشہ AI کے نتائج کی خود تصدیق کرنی چاہیے۔`,
            practicePrompt: 'AI کی کسی ایک خامی (مثلاً غلط بیانی) کی مثال دیں اور بتائیں کہ اس سے کیسے بچا جا سکتا ہے۔',
            quiz: {
              question: 'AI میں "ہیلوسینیشن" (Hallucination) سے کیا مراد ہے؟',
              options: [
                'کمپیوٹر کا گرم ہو جانا',
                'AI کا انتہائی پراعتماد انداز میں غلط یا فرضی معلومات فراہم کرنا',
                'انٹرنیٹ کا بند ہو جانا',
                'اسکرین کی روشنی کم ہونا'
              ],
              correctIndex: 1,
              explanation: 'ہیلوسینیشن وہ صورتحال ہے جہاں AI غلط معلومات کو سچ کی طرح پیش کرتا ہے۔'
            },
            resources: [{ title: 'اخلاقی ضابطہ کار', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-ai-5',
            slug: 'future-of-ai-integration-urdu',
            title: '5. مستقبل کا لائحہ عمل اور پراجیکٹ',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=tk5aI8uY-H0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=fKkwjN2kP7s',
            content: `اپنے روزمرہ کے کاموں میں AI کو ضم کرنے کے لیے ایکشن پلان بنائیں۔ آٹومیشن کے ذریعے وقت بچائیں اور اپنی پیداواری صلاحیت کو دوگنا کریں۔`,
            practicePrompt: 'اپنے ہفتہ وار کاموں کا ایک پلان بنائیں جس میں کم از کم 3 کاموں کے لیے AI استعمال کیا گیا ہو۔',
            quiz: {
              question: 'AI کے دور میں کامیابی کے لیے سب سے اہم مہارت کون سی ہے؟',
              options: [
                'صرف کتابیں پڑھنا',
                'مسلسل سیکھنے کی صلاحیت اور نئے ٹولز اپنانا',
                'صرف پرانے طریقے استعمال کرنا',
                'انٹرنیٹ استعمال نہ کرنا'
              ],
              correctIndex: 1,
              explanation: 'نئی ٹیکنالوجی کے ساتھ تیزی سے مطابقت پیدا کرنا کامیابی کی کنجی ہے۔'
            },
            resources: [{ title: 'آخری پراجیکٹ گائیڈ', url: '#', type: 'Guide' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-2',
    slug: 'javascript-fundamentals-urdu',
    title: 'جاوا اسکریپٹ کی بنیادی باتیں (JavaScript Fundamentals in Urdu)',
    description: 'ویب ڈویلپمنٹ کی جان جاوا اسکریپٹ کو آسان اردو میں سیکھیں۔ متغیرات (Variables)، فنکشنز، لوپس، اور DOM مینیپولیشن کی مکمل عملی تربیت۔',
    categoryId: 'cat_web',
    categoryName: 'ویب ڈویلپمنٹ (Web Development)',
    categorySlug: 'web-development',
    difficulty: 'Beginner',
    durationMinutes: 200,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'جاوا اسکریپٹ کی نحو (Syntax) اور متغیرات (let, const) کو سمجھیں',
      'شرطیہ بیانات (if/else) اور لوپس کے ذریعے منطق بنائیں',
      'فنکشنز لکھیں اور کوڈ کو منظم کریں',
      'DOM کی مدد سے ویب پیجز کو متحرک بنائیں',
      'ایونٹ لسنرز کے ذریعے صارف کے تعاملات سنبھالیں'
    ],
    completionRequirements: 'تمام اسباق مکمل کریں، کوڈنگ کی مشقیں حل کریں اور انٹرایکٹو کوئز پاس کریں۔',
    prerequisites: ['HTML اور CSS کی بنیادی واقفیت'],
    instructor: {
      name: 'علی رضا (ترجمہ و تدوین: کوڈنگ اکیڈمی)',
      role: 'فل اسٹیک ڈویلپر اور ٹرینر',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-2',
        title: 'جاوا اسکریپٹ بنیادی ضوابط',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-js-1',
            slug: 'js-variables-and-datatypes-urdu',
            title: '1. متغیرات اور ڈیٹا کی اقسام',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=13gLB6hDHR8',
            content: `جاوا اسکریپٹ میں ڈیٹا کو محفوظ کرنے کے لیے متغیرات (Variables) استعمال کیے جاتے ہیں۔\n\n### اہم کی ورڈز\n- \`let\`: ایسی قیمت کے لیے جو تبدیل ہو سکے۔\n- \`const\`: مستقل قیمت (Constant) کے لیے۔\n\n### مثال:\n\`\`\`javascript\nconst courseName = "Ashiskillrise Urdu";\nlet studentCount = 1500;\nconsole.log(courseName);\n\`\`\``,
            practicePrompt: 'ایک `const` متغیر میں اپنا نام اور ایک `let` متغیر میں اپنی عمر لکھ کر کنسول پر پرنٹ کریں۔',
            quiz: {
              question: 'ایسی قیمت کے لیے کون سا کی ورڈ استعمال ہوتا ہے جو تبدیل نہ ہو سکے؟',
              options: ['let', 'const', 'var', 'function'],
              correctIndex: 1,
              explanation: '`const` کا مطلب کانسٹنٹ ہے جس کی قیمت بعد میں بدلی نہیں جا سکتی۔'
            },
            resources: [{ title: 'JS چیٹ شیٹ', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-js-2',
            slug: 'js-functions-urdu',
            title: '2. جاوا اسکریپٹ فنکشنز',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=IsG4Xd6LlsM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=ajdRvxDWH4w',
            content: `فنکشنز کوڈ کے ایسے بلاکس ہیں جو مخصوص کام انجام دیتے ہیں اور انہیں بار بار استعمال (Reuse) کیا جا سکتا ہے۔\n\n### مثال:\n\`\`\`javascript\nfunction greet(name) {\n  return "خوش آمدید، " + name;\n}\n\`\`\``,
            practicePrompt: 'ایک ایسا فنکشن بنائیں جو دو عدد جمع کرے اور نتیجہ واپس (return) کرے۔',
            quiz: {
              question: 'فنکشن کو ڈیفائن کرنے کے لیے کون سا کی ورڈ استعمال ہوتا ہے؟',
              options: ['function', 'def', 'fun', 'method'],
              correctIndex: 0,
              explanation: 'جاوا اسکریپٹ میں فنکشن بنانے کے لیے `function` کی ورڈ استعمال ہوتا ہے۔'
            },
            resources: [{ title: 'فنکشن گائیڈ', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-js-3',
            slug: 'js-arrays-and-objects-urdu',
            title: '3. ارے اور ابجیکٹس (Arrays & Objects)',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=N8ap4k_1QEQ',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=P0XMXqdgQ_4',
            content: `متعدد ڈیٹا آئٹمز کو ایک ساتھ رکھنے کے لیے ارے (\`Array\`) اور پیچیدہ معلومات کے لیے ابجیکٹس (\`Object\`) استعمال ہوتے ہیں۔\n\n### مثال:\n\`\`\`javascript\nconst user = { name: "احمد", age: 25, active: true };\n\`\`\``,
            practicePrompt: 'تین پھلوں کے ناموں پر مشتمل ایک ارے بنائیں اور دوسرا پھل پرنٹ کریں۔',
            quiz: {
              question: 'جاوا اسکریپٹ ابجیکٹس میں ڈیٹا کس شکل میں محفوظ ہوتا ہے؟',
              options: ['کی-ویلیو پیئر (Key-Value)', 'صرف نمبرز', 'صرف فائلیں', 'صرف تصاویر'],
              correctIndex: 0,
              explanation: 'ابجیکٹس میں کی اور ویلیو کی جوڑی ہوتی ہے جیسے \`{ key: value }\`۔'
            },
            resources: [{ title: 'ارے اور ابجیکٹ نوٹس', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-js-4',
            slug: 'js-dom-manipulation-urdu',
            title: '4. DOM مینیپولیشن',
            durationMinutes: 45,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=oigfaZ5ApsM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=938gWwsf3rQ',
            content: `ڈوم (DOM) کی مدد سے ہم HTML عناصر کو جاوا اسکریپٹ کے ذریعے تبدیل کر سکتے ہیں، نیا مواد شامل کر سکتے ہیں، یا اسٹائل بدل سکتے ہیں۔\n\n### مثال:\n\`\`\`javascript\ndocument.getElementById("title").innerText = "خوش آمدید!";\n\`\`\``,
            practicePrompt: 'ایک بٹن پر کلک کرنے سے پیراگراف کا متن تبدیل کرنے والا کوڈ لکھیں۔',
            quiz: {
              question: 'ایچ ٹی ایم ایل عنصر کو آئی ڈی سے منتخب کرنے کے لیے کون سا میتھڈ ہے؟',
              options: ['getElementById', 'getElementByColor', 'selectTag', 'findId'],
              correctIndex: 0,
              explanation: '`document.getElementById` سب سے عام طریقہ ہے۔'
            },
            resources: [{ title: 'DOM چیٹ شیٹ', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-js-5',
            slug: 'js-async-promises-urdu',
            title: '5. ایسنکرونس جاوا اسکریپٹ (Async/Await)',
            durationMinutes: 50,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=y17RuWkWdn8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=s3w2bF0Gj7g',
            content: `جب ہم سرور سے ڈیٹا (API) حاصل کرتے ہیں تو \`Async/Await\` اور \`Promises\` کا استعمال کیا جاتا ہے تاکہ پروگرام رُکے بغیر کام کرتا رہے۔`,
            practicePrompt: 'ایک سادہ async فنکشن لکھیں جو 1 سیکنڈ کا انتظار (delay) کرے۔',
            quiz: {
              question: 'ایسنکرونس فنکشن کے اندر انتظار کرنے کے لیے کون سا کلیدی لفظ استعمال ہوتا ہے؟',
              options: ['await', 'wait', 'hold', 'stop'],
              correctIndex: 0,
              explanation: '`await` پراسیس مکمل ہونے کا انتظار کرتا ہے۔'
            },
            resources: [{ title: 'Async گائیڈ', url: '#', type: 'Guide' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-3',
    slug: 'python-for-beginners-urdu',
    title: 'پائیتھون برائے مبتدی (Python for Beginners in Urdu)',
    description: 'دنیا کی مقبول ترین پروگرامنگ زبان پائیتھون کو صفر سے ہیرو سطح تک سیکھیں۔ ڈیٹا سائنس، آٹومیشن اور اے آئی کی پہلی سیڑھی۔',
    categoryId: 'cat_prog',
    categoryName: 'پروگرامنگ (Programming)',
    categorySlug: 'programming',
    difficulty: 'Beginner',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'پائیتھون کی آسان نحو (Syntax) اور ڈیٹا ٹائپس سیکھیں',
      'لغوی اور مشروط بیانات (if/elif/else) کا استعمال کریں',
      'لوپس اور فنکشنز کے ذریعے کوڈ کو منظم کریں',
      'فائل ہینڈلنگ اور ایرر کیچنگ سمجھیں',
      'چھوٹے آٹومیشن اسکرپٹس بنائیں'
    ],
    completionRequirements: 'تمام 5 اسباق کے کوئز اور پریکٹس پرامپٹس مکمل کریں۔',
    prerequisites: ['بنیادی کمپیوٹر استعمال کرنے کی صلاحیت'],
    instructor: {
      name: 'محمد بلال',
      role: 'سافٹ ویئر انجینئر اور پائیتھون انسٹرکٹر',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-3',
        title: 'پائیتھون بنیادی کورس',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-py-1',
            slug: 'python-basics-urdu',
            title: '1. پائیتھون تعارف اور ویری ایبلز',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7wnove7K-ZQ',
            content: `پائیتھون اپنی انگریزی جیسی آسان نحو (Syntax) کی وجہ سے دنیا بھر میں مشہور ہے۔\n\n### مثال:\n\`\`\`python\nname = "Ashiskillrise"\nprint("خوش آمدید " + name)\n\`\`\``,
            practicePrompt: 'اپنا نام اور شہر ویری ایبل میں محفوظ کر کے پرنٹ کریں۔',
            quiz: {
              question: 'پائیتھون میں سکرین پر آؤٹ پٹ دکھانے کے لیے کون سا فنکشن استعمال ہوتا ہے؟',
              options: ['print()', 'echo()', 'display()', 'write()'],
              correctIndex: 0,
              explanation: '`print()` فنکشن پائیتھون میں نتائج پرنٹ کرنے کے لیے استعمال ہوتا ہے۔'
            },
            resources: [{ title: 'Python Cheatsheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-py-2',
            slug: 'python-conditionals-urdu',
            title: '2. شرطیہ بیانات (If/Else)',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=gfDE2a79abA',
            content: `پروگرام میں فیصلے کرنے کے لیے \`if\`, \`elif\`, اور \`else\` استعمال ہوتے ہیں۔\n\n### مثال:\n\`\`\`python\nage = 18\nif age >= 18:\n    print("آپ بالغ ہیں")\nelse:\n    print("آپ نابالغ ہیں")\n\`\`\``,
            practicePrompt: 'ایک ایسا کوڈ لکھیں جو چیک کرے کہ آیا کوئی نمبر مثبت ہے یا منفی۔',
            quiz: {
              question: 'پائیتھون میں کوڈ کے بلاک کو ظاہر کرنے کے لیے کیا استعمال ہوتا ہے؟',
              options: ['انڈینٹیشن (Indentation / Spaces)', 'بریکٹس {}', 'سیمی کولن ;', 'کوئی نہیں'],
              correctIndex: 0,
              explanation: 'پائیتھون انڈینٹیشن پر انحصار کرتی ہے۔'
            },
            resources: [{ title: 'Conditional Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-py-3',
            slug: 'python-loops-urdu',
            title: '3. لوپس (For & While Loops)',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=6iF8Xb7Z3wQ',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=TqPzwenhMj0',
            content: `بار بار دہرائے جانے والے کاموں کے لیے \`for\` اور \`while\` لوپ استعمال کیے جاتے ہیں۔\n\n### مثال:\n\`\`\`python\nfor i in range(5):\n    print(i)\n\`\`\``,
            practicePrompt: '1 سے 10 تک کے اعداد کا مجموعہ نکالنے والا لوپ لکھیں۔',
            quiz: {
              question: 'مخصوص رینج میں دہرانے کے لیے کون سا لوپ بہترین ہے؟',
              options: ['for', 'while', 'if', 'def'],
              correctIndex: 0,
              explanation: '`for` لوپ آئٹمز یا رینج پر iterate کرنے کے لیے استعمال ہوتا ہے۔'
            },
            resources: [{ title: 'Loops Cheatsheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-py-4',
            slug: 'python-functions-urdu',
            title: '4. پائیتھون فنکشنز',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=daefaLgNkw0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=JxzZxdPR-48',
            content: `فنکشن بنانے کے لیے \`def\` کی ورڈ استعمال ہوتا ہے۔\n\n### مثال:\n\`\`\`python\ndef square(num):\n    return num * num\n\`\`\``,
            practicePrompt: 'ایک فنکشن لکھیں جو درجہ حرارت کو فارنہائیٹ سے سیلسیس میں تبدیل کرے۔',
            quiz: {
              question: 'پائیتھون میں فنکشن شروع کرنے کا کی ورڈ کیا ہے؟',
              options: ['def', 'function', 'fun', 'define'],
              correctIndex: 0,
              explanation: '`def` کا مخفف define ہے جس سے فنکشن بنتا ہے۔'
            },
            resources: [{ title: 'Functions Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-py-5',
            slug: 'python-files-urdu',
            title: '5. فائل ہینڈلنگ اور پراجیکٹ',
            durationMinutes: 45,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `پائیتھون سے ٹیکسٹ فائلیں پڑھنا اور لکھنا بہت آسان ہے۔ \`open()\`, \`read()\`, اور \`write()\` فنکشنز استعمال ہوتے ہیں۔`,
            practicePrompt: 'ایک نوٹ فائل بنائیں اور اس میں اپنا پسندیدہ قول محفوظ کریں۔',
            quiz: {
              question: 'فائل کو پڑھنے کے لیے \`open()\` میں کون سا موڈ استعمال ہوتا ہے؟',
              options: ["'r'", "'w'", "'x'", "'a'"],
              correctIndex: 0,
              explanation: "'r' کا مطلب read موڈ ہے۔"
            },
            resources: [{ title: 'File Handling PDF', url: '#', type: 'PDF' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-4',
    slug: 'excel-for-beginners-urdu',
    title: 'مائیکروسافٹ ایکسل برائے مبتدی (Excel for Beginners in Urdu)',
    description: 'ڈیٹا مینجمنٹ، فارمولز (VLOOKUP, XLOOKUP, IF)، پیوٹ ٹیبلز اور پروفیشنل چارٹس بنانا اردو زبان میں سیکھیں۔',
    categoryId: 'cat_office',
    categoryName: 'مائیکروسافٹ آفس (Microsoft Office)',
    categorySlug: 'microsoft-office',
    difficulty: 'Beginner',
    durationMinutes: 170,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'اچھی شیٹ بنانا اور ڈیٹا داخل کرنا',
      'بنیادی ریاضیاتی فارمولے (SUM, AVERAGE, COUNT)',
      'شرطیہ فارمولے (IF, VLOOKUP)',
      'پیوٹ ٹیبل کی مدد سے ڈیٹا کا خلاصہ نکالنا',
      'پروفیشنل گراف اور چارٹس بنانا'
    ],
    completionRequirements: 'تمام اسباق مکمل کریں اور عملی مشقیں حل کریں۔',
    prerequisites: ['بنیادی کمپیوٹر کی واقفیت'],
    instructor: {
      name: 'عمر فاروق',
      role: 'ڈیٹا اینالسٹ اور ٹرینر',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-4',
        title: 'ایکسل بنیادی کورس',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-ex-1',
            slug: 'excel-basics-urdu',
            title: '1. ایکسل انٹرفیس اور بنیادی فارمولز',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=Vl0H-qTclOg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=V4mY2w1bZ2w',
            content: `مائیکروسافٹ ایکسل دنیا کا مقبول ترین اسپریڈشیٹ سافٹ ویئر ہے۔ اس میں روزمرہ کے حساب کتاب اور ڈیٹا کی ترتیب دی جاتی ہے۔\n\n### اہم فارمولا:\n\`=SUM(A1:A10)\``,
            practicePrompt: 'ایکسل شیٹ میں 5 اشیاء کی قیمتیں لکھ کر SUM فارمولے سے کل رقم معلوم کریں۔',
            quiz: {
              question: 'ایکسل میں کسی بھی فارمولے کی شروعات کس علامت سے ہوتی ہے؟',
              options: ['=', '+', '-', '#'],
              correctIndex: 0,
              explanation: 'تمام فارمولے برابر (=) کی علامت سے شروع ہوتے ہیں۔'
            },
            resources: [{ title: 'Excel Shortcuts PDF', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-ex-2',
            slug: 'excel-if-vlookup-urdu',
            title: '2. VLOOKUP اور IF فارمولے',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=8L1OVkw2ZQ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Kz6T_wT7k7Y',
            content: `\`VLOOKUP\` کی مدد سے آپ بڑے ڈیٹا بیس میں سے مطلوبہ معلومات تلاش کر سکتے ہیں جبکہ \`IF\` شرطیہ نتائج نکالتا ہے۔`,
            practicePrompt: 'ایک شیٹ میں طلباء کے نمبروں کی بنیاد پر پاس یا فیل کا نتیجہ نکالنے کے لیے IF فارمولا استعمال کریں۔',
            quiz: {
              question: 'VLOOKUP کیا کام کرتا ہے؟',
              options: ['ڈیٹا کو عمودی (vertical) انداز میں تلاش کرتا ہے', 'پرنٹ نکالتا ہے', 'تصویر بناتا ہے', 'پاس ورڈ لگاتا ہے'],
              correctIndex: 0,
              explanation: 'VLOOKUP کا مطلب Vertical Lookup ہے۔'
            },
            resources: [{ title: 'VLOOKUP گائیڈ', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-ex-3',
            slug: 'excel-pivot-tables-urdu',
            title: '3. پیوٹ ٹیبل (Pivot Tables)',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=rwbho0CgEAE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `پیوٹ ٹیبل ہزاروں سطروں پر مشتمل ڈیٹا کا چند سیکنڈ میں خلاصہ اور تجزیہ کرنے کے لیے بہترین ٹول ہے۔`,
            practicePrompt: 'فروخت کے ڈیٹا پر پیوٹ ٹیبل لگا کر ماہانہ سیلز کا خلاصہ تیار کریں۔',
            quiz: {
              question: 'پیوٹ ٹیبل کا بنیادی مقصد کیا ہے؟',
              options: ['بڑے ڈیٹا کا فوری تجزیہ اور خلاصہ', 'گیم کھیلنا', 'ای میل بھیجنا', 'ویڈیو ایڈیٹنگ'],
              correctIndex: 0,
              explanation: 'پیڤوٹ ٹیبل ڈیٹا کو سمرائز کرنے میں لاجواب ہے۔'
            },
            resources: [{ title: 'Pivot Table Cheat Sheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-ex-4',
            slug: 'excel-charts-urdu',
            title: '4. چارٹس اور گراف',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=m13x2a5mK38',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `ڈیٹا کو بصری شکل (Visual) میں دکھانے کے لیے بار چارٹ، پائی چارٹ اور لائن گراف استعمال کیے جاتے ہیں۔`,
            practicePrompt: 'سالانہ بجٹ کا پائی چارٹ بنائیں۔',
            quiz: {
              question: 'حصص یا تناسب دکھانے کے لیے کون سا چارٹ سب سے بہتر ہے؟',
              options: ['پائی چارٹ (Pie Chart)', 'لائن چارٹ', 'اسٹاک چارٹ', 'ریڈار چارٹ'],
              correctIndex: 0,
              explanation: 'پائی چارٹ کل کا حصہ دکھانے کے لیے بہترین ہے۔'
            },
            resources: [{ title: 'Charts Design Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-ex-5',
            slug: 'excel-automation-urdu',
            title: '5. ڈیٹا کلیننگ اور آخری پراجیکٹ',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=9RUeONbL0eA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Edsxf_NBFrw',
            content: `ڈیٹا میں موجود غلطیوں کو ٹھیک کرنا، ڈوپلیکیٹس ہٹانا، اور پروفیشنل رپورٹ تیار کرنا سیکھیں۔`,
            practicePrompt: 'ایک گندی ایکسل شیٹ کو صاف کر کے قابلِ پیشکش رپورٹ بنائیں۔',
            quiz: {
              question: 'ڈوپلیکیٹ ڈیٹا ختم کرنے کے لیے کون سا آپشن استعمال ہوتا ہے؟',
              options: ['Remove Duplicates', 'Delete Sheet', 'Save As', 'Print'],
              correctIndex: 0,
              explanation: 'Data ٹیب میں Remove Duplicates موجود ہوتا ہے۔'
            },
            resources: [{ title: 'Excel Final Project', url: '#', type: 'Project' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-5',
    slug: 'ui-ux-design-fundamentals-urdu',
    title: 'یو آئی / یو ایکس ڈیزائن کے بنیادی اصول (UI/UX Design in Urdu)',
    description: 'صارف کے تجربے (UX) اور انٹرفیس ڈیزائن (UI) کے اصول، وائر فریمٹنگ، اور فگما (Figma) کا عملی استعمال اردو میں۔',
    categoryId: 'cat_design',
    categoryName: 'گرافک ڈیزائن (Graphic Design)',
    categorySlug: 'graphic-design',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'UI اور UX کا بنیادی فرق سمجھیں',
      'صارف کی ضروریات (User Persona) معلوم کریں',
      'فگما (Figma) سافٹ ویئر کا تعارف اور استعمال',
      'وائر فریم اور پروٹو ٹائپ بنانا',
      'کلر تھیوری اور ٹائپوگرافی کے اصول'
    ],
    completionRequirements: 'تمام اسباق مکمل کریں اور فگما پر ایک موبائل ایپ کا پروٹو ٹائپ ڈیزائن کریں۔',
    prerequisites: ['بنیادی کمپیوٹر کی مہارت'],
    instructor: {
      name: 'صبا خان',
      role: 'پروڈکٹ ڈیزائنر اور UI/UX کنسلٹنٹ',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-5',
        title: 'یو آئی / یو ایکس کورس',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-ui-1',
            slug: 'what-is-ux-urdu',
            title: '1. یو آئی اور یو ایکس میں فرق',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `**UX (User Experience)** سے مراد صارف کا مجموعی تجربہ اور احساس ہے جبکہ **UI (User Interface)** سے مراد ایپ کی ظاہری شکل، رنگ اور بٹنز ہیں۔`,
            practicePrompt: 'کسی مقبول ایپ (مثلاً واٹس ایپ) کی ایک خامی اور خوبی UX کے لحاظ سے تحریر کریں۔',
            quiz: {
              question: 'UX کا تعلق بنیادی طور پر کس چیز سے ہے؟',
              options: ['صارف کے مجموعی تجربے اور آسانی سے', 'صرف ڈیسک ٹاپ وال پیپر سے', 'انٹرنیٹ کی رفتار سے', 'پاس ورڈ کی لمبائی سے'],
              correctIndex: 0,
              explanation: 'UX صارف کی آسانی اور اطمینان کو یقینی بناتا ہے۔'
            },
            resources: [{ title: 'UX Basics PDF', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-ui-2',
            slug: 'figma-intro-urdu',
            title: '2. فگما (Figma) کا تعارف',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=sByzHoiYFX0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `فگما دنیا کا سب سے مقبول کلاؤڈ بیسڈ ڈیزائن ٹول ہے۔ اس میں ٹیمیں مل کر ایک ہی وقت میں ڈیزائن پر کام کر سکتی ہیں۔`,
            practicePrompt: 'فگما میں اکاؤنٹ بنائیں اور ایک نئی ڈیزائن فائل کھولیں۔',
            quiz: {
              question: 'فگما کہاں پر رن ہوتا ہے؟',
              options: ['براؤزر اور ایپ دونوں میں', 'صرف فلاپی ڈسک پر', 'صرف کمانڈ پرامپٹ پر', 'پرانے کیلکولیٹر پر'],
              correctIndex: 0,
              explanation: 'فگما براؤزر اور ڈیسک ٹاپ دونوں پر دستیاب ہے۔'
            },
            resources: [{ title: 'Figma Shortcuts', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-ui-3',
            slug: 'wireframing-urdu',
            title: '3. وائر فریم اور لے آؤٹ',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=a5KYlHNKQB8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            content: `ڈیزائن شروع کرنے سے پہلے کاغذ یا سافٹ ویئر پر خاکہ (Wireframe) بنانا پراجیکٹ کو کامیاب بناتا ہے۔`,
            practicePrompt: 'ایک لاگ ان سکرین کا سادہ وائر فریم بنائیں۔',
            quiz: {
              question: 'وائر فریم کا بنیادی مقصد کیا ہے؟',
              options: ['بنیادی ڈھانچہ اور لے آؤٹ طے کرنا', 'آخری رنگ بھرنا', 'کوڈنگ کرنا', 'مارکیٹنگ کرنا'],
              correctIndex: 0,
              explanation: 'وائر فریم بغیر رنگوں کے لے آؤٹ کو واضح کرتا ہے۔'
            },
            resources: [{ title: 'Wireframe Templates', url: '#', type: 'Template' }]
          },
          {
            id: 'l-ur-ui-4',
            slug: 'color-and-typography-urdu',
            title: '4. رنگوں کا انتخاب اور ٹائپوگرافی',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=_2LLXnUdUIc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `اچھے ڈیزائن میں 60-30-10 کا کلر رول اور پڑھنے میں آسان فونٹس (Typography) استعمال کیے جاتے ہیں۔`,
            practicePrompt: 'کسی بھی ایپ کے لیے 3 رنگوں کا پرائمری اور سیکنڈری پیلیٹ منتخب کریں۔',
            quiz: {
              question: 'ڈیزائن میں 60-30-10 اصول کس چیز کے لیے ہے؟',
              options: ['رنگوں کے تناسب کے لیے', 'صفحات کی تعداد کے لیے', 'فانٹ سائز کے لیے', 'رفتار کے لیے'],
              correctIndex: 0,
              explanation: 'یہ کلر بیلنس کا بہترین اصول ہے۔'
            },
            resources: [{ title: 'Color Theory Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-ui-5',
            slug: 'prototyping-and-testing-urdu',
            title: '5. پروٹو ٹائپ اور ٹیسٹنگ',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=YqQx75OPWA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            content: `بٹنز کو آپس میں جوڑ کر کلک ایبل پروٹو ٹائپ بنائیں اور صارفین سے ٹیسٹ کروائیں۔`,
            practicePrompt: 'ایک بٹن کو کلک کرنے پر دوسری سکرین پر جانے کا اینیمیشن فگما میں سیٹ کریں۔',
            quiz: {
              question: 'پروٹو ٹائپنگ کا کیا فائدہ ہے؟',
              options: ['اصلی ایپ کی طرح کام کرنے کا نمونہ مل جاتا ہے', 'انٹرنیٹ تیز ہو جاتا ہے', 'بجلی بچتی ہے', 'کوئی فائدہ نہیں'],
              correctIndex: 0,
              explanation: 'پروٹو ٹائپ سے صارف کے تجربے کا اندازہ ہوتا ہے۔'
            },
            resources: [{ title: 'UI Final Checklist', url: '#', type: 'Checklist' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-6',
    slug: 'freelancing-and-career-urdu',
    title: 'فری لانسنگ اور کیریئر کی ترقی (Freelancing & Career in Urdu)',
    description: 'اپنے ہنر کو کیش کروائیں! اپ ورک (Upwork)، فائیور (Fiverr) پر پروفائل بنانے، کلائنٹس سے بات چیت اور کامیاب فری لانسر بننے کے طریقے اردو میں۔',
    categoryId: 'cat_freelance',
    categoryName: 'فری لانسنگ (Freelancing)',
    categorySlug: 'freelancing',
    difficulty: 'Beginner',
    durationMinutes: 160,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'فری لانسنگ کی دنیا کا تعارف اور پلیٹ فارمز کا انتخاب',
      'پاورفل پروفائل اور گِگ (Gig) بنانا',
      'پرپوزل لکھنے کا فن اور کلائنٹ کمیونیکیشن',
      'پراجیکٹ مینجمنٹ اور وقت کی پابندی',
      'مناسب ریٹ طے کرنا اور ادائیگی کے طریقے'
    ],
    completionRequirements: 'تمام 5 اسباق مکمل کریں اور ایک بہترین فری لانس پروپوزل لکھیں۔',
    prerequisites: ['کوئی بھی ایک ہنر (جیسے لکھائی، ڈیزائن یا کوڈنگ)'],
    instructor: {
      name: 'کامران اکمل',
      role: 'فری لانس کنسلٹنٹ اور بزنس مینٹور',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-6',
        title: 'فری لانسنگ ماسٹر کلاس',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-fr-1',
            slug: 'freelancing-intro-urdu',
            title: '1. فری لانسنگ کا آغاز کیسے کریں؟',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `فری لانسنگ میں آپ اپنے باس خود ہوتے ہیں۔ اپ ورک، فائیور اور لنکڈ ان جیسے پلیٹ فارمز پر اپنی خدمات پیش کی جاتی ہیں۔`,
            practicePrompt: 'اپنے ہنر کی فہرست بنائیں جن کی آپ فری لانس سروس دے سکتے ہیں۔',
            quiz: {
              question: 'فری لانسنگ میں کامیابی کے لیے سب سے اہم چیز کیا ہے؟',
              options: ['معیاری کام اور وقت کی پابندی', 'صرف مہنگا کمپیوٹر', 'دفتر کا ہونا', 'قسمت'],
              correctIndex: 0,
              explanation: 'کلائنٹ کا اعتماد اور معیاری کام ہی فری لانسر کو کامیاب بناتا ہے۔'
            },
            resources: [{ title: 'Freelance Starter Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-fr-2',
            slug: 'winning-profile-urdu',
            title: '2. دلکش پروفائل اور پورٹ فولیو',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=uC0_kZ3y9Y0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `آپ کی پروفائل آپ کا پہلا تاثر ہے۔ پروفیشنل فوٹو، زبردست بائیو اور ماضی کے کام کا پورٹ فولیو شامل کریں۔`,
            practicePrompt: 'اپنے بارے میں 150 الفاظ کا ایک پرکشش بائیو (Bio) لکھیں۔',
            quiz: {
              question: 'پرافائل بائیو میں کس چیز پر توجہ دینی چاہیے؟',
              options: ['کلائنٹ کو آپ سے کیا فائدہ پہنچ سکتا ہے', 'صرف اپنی ذاتی کہانیاں', 'شادی کی تاریخ', 'پسندیدہ کھانے'],
              correctIndex: 0,
              explanation: 'ہمیشہ کلائنٹ کے مسئلے کے حل پر بات کریں۔'
            },
            resources: [{ title: 'Bio Templates', url: '#', type: 'Templates' }]
          },
          {
            id: 'l-ur-fr-3',
            slug: 'writing-proposals-urdu',
            title: '3. کلائنٹ کو قائل کرنے والا پروپوزل',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=6h2e6kZ4Q7c',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `کاپی پیسٹ پروپوزل کبھی نہ بھیجیں۔ ہمیشہ کلائنٹ کی جاب پوسٹ کو غور سے پڑھ کر اس کے مسئلے کا حل پیش کریں۔`,
            practicePrompt: 'ایک فرضی جاب کے لیے 100 الفاظ کا زبردست پروپوزل لکھیں۔',
            quiz: {
              question: 'اچھے پروپوزل کی کیا نشانی ہے؟',
              options: ['وہ کلائنٹ کے مخصوص مسئلے پر بات کرتا ہے', 'وہ سب سے لمبا ہوتا ہے', 'اس میں گالیاں ہوتی ہیں', 'وہ صرف قیمت پوچھتا ہے'],
              correctIndex: 0,
              explanation: 'کلائنٹ کو محسوس ہونا چاہیے کہ آپ نے اس کی پوسٹ پڑھی ہے۔'
            },
            resources: [{ title: 'Proposal Swipe File', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-fr-4',
            slug: 'client-communication-urdu',
            title: '4. کلائنٹ کمیونیکیشن اور گفت و شنید',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=7Gq9m2q5W5o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `خوش اخلاقی، بروقت جواب دینا اور پروفیشنل رویہ کلائنٹس کو ہمیشہ کے لیے آپ کا بنادیتا ہے۔`,
            practicePrompt: 'اگر کلائنٹ کام میں تبدیلی مانگے تو اس کا شائستہ جواب تحریر کریں۔',
            quiz: {
              question: 'کلائنٹ کی طرف سے تاخیر یا مشکل فرمائش پر کیا رویہ ہونا چاہیے؟',
              options: ['صبر اور پروفیشنل بات چیت', 'غصہ کرنا', 'کام چھوڑ دینا', 'جواب نہ دینا'],
              correctIndex: 0,
              explanation: 'پروفیشنلزم ہر مشکل صورتحال کو سنبھال لیتا ہے۔'
            },
            resources: [{ title: 'Communication Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-fr-5',
            slug: 'pricing-and-growth-urdu',
            title: '5. قیمت طے کرنا اور طویل مدتی ترقی',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `شروع میں مناسب ریٹ رکھیں اور تجربہ بڑھنے کے ساتھ اپنی قیمت میں اضافہ کریں۔ ریویوز کی اہمیت بہت زیادہ ہے۔`,
            practicePrompt: 'اپنے فی گھنٹہ ریٹ (Hourly Rate) کا حساب لگانے کا فارمولا لکھیں۔',
            quiz: {
              question: 'کام مکمل ہونے کے بعد کلائنٹ سے کیا درخواست کرنی چاہیے؟',
              options: ['پوزیٹیو فیڈ بیک اور ریویو کی', 'مزید پیسوں کی', 'کوئی بات نہیں', 'شکایت کی'],
              correctIndex: 0,
              explanation: 'اچھے ریویوز پروفائل کو مضبوط کرتے ہیں۔'
            },
            resources: [{ title: 'Pricing Calculator', url: '#', type: 'Sheet' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-7',
    slug: 'digital-marketing-mastery-urdu',
    title: 'ڈیجیٹل مارکیٹنگ کی مہارت (Digital Marketing in Urdu)',
    description: 'سوشل میڈیا مارکیٹنگ، ایس ای او (SEO)، فیس بک اشتہارات اور ای میل مارکیٹنگ کے ذریعے کاروبار کو فروغ دینا سیکھیں۔',
    categoryId: 'cat_mktg',
    categoryName: 'ڈیجیٹل مارکیٹنگ (Digital Marketing)',
    categorySlug: 'digital-marketing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'ڈیجیٹل مارکیٹنگ کے بنیادی اصول اور حکمت عملی',
      'سرچ انجن آپٹیمائزیشن (SEO) کی بنیادیں',
      'فیس بک اور انسٹاگرام اشتہارات (Meta Ads)',
      'ای میل مارکیٹنگ کی کمپینز چلانا',
      'گوگل اینالیٹکس سے نتائج کا تجزیہ کرنا'
    ],
    completionRequirements: 'تمام اسباق مکمل کریں اور ایک ڈیجیٹل مارکیٹنگ پلان تیار کریں۔',
    prerequisites: ['سوشل میڈیا کا بنیادی استعمال'],
    instructor: {
      name: 'شزیہ پروین',
      role: 'ڈیجیٹل مارکیٹنگ اسٹریٹیجسٹ',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-7',
        title: 'ڈیجیٹل مارکیٹنگ کورس',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-dm-1',
            slug: 'digital-marketing-intro-urdu',
            title: '1. ڈیجیٹل مارکیٹنگ کا تعارف',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=n4p7Koy0ZqE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bixR-KIE36o',
            content: `انٹرنیٹ کے ذریعے اپنے پروڈکٹ یا سروس کو درست ہدف (Target Audience) تک پہنچانے کا نام ڈیجیٹل مارکیٹنگ ہے۔`,
            practicePrompt: 'کسی پروڈکٹ کے لیے مثالی گاہک (Buyer Persona) کی خصلتیں لکھیں۔',
            quiz: {
              question: 'ڈیجیٹل مارکیٹنگ کا سب سے بڑا فائدہ کیا ہے؟',
              options: ['صحیح گاہک کو کم خرچ میں نشانہ بنانا', 'صرف اخبار میں اشتہار دینا', 'ٹی وی خریدنا', 'کوئی فائدہ نہیں'],
              correctIndex: 0,
              explanation: 'ڈیجیٹل مارکیٹنگ میں ٹارগেٹنگ انتہائی درست ہوتی ہے۔'
            },
            resources: [{ title: 'Marketing Planner', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-dm-2',
            slug: 'seo-basics-urdu',
            title: '2. ایس ای او (SEO) کی بنیادی باتیں',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=h9ZmMb_9pWk',
            content: `گوگل پر اپنی ویب سائٹ کو پہلے صفحے پر لانے کے لیے ایس ای او (Search Engine Optimization) ضروری ہے۔`,
            practicePrompt: 'اپنی ویب سائٹ کے لیے 5 اہم کی ورڈز تلاش کریں۔',
            quiz: {
              question: 'SEO کا کیا مقصد ہے؟',
              options: ['گوگل پر مفت اور ارگینک ٹریفک حاصل کرنا', 'اشتہارات خریدنا', 'ویب سائٹ بند کرنا', 'ڈومین بدلنا'],
              correctIndex: 0,
              explanation: 'SEO سے ویب سائٹ کی گوگل رینکنگ بہتر ہوتی ہے۔'
            },
            resources: [{ title: 'SEO Checklist', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-dm-3',
            slug: 'social-media-ads-urdu',
            title: '3. سوشل میڈیا اشتہارات (Meta Ads)',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `فیس بک اور انسٹاگرام ایڈز مینیجر کے ذریعے آپ مخصوص عمر، شہر اور شوق رکھنے والے لوگوں کو اشتہار دکھا سکتے ہیں۔`,
            practicePrompt: 'ایک اشتہار کا عنوان اور مختصر متن (Ad Copy) تحریر کریں۔',
            quiz: {
              question: 'فیس بک پر اشتہار چلانے کے لیے کون سا ٹول استعمال ہوتا ہے؟',
              options: ['Ads Manager', 'MS Word', 'Calculator', 'Paint'],
              correctIndex: 0,
              explanation: 'Meta Ads Manager اشتہارات کو کنٹرول کرتا ہے۔'
            },
            resources: [{ title: 'Ad Copy Templates', url: '#', type: 'Templates' }]
          },
          {
            id: 'l-ur-dm-4',
            slug: 'email-marketing-urdu',
            title: '4. ای میل مارکیٹنگ کمپین',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=2Vj0n2A8fGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `گراہکوں کے ساتھ طویل تعلق قائم کرنے اور فروخت بڑھانے کے لیے ای میل نیوز لیٹر زبردست ذریعہ ہیں۔`,
            practicePrompt: 'ایک استقبالیہ ای میل (Welcome Email) کا مسودہ تیار کریں۔',
            quiz: {
              question: 'ای میل مارکیٹنگ کا اہم فائدہ کیا ہے؟',
              options: ['گراہکوں کے ساتھ براہ راست اور ذاتی رابطہ', 'صرف اسپام بھیجنا', 'کاغذ ضائع کرنا', 'کچھ نہیں'],
              correctIndex: 0,
              explanation: 'ای میل براہ راست صارف کے ان باکس میں جاتی ہے۔'
            },
            resources: [{ title: 'Email Swipe File', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-dm-5',
            slug: 'analytics-and-strategy-urdu',
            title: '5. تجزیہ اور مارکیٹنگ پلان',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `اپنی مارکیٹنگ مہم کے نتائج (ROI اور Conversion Rate) کو ناپیں اور بہتری لائیں۔`,
            practicePrompt: 'ایک ماہ کی مارکیٹنگ رپورٹ کا خاکہ بنائیں۔',
            quiz: {
              question: 'ROI سے کیا مراد ہے؟',
              options: ['रिटर्न ऑन इन्वेस्टमेंट (Return on Investment)', 'ریٹ آف انٹرسٹ', 'رنگوں کا انتخاب', 'کوئی نہیں'],
              correctIndex: 0,
              explanation: 'ROI لگائی گئی رقم پر منافع کا تناسب ظاہر کرتا ہے۔'
            },
            resources: [{ title: 'Marketing Strategy Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-8',
    slug: 'content-writing-urdu',
    title: 'مواد کی لکھائی اور کاپی رائٹنگ (Content Writing in Urdu)',
    description: 'بلاگز، آرٹیکلز اور فروخت بڑھانے والے اشتہاری جملے (Copywriting) لکھنے کا فن اردو زبان میں سیکھیں۔',
    categoryId: 'cat_writing',
    categoryName: 'مواد کی لکھائی (Content Writing)',
    categorySlug: 'content-writing',
    difficulty: 'Beginner',
    durationMinutes: 150,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'موثر اور جاندار لکھائی کے بنیادی اصول',
      'AIDA اور PAS کاپی رائٹنگ فارمولے',
      'بلاگ پوسٹس اور آرٹیکل کی ساخت',
      'خود کو درست کرنے (Self-Editing) کا ہنر',
      'قارئین کو متوجہ کرنے والی سرخیاں (Headlines)'
    ],
    completionRequirements: 'تمام اسباق مکمل کریں اور ایک پروڈکٹ کاپی لکھیں۔',
    prerequisites: ['اردو زبان پر عبور اور لکھنے کا شوق'],
    instructor: {
      name: 'تنویر احمد',
      role: 'سینئر کاپی رائٹر اور ایڈیٹر',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-8',
        title: 'مواد کی لکھائی کورس',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-cw-1',
            slug: 'content-writing-intro-urdu',
            title: '1. لکھائی کے بنیادی اصول',
            durationMinutes: 25,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=Ai2wN7Wq9bU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            content: `اچھی لکھائی وہ ہے جو پڑھنے والے کے دل میں اتر جائے۔ جملے چھوٹے رکھیں اور غیر ضروری الفاظ سے پرہیز کریں۔`,
            practicePrompt: 'کسی ایک عام موضوع پر 5 دلکش جملے لکھیں۔',
            quiz: {
              question: 'اچھی لکھائی کی کیا نشانی ہے؟',
              options: ['سادہ اور واضح الفاظ جو آسانی سے سمجھ آئیں', 'بہت مشکل اور پیچیدہ الفاظ', 'صرف انگریزی الفاظ', 'خالی صفحات'],
              correctIndex: 0,
              explanation: 'وضاحت اور سادگی اچھے مصنف کی پہچان ہے۔'
            },
            resources: [{ title: 'Writing Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-cw-2',
            slug: 'aida-pas-formulas-urdu',
            title: '2. AIDA اور PAS فارمولے',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=d9Tp7CHniUs',
            content: `**AIDA**: توجہ (Attention)، دلچسپی (Interest)، خواہش (Desire)، عمل (Action).\n**PAS**: مسئلہ (Problem)، اضطراب (Agitation)، حل (Solution).`,
            practicePrompt: 'PAS فارمولے کے تحت کسی پروڈکٹ کی تشہیر کے لیے 80 الفاظ لکھیں۔',
            quiz: {
              question: 'AIDA میں "A" کا کیا مطلب ہے؟',
              options: ['Attention (توجہ حاصل کرنا)', 'Apple', 'Auto', 'Action only'],
              correctIndex: 0,
              explanation: 'پہلا قدم قاری کی توجہ حاصل کرنا ہے۔'
            },
            resources: [{ title: 'Copywriting Templates', url: '#', type: 'Templates' }]
          },
          {
            id: 'l-ur-cw-3',
            slug: 'blog-structure-urdu',
            title: '3. بلاگ پوسٹ کی ساخت',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=jC4v5AS4RIM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `زبردست سرخی (Headline)، تعارف، سب ہیڈنگز اور اختتام پر کال ٹو ایکشن (CTA) بلاگ کو بہترین بناتے ہیں۔`,
            practicePrompt: 'ایک صحت مند طرزِ زندگی پر بلاگ کی سرخی اور 3 سب ہیڈنگز لکھیں۔',
            quiz: {
              question: 'بلاگ پوسٹ میں سب ہیڈنگز (Subheadings) کا کیا فائدہ ہے؟',
              options: ['پڑھنے میں آسانی اور قاری کی دلچسپی برقرار رہتی ہے', 'صفحات ضائع ہوتے ہیں', 'کوئی فائدہ نہیں', 'رنگ بدلتے ہیں'],
              correctIndex: 0,
              explanation: 'سب ہیڈنگز سے مضمون کو اسکین کرنا آسان ہوجاتا ہے۔'
            },
            resources: [{ title: 'Blog Outline Planner', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-cw-4',
            slug: 'self-editing-urdu',
            title: '4. خود کو درست کرنا (Self-Editing)',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `پہلا مسودہ (Draft) جذبے سے لکھیں لیکن ایڈیٹنگ دماغ سے کریں۔ غیر ضروری الفاظ کو بے دردی سے کاٹ دیں۔`,
            practicePrompt: 'ایک 100 الفاظ کے پیراگراف سے 30 فیصد غیر ضروری الفاظ کم کریں۔',
            quiz: {
              question: 'ایڈیٹنگ کا بنیادی اصول کیا ہے؟',
              options: ['غیر ضروری اور فضول الفاظ کا خاتمہ کرنا', 'مزید الفاظ بڑھانا', 'فانٹس تبدیل کرنا', 'فون بند کرنا'],
              correctIndex: 0,
              explanation: 'کم الفاظ میں زیادہ بات کہنا اچھی ایڈیٹنگ ہے۔'
            },
            resources: [{ title: 'Editing Checklist', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-cw-5',
            slug: 'seo-writing-urdu',
            title: '5. ایس ای او رائٹنگ اور آخری پراجیکٹ',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2ePf9rue1Ao',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `کی ورڈز کا قدرتی استعمال اور قاری کی نیت (Search Intent) کو مدنظر رکھ کر مضمون لکھیں۔`,
            practicePrompt: 'ایک ایس ای او فرینڈلی آرٹیکل کا خاکہ (Outline) تیار کریں۔',
            quiz: {
              question: 'کی ورڈ اسٹفنگ (Keyword Stuffing) سے کیا نقصان ہوتا ہے؟',
              options: ['قارئین کا اعتماد ختم ہوتا ہے اور گوگل پینلٹی کرتا ہے', 'فائدہ ہوتا ہے', 'کچھ نہیں ہوتا', 'رفتار بڑھتی ہے'],
              correctIndex: 0,
              explanation: 'غیر قدرتی طور پر الفاظ دہرانے سے رینکنگ گر جاتی ہے۔'
            },
            resources: [{ title: 'SEO Writing Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-9',
    slug: 'web-development-basics-urdu',
    title: 'ویب ڈویلپمنٹ کے بنیادی اصول (Web Dev Basics in Urdu)',
    description: 'HTML5 اور CSS3 کے ذریعے خوبصورت، ریسپانسر اور جدید ویب سائٹس بنانے کا مکمل عملی کورس اردو میں۔',
    categoryId: 'cat_web',
    categoryName: 'ویب ڈویلپمنٹ (Web Development)',
    categorySlug: 'web-development',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'HTML5 کے بنیادی ٹیگز اور اسٹرکچر کو سمجھیں',
      'CSS3 کے ذریعے اسٹائلنگ اور رنگ بھرنا',
      'ف্লেکس باکس (Flexbox) اور گریڈ (Grid) لے آؤٹ',
      'موبائل فرینڈلی (Responsive) ویب ڈیزائن',
      'اپنی پہلی پورٹ فولیو ویب سائٹ لائیو کرنا'
    ],
    completionRequirements: 'تمام اسباق مکمل کریں اور ایک مکمل ویب سائٹ کا کوڈ جمع کروائیں۔',
    prerequisites: ['بنیادی کمپیوٹر کی واقفیت'],
    instructor: {
      name: 'زین العابدین',
      role: 'سینئر فرنٹ اینڈ ڈویلپر',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-9',
        title: 'ویب ڈویلپمنٹ کورس',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-wd-1',
            slug: 'html-basics-urdu',
            title: '1. ایچ ٹی ایم ایل (HTML5) کا ڈھانچہ',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BSwa_5_Zg8A',
            content: `HTML کسی بھی ویب سائٹ کی ہڈیوں کی مانند ہے۔ یہ ویب پیج کا ڈھانچہ بناتی ہے۔\n\n### مثال:\n\`\`\`html\n<h1>سلام دنیا!</h1>\n<p>یہ میری پہلی ویب سائٹ ہے۔</p>\n\`\`\``,
            practicePrompt: 'ایک ایچ ٹی ایم ایل فائل بنائیں جس میں آپ کا نام، تصویر اور مختصر تعارف ہو۔',
            quiz: {
              question: 'سب سے بڑا ہیڈنگ ٹیگ کون سا ہے؟',
              options: ['<h1>', '<h6>', '<p>', '<br>'],
              correctIndex: 0,
              explanation: '`<h1>` سب سے بڑی ہیڈنگ کے لیے استعمال ہوتا ہے۔'
            },
            resources: [{ title: 'HTML5 Cheat Sheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-wd-2',
            slug: 'css-styling-urdu',
            title: '2. سی ایس ایس (CSS3) اور اسٹائلنگ',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=rIO5326FgPE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Edsxf_NBFrw',
            content: `CSS ویب سائٹ کو خوبصورت، رنگین اور پرکشش بناتی ہے۔\n\n### مثال:\n\`\`\`css\nbody {\n  background-color: #f0f4f8;\n  font-family: Arial;\n}\n\`\`\``,
            practicePrompt: 'کسی پیراگراف کا رنگ نیلا اور فانٹ سائز 20px کریں۔',
            quiz: {
              question: 'ٹیکسٹ کا رنگ تبدیل کرنے کے لیے کون سا پراپرٹی ہے؟',
              options: ['color', 'text-style', 'font-color', 'background'],
              correctIndex: 0,
              explanation: '`color` پراپرٹی متن کا رنگ بدلتی ہے۔'
            },
            resources: [{ title: 'CSS Basics PDF', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-wd-3',
            slug: 'flexbox-grid-urdu',
            title: '3. ف্লেکس باکس اور لے آؤٹ',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=fYq5PXgSsbE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `عناصر کو سکرین پر سیدھا کرنے اور قطاروں میں رکھنے کے لیے \`display: flex\` انتہائی طاقتور ٹول ہے۔`,
            practicePrompt: 'تین خانوں کو ہورائزنٹل قطار میں ف্লেکس باکس کے ذریعے سیٹ کریں۔',
            quiz: {
              question: 'ف্লেکس باکس شروع کرنے کے لیے کیا لکھتے ہیں؟',
              options: ['display: flex;', 'flex: true;', 'box: flex;', 'align: center;'],
              correctIndex: 0,
              explanation: '`display: flex;` سے کنٹینر ف্লেکس بن جاتا ہے۔'
            },
            resources: [{ title: 'Flexbox Cheatsheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-wd-4',
            slug: 'responsive-design-urdu',
            title: '4. ریسپانسو ڈیزائن (موبائل فرینڈلی)',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=9zBsdydEmm8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `میڈیا کوئریز (\`@media\`) کی مدد سے ویب سائٹ موبائل، ٹی블릿 اور کمپیوٹر پر یکساں خوبصورت نظر آتی ہے۔`,
            practicePrompt: 'موبائل سکرین کے لیے فونٹس کا سائز چھوٹا کرنے والی میڈیا کوئری لکھیں۔',
            quiz: {
              question: 'موبائل سکرین کے لیے کون سا ٹول بنیادی کردار ادا کرتا ہے؟',
              options: ['Media Queries', 'JavaScript only', 'Photoshop', 'MS Word'],
              correctIndex: 0,
              explanation: 'میڈیا کوئریز مختلف سکرین سائزز کے مطابق اسٹائل بدلتی ہیں۔'
            },
            resources: [{ title: 'Responsive Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-wd-5',
            slug: 'portfolio-project-urdu',
            title: '5. پورٹ فولیو پراجیکٹ اور لائیو کرنا',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2RLPtWz8v70',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=vqW1L3Q3P5M',
            content: `اپنے تمام HTML اور CSS کوڈ کو جوڑ کر ایک شاندار پورٹ فولیو ویب سائٹ مکمل کریں۔`,
            practicePrompt: 'اپنی مکمل ویب سائٹ کا کوڈ جمع کروائیں۔',
            quiz: {
              question: 'ویب سائٹ کو انٹرنیٹ پر لائیو کرنے کو کیا کہتے ہیں؟',
              options: ['ڈپلائمنٹ (Deployment)', 'ڈیلیٹ', 'فارمٹنگ', 'انسٹالیشن'],
              correctIndex: 0,
              explanation: 'کوڈ کو سرور پر ڈالنے کو Deployment کہا جاتا ہے۔'
            },
            resources: [{ title: 'Final Code Template', url: '#', type: 'ZIP' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-ur-10',
    slug: 'personal-finance-urdu',
    title: 'ذاتی مالیات اور بجٹ سازی (Personal Finance in Urdu)',
    description: 'پیسے کی بچت، بجٹ بنانے کا 50/30/20 اصول، قرضوں سے نجات اور سرمایہ کاری کے بنیادی اصول اردو میں۔',
    categoryId: 'cat_finance',
    categoryName: 'ذاتی مالیات (Personal Finance)',
    categorySlug: 'personal-finance',
    difficulty: 'Beginner',
    durationMinutes: 150,
    lessonCount: 5,
    language: 'Urdu',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'آمدنی اور اخراجات کا حساب کتاب',
      'مشہور 50/30/20 بجٹ کا اصول',
      'ایمرجنسی فنڈ کی اہمیت اور تشکیل',
      'قرضوں سے چھٹکارا پانے کے طریقے',
      'حلال اور محفوظ سرمایہ کاری کی بنیادی باتیں'
    ],
    completionRequirements: 'تمام اسباق مکمل کریں اور اپنا ماہانہ بجٹ پلان تیار کریں۔',
    prerequisites: ['بنیادی ریاضی کی سمجھ'],
    instructor: {
      name: 'فحان ملک',
      role: 'فنانشل کنسلٹنٹ اور مصنف',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ur-10',
        title: 'ذاتی مالیات کورس',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ur-pf-1',
            slug: 'finance-basics-urdu',
            title: '1. پیسے کی نفسیات اور بجٹ',
            durationMinutes: 25,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            content: `پیسہ کمانا جتنا اہم ہے، اسے سنبھالنا اس سے بھی زیادہ اہم ہے۔ اپنے ہر خرچ کا ریکارڈ رکھیں۔`,
            practicePrompt: 'اپنے گزشتہ ماہ کے تمام اخراجات کی فہرست بنائیں۔',
            quiz: {
              question: 'مالیاتی کامیابی کی پہلی سیڑھی کیا ہے؟',
              options: ['آمدنی اور اخراجات کا درست ریکارڈ', 'مہنگی گاڑی خریدنا', 'کریڈٹ کارڈ پر قرض لینا', 'بینک نہ جانا'],
              correctIndex: 0,
              explanation: 'بجٹ بنانا مالیاتی سفر کی بنیاد ہے۔'
            },
            resources: [{ title: 'Budget Planner Sheet', url: '#', type: 'Excel' }]
          },
          {
            id: 'l-ur-pf-2',
            slug: 'budgeting-50-30-20-urdu',
            title: '2. مشہور 50/30/20 بجٹ اصول',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=V4mY2w1bZ2w',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=V4mY2w1bZ2w',
            content: `آمدنی کا 50 فیصد بنیادی ضروریات (روٹی، مکان)، 30 فیصد خواہشات (تفریح)، اور 20 فیصد بچت یا قرض کی ادائیگی کے لیے مختص کریں۔`,
            practicePrompt: 'اپنی ماہانہ آمدنی پر 50/30/20 کا فارمولا لاگو کریں۔',
            quiz: {
              question: '50/30/20 اصول میں 20 فیصد حصہ کس چیز کے لیے ہے؟',
              options: ['بچت اور سرمایہ کاری', 'شاپنگ', 'ریستوران کا کھانا', 'سفر'],
              correctIndex: 0,
              explanation: '20 فیصد بچت اور مستقبل کی مالی حفاظت کے لیے ہے۔'
            },
            resources: [{ title: '50/30/20 Calculator', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ur-pf-3',
            slug: 'emergency-fund-urdu',
            title: '3. ایمرجنسی فنڈ (ہنگامی فنڈ)',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Kz6T_wT7k7Y',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Kz6T_wT7k7Y',
            content: `زندگی میں اچانک اخراجات آ سکتے ہیں۔ کم از کم 3 سے 6 ماہ کے خرچے کے برابر رقم الگ محفوظ رکھیں۔`,
            practicePrompt: 'اپنے 3 ماہ کے ضروری اخراجات کا تخمینہ لگائیں۔',
            quiz: {
              question: 'ایمرجنسی فنڈ کا بنیادی مقصد کیا ہے؟',
              options: ['اچانک پیش آنے والے مالی بحران سے بچنا', 'اسٹاک خریدنا', 'نیا فون لینا', 'تحفے دینا'],
              correctIndex: 0,
              explanation: 'ہنگامی فنڈ آپ کو نوکری جانے یا بیماری کی صورت میں بچاتا ہے۔'
            },
            resources: [{ title: 'Emergency Fund Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ur-pf-4',
            slug: 'getting-out-of-debt-urdu',
            title: '4. قرضوں سے نجات کا طریقہ',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `سود والے قرضہ جات انسان کو مالی طور پر کمزور کر دیتے ہیں۔ سب سے پہلے چھوٹے قرضہ جات کو ختم کریں (Debt Snowball)۔`,
            practicePrompt: 'اپنے تمام قرضوں کی فہرست بنا کر واپسی کا پلان لکھیں۔',
            quiz: {
              question: 'قرض چکانے کا سب سے مؤثر طریقہ کون سا ہے؟',
              options: ['چھوٹے قرضوں کو پہلے ختم کرنا (Snowball Method)', 'مزید قرض لینا', 'قرض بھول جانا', 'کچھ نہ کرنا'],
              correctIndex: 0,
              explanation: 'چھوٹے قرض چکانے سے حوصلہ بڑھتا ہے۔'
            },
            resources: [{ title: 'Debt Payoff Template', url: '#', type: 'Template' }]
          },
          {
            id: 'l-ur-pf-5',
            slug: 'smart-investing-urdu',
            title: '5. سرمایہ کاری کی بنیادی باتیں',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `پیسے کو کام پر لگائیں! مہنگائی سے مقابلہ کرنے اور طویل مدتی دولت بنانے کے لیے حلال سرمایہ کاری کریں (جیسے کاروبار، گولڈ، یا رئیل اسٹیٹ)۔`,
            practicePrompt: 'سرمایه کاری کے تین محفوظ ذرائع تحریر کریں۔',
            quiz: {
              question: 'سرمایه کاری کرنے سے پہلے سب سے اہم کام کیا ہے؟',
              options: ['مکمل تحقیق اور ہنگامی فنڈ کی موجودگی', 'آنکھیں بند کر کے پیسے لگانا', 'دوست کی بات پر عمل کرنا', 'قرض لے کر انویسٹ کرنا'],
              correctIndex: 0,
              explanation: 'تحقیق اور تیاری کے بغیر سرمایہ کاری خطرے سے خالی نہیں۔'
            },
            resources: [{ title: 'Investment Checklist', url: '#', type: 'Checklist' }]
          }
        ]
      }
    ]
  }
];
