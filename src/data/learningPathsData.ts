export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  estimatedHours: number;
  icon: string;
  courseIds: string[];
  learningObjectives: string[];
  prerequisites: string[];
  careerOpportunities: string[];
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-freelance',
    slug: 'freelancing-fundamentals',
    title: 'Freelancing Fundamentals & Independence',
    description: 'Transform your digital skill into a sustainable, high-income freelance career. Master client acquisition, contracts, value pricing, and project delivery.',
    category: 'Freelancing',
    estimatedHours: 12,
    icon: 'Briefcase',
    courseIds: ['course-3', 'course-2', 'course-10'],
    learningObjectives: [
      'Position yourself as a specialist with a compelling, high-ticket offer',
      'Pitch potential international clients with customized, high-converting proposals',
      'Manage contracts, milestone deposits, and deliver work on schedule',
      'Develop strong cross-cultural client communication and retention habits'
    ],
    prerequisites: ['One digital trade (design, coding, writing, or marketing)'],
    careerOpportunities: [
      'Independent Freelancer on Upwork / Fiverr',
      'Boutique Agency Operator',
      'Remote Digital Consultant',
      'Contract Project Specialist'
    ]
  },
  {
    id: 'path-web',
    slug: 'web-development',
    title: 'Modern Web Development Pathway',
    description: 'From your first HTML tag to modern responsive layouts and interactive web applications built with modern tools and accessibility principles.',
    category: 'Web Development',
    estimatedHours: 24,
    icon: 'Code',
    courseIds: ['course-5', 'course-1', 'course-3'],
    learningObjectives: [
      'Master semantic HTML5 markup and modern CSS Box Model architecture',
      'Build complex responsive layouts with CSS Grid, Flexbox, and Tailwind CSS',
      'Incorporate AI-assisted development tools to speed up debugging and documentation',
      'Deploy modern web projects and build a portfolio that wins interviews or freelance contracts'
    ],
    prerequisites: ['Basic computer literacy and a text editor'],
    careerOpportunities: [
      'Junior Frontend Developer',
      'Freelance Web Designer & Developer',
      'UI Implementation Specialist',
      'No-Code / Low-Code Technical Builder'
    ]
  },
  {
    id: 'path-design',
    slug: 'graphic-design',
    title: 'Visual Identity & Graphic Design Mastery',
    description: 'Learn the principles of graphic design, color psychology, typography rules, layout systems, and brand creation.',
    category: 'Graphic Design',
    estimatedHours: 16,
    icon: 'Palette',
    courseIds: ['course-4', 'course-7', 'course-3'],
    learningObjectives: [
      'Apply the CARP principles (Contrast, Alignment, Repetition, Proximity) to every layout',
      'Pair display and body typefaces for striking visual impact and legibility',
      'Create 60-30-10 color schemes and accessible palettes',
      'Export production-ready graphics, social media assets, and vector style tiles'
    ],
    prerequisites: ['Access to Figma, Canva, or an equivalent design tool'],
    careerOpportunities: [
      'Brand Identity Designer',
      'Marketing Visual Designer',
      'Social Media Creative Specialist',
      'Freelance Graphic Artist'
    ]
  },
  {
    id: 'path-english',
    slug: 'english-communication',
    title: 'Professional English & Workplace Fluency',
    description: 'Speak and write with clarity, confidence, and tact in international remote teams, client calls, and cross-cultural collaborations.',
    category: 'English Communication',
    estimatedHours: 10,
    icon: 'MessageSquare',
    courseIds: ['course-2', 'course-8', 'course-10'],
    learningObjectives: [
      'Communicate complex thoughts clearly using the PREP structure',
      'Write action-oriented emails that respect colleagues’ time and get prompt replies',
      'Handle feedback, questions, and team disagreements constructively',
      'Confidently present work in remote meetings and interview settings'
    ],
    prerequisites: ['Basic comprehension of everyday English'],
    careerOpportunities: [
      'Remote Team Member',
      'Client Support & Success Specialist',
      'Account Coordinator',
      'International Project Facilitator'
    ]
  },
  {
    id: 'path-ai',
    slug: 'ai-tools-for-beginners',
    title: 'AI Tools & Intelligent Workflows',
    description: 'Demystify artificial intelligence, prompt engineering, and intelligent workplace automation to multiply your output ten-fold.',
    category: 'Artificial Intelligence',
    estimatedHours: 14,
    icon: 'Bot',
    courseIds: ['course-1', 'course-8', 'course-9'],
    learningObjectives: [
      'Understand how LLMs and generative models process and synthesize tokens',
      'Write precise few-shot prompts with clear constraints to minimize hallucinations',
      'Automate repetitive spreadsheets, writing drafts, and research tasks',
      'Incorporate AI into your daily career workflow ethically and safely'
    ],
    prerequisites: ['Familiarity with web browsers and curiosity to test modern tools'],
    careerOpportunities: [
      'AI Operations Specialist',
      'Digital Transformation Assistant',
      'Prompt Optimization Consultant',
      'Productivity Specialist'
    ]
  },
  {
    id: 'path-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth Playbook',
    description: 'Build targeted customer funnels, master organic SEO, launch automated email newsletter sequences, and track analytics.',
    category: 'Digital Marketing',
    estimatedHours: 18,
    icon: 'TrendingUp',
    courseIds: ['course-6', 'course-8', 'course-7'],
    learningObjectives: [
      'Design full-funnel marketing strategies from awareness to conversion and retention',
      'Perform keyword research and implement on-page SEO best practices',
      'Draft persuasive high-converting email welcome and sales sequences',
      'Measure performance using GA4, UTM parameters, and acquisition metrics'
    ],
    prerequisites: ['Basic internet familiarity'],
    careerOpportunities: [
      'Digital Marketing Specialist',
      'SEO Content Strategist',
      'Email Marketing Manager',
      'Growth Marketing Associate'
    ]
  }
];
