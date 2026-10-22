import { Course } from './types';

export const CAREER_COURSES: Course[] = [
  {
    id: 'course-car-1',
    slug: 'building-freelance-portfolio',
    title: 'Building a Freelance Portfolio',
    description: 'Learn how to curate case studies, articulate problem-solution outcomes, design proof-of-work showcases, and deploy a conversion-focused portfolio website.',
    categoryId: 'cat_freelance',
    categoryName: 'Freelancing Fundamentals',
    categorySlug: 'freelancing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Structure case studies around business problems, strategic execution, and quantifiable results',
      'Select your top 3 highest-leverage projects rather than displaying mediocre work',
      'Craft compelling client outcome narratives that justify premium rates',
      'Include testimonials and proof-of-competence artifacts',
      'Build a lightweight, mobile-responsive portfolio site',
      'Implement clear call-to-actions to book consultation calls'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['One digital skill or project sample'],
    instructor: {
      name: 'Tariq Mansoor',
      role: 'Top-Rated Agency Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-port-1',
        title: 'Portfolio Architecture',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-port-1',
            slug: 'portfolio-purpose-mindset',
            title: '1. The Client-Centered Portfolio Mindset',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Clients do not hire lines of code or Photoshop files; they hire business results: more sales, saved time, lower overhead, or superior credibility. Frame every item around client outcomes.`,
            practicePrompt: 'Write down the single biggest business outcome your primary digital skill delivers for clients.',
            quiz: {
              question: 'What is the primary objective of a freelance portfolio website?',
              options: ['To win design awards', 'To prove to high-paying clients that you can solve their specific business problem and de-risk hiring you', 'To store your resume as a PDF', 'To showcase 50 random sketches'],
              correctIndex: 1,
              explanation: 'A portfolio acts as proof of business value to de-risk client investment.'
            },
            resources: [{ title: 'Portfolio Architecture Blueprint', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-port-2',
            slug: 'the-three-project-rule',
            title: '2. The 3-Project Rule: Quality Over Quantity',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=uC0_kZ3y9Y0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `A client judges you by your weakest visible sample. Showing 3 in-depth, stellar case studies beats displaying 15 shallow screenshots. Curate ruthlessly.`,
            practicePrompt: 'Select 3 projects from your past work or hypothetical briefs and rank them by business impact.',
            quiz: {
              question: 'Why is it better to display 3 deep case studies rather than 20 brief screenshots?',
              options: ['Servers cannot store 20 images', 'Clients evaluate your floor; deep case studies demonstrate strategic thought and thorough execution', 'Clients only spend 2 seconds on a site', 'It is cheaper to host'],
              correctIndex: 1,
              explanation: 'In-depth case studies substantiate your expertise and problem-solving process.'
            },
            resources: [{ title: 'Case Study Selection Worksheet', url: '#', type: 'Worksheet' }]
          },
          {
            id: 'l-port-3',
            slug: 'case-study-anatomy',
            title: '3. Anatomy of a High-Converting Case Study',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=6h2e6kZ4Q7c',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Structure case studies with: 1. Executive Summary & Client Context, 2. The Core Problem & Constraints, 3. The Solution & Process, 4. Measurable Outcomes & Testimonial.`,
            practicePrompt: 'Draft an outline for one case study following the 4-part structure.',
            quiz: {
              question: 'Which component of a case study is most persuasive to potential new clients?',
              options: ['A stock photo of people shaking hands', 'The measurable outcome (e.g. +38% conversions, 12 hours saved weekly)', 'The software version number', 'A list of 100 CSS classes'],
              correctIndex: 1,
              explanation: 'Concrete measurable outcomes substantiate the value of your services.'
            },
            resources: [{ title: 'Case Study Writing Template', url: '#', type: 'Template' }]
          },
          {
            id: 'l-port-4',
            slug: 'creating-spec-work-samples',
            title: '4. Creating Real-World Concept Projects When Starting Out',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=7Gq9m2q5W5o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `No clients yet? Do not wait. Pick a real local business, non-profit, or open problem. Redesign their mobile checkout, write their newsletter welcome sequence, or build an automation tool. Document your work as a concept case study.`,
            practicePrompt: 'Identify an existing business website with a flawed user experience and outline a 3-step proposal to fix it.',
            quiz: {
              question: 'How should you label an unsolicited redesign project on your portfolio?',
              options: ['Lie and say you were paid $50,000', 'Transparently label it as an independent concept study or self-initiated redesign project', 'Hide it in the footer', 'Do not include it'],
              correctIndex: 1,
              explanation: 'Honest concept studies demonstrate real skill while preserving professional integrity.'
            },
            resources: [{ title: 'Concept Project Generator Ideas', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-port-5',
            slug: 'portfolio-ux-and-layout',
            title: '5. Fast, Mobile-First Portfolio Design',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `Clients browse on phones. Keep layouts clean: clear headline, one-line positioning statement, 3 prominent project cards, testimonial quotes, and a direct contact form. Avoid heavy auto-playing video reels.`,
            practicePrompt: 'Review your portfolio layout on a 375px mobile screen to verify touch targets and reading measure.',
            quiz: {
              question: 'What is a common UX flaw on modern freelancer portfolio websites?',
              options: ['Clear typography', 'Heavy, slow animations and missing contact forms that cause busy clients to bounce before seeing work', 'A short bio', 'Simple black text on white'],
              correctIndex: 1,
              explanation: 'Heavy animations and hidden contact links obstruct client conversion.'
            },
            resources: [{ title: 'Portfolio UX Checklist', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-port-6',
            slug: 'calls-to-action-and-booking',
            title: '6. Clear Calls to Action and Inbound Funnels',
            durationMinutes: 25,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Guide the prospect to the logical next step: a low-friction intake form or 15-minute discovery call link. Ask 3 qualifying questions: project scope, timeline, and estimated budget.`,
            practicePrompt: 'Draft an intake form asking only the 3 essential questions needed to qualify a client.',
            quiz: {
              question: 'What is the purpose of qualifying questions on an intake contact form?',
              options: ['To interrogate the client rudely', 'To filter out tire-kickers and ensure alignment on timeline and budget expectations before meeting', 'To collect personal passwords', 'To charge a fee'],
              correctIndex: 1,
              explanation: 'Qualifying ensures you invest time only on mutually aligned opportunities.'
            },
            resources: [{ title: 'Client Intake Form Swipe File', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is a positioning statement?',
        options: ['A yoga pose', 'A concise sentence defining who you help, what specific problem you solve, and your unique differentiator', 'A legal contract clause', 'A job title'],
        correctIndex: 1,
        explanation: 'Positioning defines your target audience and value proposition.'
      },
      {
        question: 'Why is it risky to brand yourself as "I do everything (coding, video, accounting, SEO)"?',
        options: ['Clients think you are too cheap', 'Clients view generalists who claim everything as shallow amateurs compared to specialists with focused expertise', 'It takes too long to type', 'It is against terms'],
        correctIndex: 1,
        explanation: 'Specialists inspire confidence and command higher project fees.'
      },
      {
        question: 'What should accompany every screenshot in a case study?',
        options: ['Nothing', 'A concise caption explaining the design or technical decision made and how it helped the client', 'A watermark', 'A date'],
        correctIndex: 1,
        explanation: 'Captions explain the deliberate rationale behind visual assets.'
      },
      {
        question: 'What is social proof in a freelance portfolio?',
        options: ['Social media followers', 'Evidence of past client satisfaction such as direct testimonials, ratings, and logos of companies worked with', 'Sharing posts', 'Having friends'],
        correctIndex: 1,
        explanation: 'Social proof verifies reliability through authentic client feedback.'
      },
      {
        question: 'Where should your primary Call to Action (e.g. "Work With Me") appear on your portfolio?',
        options: ['Only on page 4', 'In the header navigation and repeated prominently at the end of every case study', 'Only in the footer copyright', 'Nowhere'],
        correctIndex: 1,
        explanation: 'Placing CTAs in the header and after case studies maximizes conversions.'
      },
      {
        question: 'What makes a client testimonial credible and persuasive?',
        options: ['Anonymous quote with no name', 'Full client name, job title, company name, and a specific statement detailing the outcome achieved', 'A single word "Great!"', 'Fake stock photo'],
        correctIndex: 1,
        explanation: 'Specific, attributable testimonials convey authentic credibility.'
      },
      {
        question: 'Why should you include your approximate project starting price or minimum budget on your site?',
        options: ['To scare everyone away', 'To anchor high value and filter out inquiries with unrealistic expectations below your minimum project fee', 'Because taxes require it', 'It is required by banks'],
        correctIndex: 1,
        explanation: 'Minimum budget thresholds save time by pre-qualifying leads.'
      },
      {
        question: 'What is a "before-and-after" comparison in a case study?',
        options: ['A haircut photo', 'A side-by-side contrast of the client\'s previous flawed state versus your redesigned, optimized solution', 'A date stamp', 'An invoice'],
        correctIndex: 1,
        explanation: 'Before/after contrasts clearly demonstrate the magnitude of improvement.'
      },
      {
        question: 'How quickly should a modern freelance portfolio website load on mobile 4G connections?',
        options: ['Under 2 seconds', '15 seconds', '1 minute', 'Speed does not matter'],
        correctIndex: 0,
        explanation: 'Fast page loads prevent prospective clients from bouncing.'
      },
      {
        question: 'What should you do after launching your portfolio website?',
        options: ['Wait passively forever', 'Proactively share case studies on LinkedIn, pitch relevant prospective clients, and update it quarterly with fresh outcomes', 'Delete it', 'Change all fonts daily'],
        correctIndex: 1,
        explanation: 'A portfolio requires proactive distribution and outreach to generate clients.'
      }
    ],
    finalProject: {
      title: 'Complete 3-Project Conversion Portfolio',
      brief: 'Assemble a complete conversion-focused portfolio outline. Write a strong 1-sentence positioning statement, author 3 detailed case studies with problem-solution-outcome breakdowns, and include a frictionless intake form with qualifying questions.',
      requirements: [
        'Clear niche positioning statement in the header',
        'Three detailed case studies with quantified results',
        '3-question intake qualifying form',
        'Testimonial section with attribution'
      ]
    }
  },
  {
    id: 'course-car-2',
    slug: 'freelance-proposal-writing',
    title: 'Freelance Proposal Writing',
    description: 'Learn how to analyze client job postings, write high-converting pitches, structure tiered milestone pricing, avoid common bidding mistakes, and win projects on Upwork and cold outreach.',
    categoryId: 'cat_freelance',
    categoryName: 'Freelancing Fundamentals',
    categorySlug: 'freelancing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Deconstruct client job posts to identify unspoken pain points and requirements',
      'Hook clients in the first 2 lines without generic greetings or self-centered rambling',
      'Structure proposals with the Problem-Diagnosis-Milestones-Call framework',
      'Quote tiered options (Basic, Recommended, Comprehensive) to anchor value',
      'Close with low-friction discovery questions',
      'Follow up professionally without sounding desperate'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic writing and digital trade skills'],
    instructor: {
      name: 'Tariq Mansoor',
      role: 'Top-Rated Agency Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-prop-1',
        title: 'Proposal Mastery',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-prop-1',
            slug: 'job-post-deconstruction',
            title: '1. Deconstructing Job Postings and Spotting Red Flags',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=6h2e6kZ4Q7c',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Clients post jobs when they are in pain or under a deadline. Learn to read between the lines, identify decision-makers, and recognize red flags: vague scope with low fixed budget, micro-management language, or requests for free work.`,
            practicePrompt: 'Analyze a sample job posting and identify the client’s real business goal beneath the technical request.',
            quiz: {
              question: 'Which of the following is an immediate red flag in a freelance job posting?',
              options: ['Client provides clear wireframes', 'Client demands free mockups before hiring and states "this should only take 10 minutes"', 'Client has verified payment method', 'Client has a reasonable deadline'],
              correctIndex: 1,
              explanation: 'Clients demanding free work or minimizing technical effort signal toxic engagements.'
            },
            resources: [{ title: 'Job Post Red Flags Checklist', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-prop-2',
            slug: 'the-first-two-lines',
            title: '2. The Critical First Two Lines: Hooking the Client',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=uC0_kZ3y9Y0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `On platforms like Upwork, clients see only the first 2 lines of your proposal in the inbox list. Never waste them with "Dear Hiring Manager, I am writing to apply for your job..." Open immediately with their specific problem and an instant diagnosis.`,
            practicePrompt: 'Write 3 opening hooks for a client whose Shopify store is experiencing slow mobile page loads.',
            quiz: {
              question: 'Why should you never open a proposal with "Hi, my name is Alex and I have 5 years experience"?',
              options: ['Names are illegal', 'Clients only see 2 lines in their preview; opening with your life story tells them nothing about how you solve THEIR problem', 'Clients dislike experience', 'It uses too many letters'],
              correctIndex: 1,
              explanation: 'Clients want immediate confirmation that you understand their challenge.'
            },
            resources: [{ title: '10 High-Converting Proposal Openers', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-prop-3',
            slug: 'the-four-part-proposal-framework',
            title: '3. The 4-Part Proposal Architecture',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `1. Diagnosis (Restate their problem in clearer terms)\n2. Action Plan (Outline the 2-3 specific milestones you will execute)\n3. Proof (Link 1 relevant portfolio case study)\n4. Low-friction Question (Ask a clarifying question to initiate a chat)`,
            practicePrompt: 'Draft a 150-word proposal using the 4-part framework responding to a web design brief.',
            quiz: {
              question: 'In the 4-part framework, what is the purpose of the closing question?',
              options: ['To demand money', 'To make replying easy and low-friction, starting a dialogue rather than asking for an instant contract', 'To ask for their home address', 'To apologize'],
              correctIndex: 1,
              explanation: 'A focused question invites an easy reply to start the conversation.'
            },
            resources: [{ title: 'Proposal Template Framework', url: '#', type: 'Template' }]
          },
          {
            id: 'l-prop-4',
            slug: 'tiered-pricing-options',
            title: '4. Anchoring Value with Tiered Pricing',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=7Gq9m2q5W5o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `When quoting fixed projects, offer 3 options: Option 1 (Core Essentials), Option 2 (Recommended Complete Solution), Option 3 (Premium Accelerated with Extra Deliverables). This eliminates "Yes vs No" and replaces it with "Which tier fits our budget?"`,
            practicePrompt: 'Design a 3-tier pricing quote for building a landing page.',
            quiz: {
              question: 'How does tiered pricing change the client\'s decision psychology?',
              options: ['It forces them to leave', 'It shifts the decision from "Should I hire this freelancer?" to "Which of these packages is best for us?"', 'It makes you work for free', 'It creates confusion'],
              correctIndex: 1,
              explanation: 'Tiered options change the mental frame to choosing scope.'
            },
            resources: [{ title: 'Tiered Pricing Matrix', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-prop-5',
            slug: 'video-proposals-and-loom',
            title: '5. Using 60-Second Video Proposals to Stand Out',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `When bidding on competitive jobs, record a 60-second video (Loom) walking through their current site or brief. It demonstrates authentic communication, instant credibility, and proves you are not an automated bot.`,
            practicePrompt: 'Record or script a 60-second Loom proposal video walking through an audit of a live website.',
            quiz: {
              question: 'Why are brief screen-recording video proposals so effective in competitive bidding?',
              options: ['They take 5 hours to make', 'They prove you are a genuine human who actually reviewed their specific project, creating immediate trust', 'They replace contracts', 'Clients love long movies'],
              correctIndex: 1,
              explanation: 'Personalized video audits instantly differentiate you from automated copy-paste proposals.'
            },
            resources: [{ title: 'Loom Video Script Template', url: '#', type: 'Script' }]
          },
          {
            id: 'l-prop-6',
            slug: 'follow-up-and-closing',
            title: '6. The Art of the Polite, Value-Add Follow-Up',
            durationMinutes: 25,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=6h2e6kZ4Q7c',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Never follow up with "Did you see my proposal?" Instead, follow up with added value: "I had a quick thought about how to optimize your checkout speed while looking into this today—here is a quick sketch."`,
            practicePrompt: 'Draft a value-add follow-up email to send 48 hours after submitting a proposal.',
            quiz: {
              question: 'What is the most effective approach for following up on an unanswered proposal?',
              options: ['Send 10 angry exclamation marks', 'Provide an additional helpful insight, resource, or sketch related to their project', 'Call their personal phone repeatedly', 'Give up immediately'],
              correctIndex: 1,
              explanation: 'Providing fresh value proves proactive professionalism without begging.'
            },
            resources: [{ title: 'Follow-Up Email Templates', url: '#', type: 'PDF' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is the most common reason clients reject proposals in the first 5 seconds?',
        options: ['The freelancer\'s name', 'Obvious automated copy-pasting that does not address the client\'s specific job requirements', 'Using standard English', 'Having a portfolio'],
        correctIndex: 1,
        explanation: 'Generic copy-pasted templates are instantly discarded by serious clients.'
      },
      {
        question: 'What should you do if a client does not state an explicit project budget?',
        options: ['Refuse to talk to them', 'Diagnose the scope first and offer tiered options with clear cost estimates', 'Quote $1', 'Work for free'],
        correctIndex: 1,
        explanation: 'Tiered options anchor scope clearly when clients are unsure of costs.'
      },
      {
        question: 'Why should you keep proposals under 250 words?',
        options: ['Computers cannot send long emails', 'Busy clients scan proposals on mobile phones and value concise, structured clarity', 'Long proposals are illegal', 'To save ink'],
        correctIndex: 1,
        explanation: 'Brevity respects the client\'s time and increases reading completion.'
      },
      {
        question: 'What does "scope creep" mean in a freelance project?',
        options: ['A virus on your laptop', 'When a client gradually demands extra tasks and deliverables beyond what was agreed upon in the original proposal without additional pay', 'Finishing early', 'A pricing model'],
        correctIndex: 1,
        explanation: 'Scope creep expands work without corresponding compensation.'
      },
      {
        question: 'How do milestone payments protect the freelancer?',
        options: ['They ensure you are compensated progressively as phases of the project are completed and approved', 'They eliminate taxes', 'They stop client emails', 'They are unnecessary'],
        correctIndex: 0,
        explanation: 'Milestone schedules de-risk projects by tying progress to payment releases.'
      },
      {
        question: 'What should you do if a prospective client asks to communicate off-platform before an official contract is established on Upwork?',
        options: ['Agree immediately', 'Politely decline and explain that platform terms of service require pre-contract communication to remain on-platform to protect both parties', 'Block them rudely', 'Delete your profile'],
        correctIndex: 1,
        explanation: 'Pre-contract off-platform communication violates platform rules and risks account bans.'
      },
      {
        question: 'What is an effective way to handle price objections from a client ("Your quote is higher than other freelancers")?',
        options: ['Immediately drop your price by 80%', 'Acknowledge their budget, reiterate the specific business outcome and risk reduction your solution provides, or offer to trim scope rather than discounting rates', 'Argue aggressively', 'Work for free'],
        correctIndex: 1,
        explanation: 'Trimming scope protects your rate integrity while respecting client budget constraints.'
      },
      {
        question: 'Which of the following demonstrates proactive proposal writing?',
        options: ['"I can do whatever you want, tell me what to do."', '"Based on your requirement, I reviewed your current checkout and identified two bottlenecks; here is how I propose resolving them."', '"Hire me please."', '"I am cheap."'],
        correctIndex: 1,
        explanation: 'Proactive diagnostic thinking proves high-caliber capability.'
      },
      {
        question: 'Why is asking for a 50% upfront deposit standard industry practice for fixed client projects?',
        options: ['To steal money', 'To secure client commitment, cover initial time investment, and establish mutual trust before work begins', 'It is required by the government', 'Because credit cards require it'],
        correctIndex: 1,
        explanation: 'Upfront deposits align incentives and verify financial commitment.'
      },
      {
        question: 'What should be the ultimate goal of submitting a proposal?',
        options: ['To win the contract blindly', 'To initiate a high-value discovery conversation to confirm project fit and alignment', 'To send as many copy-pastes as possible', 'To collect email addresses'],
        correctIndex: 1,
        explanation: 'Proposals open doors to mutually profitable discovery dialogues.'
      }
    ],
    finalProject: {
      title: 'High-Converting Client Proposal Masterpiece',
      brief: 'Select a real posted job opportunity in your field. Draft a complete proposal using the 4-part framework: an arresting hook in the first 2 lines, diagnosis of their core challenge, 3-milestone implementation plan with tiered pricing, relevant portfolio link, and a closing discovery question.',
      requirements: [
        'Total length between 150 and 250 words',
        'Demonstrated 2-line hook addressing client pain points directly',
        'Tiered options quoted with scope deliverables',
        'Zero generic filler or copy-paste cliches'
      ]
    }
  },
  {
    id: 'course-car-3',
    slug: 'finding-evaluating-remote-work',
    title: 'Finding and Evaluating Remote Work',
    description: 'Learn where to uncover vetted remote jobs and freelance contracts, how to evaluate company culture, analyze salary benchmarks, and avoid remote work scams.',
    categoryId: 'cat_career',
    categoryName: 'Career Development',
    categorySlug: 'career-development',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Navigate specialized remote job boards and hidden talent networks',
      'Identify and avoid common remote employment phishing and check scams',
      'Evaluate company remote culture (asynchronous vs synchronous expectations)',
      'Benchmark international salaries and cost-of-living adjustments',
      'Optimize your home ergonomic workspace and productivity tools',
      'Conduct reverse interviews to verify management maturity'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic internet and communication skills'],
    instructor: {
      name: 'Jordan Bradley',
      role: 'Tech Talent Partner',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-rem-1',
        title: 'Remote Job Search',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-rem-1',
            slug: 'remote-job-boards-ecosystem',
            title: '1. Navigating Vetted Remote Job Platforms',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=7Gq9m2q5W5o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Move beyond crowded generic boards. Target dedicated remote platforms like We Work Remotely, Remote OK, Wellfound (AngelList), and company career pages with asynchronous remote cultures.`,
            practicePrompt: 'Research 3 remote-first companies in your discipline and note their published remote working policies.',
            quiz: {
              question: 'Which of the following represents a remote-first platform as opposed to generic local classifieds?',
              options: ['We Work Remotely', 'Local newspaper', 'Craigslist gigs', 'Radio advertisement'],
              correctIndex: 0,
              explanation: 'Dedicated remote job boards focus on verified distributed teams.'
            },
            resources: [{ title: 'Top 15 Remote Job Boards Directory', url: '#', type: 'Directory' }]
          },
          {
            id: 'l-rem-2',
            slug: 'spotting-remote-job-scams',
            title: '2. Spotting and Avoiding Remote Work Scams',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `Scammers exploit remote job seekers. Red flags: Interviews conducted purely over Telegram or WhatsApp text without video, offers sent within 10 minutes without technical review, requests to deposit a check to buy equipment, or demands for upfront application fees.`,
            practicePrompt: 'List 3 red flags in a fake job offer letter that should prompt you to walk away immediately.',
            quiz: {
              question: 'A company sends you an email offering you an immediate $45/hr remote job and asks you to deposit a check to buy home office equipment. What should you do?',
              options: ['Deposit the check immediately', 'Recognize this as a classic fake check scam, report, and delete it immediately', 'Send them your passport copy', 'Thank them warmly'],
              correctIndex: 1,
              explanation: 'Fake check equipment scams are common; legitimate employers supply hardware directly.'
            },
            resources: [{ title: 'Remote Scam Defense Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-rem-3',
            slug: 'async-vs-sync-culture',
            title: '3. Evaluating Asynchronous vs Synchronous Cultures',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=uC0_kZ3y9Y0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `Healthy remote companies run on asynchronous documentation (Slack, Notion, Linear) where employees have timezone autonomy. Toxic remote companies mandate constant webcam monitoring and micromanage keystrokes.`,
            practicePrompt: 'Draft 3 questions to ask a hiring manager to evaluate if their team is truly async-friendly.',
            quiz: {
              question: 'What is a hallmark of a healthy asynchronous remote working culture?',
              options: ['Mandatory 8-hour Zoom meetings with webcams always on', 'Thorough written documentation, transparent project trackers, and respect for focus time across time zones', 'Working 24 hours a day', 'No communication ever'],
              correctIndex: 1,
              explanation: 'Async cultures rely on thoughtful documentation over constant live meetings.'
            },
            resources: [{ title: 'Async Culture Evaluation Scorecard', url: '#', type: 'Scorecard' }]
          },
          {
            id: 'l-rem-4',
            slug: 'international-compensation-taxes',
            title: '4. International Compensation, Contracts, and Taxes',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=6h2e6kZ4Q7c',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `Understand the difference between W-2 (US employee), 1099 (independent contractor), and international Employer of Record (EOR) services like Deel and Remote.com. Calculate your own tax obligations as a contractor.`,
            practicePrompt: 'Calculate your local estimated tax and healthcare costs when switching from local employment to international contracting.',
            quiz: {
              question: 'What is an Employer of Record (EOR) in global remote employment?',
              options: ['A file cabinet', 'A third-party organization that legally hires workers locally on behalf of an international company, managing compliance and payroll', 'A recruitment bot', 'An insurance policy'],
              correctIndex: 1,
              explanation: 'EOR services enable international companies to employ talent compliantly worldwide.'
            },
            resources: [{ title: 'Contractor vs Employee Overview', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-rem-5',
            slug: 'remote-productivity-boundaries',
            title: '5. Ergonomics, Mental Health, and Work-Life Boundaries',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Working from home easily blurs boundaries. Establish a dedicated physical workstation, set strict shutdown rituals at 5 PM, take screen breaks, and avoid checking work communication on personal devices late at night.`,
            practicePrompt: 'Design your daily shutdown ritual to clearly separate the workday from evening personal life.',
            quiz: {
              question: 'Why do remote workers frequently report higher burnout despite not commuting?',
              options: ['They work in pyjamas', 'The absence of physical boundaries makes it easy to work continuously into evenings without mental disconnection', 'They dislike computers', 'Internet is too fast'],
              correctIndex: 1,
              explanation: 'Without clear shutdown boundaries, remote work can bleed into all personal hours.'
            },
            resources: [{ title: 'Remote Work Health Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-rem-6',
            slug: 'remote-interview-excellence',
            title: '6. Nailing the Remote Video Interview',
            durationMinutes: 30,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=7Gq9m2q5W5o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Optimize your technical setup: eye-level camera framing, clean natural or soft lighting, crisp external microphone audio, stable ethernet/Wi-Fi, and a distraction-free background.`,
            practicePrompt: 'Record a 2-minute mock interview response and review your eye contact and audio clarity.',
            quiz: {
              question: 'In a remote video interview, what technical aspect has the largest subconscious impact on interviewer perception?',
              options: ['Having 4 monitors visible', 'Crisp, clear audio without echo or background noise', 'Using fancy virtual backgrounds with palm trees', 'Typing while the interviewer talks'],
              correctIndex: 1,
              explanation: 'Clear audio is crucial for comfortable, authoritative communication.'
            },
            resources: [{ title: 'Video Interview Setup Checklist', url: '#', type: 'Checklist' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'Which of the following is a legitimate indicator of a trustworthy remote job posting?',
        options: ['Sent from a free @gmail.com address for a Fortune 500 company', 'Company email matches corporate domain and listing is verified on their official careers page', 'Job offers $500/hr for data entry', 'No interview required'],
        correctIndex: 1,
        explanation: 'Official corporate domain emails verify legitimate hiring personnel.'
      },
      {
        question: 'What is a "digital nomad" visa?',
        options: ['A travel credit card', 'A temporary legal residence permit allowing remote workers to live in a foreign country while working for employers abroad', 'A hotel pass', 'An airline discount'],
        correctIndex: 1,
        explanation: 'Digital nomad visas permit legal residence while working remotely.'
      },
      {
        question: 'What does "time zone overlap" mean in distributed remote teams?',
        options: ['When clocks break', 'The hours in the day where team members in different geographic regions share overlapping working hours for live collaboration', 'Daylight savings time', 'Night shifts'],
        correctIndex: 1,
        explanation: 'Overlap hours facilitate synchronous syncs and team standups.'
      },
      {
        question: 'What should you do before signing an international freelance contractor agreement?',
        options: ['Sign without reading', 'Review intellectual property transfer clauses, governing jurisdiction, payment schedules, and termination notices', 'Delete the contract', 'Ask for cash in person'],
        correctIndex: 1,
        explanation: 'Careful review of contract terms protects your rights and compensation.'
      },
      {
        question: 'Why is proactive written communication essential in remote work?',
        options: ['Coworkers cannot see you working; comprehensive written updates maintain trust and alignment without micromanagement', 'Because talking is illegal', 'It saves voice fatigue', 'Managers cannot read'],
        correctIndex: 0,
        explanation: 'Proactive updates create visibility and psychological safety.'
      },
      {
        question: 'What is a "reverse interview"?',
        options: ['When the candidate asks thoughtful questions to evaluate whether the company culture and management align with their career goals', 'An interview held upside down', 'An interview in another language', 'A coding test'],
        correctIndex: 0,
        explanation: 'Reverse interviewing assesses company health and culture fit.'
      },
      {
        question: 'Which tool is universally used for asynchronous visual feedback on remote teams?',
        options: ['Loom / CleanShot', 'Paper letters', 'Fax machine', 'Telegram audio only'],
        correctIndex: 0,
        explanation: 'Screen recordings allow fast async visual explanations.'
      },
      {
        question: 'How should you prepare for potential home internet outages during remote work?',
        options: ['Panic', 'Maintain a reliable mobile phone hotspot data tethering backup plan', 'Stop working for a month', 'Blame your neighbor'],
        correctIndex: 1,
        explanation: 'Mobile hotspots provide an immediate fallback during broadband outages.'
      },
      {
        question: 'What is "presenteeism" in toxic remote environments?',
        options: ['Giving gifts', 'Valuing being seen green and active on Slack all day over actual output and completed deliverables', 'Taking vacations', 'Finishing early'],
        correctIndex: 1,
        explanation: 'Presenteeism measures online presence rather than real accomplishments.'
      },
      {
        question: 'What should be your primary criteria when choosing remote work opportunities?',
        options: ['The company logo color', 'Alignment with your skills, healthy async culture, fair compensation, and mutual respect', 'The number of emojis in job title', 'Promises of overnight wealth'],
        correctIndex: 1,
        explanation: 'Culture, compensation, and skill alignment lead to sustainable career growth.'
      }
    ],
    finalProject: {
      title: 'Remote Job Application & Company Evaluation Package',
      brief: 'Find a real open remote job listing in your trade. Research the company thoroughly: evaluate their remote culture, draft a customized application note highlighting async strengths, and compile 5 insightful reverse-interview questions.',
      requirements: [
        'Detailed evaluation scorecard of the selected company',
        'Customized async application pitch note',
        'Five strategic reverse-interview questions assessing culture and tooling'
      ]
    }
  },
  {
    id: 'course-car-4',
    slug: 'client-communication-skills',
    title: 'Client Communication Skills',
    description: 'Learn discovery calls, onboarding questionnaires, setting boundaries, managing scope changes, delivering difficult news, and turning clients into long-term retainers.',
    categoryId: 'cat_freelance',
    categoryName: 'Freelancing Fundamentals',
    categorySlug: 'freelancing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Conduct effective 20-minute client discovery consultations',
      'Establish client onboarding systems and communication boundaries',
      'Handle scope creep professionally with change orders',
      'Communicate missed deadlines or unexpected obstacles with confidence',
      'De-escalate unhappy clients using empathetic active listening',
      'Pitch long-term monthly retainers upon project completion'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic conversational English'],
    instructor: {
      name: 'Sarah Jenkins',
      role: 'Cross-Cultural Communications Coach',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-cc-1',
        title: 'Professional Client Dialogues',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-cc-1',
            slug: 'discovery-consultation-calls',
            title: '1. The 20-Minute Discovery Consultation Framework',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `The discovery call is not a sales pitch; it is a diagnostic consultation. Spend 80% of the call listening. Ask: 1. What triggered this project right now? 2. What does success look like in 6 months? 3. What happens if this problem is NOT solved?`,
            practicePrompt: 'Write down 3 diagnostic questions to ask a client who wants a website redesign.',
            quiz: {
              question: 'In a professional client discovery call, what percentage of the time should you spend listening rather than talking?',
              options: ['10%', '20%', 'Approximately 70-80%', '100% talking'],
              correctIndex: 2,
              explanation: 'Listening diagnoses the true root problem and establishes trust.'
            },
            resources: [{ title: 'Discovery Call Script', url: '#', type: 'Script' }]
          },
          {
            id: 'l-cc-2',
            slug: 'onboarding-and-boundary-setting',
            title: '2. Client Onboarding and Communication Boundaries',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `Set boundaries on Day 1: define response times (e.g. 24 business hours), preferred channels (Slack/Email rather than late-night WhatsApp calls), and deliverable review windows.`,
            practicePrompt: 'Draft a friendly 1-page Client Welcome Packet outlining your working hours and communication channels.',
            quiz: {
              question: 'When is the best time to set communication boundaries with a freelance client?',
              options: ['During the initial onboarding before work begins', 'After you are already angry at a midnight phone call', 'Never', 'When sending the final bill'],
              correctIndex: 0,
              explanation: 'Upfront boundaries manage expectations before misunderstandings occur.'
            },
            resources: [{ title: 'Client Welcome Packet Template', url: '#', type: 'Template' }]
          },
          {
            id: 'l-cc-3',
            slug: 'managing-scope-creep',
            title: '3. Managing Scope Creep with Friendly Change Orders',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=9g0H29W6F2U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `When a client asks for extra features mid-project: never say an aggressive "No". Say: "That is a great feature! That falls outside our current Phase 1 agreement, but I would be glad to add it to Phase 2 or draft a quick Change Order with timeline and cost options."`,
            practicePrompt: 'Rewrite a client request asking for an extra logo variation using the polite Change Order script.',
            quiz: {
              question: 'How should you respond when a client requests extra work outside the agreed contract scope?',
              options: ['Do it for free quietly and resent them', 'Acknowledge the idea enthusiastically, explain it is outside current scope, and offer a clear Change Order with cost and timeline adjustments', 'Send an angry email', 'Ignore the client'],
              correctIndex: 1,
              explanation: 'Change orders validate the client\'s request while safeguarding your compensation.'
            },
            resources: [{ title: 'Change Order Email Scripts', url: '#', type: 'Script' }]
          },
          {
            id: 'l-cc-4',
            slug: 'communicating-delays-proactively',
            title: '4. Delivering Difficult News and Delays Proactively',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=nE301qG9mE4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `Bad news does not improve with age. If a deadline will slip, notify the client immediately—BEFORE the deadline passes. State the cause, the current status, and the concrete revised delivery schedule.`,
            practicePrompt: 'Draft an email notifying a client that unexpected API bugs require pushing the delivery date by 48 hours.',
            quiz: {
              question: 'When should a freelancer inform a client about an unavoidable delay in a deliverable?',
              options: ['3 days after the deadline has passed', 'Immediately upon discovering the obstacle, before the deadline expires', 'Never; hope they do not notice', 'Only if they email you first'],
              correctIndex: 1,
              explanation: 'Proactive notice preserves trust; silence erodes it.'
            },
            resources: [{ title: 'Difficult Client Email Templates', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-cc-5',
            slug: 'de-escalating-client-frustration',
            title: '5. De-escalating Frustrated Clients with Empathy',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=i9YQ_VkWb5M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Use the HEAR framework: Hear them out without defensive interruptions, Empathize with their business impact, Acknowledge the core frustration, and Resolve with actionable next steps.`,
            practicePrompt: 'Draft a de-escalation response to a client upset that a mobile feature rendered incorrectly on an older tablet.',
            quiz: {
              question: 'What is the first step when dealing with an angry or disappointed client message?',
              options: ['Fire back with an angry email listing all their mistakes', 'Take a breath, listen empathetically to understand their frustration, and avoid immediate defensiveness', 'Block their email', 'Delete the project'],
              correctIndex: 1,
              explanation: 'Empathy de-escalates tension and paves the way for collaborative solutions.'
            },
            resources: [{ title: 'De-escalation Conversation Scripts', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-cc-6',
            slug: 'turning-projects-into-retainers',
            title: '6. Turning One-Time Projects into Recurring Retainers',
            durationMinutes: 30,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `After project handover, ask: "Now that your site is launched, who will handle ongoing speed audits, security updates, and monthly conversion testing?" Offer a recurring monthly maintenance retainer package.`,
            practicePrompt: 'Design a monthly retainer package offering 10 hours of maintenance and optimization for past clients.',
            quiz: {
              question: 'Why are monthly retainers valuable for freelancers?',
              options: ['They eliminate working', 'They provide predictable recurring revenue, reducing the pressure of constantly finding new clients', 'Clients do not expect work', 'They are tax-free'],
              correctIndex: 1,
              explanation: 'Retainers transform unpredictable freelance cycles into stable recurring income.'
            },
            resources: [{ title: 'Retainer Agreement Template', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is the primary danger of discussing important project scope changes exclusively over informal phone calls?',
        options: ['Phone calls cost money', 'Without written confirmation, memories diverge and verbal agreements lead to severe misunderstandings and payment disputes', 'Phones break easily', 'It is slower'],
        correctIndex: 1,
        explanation: 'Always summarize verbal agreements in writing via email.'
      },
      {
        question: 'What does "BLUF" stand for in professional correspondence?',
        options: ['Big Large Ugly Font', 'Bottom Line Up Front', 'Best Logic Under Fire', 'Binary Lookup Unit Format'],
        correctIndex: 1,
        explanation: 'BLUF communicates the core decision or request in the opening sentence.'
      },
      {
        question: 'How should you end an update email to a busy client?',
        options: ['With a clear question or single call-to-action specifying what they need to approve and by when', 'With no closing at all', 'With 10 questions', 'With an apology'],
        correctIndex: 0,
        explanation: 'Actionable closings make it effortless for busy clients to unblock next steps.'
      },
      {
        question: 'What is a "sign-off" milestone in client management?',
        options: ['Logging out of email', 'Formal written approval from the client confirming that a project phase meets specifications before moving to the next phase', 'Closing a bank account', 'Deleting files'],
        correctIndex: 1,
        explanation: 'Formal sign-offs lock completed phases and prevent retroactive scope disputes.'
      },
      {
        question: 'Why should you avoid using heavy technical jargon when communicating with non-technical business clients?',
        options: ['It intimidates clients, creates confusion, and obscures the business value of your work', 'Clients will steal your code', 'Jargon is illegal', 'It wastes bandwidth'],
        correctIndex: 0,
        explanation: 'Clear business-centered language demonstrates true mastery.'
      },
      {
        question: 'What is an effective way to ask a satisfied client for a testimonial?',
        options: ['Send them 3 guided prompt questions immediately after successful project launch while excitement is fresh', 'Wait 2 years', 'Never ask', 'Write a fake review'],
        correctIndex: 0,
        explanation: 'Guided prompt questions make writing testimonials quick and outcome-focused.'
      },
      {
        question: 'What should you do if a client repeatedly disrespects agreed boundaries and sends urgent demands on weekends for non-emergencies?',
        options: ['Scream at them', 'Calmly reiterate agreed business hours, explain what constitutes a true emergency, and deliver on Monday as contractually agreed', 'Work all weekend for free', 'Disappear silently'],
        correctIndex: 1,
        explanation: 'Polite, firm boundary reinforcement establishes professional authority.'
      },
      {
        question: 'What does "managing expectations" mean in professional consulting?',
        options: ['Promising everything and delivering nothing', 'Under-promising slightly and over-delivering consistently, keeping timelines realistic', 'Making excuses', 'Hiding delays'],
        correctIndex: 1,
        explanation: 'Realistic expectations ensure clients are delighted by dependable delivery.'
      },
      {
        question: 'Why is it helpful to send weekly async status reports to active clients?',
        options: ['It spams their inbox', 'It reassures clients that progress is steady, highlights upcoming milestones, and eliminates anxious "Where is my project?" inquiries', 'It replaces contracts', 'Clients require daily calls'],
        correctIndex: 1,
        explanation: 'Weekly summaries build trust and preempt anxiety.'
      },
      {
        question: 'What is the best way to handle a client who has not paid an overdue invoice?',
        options: ['Send a polite automated reminder attaching the invoice, follow up with a phone call, and pause active work if payment is not resolved', 'Sue them on day 1', 'Work twice as hard for free', 'Post about them on social media'],
        correctIndex: 0,
        explanation: 'A structured reminder escalation pauses work until milestones are honored.'
      }
    ],
    finalProject: {
      title: 'Complete Client Communication Kit',
      brief: 'Create a comprehensive client communication toolkit for your freelance business. Include: 1. A 20-minute discovery call question checklist, 2. A 1-page Client Onboarding Welcome Packet, 3. A Change Order scope script, and 4. A monthly maintenance retainer pitch proposal.',
      requirements: [
        'Complete discovery call diagnostic questions',
        'Professional Onboarding Welcome Packet with response boundaries',
        'Change order proposal template with cost and timeline modifications',
        'Post-project retainer pitch script'
      ]
    }
  },
  {
    id: 'course-car-5',
    slug: 'personal-branding-linkedin',
    title: 'Personal Branding on LinkedIn',
    description: 'Learn how to transform your LinkedIn profile into a client-attracting asset, publish insightful industry content, build genuine professional networks, and generate consistent inbound leads.',
    categoryId: 'cat_freelance',
    categoryName: 'Freelancing Fundamentals',
    categorySlug: 'freelancing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Write a high-converting headline using the Role + Target Client + Result formula',
      'Structure the About section as a client-focused narrative',
      'Curate the Featured section with proof-of-work case studies',
      'Create engaging educational posts that build topical authority',
      'Execute authentic networking outreach without awkward spam'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['A basic LinkedIn account'],
    instructor: {
      name: 'Marcus Vance',
      role: 'B2B Brand Strategist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-pbl-1',
        title: 'Profile Optimization & Content',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-pbl-1',
            slug: 'headline-and-banner-optimization',
            title: '1. Crafting a Magnetic Headline and Banner',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=ttWskb4jL_8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Your headline appears everywhere you comment. Instead of "Freelancer looking for work", write: "Helping SaaS founders reduce churn through accessible UI/UX design | Ex-Design Lead | 100+ projects completed".`,
            practicePrompt: 'Draft 3 alternative LinkedIn headlines targeting your ideal freelance clients.',
            quiz: {
              question: 'What is the biggest flaw of having "Looking for new opportunities" as your LinkedIn headline?',
              options: ['It is too short', 'It tells prospective clients nothing about what problem you solve, who you help, or your unique expertise', 'LinkedIn bans that phrase', 'It uses lower case'],
              correctIndex: 1,
              explanation: 'A client-focused headline emphasizes value and competence rather than desperation.'
            },
            resources: [{ title: '25 LinkedIn Headline Formulas', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-pbl-2',
            slug: 'the-about-section-story',
            title: '2. The Client-Centered About Section',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=uC0_kZ3y9Y0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `Open with the core challenge your target audience faces. Detail your methodology. Share 2 key metrics of past success. Close with a direct call-to-action with your email or portfolio link.`,
            practicePrompt: 'Write a 4-paragraph About section that reads like a friendly, authoritative conversation.',
            quiz: {
              question: 'Who should the LinkedIn About section primarily focus on?',
              options: ['Your childhood hobbies', 'Your target client’s problems and how your specific skills and process deliver results for them', 'Listing every software version ever used', 'Your favorite sports team'],
              correctIndex: 1,
              explanation: 'Focusing on the client makes your profile magnetic to commercial buyers.'
            },
            resources: [{ title: 'About Section Template', url: '#', type: 'Template' }]
          },
          {
            id: 'l-pbl-3',
            slug: 'curating-featured-assets',
            title: '3. The Featured Section: Proof of Competence',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `The Featured section sits right beneath your About section. Pin your top 3 assets: your portfolio site, your most popular educational case study post, and a client testimonial screenshot.`,
            practicePrompt: 'Select 3 visual links or documents to feature prominently on your profile.',
            quiz: {
              question: 'What belongs in your LinkedIn Featured section?',
              options: ['Vacation photos', 'Your strongest proof of work, case studies, and clear booking links', 'Random news articles', 'Blank tiles'],
              correctIndex: 1,
              explanation: 'The Featured section provides instant visual validation of your capabilities.'
            },
            resources: [{ title: 'Featured Section Asset Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-pbl-4',
            slug: 'educational-content-frameworks',
            title: '4. Writing Educational Content That Attracts Clients',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `Post 3 times a week sharing: 1. A mistake you see clients frequently make and how to fix it, 2. A teardown of a great industry example, 3. A behind-the-scenes breakdown of a project you built.`,
            practicePrompt: 'Write a 150-word educational LinkedIn post breaking down 1 common mistake in your niche.',
            quiz: {
              question: 'What type of content builds genuine authority on LinkedIn?',
              options: ['Generic inspirational quotes copied from Google', 'Actionable, specific educational breakdowns and real lessons learned from hands-on practice', 'Complaining about clients', 'Reposting viral videos without commentary'],
              correctIndex: 1,
              explanation: 'Actionable practical breakdowns demonstrate genuine field experience.'
            },
            resources: [{ title: '10 High-Engagement Post Structures', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-pbl-5',
            slug: 'networking-and-direct-messaging',
            title: '5. Direct Outreach Without Sounding Salesy',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=ttWskb4jL_8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Never pitch in the connection request. Build rapport first: leave thoughtful comments on their posts for 2 weeks. When reaching out, compliment a specific achievement or share a free helpful resource with no strings attached.`,
            practicePrompt: 'Draft an authentic networking message to a founder whose recent product launch you admire.',
            quiz: {
              question: 'What is the Golden Rule of professional LinkedIn direct messaging?',
              options: ['Send a 5-paragraph sales pitch in the very first sentence', 'Deliver value and establish genuine human rapport before asking for anything', 'Send 50 connection requests per hour', 'Ask for money immediately'],
              correctIndex: 1,
              explanation: 'Rapport and generosity lay the groundwork for high-trust professional relationships.'
            },
            resources: [{ title: 'Inbound Outreach Playbook', url: '#', type: 'Playbook' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is the primary goal of personal branding for digital professionals?',
        options: ['To become an ego-driven celebrity', 'To build professional credibility so opportunities and clients seek you out inbound', 'To sell useless courses', 'To get likes only'],
        correctIndex: 1,
        explanation: 'Credibility generates durable inbound opportunities.'
      }
    ]
  },
  {
    id: 'course-car-6',
    slug: 'upwork-fiverr-starter-guide',
    title: 'Upwork and Fiverr Starter Guide',
    description: 'Learn how to set up winning freelance marketplace profiles, optimize search algorithms, earn your first 5-star ratings, avoid common fee traps, and scale into a Top Rated seller.',
    categoryId: 'cat_freelance',
    categoryName: 'Freelancing Fundamentals',
    categorySlug: 'freelancing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Set up compliant and complete Upwork and Fiverr accounts',
      'Optimize gig keywords and service titles for marketplace search algorithms',
      'Win your crucial first 3 projects with targeted competitive pricing',
      'Communicate securely through marketplace escrow systems',
      'Build a five-star review flywheel and achieve Top Rated status'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['One marketable digital skill'],
    instructor: {
      name: 'Tariq Mansoor',
      role: 'Top-Rated Plus Agency Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-upf-1',
        title: 'Marketplace Navigation',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-upf-1',
            slug: 'understanding-platform-mechanics',
            title: '1. Upwork vs. Fiverr: Business Models and Escrow',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Upwork is primarily proposal-driven (clients post jobs, you submit bids). Fiverr is primarily catalogue-driven (you post gigs, clients purchase them). Both use milestone escrow systems to guarantee payment upon delivery.`,
            practicePrompt: 'Compare Upwork proposals versus Fiverr gig packages and decide which fits your skill best.',
            quiz: {
              question: 'How does marketplace escrow protect freelancers?',
              options: ['It guarantees the client likes you', 'The client deposits funds upfront into the platform before work begins, releasing upon milestone approval', 'It pays insurance taxes', 'It writes the code'],
              correctIndex: 1,
              explanation: 'Escrow ensures funds are verified and held securely prior to project commencement.'
            },
            resources: [{ title: 'Upwork vs Fiverr Comparison Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-upf-2',
            slug: 'winning-first-review',
            title: '2. The First Review Breakthrough Strategy',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=uC0_kZ3y9Y0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `The hardest project to win is the first one because platforms favor profiles with established reviews. Bid on smaller, fast-turnaround jobs. Offer exceptional communication and over-deliver to secure an ecstatic 5-star review.`,
            practicePrompt: 'Identify 3 small, well-defined jobs on Upwork that can be completed within 2 hours with high certainty.',
            quiz: {
              question: 'Why is securing the first few reviews critical on freelance platforms?',
              options: ['The platform deletes inactive profiles', 'Algorithmic matching and client trust heavily favor profiles with verified positive feedback and high Job Success Scores', 'You cannot message anyone without a review', 'Clients only look at join dates'],
              correctIndex: 1,
              explanation: 'Initial positive reviews unlock platform visibility and algorithmic trust.'
            },
            resources: [{ title: 'First Project Pitch Templates', url: '#', type: 'Template' }]
          },
          {
            id: 'l-upf-3',
            slug: 'gig-seo-and-keywords',
            title: '3. Gig SEO and Search Optimization',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=6h2e6kZ4Q7c',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `Research search terms clients actually type into the search bar: e.g. "modern logo design", "shopify bug fix", "figma landing page". Use these exact keyword phrases in your gig title, tags, description, and FAQ.`,
            practicePrompt: 'Conduct keyword research for your niche and identify 5 high-intent search tags.',
            quiz: {
              question: 'Where should your primary keyword phrase appear on a freelance marketplace gig?',
              options: ['Nowhere', 'In the gig title, search tags, description body, and URL slug', 'Only in private notes', 'In customer service emails'],
              correctIndex: 1,
              explanation: 'Consistent keyword placement across metadata fields maximizes search visibility.'
            },
            resources: [{ title: 'Marketplace Keyword Worksheet', url: '#', type: 'Worksheet' }]
          },
          {
            id: 'l-upf-4',
            slug: 'marketplace-rules-and-safety',
            title: '4. Platform Terms of Service and Anti-Scam Rules',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=7Gq9m2q5W5o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `NEVER accept payment outside the platform. Never share WhatsApp/Telegram before a contract is active. Scammers target new accounts with "check payments" or off-platform contact attempts. Violating these rules triggers permanent bans.`,
            practicePrompt: 'Identify 3 warning signs of a fraudulent marketplace job posting.',
            quiz: {
              question: 'What should you do if a client asks you to communicate on Telegram and pay you via bank wire before accepting a contract on Upwork?',
              options: ['Agree immediately', 'Politely decline, cite platform terms of service, and keep all communications and payments inside the platform escrow system', 'Send them your bank password', 'Delete your profile'],
              correctIndex: 1,
              explanation: 'Staying on-platform protects you from financial scams and account termination.'
            },
            resources: [{ title: 'Freelance Marketplace Safety Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-upf-5',
            slug: 'scaling-to-top-rated',
            title: '5. Elevating Rates and Reaching Top Rated Status',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Maintain a 90%+ Job Success Score (JSS). Once you reach 10 completed projects and earn the Top Rated badge, gradually increase your hourly and milestone rates by 15-25% every 3 successful deliveries.`,
            practicePrompt: 'Calculate your target hourly rate progression across your first 12 months on the platform.',
            quiz: {
              question: 'When should you raise your freelance marketplace rates?',
              options: ['Never', 'Gradually as your positive review history, Job Success Score, and inbound demand build momentum', 'Every hour', 'Whenever you feel angry'],
              correctIndex: 1,
              explanation: 'Rising demand and verified track records justify progressive rate increases.'
            },
            resources: [{ title: 'Top Rated Milestone Roadmap', url: '#', type: 'PDF' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does JSS stand for on Upwork?',
        options: ['JavaScript Standard', 'Job Success Score', 'Junior Salary Scale', 'Just Send Samples'],
        correctIndex: 1,
        explanation: 'JSS (Job Success Score) measures client satisfaction over trailing periods.'
      }
    ]
  },
  {
    id: 'course-car-7',
    slug: 'pricing-freelance-services',
    title: 'Pricing Your Freelance Services',
    description: 'Master value-based pricing, hourly vs. fixed-rate models, retainers, minimum project engagements, handling discount requests, and increasing your income without burning out.',
    categoryId: 'cat_freelance',
    categoryName: 'Freelancing Fundamentals',
    categorySlug: 'freelancing',
    difficulty: 'Intermediate',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the mathematical limits of trading hours for dollars',
      'Calculate your Minimum Viable Hourly Rate including taxes and overhead',
      'Structure high-margin value-based fixed project scopes',
      'Create 3-tier proposals (Good, Better, Best) that anchor higher budgets',
      'Politely resist discount requests while preserving client relationships'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic freelance experience or understanding of client projects'],
    instructor: {
      name: 'Elena Rostova',
      role: 'Commercial Operations Advisor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-pfs-1',
        title: 'Pricing Psychology & Strategy',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-pfs-1',
            slug: 'hourly-vs-fixed-pricing',
            title: '1. Hourly Billing vs. Fixed Project Pricing',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=7Gq9m2q5W5o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3q4x5Y6z7A8',
            content: `Hourly billing penalizes efficiency: the faster and better you become, the less you get paid! Fixed project pricing aligns incentives: clients get budget predictability, and you get rewarded for working swiftly with superior skill.`,
            practicePrompt: 'Take a project you normally quote hourly and calculate what a fair fixed-scope price would be based on outcomes.',
            quiz: {
              question: 'Why does purely hourly billing punish expert freelancers?',
              options: ['Clocks run backwards', 'As an expert works faster through superior skill, an hourly model earns them less money for a better result', 'Clients hate hours', 'Taxes are higher on hours'],
              correctIndex: 1,
              explanation: 'Efficiency is rewarded under fixed-scope and value-anchored models.'
            },
            resources: [{ title: 'Pricing Matrix Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-pfs-2',
            slug: 'minimum-acceptable-rate',
            title: '2. Calculating Your Minimum Acceptable Rate (MAR)',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=BYmBm_Do_uk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=x0X3L3bK_oA',
            content: `Calculate: (Annual Living Costs + Business Overhead + 30% Taxes + 20% Profit) divided by (Billable Hours per year, usually ~1,000 hours, not 2,000!). Remember that half your time is non-billable admin, marketing, and learning.`,
            practicePrompt: 'Calculate your personal MAR using the 1,000 billable hours formula.',
            quiz: {
              question: 'Why do realistic freelance rate calculations use approximately 1,000 billable hours per year instead of 2,000?',
              options: ['Freelancers only work 3 months', 'Approximately 40-50% of freelance work hours are consumed by non-billable tasks (invoicing, outreach, revisions, administrative work, sick time)', 'The calendar changed', 'It is mandated by law'],
              correctIndex: 1,
              explanation: 'Non-billable operational time must be factored into sustainable rates.'
            },
            resources: [{ title: 'MAR Calculator Sheet', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-pfs-3',
            slug: 'value-based-pricing-foundations',
            title: '3. Value-Based Pricing Foundations',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=uC0_kZ3y9Y0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2vY3X3K8z9w',
            content: `If a redesign enables an e-commerce brand to generate $200,000 in additional annual revenue, a $15,000 project fee is an incredible bargain for the client, regardless of whether it takes you 20 hours or 50 hours to execute.`,
            practicePrompt: 'Estimate the commercial business impact of your last digital project in terms of revenue, time saved, or costs reduced.',
            quiz: {
              question: 'What is the benchmark in value-based pricing?',
              options: ['The cost of your laptop', 'The financial value, revenue, or cost savings generated for the client’s business', 'How tired you feel', 'Your competitor\'s bottom price'],
              correctIndex: 1,
              explanation: 'Value pricing anchors your fee to the economic outcome delivered.'
            },
            resources: [{ title: 'Value Pricing Case Study Breakdown', url: '#', type: 'CaseStudy' }]
          },
          {
            id: 'l-pfs-4',
            slug: 'tiered-proposal-packages',
            title: '4. Three-Tier Proposal Architecture',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=6h2e6kZ4Q7c',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=9w8Z1x2Y3z0',
            content: `Always present 3 options: Option 1 (Core Scope - solves the immediate need), Option 2 (Recommended - solves the problem with optimization and speed), Option 3 (Premium - comprehensive transformation with priority support). 60% of clients pick Option 2.`,
            practicePrompt: 'Structure a 3-tier pricing table for a sample project in your niche.',
            quiz: {
              question: 'What psychological effect occurs when clients see 3 proposal options instead of just 1 price?',
              options: ['They get confused and leave', 'The internal question shifts from "Should I hire this freelancer?" to "Which option fits our business best?"', 'They always choose the cheapest option', 'They ask for 10 more options'],
              correctIndex: 1,
              explanation: 'Tiered options change the framing to choosing the best tier rather than deciding if they should hire you.'
            },
            resources: [{ title: 'Three-Tier Proposal Wireframe', url: '#', type: 'Template' }]
          },
          {
            id: 'l-pfs-5',
            slug: 'defending-prices-and-discounting',
            title: '5. Handling "You\'re Too Expensive" and Discount Requests',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Never cut your price without removing scope. If a client asks: "Can you do this for $3,000 instead of $4,000?", reply: "We can certainly hit that budget by removing Milestone 3 and the custom animation library." This preserves your pricing integrity.`,
            practicePrompt: 'Draft a polite script responding to a client asking for a 25% discount.',
            quiz: {
              question: 'What is the proper professional response when a client asks for a lower project price?',
              options: ['Immediately drop your price by 50%', 'Adjust the project scope down to match their smaller budget, rather than doing the exact same work for less money', 'Insult their business', 'Ignore the email'],
              correctIndex: 1,
              explanation: 'Reducing scope in exchange for lower price protects your professional rate authority.'
            },
            resources: [{ title: 'Price Defense Script Sheet', url: '#', type: 'Script' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is price anchoring?',
        options: ['Dropping prices to zero', 'Establishing a premium reference point that makes standard options look reasonably priced by comparison', 'Selling boats', 'Hiding prices'],
        correctIndex: 1,
        explanation: 'Anchoring creates context for perceived value.'
      }
    ]
  },
  {
    id: 'course-car-8',
    slug: 'time-management-freelancers',
    title: 'Time Management for Freelancers',
    description: 'Learn how to conquer procrastination, implement time blocking, manage multiple client deadlines simultaneously, batch administrative tasks, and protect uninterrupted deep work time.',
    categoryId: 'cat_freelance',
    categoryName: 'Freelancing Fundamentals',
    categorySlug: 'freelancing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Implement calendar time-blocking for client work and business development',
      'Protect 90-minute daily deep work blocks free from digital notifications',
      'Manage multiple concurrent client deadlines with visual Kanban boards',
      'Batch repetitive admin tasks (invoicing, emails, filing) into dedicated weekly slots',
      'Track real project time to refine future scoping accuracy'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Any calendar or task management tool'],
    instructor: {
      name: 'Maya Lin',
      role: 'Operations & Productivity Specialist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-tmf-1',
        title: 'Mastering the Freelance Schedule',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-tmf-1',
            slug: 'time-blocking-and-deep-work',
            title: '1. Calendar Time-Blocking and Deep Work',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            content: `Do not run your day out of your email inbox. Block out 2 uninterrupted 90-minute "Deep Work" sessions each morning when your energy is highest. Turn off all chat notifications during deep work.`,
            practicePrompt: 'Schedule your upcoming week with designated 90-minute morning deep work blocks.',
            quiz: {
              question: 'Why is time blocking more effective than an endless to-do list?',
              options: ['To-do lists are illegal', 'Time blocking allocates specific calendar space and duration to tasks, turning abstract intentions into concrete commitments', 'It deletes difficult work', 'It lets you sleep at work'],
              correctIndex: 1,
              explanation: 'Time blocking grounds priorities in real temporal reality.'
            },
            resources: [{ title: 'Time Blocking Weekly Template', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-tmf-2',
            slug: 'managing-multiple-client-deadlines',
            title: '2. Balancing Multiple Client Deadlines with Kanban',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            content: `Use a visual board with columns: Backlog, This Week, In Progress (limit Work In Progress to 2 tasks!), Client Review, and Done. Buffer every deadline by at least 48 hours to account for unforeseen bugs.`,
            practicePrompt: 'Create a Kanban board in Trello or Notion tracking your current projects with a WIP limit of 2.',
            quiz: {
              question: 'What is the benefit of setting a "Work In Progress" (WIP) limit?',
              options: ['It slows down everything', 'It prevents multitasking bottlenecks and forces you to finish current tasks before starting new ones', 'It hides deadlines', 'It reduces pay'],
              correctIndex: 1,
              explanation: 'WIP limits eliminate cognitive fragmentation and increase task completion rates.'
            },
            resources: [{ title: 'Freelance Kanban Setup Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-tmf-3',
            slug: 'batching-administrative-tasks',
            title: '3. Task Batching for Administrative Overhead',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Y0B_62zJg3M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y0B_62zJg3M',
            content: `Context switching destroys productivity. Check client messages only at two scheduled windows (e.g. 11:30 AM and 4:30 PM). Consolidate invoicing, expense tracking, and contract drafting into Friday afternoons.`,
            practicePrompt: 'Design a weekly administrative batching schedule grouping similar recurring tasks together.',
            quiz: {
              question: 'What is context switching cost in cognitive psychology?',
              options: ['The price of a new computer', 'The mental latency and lost focus that occurs when repeatedly interrupting a task to check another app or notification', 'Switching languages', 'Buying software'],
              correctIndex: 1,
              explanation: 'Context switching drains up to 40% of productive mental capacity.'
            },
            resources: [{ title: 'Task Batching Matrix', url: '#', type: 'Worksheet' }]
          },
          {
            id: 'l-tmf-4',
            slug: 'time-tracking-for-accurate-quoting',
            title: '4. Tracking Time to Refine Scoping Accuracy',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            content: `Even if you charge fixed prices, track your real hours using free tools like Toggl. You will quickly discover if a "quick 2-hour update" actually consumes 8 hours of back-and-forth revisions.`,
            practicePrompt: 'Track your real working hours for 3 days using Toggl or a spreadsheet timer.',
            quiz: {
              question: 'Why should fixed-price freelancers still track their working time internally?',
              options: ['To invoice the client more hours', 'To discover real profitability per project and calibrate accurate estimates for future client quotes', 'Because the government demands it', 'To show friends'],
              correctIndex: 1,
              explanation: 'Internal time tracking reveals true effective hourly earnings and scoping accuracy.'
            },
            resources: [{ title: 'Freelance Time Audit Sheet', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-tmf-5',
            slug: 'the-procrastination-antidote',
            title: '5. Overcoming Procrastination and Perfectionism',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            content: `Procrastination is emotional regulation, not laziness. When paralyzed by an intimidating project, lower the bar: commit to working on the file for just 5 minutes. Action produces motivation, not the other way around.`,
            practicePrompt: 'Apply the 5-Minute Rule to the single most intimidating task currently sitting on your desk.',
            quiz: {
              question: 'What is the 5-Minute Rule for breaking task paralysis?',
              options: ['Quit after 5 minutes and sleep', 'Commit to starting and working on the task for just 5 minutes; friction disappears once momentum begins', 'Stare at the clock', 'Eat lunch in 5 minutes'],
              correctIndex: 1,
              explanation: 'Lowering the initial activation barrier generates forward momentum.'
            },
            resources: [{ title: 'Anti-Procrastination Quick Reference', url: '#', type: 'Cheatsheet' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is Parkinson’s Law?',
        options: ['Law of gravity', 'Work expands to fill the time allotted for its completion', 'Computer storage doubles every two years', 'People always show up late'],
        correctIndex: 1,
        explanation: 'Parkinson\'s Law proves that tighter, realistic deadlines drive focus and efficiency.'
      }
    ]
  }
];
