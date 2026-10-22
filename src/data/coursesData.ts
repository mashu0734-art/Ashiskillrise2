export * from './courses/types';
import { Course } from './courses/types';
import { PROGRAMMING_COURSES } from './courses/programmingCourses';
import { AI_TECH_COURSES } from './courses/aiTechCourses';
import { CAREER_COURSES } from './courses/careerCourses';
import { CREATIVE_COURSES } from './courses/creativeCourses';
import { BUSINESS_COURSES } from './courses/businessCourses';
import { PRODUCTIVITY_COURSES } from './courses/productivityCourses';
import { URDU_COURSES } from './courses/urduCourses';

const FOUNDATIONAL_COURSES: Course[] = [
  {
    id: 'course-1',
    slug: 'intro-to-ai',
    title: 'Introduction to Artificial Intelligence',
    description: 'Master core AI concepts, neural network foundations, prompt engineering, and real-world workplace automation tools with hands-on practice.',
    categoryId: 'cat_ai',
    categoryName: 'Artificial Intelligence',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: '/src/assets/images/course_ai_intro_1792435151050.jpg',
    learningObjectives: [
      'Understand machine learning vs generative AI vs deep learning',
      'Construct high-precision prompts for text, code, and image generation',
      'Integrate AI productivity tools into daily workflows',
      'Analyze the ethical implications, hallucinations, and security of AI systems',
      'Build your first AI-assisted project workflow'
    ],
    completionRequirements: 'Complete all 5 lesson walkthroughs, pass the interactive knowledge checks, and submit the prompt automation workflow.',
    prerequisites: ['Basic computer literacy', 'A web browser and curiosity to explore modern tools'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Applied AI Researcher & Systems Educator',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-1',
        title: 'Foundations of Modern AI',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ai-1',
            slug: 'what-is-artificial-intelligence',
            title: '1. What is Artificial Intelligence?',
            durationMinutes: 25,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=2ePf9rue1Ao',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Artificial Intelligence (AI) refers to computer systems engineered to simulate aspects of human intelligence — such as pattern recognition, language comprehension, and adaptive decision making.\n\n### The Three Eras of Computing\n1. **Deterministic Rule-Based Systems**: Traditional programs execute strict conditional logic ("if X, then Y").\n2. **Statistical Machine Learning**: Models extract patterns from labeled historical datasets.\n3. **Generative Foundation Models**: Deep neural networks trained on vast multimodal datasets to synthesize novel text, images, and audio.\n\n### Key Takeaways\n- Large Language Models (LLMs) operate through next-token probabilistic prediction.\n- Modern AI serves as cognitive augmentations rather than autonomous replacements for human judgment.\n- Contextual grounding and prompt constraints are vital to prevent hallucinations.`,
            practicePrompt: 'Write a concise explanation (under 100 words) contrasting traditional rule-based programming with generative AI. Identify one routine task in your routine that can be automated today.',
            quiz: {
              question: 'How do modern Large Language Models (LLMs) primarily generate text responses?',
              options: [
                'By searching Google and copying the highest ranked paragraph',
                'By predicting the statistically most probable next token given context',
                'By executing hard-coded logical if/else conditionals',
                'By querying a relational SQL database of pre-written answers'
              ],
              correctIndex: 1,
              explanation: 'LLMs calculate probability distributions over tokens and generate responses iteratively based on contextual relevance.'
            },
            resources: [
              { title: 'The Illustrated Transformer Guide', url: 'https://jalammar.github.io/illustrated-transformer/', type: 'Reading' },
              { title: 'AI Foundations Glossary', url: '#', type: 'PDF' }
            ]
          },
          {
            id: 'l-ai-2',
            slug: 'prompt-engineering-mastery',
            title: '2. Prompt Engineering: Precision and Constraints',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `The effectiveness of any generative model depends directly on the structure and clarity of your prompt.\n\n### The 4-Part Prompt Architecture\n1. **Persona & Role**: "You are a senior technical writer..."\n2. **Task & Context**: "Summarize this technical product announcement..."\n3. **Format & Structure**: "Use a 3-bullet list with bold titles and exact statistics..."\n4. **Constraints & Negative Prompts**: "Do not use buzzwords like 'game-changer' or 'revolutionize'..."\n\n### Few-Shot Prompting Technique\nProviding 2-3 concrete input-output examples dramatically improves consistency compared to zero-shot instructions.`,
            practicePrompt: 'Design a structured prompt using the 4-part architecture to convert a messy 200-word meeting note into three actionable tasks with assignees and deadlines.',
            quiz: {
              question: 'Which element is crucial for preventing vague or repetitive output in generative prompts?',
              options: [
                'Writing in all capital letters',
                'Adding explicit constraints, format rules, and examples',
                'Making the prompt as brief as possible',
                'Using multiple exclamation marks'
              ],
              correctIndex: 1,
              explanation: 'Explicit constraints on tone, length, format, and negative guidelines ground the model effectively.'
            },
            resources: [
              { title: 'Anthropic & OpenAI Prompt Engineering Guides', url: '#', type: 'Documentation' }
            ]
          },
          {
            id: 'l-ai-3',
            slug: 'ai-tools-for-productivity',
            title: '3. Daily Workplace AI Tools & Automation',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=jC4v5AS4RIM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `Explore how everyday professionals use modern AI tools across writing, research, spreadsheets, and coding.\n\n### Core Categories\n- **Research & Synthesis**: Tools that ground answers in reference documents.\n- **Content Drafting**: Drafting clear correspondence, outlines, and proposals.\n- **Data Analysis**: Generating formula calculations, regex patterns, and summaries.\n- **Code Assistance**: Autocomplete, bug diagnosis, and explanatory comments.`,
            practicePrompt: 'Create a spreadsheet automation plan using AI to categorize 50 customer feedback entries into positive, neutral, or bug report tags.',
            quiz: {
              question: 'When using AI to analyze internal company documents, what is the safest practice?',
              options: [
                'Paste confidential credentials directly into public AI chat windows',
                'Use enterprise or private sandbox models that do not train on submitted data',
                'Assume all public models have strict privacy warranties without checking terms',
                'Email your password to the model provider'
              ],
              correctIndex: 1,
              explanation: 'Enterprise agreements and zero-data-retention APIs prevent proprietary data from leaking into model training sets.'
            },
            resources: [
              { title: 'Enterprise Data Privacy Checklist', url: '#', type: 'Cheatsheet' }
            ]
          },
          {
            id: 'l-ai-4',
            slug: 'evaluating-hallucinations-and-ethics',
            title: '4. Mitigating Hallucinations and Ethical AI',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=5p248yoa3oE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Hallucinations occur when an AI model outputs information that sounds authoritative and grammatically fluent but is factually incorrect.\n\n### How to Detect and Prevent Hallucinations\n- **Grounding**: Always provide source documents in the prompt and instruct the model to answer ONLY from the provided text.\n- **Chain-of-Thought**: Ask the model to "think step by step" before stating conclusions.\n- **Verification Citations**: Require the model to quote exact sentence excerpts from source material.`,
            practicePrompt: 'Take a generated factual claim from an AI response and verify three primary source references to confirm its validity.',
            quiz: {
              question: 'What is a primary cause of AI hallucinations?',
              options: [
                'The computer hardware overheated',
                'The model is predicting likely language patterns rather than executing live fact-checking',
                'The user typed too quickly',
                'The internet cable was disconnected'
              ],
              correctIndex: 1,
              explanation: 'LLMs are language prediction engines; without grounding, they generate plausible-sounding sentences rather than verified truth.'
            },
            resources: [
              { title: 'Fact-Checking AI Outputs Framework', url: '#', type: 'Guide' }
            ]
          },
          {
            id: 'l-ai-5',
            slug: 'capstone-ai-workflow',
            title: '5. Capstone: Building Your First Automated Workflow',
            durationMinutes: 50,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=tk5aI8uY-H0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=fKkwjN2kP7s',
            content: `Bring everything together into a repeatable 5-step AI workflow:\n1. Input intake (User brief or raw data)\n2. Prompt transformation pipeline\n3. Review & sanity verification\n4. Output refinement\n5. Final human sign-off\n\nCongratulations on completing Introduction to AI!`,
            practicePrompt: 'Document your personal AI productivity stack, outlining at least 2 workflows you will use weekly.',
            quiz: {
              question: 'In a professional production pipeline, what step should ALWAYS precede publishing AI-generated content?',
              options: [
                'Automated instant mass mailing',
                'Human review and contextual verification',
                'Converting all text into uppercase',
                'Deleting the original source draft'
              ],
              correctIndex: 1,
              explanation: 'Human-in-the-loop review ensures tone alignment, accuracy, and compliance with organizational standards.'
            },
            resources: [
              { title: 'Capstone Template & Checklist', url: '#', type: 'Template' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'english-communication',
    title: 'English for Everyday Communication',
    description: 'Build confidence in everyday workplace spoken English, clear email drafting, active listening, and persuasive professional conversations.',
    categoryId: 'cat_comm',
    categoryName: 'English Communication',
    categorySlug: 'english-communication',
    difficulty: 'Beginner',
    durationMinutes: 150,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master natural spoken greetings and introductions in international work settings',
      'Draft concise, polite, and effective business emails',
      'Handle questions, disagreements, and feedback constructively',
      'Deliver concise project updates using the PREP (Point, Reason, Example, Point) framework',
      'Expand functional professional vocabulary for remote collaboration'
    ],
    completionRequirements: 'Complete all 5 communication modules and draft an email scenario assignment.',
    prerequisites: ['Basic conversational understanding of English'],
    instructor: {
      name: 'Sarah Jenkins',
      role: 'Cross-Cultural Communications Coach',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-2',
        title: 'Workplace Communication Mastery',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-comm-1',
            slug: 'confident-introductions',
            title: '1. Professional Introductions and Small Talk',
            durationMinutes: 25,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=nE301qG9mE4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=D0y9W92y4Bw',
            content: `First impressions set the tone for professional relationships. Learn the 30-second introduction formula: Who you are, what you build, and why you are excited to collaborate.`,
            practicePrompt: 'Record or draft a 30-second introduction introducing yourself to an international project team.',
            quiz: {
              question: 'Which of the following is an effective professional small-talk icebreaker in a virtual meeting?',
              options: [
                '"Why is everyone quiet? Say something."',
                '"Good morning everyone! How is the week treating you so far?"',
                '"I hate Mondays and want to go home."',
                '"Can we finish in 2 minutes?"'
              ],
              correctIndex: 1,
              explanation: 'A warm, inclusive open question sets a respectful collaborative tone.'
            },
            resources: [{ title: '25 Professional Icebreakers', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-comm-2',
            slug: 'concise-business-emails',
            title: '2. Drafting Clear, Action-Oriented Emails',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=i9YQ_VkWb5M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Qc6yV8G3EAE',
            content: `Busy colleagues skim emails in seconds. Structure your emails with: Clear Subject Line, Bottom Line Up Front (BLUF), Bullet Points for details, and explicit Call to Action (CTA) with a date.`,
            practicePrompt: 'Rewrite a 200-word rambling email into a 60-word concise request with a clear deadline.',
            quiz: {
              question: 'What is the purpose of placing the "BLUF" (Bottom Line Up Front) in an email?',
              options: [
                'To confuse the reader with acronyms',
                'To state the key decision or action requested immediately so the reader saves time',
                'To hide important details at the bottom',
                'To make the email as long as possible'
              ],
              correctIndex: 1,
              explanation: 'BLUF allows busy recipients to immediately understand the context and urgency of the message.'
            },
            resources: [{ title: 'Email Templates for Client Work', url: '#', type: 'Templates' }]
          },
          {
            id: 'l-comm-3',
            slug: 'active-listening-and-clarifying',
            title: '3. Active Listening and Asking Clarifying Questions',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Avoid costly project misunderstandings. Use reflection techniques: "If I understand correctly, our priority for Friday is X. Is that accurate?"`,
            practicePrompt: 'Write down 3 clarifying questions you would ask a client who gave you vague design requirements.',
            quiz: {
              question: 'Which phrase is the best clarifying technique when instructions are ambiguous?',
              options: [
                '"You did not explain this properly."',
                '"Just to confirm I am aligned with your vision, are we targeting mobile first or desktop?"',
                '"I will just guess what you meant."',
                '"Whatever you say."'
              ],
              correctIndex: 1,
              explanation: 'Polite reflection builds trust and prevents costly rework.'
            },
            resources: [{ title: 'Active Listening Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-comm-4',
            slug: 'speaking-with-structure-prep',
            title: '4. The PREP Framework for Spoken Clarity',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=9g0H29W6F2U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=kY67Z3j9r7c',
            content: `When asked for your opinion in a meeting, avoid rambling by using PREP:\n- **P**oint: State your main argument in one sentence.\n- **R**eason: Explain why this is true.\n- **E**xample: Give a concrete data point or story.\n- **P**oint: Reiterate the takeaway.`,
            practicePrompt: 'Use the PREP framework to answer: "Should our team switch to weekly async status reports?"',
            quiz: {
              question: 'In the PREP framework, what does the "E" represent?',
              options: ['Emotion', 'Example', 'Everything', 'Exception'],
              correctIndex: 1,
              explanation: 'An Example provides concrete evidence that anchors your reasoning.'
            },
            resources: [{ title: 'PREP Speech Cheat Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-comm-5',
            slug: 'constructive-feedback-disagreements',
            title: '5. Giving Constructive Feedback Professionally',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=UNer_XgY7z0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=p43qW5e3q2E',
            content: `Learn how to critique work rather than people, using objective observations, empathy, and solution-oriented language.`,
            practicePrompt: 'Draft constructive feedback on a peer’s slide presentation that has too much text.',
            quiz: {
              question: 'What is the most constructive way to offer feedback on a team deliverable?',
              options: [
                '"This looks terrible, start over."',
                '"I noticed the slides contain heavy text; could we test bullet summaries and larger charts to boost audience engagement?"',
                '"Who made this mistake?"',
                '"Never let this person present again."'
              ],
              correctIndex: 1,
              explanation: 'Focusing on objective outcomes and actionable alternatives fosters positive teamwork.'
            },
            resources: [{ title: 'Feedback Scripts for Remote Teams', url: '#', type: 'PDF' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'freelancing-fundamentals',
    title: 'Freelancing Fundamentals',
    description: 'Learn how to package your digital skills, build a winning portfolio, write persuasive client proposals, and set up your freelance business.',
    categoryId: 'cat_freelance',
    categoryName: 'Freelancing Fundamentals',
    categorySlug: 'freelancing',
    difficulty: 'Beginner',
    durationMinutes: 210,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Define your profitable freelance niche and core offer',
      'Build a lean portfolio website with case studies that prove value',
      'Craft customized proposals with over 40% response rates',
      'Calculate hourly and value-based project pricing models',
      'Establish client onboarding, contracts, and payment systems'
    ],
    completionRequirements: 'Complete all 5 lessons and draft your first client pitch proposal.',
    prerequisites: ['One digital skill (design, writing, coding, or marketing)'],
    instructor: {
      name: 'Tariq Mansoor',
      role: 'Top-Rated Freelancer & Agency Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-3',
        title: 'Freelance Business Setup',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-fr-1',
            slug: 'defining-your-niche-and-offer',
            title: '1. Defining Your Freelance Niche and Offer',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Generalists struggle to compete on price; specialists win high-margin projects. Learn the niche positioning equation: "I help [Target Client] achieve [Desirable Outcome] through [Your Core Skill]."\n\n### The Three Pillars of a Great Niche\n1. High willingness to pay\n2. Clearly defined pain points\n3. Reachable through organic channels or platforms`,
            practicePrompt: 'Write your 1-sentence niche positioning statement and identify 3 industries where this skill is currently in demand.',
            quiz: {
              question: 'Why do specialized freelancers generally earn more than generalists?',
              options: [
                'They work 80 hours a week',
                'Clients view them as low-risk domain experts who solve specific high-value problems',
                'They only accept government grants',
                'They never have to write proposals'
              ],
              correctIndex: 1,
              explanation: 'Specialists provide targeted expertise that directly addresses specific client business goals.'
            },
            resources: [{ title: 'Niche Evaluation Scorecard', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-fr-2',
            slug: 'portfolio-that-converts',
            title: '2. Building a 3-Project Conversion Portfolio',
            durationMinutes: 45,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=uC0_kZ3y9Y0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `Clients don't hire code or design; they hire outcomes. A winning case study highlights: The Client Problem, Your Strategic Process, and The Quantifiable Outcome.`,
            practicePrompt: 'Outline one sample case study demonstrating the problem, solution, and measurable business result.',
            quiz: {
              question: 'What is the most persuasive element in a freelance case study?',
              options: [
                'Unexplained screenshots with no text',
                'A clear narrative showing the client problem and measurable outcome',
                'A list of software brand logos',
                'A 10-page dense resume'
              ],
              correctIndex: 1,
              explanation: 'Clients want to see how your work translated into real-world results or saved resources.'
            },
            resources: [{ title: 'Case Study Blueprint', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-fr-3',
            slug: 'winning-client-proposals',
            title: '3. Writing High-Converting Client Proposals',
            durationMinutes: 45,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=6h2e6kZ4Q7c',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Stop copying generic proposal templates. Win deals by opening with the client's words, providing an instant diagnosis, outlining 2 clear milestones, and ending with a low-friction question.`,
            practicePrompt: 'Draft a 150-word proposal responding to a job posting requesting a redesigned landing page.',
            quiz: {
              question: 'What is a critical mistake in freelance proposal writing?',
              options: [
                'Mentioning the client’s project details in the first sentence',
                'Talking exclusively about yourself without addressing the client’s specific problem',
                'Including a link to a relevant portfolio piece',
                'Asking clarifying questions'
              ],
              correctIndex: 1,
              explanation: 'Proposals that center on the client’s challenges stand out over generic self-promotional pitches.'
            },
            resources: [{ title: 'Proposal Scripts & Checklists', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-fr-4',
            slug: 'pricing-models-and-negotiation',
            title: '4. Pricing Models: Hourly vs Fixed vs Value',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=7Gq9m2q5W5o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `Understand when to bill hourly, when to quote fixed project milestones, and how to introduce tiered pricing (e.g. Essential, Professional, Complete).`,
            practicePrompt: 'Structure a 3-tier pricing proposal for a typical client project in your chosen skill area.',
            quiz: {
              question: 'What is a primary advantage of tiered milestone pricing?',
              options: [
                'It prevents clients from having options',
                'It anchors high-value options and lets clients self-select their budget level',
                'It ensures you work for free',
                'It eliminates contracts'
              ],
              correctIndex: 1,
              explanation: 'Tiered options eliminate yes/no decisions and replace them with "which tier works best for our timeline?"'
            },
            resources: [{ title: 'Freelance Rate Calculator', url: '#', type: 'Tool' }]
          },
          {
            id: 'l-fr-5',
            slug: 'contracts-invoicing-client-success',
            title: '5. Contracts, Deposits, and Client Retention',
            durationMinutes: 45,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `Never begin work without a signed agreement and deposit (usually 50% upfront). Learn how to set project scopes, manage revisions, and turn one-time clients into recurring retainers.`,
            practicePrompt: 'Draft a standard scope-of-work clause specifying how many revision rounds are included in your service.',
            quiz: {
              question: 'What should standard freelance contracts always specify to prevent scope creep?',
              options: [
                'Unlimited revisions forever',
                'Defined deliverables, timeline, revision limits, and payment schedules',
                'No mention of deadlines or compensation',
                'A verbal handshake only'
              ],
              correctIndex: 1,
              explanation: 'Clear boundaries protect both the freelancer and client from misaligned expectations.'
            },
            resources: [{ title: 'Simple Service Agreement Template', url: '#', type: 'Contract' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    slug: 'graphic-design-basics',
    title: 'Graphic Design Basics',
    description: 'Learn foundational visual design principles, typography pairings, color theory, layout composition, and brand identity design.',
    categoryId: 'cat_design',
    categoryName: 'Graphic Design',
    categorySlug: 'graphic-design',
    difficulty: 'Beginner',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: '/src/assets/images/course_graphic_design_1792435151835.jpg',
    learningObjectives: [
      'Master the core design principles: contrast, alignment, repetition, and proximity (CARP)',
      'Select and pair typographic fonts for high readability and brand tone',
      'Create harmonious color palettes using 60-30-10 color theory',
      'Design balanced grid-based layout compositions',
      'Export production-ready assets for web and print'
    ],
    completionRequirements: 'Complete all lessons and design a brand style tile.',
    prerequisites: ['Access to Figma, Canva, or any vector graphics tool'],
    instructor: {
      name: 'Maya Lin',
      role: 'Brand Identity Director & UI Designer',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-4',
        title: 'Visual Design Fundamentals',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-gd-1',
            slug: 'the-carp-principles',
            title: '1. The CARP Design Principles',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=a5KYlHNKQB8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `Great design looks intentional because of CARP:\n- **Contrast**: Make elements unmistakably different to establish hierarchy.\n- **Alignment**: Every visual element must connect visually to another element.\n- **Repetition**: Repeat colors, shapes, and typefaces for visual cohesion.\n- **Proximity**: Group related items close together.`,
            practicePrompt: 'Find an example of a poster or social graphic and identify where contrast and proximity were used successfully.',
            quiz: {
              question: 'In graphic design, what does the principle of Proximity dictate?',
              options: [
                'Scatter items randomly across the canvas',
                'Related elements should be placed close together to communicate their relationship',
                'Use as many colors as possible in one corner',
                'Never leave white space'
              ],
              correctIndex: 1,
              explanation: 'Proximity groups related information visually so readers digest it as unified logical units.'
            },
            resources: [{ title: 'CARP Design Visual Cheatsheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-gd-2',
            slug: 'typography-and-hierarchy',
            title: '2. Typography Rules and Font Pairing',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=_2LLXnUdUIc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `Typography is 90% of visual communication. Learn font categories (Serif, Sans-Serif, Display, Monospace), font scales, line-height math, and how to pair one bold display face with a clean neutral body font.`,
            practicePrompt: 'Pick a display font and pair it with a complementary body font for an educational website.',
            quiz: {
              question: 'What is a reliable rule for pairing fonts in a single design project?',
              options: [
                'Use at least 6 different decorative fonts',
                'Pair a distinctive display font for headlines with a clean, readable neutral body font',
                'Only use script handwriting fonts for all paragraphs',
                'Avoid pairing fonts completely'
              ],
              correctIndex: 1,
              explanation: 'Limiting to two complementary type families creates clear hierarchy without visual chaos.'
            },
            resources: [{ title: 'Typography Pairing Matrix', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-gd-3',
            slug: 'color-theory-and-palettes',
            title: '3. Color Theory and the 60-30-10 Rule',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=sByzHoiYFX0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            content: `Master color harmony: Monochromatic, Analogous, Complementary, and Triadic. Learn how to allocate color using the 60% neutral canvas, 30% structural surface, and 10% high-intent accent formula.`,
            practicePrompt: 'Generate a 5-color cohesive palette with primary, secondary, surface, background, and accent hex values.',
            quiz: {
              question: 'In the 60-30-10 color distribution rule, what does the 10% represent?',
              options: [
                'The background canvas color',
                'The high-intent accent color reserved for primary calls to action',
                'The text color of all paragraphs',
                'The border shadows'
              ],
              correctIndex: 1,
              explanation: 'Restricting accent colors to 10% ensures interactive elements command instant visual attention.'
            },
            resources: [{ title: 'Accessible Palette Generator Guide', url: '#', type: 'Tool' }]
          },
          {
            id: 'l-gd-4',
            slug: 'grid-systems-and-composition',
            title: '4. Layout Composition and Grid Systems',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=YqQx75OPWA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `Discover how 12-column grids, baseline grids, and white space create calm, authoritative layouts for desktop and mobile screens.`,
            practicePrompt: 'Sketch a 12-column grid layout for a magazine cover or homepage hero section.',
            quiz: {
              question: 'Why do designers use grid systems in layout composition?',
              options: [
                'To restrict creativity',
                'To create consistent spatial alignment, proportion, and responsive rhythm',
                'Because printing machines only print squares',
                'To fill every inch of space'
              ],
              correctIndex: 1,
              explanation: 'Grids establish consistent mathematical harmony and structural alignment.'
            },
            resources: [{ title: 'Responsive Grid Templates', url: '#', type: 'Figma File' }]
          },
          {
            id: 'l-gd-5',
            slug: 'creating-brand-assets',
            title: '5. Designing Brand Identity and Exporting Assets',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=6O7l8m9n0Q3',
            content: `Create a mini brand style guide: Logo usage rules, color swatches, typography specimens, and export SVG and WebP graphics optimized for web performance.`,
            practicePrompt: 'Assemble a 1-page brand guidelines board with a logo concept, color swatches, and font specimen.',
            quiz: {
              question: 'Which image format is preferred for vector logos and icons on modern websites?',
              options: ['JPEG', 'GIF', 'SVG', 'BMP'],
              correctIndex: 2,
              explanation: 'SVG files scale infinitely without pixelation and have small file sizes.'
            },
            resources: [{ title: 'Brand Style Guide Template', url: '#', type: 'Template' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    slug: 'html-css-fundamentals',
    title: 'HTML and CSS Fundamentals',
    description: 'Learn modern semantic HTML5, CSS Flexbox and Grid, responsive mobile layouts, Tailwind CSS utilities, and web accessibility standards.',
    categoryId: 'cat_web',
    categoryName: 'Web Development',
    categorySlug: 'web-development',
    difficulty: 'Beginner',
    durationMinutes: 240,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: '/src/assets/images/course_web_dev_1792435151859.jpg',
    learningObjectives: [
      'Structure accessible web pages using semantic HTML5 tags',
      'Master CSS Box Model, specificity, and cascading rules',
      'Build responsive, mobile-first layouts with Flexbox and CSS Grid',
      'Apply modern utility-first styling with Tailwind CSS',
      'Implement WCAG AA accessibility standards including keyboard navigation'
    ],
    completionRequirements: 'Build and deploy a responsive personal portfolio landing page.',
    prerequisites: ['A modern code editor (VS Code) and web browser'],
    instructor: {
      name: 'Alex Rivera',
      role: 'Staff Frontend Engineer & Open Source Maintainer',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-5',
        title: 'Modern Web Markup & Styling',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-web-1',
            slug: 'semantic-html5',
            title: '1. Semantic HTML5 and Document Structure',
            durationMinutes: 40,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BSwa_5_Zg8A',
            content: `Semantic HTML gives meaning to content. Instead of generic <div> tags, use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> for screen readers and SEO.\n\n### Accessible Form Controls\nAlways pair <input> with an explicit <label for="..."> and add accessible name attributes.`,
            practicePrompt: 'Write the semantic HTML markup for a blog post with title, author date, body paragraphs, and tags.',
            quiz: {
              question: 'Which HTML element should represent the main content unique to a given document?',
              options: ['<section>', '<main>', '<content>', '<div>'],
              correctIndex: 1,
              explanation: 'The <main> tag encloses the dominant content of the <body> and must only appear once per page.'
            },
            resources: [{ title: 'MDN Semantic Elements Reference', url: 'https://developer.mozilla.org', type: 'Reference' }]
          },
          {
            id: 'l-web-2',
            slug: 'css-box-model-and-selectors',
            title: '2. The CSS Box Model and Specificity',
            durationMinutes: 45,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=rIO5326FgPE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Edsxf_NBFrw',
            content: `Every element on a web page is a box. Understand content, padding, border, and margin, plus \`box-sizing: border-box\` which ensures padding does not expand container dimensions unexpectedly.`,
            practicePrompt: 'Code a card component with 16px padding, 1px border, and 24px outer margin using border-box sizing.',
            quiz: {
              question: 'What does "box-sizing: border-box" do?',
              options: [
                'Adds 10px to every border',
                'Includes padding and border within the element’s total specified width and height',
                'Removes all margins from the page',
                'Converts all boxes into circles'
              ],
              correctIndex: 1,
              explanation: 'Border-box includes padding and border in the width calculation, making responsive layouts predictable.'
            },
            resources: [{ title: 'CSS Box Model Interactive Visualizer', url: '#', type: 'Interactive' }]
          },
          {
            id: 'l-web-3',
            slug: 'flexbox-mastery',
            title: '3. Flexbox: 1-Dimensional Layouts',
            durationMinutes: 50,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=fYq5PXgSsbE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `Flexbox simplifies aligning and distributing space among items along a single axis (row or column). Master \`justify-content\`, \`align-items\`, \`gap\`, \`flex-wrap\`, and \`flex-grow\`.`,
            practicePrompt: 'Build a responsive navigation bar with a logo on the left and 4 nav links on the right using Flexbox.',
            quiz: {
              question: 'In Flexbox, which property aligns items along the cross-axis?',
              options: ['justify-content', 'align-items', 'flex-direction', 'gap'],
              correctIndex: 1,
              explanation: 'align-items controls cross-axis alignment, while justify-content controls main-axis distribution.'
            },
            resources: [{ title: 'Flexbox Cheatsheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-web-4',
            slug: 'css-grid-and-responsive-design',
            title: '4. CSS Grid & Mobile-First Media Queries',
            durationMinutes: 55,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=9zBsdydEmm8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `CSS Grid handles complex 2-dimensional layouts. Combine \`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))\` with mobile-first breakpoints (\`@media (min-width: 768px)\`) for fluid multi-device layouts.`,
            practicePrompt: 'Create a responsive 3-column card grid that stacks into 1 column on mobile screens under 640px.',
            quiz: {
              question: 'What is the primary advantage of mobile-first responsive design?',
              options: [
                'Desktop users are ignored',
                'Base styles are optimized for lower-bandwidth mobile devices, with enhanced styles added progressively via min-width queries',
                'It requires less CSS code than desktop design',
                'You only have to test on one screen'
              ],
              correctIndex: 1,
              explanation: 'Mobile-first prioritizes essential content and progressive enhancement for superior performance.'
            },
            resources: [{ title: 'CSS Grid Pocket Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-web-5',
            slug: 'tailwind-css-modern-styling',
            title: '5. Modern Utility Styling with Tailwind CSS',
            durationMinutes: 50,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2RLPtWz8v70',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=vqW1L3Q3P5M',
            content: `Learn how utility-first CSS accelerates development without naming endless custom classes. Master pseudo-class prefixes (\`hover:\`, \`focus-visible:\`), responsive prefixes (\`md:\`, \`lg:\`), and theme tokens.`,
            practicePrompt: 'Style a complete hero section with headline, paragraph, and two call-to-action buttons using Tailwind utilities.',
            quiz: {
              question: 'In Tailwind CSS, how do you apply a style only on screens 768px and wider?',
              options: ['desktop:class', 'md:class', '@media(768):class', 'wide:class'],
              correctIndex: 1,
              explanation: 'Tailwind uses breakpoint prefixes like md: (768px) and lg: (1024px) for responsive variants.'
            },
            resources: [{ title: 'Tailwind CSS Quick Reference', url: 'https://tailwindcss.com', type: 'Docs' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    slug: 'digital-marketing-fundamentals',
    title: 'Digital Marketing Fundamentals',
    description: 'Learn modern search engine optimization (SEO), content marketing, email campaigns, organic social strategy, and performance analytics.',
    categoryId: 'cat_mktg',
    categoryName: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the digital marketing funnel: Awareness, Consideration, Conversion, and Retention',
      'Execute on-page and technical SEO fundamentals',
      'Design high-converting email newsletter sequences',
      'Craft content distribution plans across organic channels',
      'Analyze traffic metrics and cost-per-acquisition (CPA)'
    ],
    completionRequirements: 'Draft an integrated multi-channel marketing campaign plan.',
    prerequisites: ['Basic internet familiarity'],
    instructor: {
      name: 'Marcus Vance',
      role: 'Growth Marketing Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-6',
        title: 'Growth Marketing Playbook',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-mktg-1',
            slug: 'the-marketing-funnel',
            title: '1. The Modern Customer Acquisition Funnel',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=n4p7Koy0ZqE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bixR-KIE36o',
            content: `Map out customer journeys from first touchpoint to advocacy. Learn Top-of-Funnel (TOFU) awareness, Middle-of-Funnel (MOFU) education, and Bottom-of-Funnel (BOFU) conversion mechanics.`,
            practicePrompt: 'Sketch a funnel for an online course business identifying one content asset for each funnel stage.',
            quiz: {
              question: 'Which type of content is most suited for Top-of-Funnel (TOFU) audience awareness?',
              options: [
                'In-depth pricing comparison sheets with checkout links',
                'Helpful educational blog posts, infographics, and short explanatory videos',
                'Contract signature requests',
                'Confidential client case studies'
              ],
              correctIndex: 1,
              explanation: 'TOFU content solves broad problems for potential customers without pushing an immediate hard sale.'
            },
            resources: [{ title: 'Funnel Mapping Workbook', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-mktg-2',
            slug: 'seo-fundamentals',
            title: '2. Search Engine Optimization (SEO) Core',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=h9ZmMb_9pWk',
            content: `Learn keyword intent (informational vs commercial), title tags, meta descriptions, semantic header structure, internal linking, and mobile page speed factors.`,
            practicePrompt: 'Write an optimized title tag, URL slug, and meta description for an article on "Freelance Time Tracking Tips".',
            quiz: {
              question: 'What is the optimal character length for a Google search meta description?',
              options: ['20-40 characters', '120-160 characters', '500-800 characters', 'Unlimited'],
              correctIndex: 1,
              explanation: '120 to 160 characters displays cleanly in search engine snippets without getting truncated.'
            },
            resources: [{ title: 'SEO On-Page Checklist', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-mktg-3',
            slug: 'email-marketing-automation',
            title: '3. Email Marketing & Welcome Sequences',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Email remains the highest-ROI direct channel. Design a 4-part automated welcome drip: The Welcome & Deliverable, The Origin Story, The Case Study, and The Soft Pitch.`,
            practicePrompt: 'Draft subject lines and outlines for a 3-part email welcome sequence.',
            quiz: {
              question: 'What is a healthy average open rate for permission-based email newsletters?',
              options: ['1% - 3%', '25% - 40%', '95% - 100%', '0.1%'],
              correctIndex: 1,
              explanation: 'High-quality engaged email lists typically see 25% to 40% open rates across industry benchmarks.'
            },
            resources: [{ title: 'Welcome Sequence Templates', url: '#', type: 'Template' }]
          },
          {
            id: 'l-mktg-4',
            slug: 'organic-social-content-strategy',
            title: '4. Organic Content Distribution & Repurposing',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=2Vj0n2A8fGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Create once, distribute everywhere. Turn one deep educational article into a slide carousel, five short social posts, a newsletter summary, and a video outline.`,
            practicePrompt: 'Outline how you would repurpose one podcast episode into 4 distinct social media assets.',
            quiz: {
              question: 'What is content repurposing in digital marketing?',
              options: [
                'Copying someone else’s work without attribution',
                'Adapting a single core asset into multiple formats tailored for different social channels',
                'Deleting old posts to re-post them every day',
                'Only posting images with no text'
              ],
              correctIndex: 1,
              explanation: 'Repurposing maximizes the reach and ROI of every piece of high-quality original content created.'
            },
            resources: [{ title: 'Content Repurposing Matrix', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-mktg-5',
            slug: 'analytics-and-conversion-tracking',
            title: '5. Marketing Analytics and Key Performance Indicators',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Understand Google Analytics 4, UTM tracking parameters, conversion tracking, customer lifetime value (LTV), and cost-per-acquisition (CPA).`,
            practicePrompt: 'Build a UTM parameter tracking link for a Twitter campaign promoting your newsletter.',
            quiz: {
              question: 'What do UTM parameters in a URL help marketers measure?',
              options: [
                'The user’s battery level',
                'The exact source, medium, and campaign that generated a click and conversion',
                'The color of the user’s monitor',
                'The speed of the internet router'
              ],
              correctIndex: 1,
              explanation: 'UTM tags enable analytics tools to accurately attribute traffic to specific marketing campaigns.'
            },
            resources: [{ title: 'UTM Campaign Builder Template', url: '#', type: 'Sheet' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-7',
    slug: 'video-editing-beginners',
    title: 'Video Editing for Beginners',
    description: 'Learn non-linear editing basics, timeline pacing, B-roll selection, sound design, color grading, and exporting high-impact short-form videos.',
    categoryId: 'cat_video',
    categoryName: 'Video Editing',
    categorySlug: 'video-editing',
    difficulty: 'Beginner',
    durationMinutes: 200,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master the timeline, cuts, and organization in modern editing software (DaVinci Resolve / Premiere)',
      'Edit dialogue with seamless J-cuts and L-cuts',
      'Integrate B-roll footage, sound effects, and musical pacing',
      'Apply basic color correction and LUT workflows',
      'Export vertical 9:16 and horizontal 16:9 videos optimized for online platforms'
    ],
    completionRequirements: 'Edit and export a 60-second narrative or promotional video.',
    prerequisites: ['Computer with modern video editing software installed (free DaVinci Resolve or CapCut)'],
    instructor: {
      name: 'Kai Tanaka',
      role: 'Documentary Editor & Post-Production Lead',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-7',
        title: 'Storytelling in the Timeline',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-vid-1',
            slug: 'interface-and-project-organization',
            title: '1. Project Setup, Bins, and Ingest Workflow',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `Organization saves hours. Set up structured folders: 01_Footage, 02_Audio, 03_Graphics, 04_Exports. Learn project framerates (24fps vs 30fps vs 60fps) and timeline resolution.`,
            practicePrompt: 'Set up an organized project bin hierarchy on your local drive for a new 1-minute video project.',
            quiz: {
              question: 'Which frame rate is traditional for a cinematic film look?',
              options: ['12 fps', '24 fps', '120 fps', '240 fps'],
              correctIndex: 1,
              explanation: '24 frames per second has been the industry standard for natural motion blur and cinematic film aesthetics.'
            },
            resources: [{ title: 'Video Project Folder Template', url: '#', type: 'Zip' }]
          },
          {
            id: 'l-vid-2',
            slug: 'the-art-of-the-cut',
            title: '2. The Art of the Cut: J-Cuts, L-Cuts, and Jump Cuts',
            durationMinutes: 45,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=qT_B2-w7oYs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `Seamless editing hides the seams. Use J-cuts where audio precedes the video cut, and L-cuts where audio continues over the following clip. Eliminate dead pauses without creating robotic jump cuts.`,
            practicePrompt: 'Practice cutting a 30-second speaking clip using at least two J-cuts and two L-cuts.',
            quiz: {
              question: 'What is a "J-cut" in video editing?',
              options: [
                'A cut where the audio of the next scene starts before the video changes',
                'Cutting the video in the shape of the letter J',
                'Deleting all audio tracks',
                'Exporting only in Japan'
              ],
              correctIndex: 0,
              explanation: 'A J-cut introduces the incoming sound before the picture transition, creating smooth narrative flow.'
            },
            resources: [{ title: 'Transitions & Cut Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-vid-3',
            slug: 'sound-design-and-audio-mixing',
            title: '3. Sound Design, Foley, and Music Pacing',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `Audiences will forgive mediocre video, but they will click away from bad audio immediately. Clean dialogue to peak around -6dB to -12dB, duck background music under speech, and layer whooshes and subtle foley.`,
            practicePrompt: 'Mix an audio track with voiceover, ducked ambient music, and sound effects for a 15-second teaser.',
            quiz: {
              question: 'What is audio ducking in video production?',
              options: [
                'Making animal noises',
                'Automatically or manually lowering background music volume when dialogue is spoken',
                'Muting all speakers',
                'Raising volume to maximum distortion'
              ],
              correctIndex: 1,
              explanation: 'Ducking keeps spoken dialogue crisp and intelligible without silencing the atmospheric music track.'
            },
            resources: [{ title: 'Audio Decibel Mixing Chart', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-vid-4',
            slug: 'color-correction-and-grading',
            title: '4. Color Correction vs Creative Grading',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `First correct (fix exposure, white balance, contrast using waveform scopes), then grade (apply creative warmth, mood, or LUTs) to convey visual emotion.`,
            practicePrompt: 'Correct a dark or misbalanced video shot using primary lift, gamma, and gain wheels.',
            quiz: {
              question: 'What is the first step before applying creative color grading to footage?',
              options: [
                'Add heavy grain',
                'Color correction (normalizing exposure, contrast, and white balance)',
                'Exporting directly',
                'Inverting all colors'
              ],
              correctIndex: 1,
              explanation: 'Correction establishes a neutral, balanced baseline before aesthetic stylistic tinting.'
            },
            resources: [{ title: 'LUT Starter Pack & Scope Guide', url: '#', type: 'Download' }]
          },
          {
            id: 'l-vid-5',
            slug: 'rendering-and-platform-optimization',
            title: '5. Exporting for Social Media and Web',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=6O7l8m9n0Q3',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Understand H.264 vs H.265 vs ProRes codecs, bitrate targets (VBR 2-pass), color space tags (Rec.709), and aspect ratio safe zones for TikTok, Reels, and YouTube.`,
            practicePrompt: 'Export your edited clip in high-bitrate H.264 at 1080x1920 with caption safe margins.',
            quiz: {
              question: 'Which video codec is the universal standard for web streaming compatibility?',
              options: ['H.264 (AVC)', 'AVI Uncompressed', 'FLV', 'Windows Media Video'],
              correctIndex: 0,
              explanation: 'H.264 delivers high compression efficiency and universal hardware decoding across all browsers and devices.'
            },
            resources: [{ title: 'Platform Export Presets Cheat Sheet', url: '#', type: 'PDF' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-8',
    slug: 'content-writing-essentials',
    title: 'Content Writing Essentials',
    description: 'Master storytelling, clear headline drafting, persuasive copywriting formulas, article structuring, and SEO content writing.',
    categoryId: 'cat_writing',
    categoryName: 'Content Writing',
    categorySlug: 'content-writing',
    difficulty: 'Beginner',
    durationMinutes: 160,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Write arresting headlines and hooks using proven copywriting frameworks',
      'Structure engaging long-form essays, blog posts, and newsletters',
      'Edit ruthlessly to cut filler words and boost clarity',
      'Incorporate SEO keywords naturally without sacrificing human voice',
      'Pitch articles to publication editors and client blogs'
    ],
    completionRequirements: 'Write and polish an original 800-word educational article.',
    prerequisites: ['Comfort writing in English'],
    instructor: {
      name: 'Clara Oswald',
      role: 'Senior Editor & Publication Strategist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-8',
        title: 'The Craft of Engaging Prose',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-cw-1',
            slug: 'hooks-and-headlines',
            title: '1. Writing Hooks and Headlines That Demand Attention',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=Ai2wN7Wq9bU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            content: `80% of readers read the headline; only 20% read the rest. Learn the 4 Us formula: Urgent, Unique, Ultra-specific, and Useful. Hook readers with contrarian opinions, relatable dilemmas, or surprising facts.`,
            practicePrompt: 'Write 10 variations of a headline for an article teaching productivity for remote workers.',
            quiz: {
              question: 'What is the primary job of the first sentence of any article?',
              options: [
                'To summarize the whole history of the world',
                'To get the reader to read the second sentence',
                'To provide 10 external links',
                'To use the longest words possible'
              ],
              correctIndex: 1,
              explanation: 'A compelling opening hook pulls the reader forward into the narrative flow.'
            },
            resources: [{ title: '100 Proven Headline Formulas', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-cw-2',
            slug: 'article-structure-and-formatting',
            title: '2. Structuring Long-Form Content for Digital Scanners',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=d9Tp7CHniUs',
            content: `Digital readers do not read walls of text. Format for skimability: Descriptive H2 and H3 subheadings, 2-3 sentence paragraphs, bullet points, callout boxes, and bold key concepts.`,
            practicePrompt: 'Take a dense 300-word paragraph and reformat it into a clean, skimmable 3-section layout.',
            quiz: {
              question: 'Why should online paragraphs generally be limited to 2 to 3 sentences?',
              options: [
                'Computers crash on long paragraphs',
                'Short paragraphs create visual whitespace and reduce cognitive reading fatigue on mobile screens',
                'It is an English grammar law',
                'Long paragraphs cannot be translated'
              ],
              correctIndex: 1,
              explanation: 'Whitespace makes content accessible and comfortable to read on vertical mobile displays.'
            },
            resources: [{ title: 'Formatting Guidelines for Writers', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-cw-3',
            slug: 'copywriting-frameworks-aida-pas',
            title: '3. Copywriting Formulas: AIDA and PAS',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=jC4v5AS4RIM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Learn the two most dependable copywriting formulas:\n- **AIDA**: Attention, Interest, Desire, Action.\n- **PAS**: Problem, Agitation, Solution.\nUse these to persuade readers in marketing copy, sales letters, and landing pages.`,
            practicePrompt: 'Write a 100-word product description for a noise-canceling desk lamp using the PAS framework.',
            quiz: {
              question: 'In the PAS copywriting framework, what does the "A" stand for?',
              options: ['Audience', 'Agitation (highlighting the pain of leaving the problem unsolved)', 'Approval', 'Agreement'],
              correctIndex: 1,
              explanation: 'Agitation deepens the emotional urgency before introducing the relief of your solution.'
            },
            resources: [{ title: 'Copywriting Formula Swipe File', url: '#', type: 'Templates' }]
          },
          {
            id: 'l-cw-4',
            slug: 'ruthless-editing-and-clarity',
            title: '4. The Art of Ruthless Self-Editing',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `First draft with your heart; edit with your head. Eliminate passive voice, eliminate throat-clearing filler words ("in order to", "needless to say", "it is important to note"), and vary sentence cadence.`,
            practicePrompt: 'Cut 30% of the word count from a sample 200-word paragraph without losing any critical meaning.',
            quiz: {
              question: 'Which of the following phrases should almost always be trimmed to tighten writing?',
              options: [
                '"In order to" (can simply be "To")',
                '"Because"',
                '"However"',
                '"After"'
              ],
              correctIndex: 0,
              explanation: 'Trimming filler phrases like "in order to" directly enhances clarity and reading speed.'
            },
            resources: [{ title: 'Self-Editing Checklist for Freelancers', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-cw-5',
            slug: 'seo-writing-and-publishing',
            title: '5. Writing for People and Search Engines',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2ePf9rue1Ao',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `Integrate search intent seamlessly. Match the format Google favors for your query (listicle, guide, definition), answer common "People Also Ask" questions, and finish with a strong call-to-action.`,
            practicePrompt: 'Outline an 800-word guide incorporating primary and secondary keywords into natural headings.',
            quiz: {
              question: 'What is "keyword stuffing" and why must it be avoided?',
              options: [
                'Putting keywords in envelopes',
                'Unnaturally repeating search queries in text, which penalizes rankings and ruins reader trust',
                'Writing more than 1,000 words',
                'Using synonyms'
              ],
              correctIndex: 1,
              explanation: 'Modern search algorithms penalize robotic repetition in favor of natural, high-utility topical authority.'
            },
            resources: [{ title: 'Search-Intent Content Planner', url: '#', type: 'Template' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-9',
    slug: 'excel-for-beginners',
    title: 'Microsoft Excel for Beginners',
    description: 'Learn modern spreadsheet fundamentals, essential formulas (VLOOKUP, XLOOKUP, IF), data cleaning, pivot tables, and dynamic charts.',
    categoryId: 'cat_office',
    categoryName: 'Microsoft Office',
    categorySlug: 'microsoft-office',
    difficulty: 'Beginner',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Navigate rows, columns, ranges, and absolute ($A$1) vs relative references',
      'Master essential functions: SUM, AVERAGE, COUNTIF, IF, and XLOOKUP',
      'Clean messy datasets using text functions and duplicate removal',
      'Build interactive Pivot Tables to summarize thousands of rows in seconds',
      'Create polished executive summary dashboards and charts'
    ],
    completionRequirements: 'Build an automated sales analysis spreadsheet with pivot summary and chart.',
    prerequisites: ['Microsoft Excel or Google Sheets access'],
    instructor: {
      name: 'David Chen',
      role: 'Financial Analyst & Excel Educator',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-9',
        title: 'Spreadsheet Mastery',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-xl-1',
            slug: 'grid-navigation-and-references',
            title: '1. Grid Navigation, Data Types, and Cell References',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=Vl0H-qTclOg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=V4mY2w1bZ2w',
            content: `Master the difference between Numbers, Text, Dates, and Booleans. Learn how relative references change when dragged, while absolute references ($A$1) stay anchored.`,
            practicePrompt: 'Create a price calculator table where tax rate cell B1 is referenced absolutely ($B$1) across 10 items.',
            quiz: {
              question: 'In Excel, what does placing a dollar sign before a column and row ($B$4) accomplish?',
              options: [
                'Formats the number as currency in USD',
                'Locks the cell reference so it does not change when copied to other cells',
                'Deletes the cell contents',
                'Calculates bank interest'
              ],
              correctIndex: 1,
              explanation: 'Absolute referencing ($) prevents row or column coordinates from shifting during copy or autofill.'
            },
            resources: [{ title: 'Excel Shortcut Keys Cheat Sheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-xl-2',
            slug: 'essential-formulas-and-logic',
            title: '2. Essential Math, Text, and Logical Formulas',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=8L1OVkw2ZQ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Kz6T_wT7k7Y',
            content: `Automate repetitive calculations with SUM, AVERAGE, MIN, MAX, CONCATENATE, and conditional logic with IF, AND, and OR statements.`,
            practicePrompt: 'Write an IF formula that flags a transaction as "High Value" if amount is greater than $500, else "Standard".',
            quiz: {
              question: 'Which Excel formula evaluates a condition and returns one value if true and another if false?',
              options: ['=SUM()', '=IF()', '=NOW()', '=LEN()'],
              correctIndex: 1,
              explanation: 'The =IF(logical_test, value_if_true, value_if_false) formula provides core spreadsheet logic.'
            },
            resources: [{ title: 'Top 30 Excel Formulas Guide', url: '#', type: 'Reference' }]
          },
          {
            id: 'l-xl-3',
            slug: 'modern-lookup-functions-xlookup',
            title: '3. Data Lookup with XLOOKUP and INDEX-MATCH',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=rwbho0CgEAE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `Move beyond the limitations of VLOOKUP. Learn XLOOKUP to search left or right, handle missing values gracefully, and link customer IDs to order records with zero errors.`,
            practicePrompt: 'Write an XLOOKUP formula to pull product prices from a catalog table into an invoice sheet.',
            quiz: {
              question: 'What is a major advantage of XLOOKUP over the classic VLOOKUP function?',
              options: [
                'It only works on Sundays',
                'It can search both left and right without requiring column index counting, and handles errors natively',
                'It makes spreadsheets smaller than 1kb',
                'It requires no formula syntax'
              ],
              correctIndex: 1,
              explanation: 'XLOOKUP does not require rigid left-to-right column counting and has built-in fallback values.'
            },
            resources: [{ title: 'XLOOKUP vs VLOOKUP Breakdown', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-xl-4',
            slug: 'pivot-tables-and-summarization',
            title: '4. Pivot Tables: Analyzing Data in Seconds',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=m13x2a5mK38',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `Pivot tables transform thousands of messy raw rows into clean summaries. Master Rows, Columns, Values, and Filters, plus grouping by dates and calculating percentage of total.`,
            practicePrompt: 'Construct a Pivot Table from a sales dataset showing total revenue by product category and region.',
            quiz: {
              question: 'What happens to a Pivot Table when the underlying source data is updated?',
              options: [
                'It instantly deletes itself',
                'You right-click and select "Refresh" (or Alt+F5) to recalculate the pivot table',
                'You must re-create the entire table from scratch',
                'Excel must be reinstalled'
              ],
              correctIndex: 1,
              explanation: 'Clicking Refresh updates the Pivot Table data cache with any modifications from the source table.'
            },
            resources: [{ title: 'Pivot Table Starter Dataset', url: '#', type: 'CSV' }]
          },
          {
            id: 'l-xl-5',
            slug: 'data-visualization-and-dashboards',
            title: '5. Executive Charts and Dashboard Design',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=9RUeONbL0eA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Edsxf_NBFrw',
            content: `Select the right chart for the story: Line charts for trends over time, Bar charts for categorical comparison, and clean KPI cards for key numbers. Avoid cluttered 3D pie charts.`,
            practicePrompt: 'Create a clean 2-chart visual summary with clear axis labels, data callouts, and minimal ink.',
            quiz: {
              question: 'Which chart type is best suited to show revenue trends over a 12-month period?',
              options: ['3D Exploded Pie Chart', 'Line Chart', 'Radar Chart', 'Scatter Plot with 5000 dots'],
              correctIndex: 1,
              explanation: 'Line charts clearly display continuous trends, peaks, and troughs across sequential time intervals.'
            },
            resources: [{ title: 'Excel Dashboard Template', url: '#', type: 'Template' }]
          }
        ]
      }
    ]
  },
  {
    id: 'course-10',
    slug: 'cv-interview-prep',
    title: 'CV Writing and Interview Preparation',
    description: 'Craft an ATS-optimized modern resume, build an authentic LinkedIn presence, and ace behavioral and technical job interviews.',
    categoryId: 'cat_career',
    categoryName: 'Career Development',
    categorySlug: 'career-development',
    difficulty: 'Beginner',
    durationMinutes: 170,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Format a clean, single-column resume that passes Applicant Tracking Systems (ATS)',
      'Quantify your accomplishments using the Google "X-Y-Z" formula',
      'Optimize your LinkedIn headline, summary, and experience sections for recruiters',
      'Structure behavioral interview answers with the STAR method (Situation, Task, Action, Result)',
      'Prepare thoughtful, strategic questions to ask interviewers'
    ],
    completionRequirements: 'Draft your ATS-compliant resume and record three practice STAR interview responses.',
    prerequisites: ['A draft of your education and project or work experience'],
    instructor: {
      name: 'Jordan Bradley',
      role: 'Tech Talent Partner & Executive Career Coach',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-10',
        title: 'Career Launch Blueprint',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-cv-1',
            slug: 'ats-friendly-resume-architecture',
            title: '1. ATS-Friendly Modern Resume Architecture',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=ttWskb4jL_8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            content: `Applicant Tracking Systems (ATS) reject complex multi-column resumes with tables and graphics. Learn single-column, clean semantic layouts with clear headers: Contact, Summary, Experience, Projects, Skills, and Education.`,
            practicePrompt: 'Reformat your existing resume into a single-column layout using clean sans-serif typography.',
            quiz: {
              question: 'Why do sophisticated recruiters advise against multi-column graphic resumes for online applications?',
              options: [
                'Colors are not allowed on computers',
                'Automated ATS parsers often misread text order across multi-column tables and text boxes',
                'PDF files cannot be opened by hiring managers',
                'Resumes should only be written on physical paper'
              ],
              correctIndex: 1,
              explanation: 'Single-column designs parse reliably through all ATS algorithms, guaranteeing your content is indexed.'
            },
            resources: [{ title: 'ATS-Optimized Resume Template', url: '#', type: 'Docx' }]
          },
          {
            id: 'l-cv-2',
            slug: 'the-xyz-accomplishment-formula',
            title: '2. Writing Bullet Points with the X-Y-Z Formula',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Transform boring job duties into compelling achievements: "Accomplished [X], as measured by [Y], by doing [Z]."\n\n*Before*: Responsible for writing blog posts.\n*After*: Increased organic website traffic by 42% over 6 months by researching and publishing 12 SEO-targeted educational guides.`,
            practicePrompt: 'Rewrite 3 of your current resume bullet points using the X-Y-Z formula with estimated metrics.',
            quiz: {
              question: 'In the Google X-Y-Z accomplishment formula, what does "Y" represent?',
              options: ['Your years at the company', 'The quantifiable measurement or metric of success', 'Your manager’s name', 'Your salary'],
              correctIndex: 1,
              explanation: 'Y supplies the concrete metric that proves the real-world scale and impact of your work.'
            },
            resources: [{ title: '50 Strong Action Verbs for Resumes', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-cv-3',
            slug: 'linkedin-profile-optimization',
            title: '3. LinkedIn Optimization for Inbound Opportunities',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=nE301qG9mE4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `Recruiters search LinkedIn with boolean queries. Optimize your Headline with key skills, craft a first-person conversational About section, and showcase featured projects, certificates, and work samples.`,
            practicePrompt: 'Draft an attention-grabbing LinkedIn headline and 3-paragraph "About" section highlighting your target career.',
            quiz: {
              question: 'What is the most effective format for a LinkedIn headline?',
              options: [
                '"Unemployed seeking anything"',
                '"Target Role | Key Skills & Technologies | Value Proposition Outcome"',
                'Just your first name',
                'A single emoji'
              ],
              correctIndex: 1,
              explanation: 'A descriptive headline matches recruiter search keywords and instantly communicates your value.'
            },
            resources: [{ title: 'LinkedIn Profile Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-cv-4',
            slug: 'mastering-the-star-method',
            title: '4. Behavioral Interviews: The STAR Method',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=i9YQ_VkWb5M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `When asked "Tell me about a time you overcame a difficult technical obstacle", answer using STAR:\n- **S**ituation: Context and backdrop (15%)\n- **T**ask: The specific challenge you owned (15%)\n- **A**ction: The step-by-step decisions YOU made (50%)\n- **R**esult: The measurable positive outcome and lesson learned (20%)`,
            practicePrompt: 'Draft a complete STAR response to: "Describe a project where requirements changed close to the deadline."',
            quiz: {
              question: 'Where should the majority (approximately 50%) of your time be spent in a STAR interview response?',
              options: ['Situation', 'Task', 'Action (the specific choices and executions you made)', 'Result'],
              correctIndex: 2,
              explanation: 'Interviewers evaluate your personal problem-solving process, initiative, and skills through the Action phase.'
            },
            resources: [{ title: '20 Common Behavioral Questions & STAR Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-cv-5',
            slug: 'interview-questions-and-negotiation',
            title: '5. Reverse Interviewing and Offer Negotiation',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=9g0H29W6F2U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `Never say "I don't have any questions". Ask questions that reveal team culture, engineering standards, and growth opportunities. Learn how to respond to salary expectations with market-researched ranges.`,
            practicePrompt: 'Prepare 5 insightful questions to ask an engineering manager or client at the end of an interview.',
            quiz: {
              question: 'Which of the following is an insightful reverse-interview question to evaluate team culture?',
              options: [
                '"Can I leave early every day?"',
                '"How does the team handle missed deadlines or unexpected production bugs?"',
                '"Do you check my internet browsing history?"',
                '"When do I get my first raise?"'
              ],
              correctIndex: 1,
              explanation: 'Asking how teams handle friction reveals true psychological safety and operational maturity.'
            },
            resources: [{ title: '15 High-Impact Reverse Interview Questions', url: '#', type: 'PDF' }]
          }
        ]
      }
    ]
  }
];

export const INITIAL_COURSES: Course[] = [
  ...FOUNDATIONAL_COURSES,
  ...PROGRAMMING_COURSES,
  ...AI_TECH_COURSES,
  ...CAREER_COURSES,
  ...CREATIVE_COURSES,
  ...BUSINESS_COURSES,
  ...PRODUCTIVITY_COURSES,
  ...URDU_COURSES
];


export const CATEGORIES = [
  { id: 'cat_ai', slug: 'artificial-intelligence', name: 'Artificial Intelligence', icon: 'Sparkles', description: 'Harness AI workflows, prompt engineering, and modern intelligence tools.' },
  { id: 'cat_comm', slug: 'english-communication', name: 'English Communication', icon: 'MessageSquare', description: 'Master professional workplace conversations, emails, and presentations.' },
  { id: 'cat_freelance', slug: 'freelancing', name: 'Freelancing Fundamentals', icon: 'Briefcase', description: 'Launch a thriving freelance career, pitch high-paying clients, and deliver work.' },
  { id: 'cat_design', slug: 'graphic-design', name: 'Graphic Design', icon: 'Palette', description: 'Build visual identities, layout compositions, and brand systems.' },
  { id: 'cat_web', slug: 'web-development', name: 'Web Development', icon: 'Code', description: 'Create responsive web apps with HTML, CSS, JavaScript, and modern tooling.' },
  { id: 'cat_mktg', slug: 'digital-marketing', name: 'Digital Marketing', icon: 'TrendingUp', description: 'Drive organic traffic, grow social followings, and execute campaigns.' },
  { id: 'cat_video', slug: 'video-editing', name: 'Video Editing', icon: 'Video', description: 'Cut engaging short-form and long-form video content.' },
  { id: 'cat_writing', slug: 'content-writing', name: 'Content Writing', icon: 'PenTool', description: 'Craft compelling blogs, newsletters, and persuasive marketing copy.' },
  { id: 'cat_office', slug: 'microsoft-office', name: 'Microsoft Office', icon: 'FileSpreadsheet', description: 'Automate data analysis, formulas, and presentations with Excel.' },
  { id: 'cat_career', slug: 'career-development', name: 'Career Development', icon: 'Award', description: 'Craft stand-out resumes, portfolio showcases, and interview techniques.' },
  { id: 'cat_prog', slug: 'programming', name: 'Programming', icon: 'Terminal', description: 'Master computer science fundamentals, logic, and modern programming languages.' },
  { id: 'cat_data', slug: 'data-analysis', name: 'Data Analysis', icon: 'BarChart3', description: 'Transform raw datasets into actionable insights and strategic decisions.' },
  { id: 'cat_ecom', slug: 'e-commerce', name: 'E-commerce', icon: 'ShoppingBag', description: 'Build, launch, and scale profitable digital stores and marketplaces.' },
  { id: 'cat_finance', slug: 'personal-finance', name: 'Personal Finance Basics', icon: 'DollarSign', description: 'Manage cash flow, budget effectively, and invest in your future.' },
  { id: 'cat_computer', slug: 'computer-fundamentals', name: 'Computer Fundamentals', icon: 'Monitor', description: 'Operating systems, digital security, file management, and computer literacy.' }
];
