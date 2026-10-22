import { Course } from './types';

export const BUSINESS_COURSES: Course[] = [
  {
    id: 'course-biz-1',
    slug: 'social-media-marketing-strategy',
    title: 'Social Media Marketing Strategy',
    description: 'Learn audience persona targeting, organic reach algorithms, editorial calendar planning, community engagement, influencer outreach, and ROI conversion tracking across major social platforms.',
    categoryId: 'cat_mktg',
    categoryName: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    difficulty: 'Beginner',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Analyze how feed recommendation algorithms rank content across platforms',
      'Build a repeatable 30-day editorial content calendar',
      'Craft platform-native posts that generate organic comments and shares',
      'Run community management routines that convert followers into customers',
      'Measure true social media ROI using UTM tracking parameters'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic familiarity with social networks'],
    instructor: {
      name: 'Amina Al-Mansoor',
      role: 'Growth Marketing Strategist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-smm-1',
        title: 'Social Media Strategy & Growth',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-smm-1',
            slug: 'understanding-social-algorithms',
            title: '1. Deconstructing Modern Social Feed Algorithms',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=n4p7Koy0ZqE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bixR-KIE36o',
            content: `Social platforms prioritize watch time, meaningful shares, and conversation threads over simple follower counts. Learn how platforms score signals: Dwell Time + Saves + Shares > Likes. Avoid outbound links in initial posts when algorithms penalize off-platform bounce.`,
            practicePrompt: 'Analyze your 3 most successful social posts: identify which interaction signal (shares, saves, or comments) drove their reach.',
            quiz: {
              question: 'Which engagement metric is typically weighted most heavily by modern recommendation algorithms?',
              options: ['Profile views', 'High dwell time, authentic shares, and saved bookmarks', 'Account creation date', 'Number of hashtags'],
              correctIndex: 1,
              explanation: 'Saves, shares, and watch time signal high intrinsic value to ranking algorithms.'
            },
            resources: [{ title: 'Algorithm Ranking Factors Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-smm-2',
            slug: 'editorial-calendar-and-pillars',
            title: '2. Content Pillars and 30-Day Editorial Calendars',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=h9ZmMb_9pWk',
            content: `Never wonder "what should I post today?". Define 4 content pillars: 1. Educational how-tos (builds authority), 2. Behind-the-scenes case studies (builds authenticity), 3. Community wins/testimonials (builds trust), 4. Conversion offers (drives revenue).`,
            practicePrompt: 'Map out 4 content pillars for a brand and draft 1 headline idea under each pillar.',
            quiz: {
              question: 'What is a "Content Pillar" in digital marketing strategy?',
              options: ['A physical statue', 'A core foundational theme or topic category around which all published content is organized and balanced', 'A database column', 'A password'],
              correctIndex: 1,
              explanation: 'Content pillars ensure topical consistency and prevent audience burnout.'
            },
            resources: [{ title: '30-Day Content Calendar Template', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-smm-3',
            slug: 'community-management-and-conversations',
            title: '3. Community Management: Turning Followers into Advocates',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Social media is a two-way telephone, not a one-way megaphone. Spend 20 minutes daily replying to every comment with open questions. Engage with industry peers in their replies to position your brand inside existing cultural conversations.`,
            practicePrompt: 'Practice writing 5 conversational comment replies that invite further dialogue rather than ending with just "Thanks!".',
            quiz: {
              question: 'What is the primary objective of community management in social strategy?',
              options: ['To post 100 ads a day', 'To foster meaningful dialogue, deepen brand affinity, and nurture trust with prospects', 'To block all followers', 'To delete all negative feedback'],
              correctIndex: 1,
              explanation: 'Two-way dialogue builds high-trust brand loyalty.'
            },
            resources: [{ title: 'Community Engagement Playbook', url: '#', type: 'Playbook' }]
          },
          {
            id: 'l-smm-4',
            slug: 'influencer-and-creator-partnerships',
            title: '4. Micro-Influencer Partnerships and Co-Creation',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=2Vj0n2A8fGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Micro-creators (5k–50k followers) frequently possess 3x higher engagement rates than mega-celebrities. Learn how to write win-win collaboration pitches, provide creative briefs, and negotiate fair usage rights for paid social amplification.`,
            practicePrompt: 'Draft an outreach email to a micro-creator proposing a product review partnership with clear deliverable terms.',
            quiz: {
              question: 'Why do brands frequently achieve superior ROI partnering with micro-influencers over celebrity accounts?',
              options: ['Celebrities are too famous to click', 'Micro-influencers have hyper-focused niche communities with higher trust and genuine engagement rates at fraction of the cost', 'Micro-influencers work for free', 'Celebrity accounts are fake'],
              correctIndex: 1,
              explanation: 'High niche relevance and authentic community trust deliver superior conversion rates.'
            },
            resources: [{ title: 'Influencer Outreach Swipe File', url: '#', type: 'Template' }]
          },
          {
            id: 'l-smm-5',
            slug: 'utm-tracking-and-social-roi',
            title: '5. UTM Tagging and Measuring Real Social ROI',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Likes do not pay the bills. Tag every link with UTM parameters: \`utm_source=linkedin\`, \`utm_medium=social\`, \`utm_campaign=spring_launch\`. Track visits in Google Analytics to measure leads and transactions back to specific posts.`,
            practicePrompt: 'Generate a complete UTM link for a hypothetical summer campaign using Google Campaign URL Builder.',
            quiz: {
              question: 'What is the purpose of UTM parameters appended to web links?',
              options: ['To speed up loading', 'To enable web analytics platforms to accurately track the exact campaign, source, and medium driving visitors and conversions', 'To encrypt data', 'To hide the URL'],
              correctIndex: 1,
              explanation: 'UTM tags attribute website traffic and revenue to specific marketing campaigns.'
            },
            resources: [{ title: 'UTM Tracking Architecture Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does "Dwell Time" measure in social media content performance?',
        options: ['How long the user slept', 'The duration of time a user pauses and actively views a post before continuing to scroll', 'The age of the account', 'The internet speed'],
        correctIndex: 1,
        explanation: 'Dwell time signals genuine user attention and interest to ranking algorithms.'
      }
    ]
  },
  {
    id: 'course-biz-2',
    slug: 'seo-basics',
    title: 'Search Engine Optimization (SEO) Basics',
    description: 'Learn how Google ranks websites: keyword research, on-page optimization, site architecture, Core Web Vitals, technical crawlability, and earning authoritative editorial backlinks.',
    categoryId: 'cat_mktg',
    categoryName: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    difficulty: 'Beginner',
    durationMinutes: 200,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand how search engine crawlers index and rank web pages',
      'Conduct search intent and long-tail keyword research',
      'Optimize on-page elements: title tags, meta descriptions, H1-H3 headers, and semantic schema',
      'Audit Core Web Vitals (LCP, FID/INP, CLS) for speed and stability',
      'Execute white-hat backlink outreach and digital PR'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic web familiarity'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Search Engine Strategist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-seo-1',
        title: 'Search Engine Fundamentals',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-seo-1',
            slug: 'how-search-engines-work',
            title: '1. Crawling, Indexing, and Ranking Mechanics',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bixR-KIE36o',
            content: `Googlebot crawls the web by following links, renders HTML/JS, adds valid pages to the massive Search Index, and uses algorithms (over 200 signals) to surface the most relevant, authoritative answers for any search query.`,
            practicePrompt: 'Use the `site:yourwebsite.com` search operator in Google to inspect which pages are currently indexed.',
            quiz: {
              question: 'What is the distinction between crawling and indexing?',
              options: ['They are identical words', 'Crawling is the bot discovering pages via hyperlinks; Indexing is processing and storing those pages in the search database for retrieval', 'Crawling is for mobile only', 'Indexing deletes websites'],
              correctIndex: 1,
              explanation: 'Discovery precedes storage and retrieval in search architecture.'
            },
            resources: [{ title: 'Google Search Essentials Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-seo-2',
            slug: 'keyword-intent-and-research',
            title: '2. Search Intent and Long-Tail Keyword Research',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=h9ZmMb_9pWk',
            content: `Identify search intent: Informational ("how to learn python"), Navigational ("github login"), Commercial ("best web design tools"), or Transactional ("buy domain"). Target low-competition, high-intent long-tail keywords (3+ words) rather than generic keywords.`,
            practicePrompt: 'Find 5 long-tail keyword opportunities for an online tutoring service using Google Autocomplete and People Also Ask.',
            quiz: {
              question: 'What is a "long-tail keyword" in SEO strategy?',
              options: ['A keyword about animals', 'A specific, multi-word search phrase that has lower individual volume but much higher conversion intent and lower ranking competition', 'A broken URL', 'A 50-letter word'],
              correctIndex: 1,
              explanation: 'Long-tail phrases capture specific high-intent searchers ready to act.'
            },
            resources: [{ title: 'Search Intent Classification Sheet', url: '#', type: 'Worksheet' }]
          },
          {
            id: 'l-seo-3',
            slug: 'on-page-seo-and-structure',
            title: '3. On-Page Optimization: Titles, Headers, and Content',
            durationMinutes: 45,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=n4p7Koy0ZqE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Every page needs: 1 unique \`<title>\` tag (under 60 characters with keyword near front), 1 compelling \`<meta name="description">\` (under 160 characters), exactly one \`<h1>\` heading, logical \`<h2>\`/\`<h3>\` subheadings, descriptive image alt text, and relevant internal links.`,
            practicePrompt: 'Write an optimized Title tag and Meta description for a blog post titled "Top 10 Remote Work Tools".',
            quiz: {
              question: 'What is the recommended character length limit for an SEO webpage title tag to avoid truncation in Google results?',
              options: ['20 characters', '55–60 characters', '500 characters', 'Unlimited'],
              correctIndex: 1,
              explanation: 'Titles between 50-60 characters fit desktop and mobile search snippet widths.'
            },
            resources: [{ title: 'On-Page SEO Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-seo-4',
            slug: 'technical-seo-core-web-vitals',
            title: '4. Technical SEO, Mobile Usability, and Core Web Vitals',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=2Vj0n2A8fGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Ensure your site loads in under 2.5 seconds (Largest Contentful Paint - LCP), has low layout shift (Cumulative Layout Shift - CLS), provides a clean \`robots.txt\`, and serves an updated \`sitemap.xml\`. Google indexes mobile versions first.`,
            practicePrompt: 'Run Google PageSpeed Insights on a website and identify 2 recommendations to reduce LCP.',
            quiz: {
              question: 'What does CLS (Cumulative Layout Shift) measure in Google\'s Core Web Vitals?',
              options: ['The total website download size', 'The visual stability of a page (preventing elements from jumping around as ads and images load)', 'The keyboard typing speed', 'The color contrast'],
              correctIndex: 1,
              explanation: 'CLS measures unexpected layout movement that causes frustrating mis-clicks.'
            },
            resources: [{ title: 'Core Web Vitals Optimization Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-seo-5',
            slug: 'backlinks-and-domain-authority',
            title: '5. Ethical Link Building and Digital PR',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Backlinks are digital votes of confidence. Never buy spam links. Earn authoritative links through: creating original research/data studies, publishing comprehensive ultimate guides, responding to journalist queries (HARO/Connectively), and fixing broken links on reputable sites.`,
            practicePrompt: 'Identify 3 industry resource pages in your niche that could logically link to your educational guide.',
            quiz: {
              question: 'Why are backlinks from authoritative, relevant websites important for SEO?',
              options: ['They cost money', 'Search algorithms interpret editorial links as trusted endorsements, boosting your site’s domain authority and search visibility', 'They slow down the server', 'They replace page content'],
              correctIndex: 1,
              explanation: 'Editorial backlinks validate content credibility and trust to search engines.'
            },
            resources: [{ title: 'White-Hat Link Building Playbook', url: '#', type: 'Playbook' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does "Search Intent" refer to in modern SEO?',
        options: ['The physical location of the searcher', 'The underlying primary goal or question a user intends to satisfy when typing a query into search', 'The internet speed', 'The type of browser used'],
        correctIndex: 1,
        explanation: 'Satisfying user intent is Google\'s primary ranking priority.'
      }
    ]
  },
  {
    id: 'course-biz-3',
    slug: 'email-marketing-essentials',
    title: 'Email Marketing Essentials',
    description: 'Build an owned audience: lead magnets, high-converting opt-in forms, automated welcome sequences, broadcast newsletters, deliverability optimization, and list segmentation.',
    categoryId: 'cat_mktg',
    categoryName: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand why owned email lists outperform rented social media algorithms',
      'Create high-value lead magnets that compel sign-ups',
      'Author a 5-part automated email welcome sequence',
      'Optimize email subject lines for 40%+ open rates and strong click-throughs',
      'Maintain pristine domain deliverability (SPF, DKIM, DMARC, unsubscribe hygiene)'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic writing skills'],
    instructor: {
      name: 'Amina Al-Mansoor',
      role: 'Email Growth Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-em-1',
        title: 'Owned Audience & Automation',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-em-1',
            slug: 'why-email-wins-and-lead-magnets',
            title: '1. Why Email Wins and Crafting Magnetic Lead Magnets',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=h9ZmMb_9pWk',
            content: `Algorithms change, accounts get banned, but you own your email list. Nobody signs up for a "newsletter" anymore. Offer a high-utility lead magnet that solves one acute problem in 10 minutes: a cheatsheet, template, or 5-day mini-course.`,
            practicePrompt: 'Design a 1-page cheatsheet concept that serves as a frictionless opt-in incentive for your niche.',
            quiz: {
              question: 'Why is an email list considered an "owned" marketing asset?',
              options: ['Email is free to print', 'You have direct, unmediated communication access to your subscribers without relying on social algorithmic feed filtering', 'Email servers never go down', 'No laws govern email'],
              correctIndex: 1,
              explanation: 'Email gives you direct communication channels independent of platform algorithm whims.'
            },
            resources: [{ title: 'Lead Magnet Idea Generator', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-em-2',
            slug: 'the-5-part-welcome-sequence',
            title: '2. The 5-Part Automated Welcome Sequence',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=9g0H29W6F2U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=kY67Z3j9r7c',
            content: `When someone subscribes, excitement is at its peak. Deliver: Email 1: Instant Asset Delivery & Whitelisting request. Email 2: Your origin story and core philosophy. Email 3: The biggest mistake you see people make. Email 4: High-value case study. Email 5: Soft transition to your service or product.`,
            practicePrompt: 'Draft Email 1 of your automated welcome sequence welcoming the reader and setting expectations.',
            quiz: {
              question: 'What is the primary objective of Email #1 in an automated welcome sequence?',
              options: ['Sell a $10,000 product', 'Instantly deliver the promised lead magnet, set clear publishing expectations, and instruct subscribers to whitelist your sender address', 'Ask for passwords', 'Say nothing'],
              correctIndex: 1,
              explanation: 'Prompt delivery and whitelisting build trust and secure future inbox placement.'
            },
            resources: [{ title: 'Welcome Sequence Swipe File', url: '#', type: 'Template' }]
          },
          {
            id: 'l-em-3',
            slug: 'subject-lines-and-open-rates',
            title: '3. Subject Lines, Preview Text, and High Open Rates',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=n4p7Koy0ZqE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bixR-KIE36o',
            content: `Your subject line gets the email opened; your content gets the click. Keep subject lines under 45 characters for mobile screens. Use curiosity, personalization, contrarian insights, and paired preview text. Avoid spam-trigger words like "FREE $$$ NOW!".`,
            practicePrompt: 'Write 3 contrasting subject line variations for an email teaching keyboard shortcuts.',
            quiz: {
              question: 'What is "Preview Text" in an email client inbox?',
              options: ['An advertisement', 'The snippet of text displayed right next to or beneath the subject line before the email is opened', 'The unsubscribe link', 'The sender\'s IP address'],
              correctIndex: 1,
              explanation: 'Preview text acts as a secondary hook that dramatically influences open decisions.'
            },
            resources: [{ title: '50 High-Open Subject Line Formulas', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-em-4',
            slug: 'segmentation-and-tagging',
            title: '4. List Segmentation and Behavioral Tagging',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Stop sending every email to everybody. Segment by interest (Beginners vs Advanced), behavior (clicked a specific link), and engagement (active in last 60 days vs dormant). Targeted segmented emails produce 3x higher click rates.`,
            practicePrompt: 'Create a segmentation strategy grouping subscribers by their primary learning goal.',
            quiz: {
              question: 'Why should email marketers segment their subscriber lists?',
              options: ['To make the database heavier', 'To deliver hyper-relevant, tailored messaging that increases engagement and prevents unsubscribe churn', 'Because ESPs require it', 'To charge higher fees'],
              correctIndex: 1,
              explanation: 'Relevance is the antidote to subscriber disengagement.'
            },
            resources: [{ title: 'Segmentation Architecture Worksheet', url: '#', type: 'Worksheet' }]
          },
          {
            id: 'l-em-5',
            slug: 'deliverability-spf-dkim-dmarc',
            title: '5. Email Deliverability: SPF, DKIM, and DMARC Hygiene',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2Vj0n2A8fGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `If your emails land in the spam folder, nothing else matters. Authenticate your sending domain with DNS TXT records: SPF (authorized senders), DKIM (cryptographic signature), and DMARC (policy rules). Clean inactive unengaged subscribers every quarter.`,
            practicePrompt: 'Check your domain authentication status using a free tool like Mail-Tester or MXToolbox.',
            quiz: {
              question: 'What DNS authentication records are required by major providers like Gmail and Yahoo to prevent emails going to spam?',
              options: ['Only a CNAME record', 'SPF, DKIM, and DMARC records', 'An A record only', 'No records are needed'],
              correctIndex: 1,
              explanation: 'SPF, DKIM, and DMARC prove sender authenticity and protect against spoofing.'
            },
            resources: [{ title: 'Deliverability DNS Setup Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is a "hard bounce" in email marketing?',
        options: ['An email that arrives quickly', 'A permanent delivery failure caused by an invalid, nonexistent, or closed email address', 'A subscriber opening twice', 'An email with audio'],
        correctIndex: 1,
        explanation: 'Hard bounces indicate permanent delivery failure and should be purged immediately.'
      }
    ]
  },
  {
    id: 'course-biz-4',
    slug: 'copywriting-sales-pages',
    title: 'Copywriting for Sales Pages',
    description: 'Master persuasive direct response copywriting: the PAS (Problem-Agitate-Solve) formula, benefit-driven headlines, social proof structuring, risk reversal guarantees, and irresistible calls to action.',
    categoryId: 'cat_writing',
    categoryName: 'Content Writing',
    categorySlug: 'content-writing',
    difficulty: 'Intermediate',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master the classic PAS (Problem, Agitate, Solve) and AIDA copywriting formulas',
      'Distinguish between dry feature lists and emotional, benefit-driven transformation copy',
      'Write compelling headlines using the Curiosity + Specific Benefit + Timeframe structure',
      'Position testimonials to overcome specific buying objections',
      'Craft risk reversal guarantees that eliminate buyer hesitation'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic writing skills'],
    instructor: {
      name: 'Marcus Vance',
      role: 'Direct Response Copywriter',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-cop-1',
        title: 'High-Converting Copywriting',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-cop-1',
            slug: 'features-vs-benefits-transformation',
            title: '1. Features vs. Benefits: Selling the Transformation',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=Ai2wN7Wq9bU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            content: `Features are what it is (e.g. "10 video lessons, 4K resolution"). Benefits are what it does (e.g. "Learn on your schedule"). The transformation is who the customer becomes (e.g. "Go from confused novice to confident freelancer landing $2,000 clients"). People buy transformations.`,
            practicePrompt: 'Convert 3 product features into deep, emotional transformation statements.',
            quiz: {
              question: 'In copywriting, what is a "transformation"?',
              options: ['A font change', 'The tangible, emotional evolution of the customer from their frustrated "before" state to their empowered "after" state', 'A discount coupon', 'A software update'],
              correctIndex: 1,
              explanation: 'Customers invest in the aspirational future state that a product unlocks.'
            },
            resources: [{ title: 'Feature to Benefit Translation Sheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-cop-2',
            slug: 'the-pas-and-aida-frameworks',
            title: '2. The PAS Formula: Problem, Agitate, Solve',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=d9Tp7CHniUs',
            content: `Problem: Name the exact pain your reader is feeling right now. Agitate: Paint the vivid emotional and financial cost of leaving that problem unresolved for another year. Solve: Introduce your solution as the relief and bridge to freedom.`,
            practicePrompt: 'Write a 150-word sales paragraph using the Problem-Agitate-Solve framework for a course on web development.',
            quiz: {
              question: 'What does the "Agitate" step in the PAS copywriting formula accomplish?',
              options: ['Insults the customer', 'Deepens the emotional awareness of the unresolved friction and consequences of inaction so the solution feels urgent', 'Cancels the order', 'Closes the browser'],
              correctIndex: 1,
              explanation: 'Agitation illuminates the real cost of complacency.'
            },
            resources: [{ title: 'PAS Copywriting Workbook', url: '#', type: 'Workbook' }]
          },
          {
            id: 'l-cop-3',
            slug: 'high-converting-headline-formulas',
            title: '3. Magnetic Headlines and the 4 U\'s',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=jC4v5AS4RIM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `8 out of 10 people read the headline, but only 2 out of 10 read the rest. Score your headlines against the 4 U’s: Useful, Ultra-specific, Urgent, and Unique. Use numbers and clear promises: "How to Build Your First Web App in 14 Days (Without a Computer Science Degree)".`,
            practicePrompt: 'Draft 5 headline variations for an educational course using the 4 U\'s framework.',
            quiz: {
              question: 'According to classic advertising pioneer David Ogilvy, how much of your advertising dollar is spent on the headline?',
              options: ['10 cents', '80 cents', '5 cents', '1 dollar'],
              correctIndex: 1,
              explanation: 'Because 80% of readers judge a page solely by its headline, headlines command most impact.'
            },
            resources: [{ title: '100 Proven Headline Templates', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-cop-4',
            slug: 'social-proof-and-objection-handling',
            title: '4. Overcoming Skepticism with Targeted Social Proof',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Buyers have 3 objections: 1. "Will this work?", 2. "Will it work for ME specifically?", 3. "Is it worth the money/time?". Pair every objection with a direct case study or customer quote that addresses that exact doubt.`,
            practicePrompt: 'Identify 3 objections your target audience has and write a copy section that neutralizes each one.',
            quiz: {
              question: 'How should testimonials be placed across a high-converting sales page?',
              options: ['Hidden in a separate footer page', 'Strategically interspersed adjacent to key claims and pricing tables to answer specific purchasing doubts right where they arise', 'Only as tiny text', 'Nowhere'],
              correctIndex: 1,
              explanation: 'Contextual testimonials neutralize doubts at the exact moment friction occurs.'
            },
            resources: [{ title: 'Objection-Handling Matrix', url: '#', type: 'Matrix' }]
          },
          {
            id: 'l-cop-5',
            slug: 'risk-reversal-and-calls-to-action',
            title: '5. Risk Reversal Guarantees and Irresistible CTAs',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2ePf9rue1Ao',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `Take all risk off the buyer’s shoulders. Make the call-to-action specific and benefit-focused: instead of "Submit", write "Start Learning for Free Today". Add a reassurance subtext: "No credit card required. Instant access."`,
            practicePrompt: 'Rewrite 3 generic CTA buttons into high-converting benefit-focused action triggers.',
            quiz: {
              question: 'What is a "Risk Reversal" in direct response marketing?',
              options: ['Canceling an insurance policy', 'A clear guarantee or trial policy that shifts financial and performance risk away from the buyer to the creator', 'A gamble', 'A price increase'],
              correctIndex: 1,
              explanation: 'Risk reversal removes the psychological friction of making a bad purchasing decision.'
            },
            resources: [{ title: 'Risk Reversal Guarantee Templates', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does "AIDA" stand for in copywriting hierarchy?',
        options: ['Always In Direct Action', 'Attention, Interest, Desire, Action', 'Artificial Intelligence Data Analytics', 'All In One Design'],
        correctIndex: 1,
        explanation: 'AIDA outlines the psychological progression from first glance to completed conversion.'
      }
    ]
  },
  {
    id: 'course-biz-5',
    slug: 'ecommerce-store-setup',
    title: 'E-commerce Store Setup',
    description: 'Learn end-to-end digital retail: product niche selection, store architecture, payment gateway integration, shipping logistics, checkout optimization, and customer retention funnels.',
    categoryId: 'cat_ecom',
    categoryName: 'E-commerce',
    categorySlug: 'e-commerce',
    difficulty: 'Beginner',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Evaluate profitable product categories and supplier fulfillment models',
      'Design a conversion-optimized online storefront layout',
      'Set up secure payment processing gateways and multi-currency checkouts',
      'Configure tax calculations, shipping zones, and automated order notifications',
      'Implement abandoned cart recovery sequences to reclaim lost sales'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic computer literacy'],
    instructor: {
      name: 'Amina Al-Mansoor',
      role: 'E-commerce Operations Specialist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ecom-1',
        title: 'Digital Storefront Operations',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ecom-1',
            slug: 'product-validation-and-sourcing',
            title: '1. Product Validation, Sourcing, and Unit Economics',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            content: `Before building a store, calculate your unit economics: Retail Price - Product Cost - Shipping - 3% Payment Processing - Advertising Cost = Net Profit. Target products with healthy 60%+ gross margins to absorb customer acquisition costs.`,
            practicePrompt: 'Calculate the break-even unit economics for a product retailing at $45.',
            quiz: {
              question: 'Why are healthy gross profit margins (60%+) crucial for independent e-commerce stores?',
              options: ['Stores are required to donate profits', 'Healthy margins provide financial cushion to absorb advertising acquisition costs, shipping, returns, and payment fees sustainably', 'Suppliers demand it', 'Margins do not matter'],
              correctIndex: 1,
              explanation: 'Substantial gross margins ensure paid customer acquisition remains profitable.'
            },
            resources: [{ title: 'E-commerce Unit Economics Calculator', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-ecom-2',
            slug: 'store-navigation-and-product-pages',
            title: '2. High-Converting Product Pages and Mobile UX',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=n4p7Koy0ZqE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bixR-KIE36o',
            content: `The product page is where transactions happen. Include: high-resolution photography with zoom, clear pricing, inventory status, sizing/specifications table, customer reviews with photos, and a prominent sticky "Add to Cart" button on mobile.`,
            practicePrompt: 'Audit an e-commerce product page and identify 3 improvements for mobile usability.',
            quiz: {
              question: 'What is a "Sticky Add to Cart" button on mobile e-commerce sites?',
              options: ['A button coated in glue', 'A persistent button anchored to the bottom of the mobile viewport so shoppers can purchase without scrolling all the way back up', 'A popup ad', 'A broken link'],
              correctIndex: 1,
              explanation: 'Persistent mobile buttons eliminate scrolling friction and increase conversion rates.'
            },
            resources: [{ title: 'Product Page Optimization Wireframe', url: '#', type: 'Template' }]
          },
          {
            id: 'l-ecom-3',
            slug: 'payment-gateways-and-trust-badges',
            title: '3. Payment Gateways, Security, and Trust Signals',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=h9ZmMb_9pWk',
            content: `Offer modern payment methods: credit cards, Apple Pay, Google Pay, and PayPal. Express one-click checkouts increase mobile conversions by over 20%. Display SSL certificates, clear return policies, and recognized security badges.`,
            practicePrompt: 'Configure payment gateway options and verify Apple Pay / Google Pay express buttons on mobile.',
            quiz: {
              question: 'Why do Express Checkout options (Apple Pay, Google Pay) boost mobile e-commerce conversions?',
              options: ['They are 50% cheaper', 'They eliminate manual entry of 16-digit credit card numbers and shipping addresses with biometric one-touch authentication', 'They bypass taxes', 'They work without internet'],
              correctIndex: 1,
              explanation: 'Frictionless biometric checkouts eliminate typing errors and abandoned carts.'
            },
            resources: [{ title: 'Checkout Security & Trust Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-ecom-4',
            slug: 'shipping-zones-and-fulfillment',
            title: '4. Shipping Zones, Packaging, and Post-Purchase Emails',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Unexpected shipping costs at checkout are the #1 reason for cart abandonment. Offer simple flat-rate shipping or "Free Shipping on orders over $50" to increase Average Order Value (AOV). Automate branded shipping tracking emails.`,
            practicePrompt: 'Design a tiered shipping rule encouraging customers to add one extra item to unlock free shipping.',
            quiz: {
              question: 'What is the most common reason online shoppers abandon checkout carts?',
              options: ['Too many product colors', 'Unexpected extra costs for shipping and fees revealed at the final checkout step', 'Fast loading times', 'Clear return policies'],
              correctIndex: 1,
              explanation: 'Surprise fees at checkout create immediate friction that prompts abandonment.'
            },
            resources: [{ title: 'Shipping Strategy Playbook', url: '#', type: 'Playbook' }]
          },
          {
            id: 'l-ecom-5',
            slug: 'abandoned-cart-recovery',
            title: '5. Abandoned Cart Recovery Sequences',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2Vj0n2A8fGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Over 70% of shopping carts are abandoned. Set up an automated 3-part email sequence: Email 1 (1 hour later): "Did you leave something behind?" with cart items. Email 2 (24 hours later): Answer common FAQs and show customer reviews. Email 3 (48 hours later): Gentle urgency or free shipping code.`,
            practicePrompt: 'Draft an abandoned cart recovery email series aimed at recovering 15% of lost checkouts.',
            quiz: {
              question: 'When should the first abandoned cart recovery email be triggered after a shopper leaves items behind?',
              options: ['3 weeks later', '1 to 2 hours after abandonment while purchase intent remains highest', 'Immediately within 2 seconds', 'Never'],
              correctIndex: 1,
              explanation: 'Reaching shoppers within 1-2 hours captures intent before they purchase from competitors.'
            },
            resources: [{ title: 'Abandoned Cart Email Templates', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does AOV stand for in e-commerce metrics?',
        options: ['Automated Online Video', 'Average Order Value (total revenue divided by number of orders)', 'Apple Operating Vector', 'All Orders Verified'],
        correctIndex: 1,
        explanation: 'AOV measures the average dollar spend per customer checkout.'
      }
    ]
  },
  {
    id: 'course-biz-6',
    slug: 'digital-advertising-fundamentals',
    title: 'Digital Advertising Fundamentals',
    description: 'Learn paid media: Meta Ads Manager, Google Search and Display ads, audience targeting, creative ad formats, conversion tracking pixels, and calculating Customer Acquisition Cost (CAC) vs. LTV.',
    categoryId: 'cat_mktg',
    categoryName: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    difficulty: 'Intermediate',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the fundamental mechanics of real-time ad bidding auctions',
      'Set up Meta Pixel and Google Ads conversion tracking tags',
      'Build cold, warm retargeting, and lookalike audiences',
      'Design high-converting image, carousel, and video creative assets',
      'Analyze key metrics: ROAS, CPC, CTR, CAC, and Lifetime Value (LTV)'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic digital marketing understanding'],
    instructor: {
      name: 'Amina Al-Mansoor',
      role: 'Paid Media Strategist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-adv-1',
        title: 'Paid Media Architecture',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-adv-1',
            slug: 'ad-auctions-and-bidding',
            title: '1. How Digital Ad Auctions Work: Meta & Google',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=2Vj0n2A8fGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Ad platforms do not just pick the highest monetary bidder; they reward relevance. Winning bid = (Monetary Bid) x (Estimated Action Rate) + (User Value / Ad Quality Score). High quality creative reduces your cost per click.`,
            practicePrompt: 'Explain how ad relevance and high click-through rates lower the effective price you pay per click.',
            quiz: {
              question: 'In digital ad auctions, why can an advertiser with a lower bid beat a competitor with a higher bid?',
              options: ['The platform likes them', 'Superior ad quality score, expected click-through rate, and post-click landing page relevance offset a lower monetary bid', 'Pure random chance', 'They joined first'],
              correctIndex: 1,
              explanation: 'Quality score ensures users see relevant ads while keeping platform auctions efficient.'
            },
            resources: [{ title: 'Ad Auction Mechanics Blueprint', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-adv-2',
            slug: 'conversion-tracking-pixels',
            title: '2. Conversion Pixels and Conversions API (CAPI)',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=h9ZmMb_9pWk',
            content: `Never run ads blindly. Install the Meta Pixel and Conversions API to track standard events: PageView, ViewContent, AddToCart, InitiateCheckout, and Purchase. Machine learning needs event volume to optimize audience targeting.`,
            practicePrompt: 'Use the Meta Pixel Helper browser extension to verify that standard events fire on a demo checkout.',
            quiz: {
              question: 'What is the role of a conversion tracking pixel on your website?',
              options: ['To display a camera image', 'To report specific user actions (e.g. purchases, signups) back to the ad platform so the algorithm learns which user profiles convert', 'To slow down computers', 'To block ad blockers'],
              correctIndex: 1,
              explanation: 'Pixels feed outcome data back into algorithmic optimization models.'
            },
            resources: [{ title: 'Pixel & CAPI Implementation Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-adv-3',
            slug: 'audience-targeting-funnel',
            title: '3. Full-Funnel Audiences: Cold, Lookalike, and Retargeting',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=n4p7Koy0ZqE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bixR-KIE36o',
            content: `Top of Funnel (Cold): Interest targeting and Broad Advantage+ targeting. Middle of Funnel: Video viewers and Instagram engagers. Bottom of Funnel (Hot Retargeting): Website visitors from past 30 days and abandoned carts. Retargeting yields the highest ROAS.`,
            practicePrompt: 'Map out a 3-tier ad budget allocation: 70% Cold prospecting, 20% Retargeting, 10% Retention.',
            quiz: {
              question: 'What is a "Lookalike Audience" in paid media marketing?',
              options: ['People who dress like you', 'An algorithmically generated group of new users who share statistical and behavioral traits with your best existing customers', 'Fake bot accounts', 'Your competitors'],
              correctIndex: 1,
              explanation: 'Lookalikes find new prospects statistically identical to your proven buyers.'
            },
            resources: [{ title: 'Audience Funnel Architecture Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-adv-4',
            slug: 'creative-fatigue-and-ad-formats',
            title: '4. Creative Strategy: Hook, Hold, and Testing Formats',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `Creative is the new targeting. Test 3 distinct hooks for every concept: Problem hook, Curiosity hook, and Social Proof hook. Rotate fresh creative assets every 2–3 weeks to defeat "creative fatigue" when ad frequency climbs above 3.5.`,
            practicePrompt: 'Design 3 contrasting visual angles for the same product to test in an ad campaign.',
            quiz: {
              question: 'What is "Creative Fatigue" in paid advertising campaigns?',
              options: ['The designer gets tired', 'When the target audience sees the exact same ad too many times, causing click-through rates to plummet and acquisition costs to spike', 'The computer runs out of memory', 'The ad gets deleted'],
              correctIndex: 1,
              explanation: 'Repeated over-exposure dulls audience attention and inflates acquisition costs.'
            },
            resources: [{ title: 'Creative Testing Matrix', url: '#', type: 'Matrix' }]
          },
          {
            id: 'l-adv-5',
            slug: 'roas-cac-and-ltv-metrics',
            title: '5. Key Metrics: ROAS, CAC, and the LTV:CAC Ratio',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Learn the math of scale. Customer Acquisition Cost (CAC) = Total Ad Spend / New Customers Acquired. Return on Ad Spend (ROAS) = Revenue / Spend. A sustainable business targets an LTV:CAC ratio of at least 3:1 (customer lifetime value is 3x the acquisition cost).`,
            practicePrompt: 'Calculate your CAC if you spend $1,000 on ads and generate 25 new paying customers.',
            quiz: {
              question: 'What is considered a healthy benchmark ratio for Customer Lifetime Value (LTV) to Customer Acquisition Cost (CAC)?',
              options: ['0.5:1 (losing money)', '3:1 or higher', '100:1 (impossible in practice)', 'Zero'],
              correctIndex: 1,
              explanation: 'A 3:1 LTV:CAC ratio ensures healthy profitability after operating costs and fulfillment.'
            },
            resources: [{ title: 'Paid Ads Performance Dashboard Sheet', url: '#', type: 'Spreadsheet' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does ROAS stand for in advertising campaigns?',
        options: ['Return On Ad Spend', 'Rate Of All Sales', 'Regional Online Ad System', 'Revenue Over Annual Savings'],
        correctIndex: 0,
        explanation: 'ROAS measures gross revenue generated per dollar invested in advertising.'
      }
    ]
  },
  {
    id: 'course-biz-7',
    slug: 'customer-service-support',
    title: 'Customer Service and Support',
    description: 'Learn modern customer support: ticketing systems, empathetic de-escalation, macro templates, live chat best practices, customer satisfaction (CSAT) scoring, and turning complaints into loyal advocates.',
    categoryId: 'cat_comm',
    categoryName: 'English Communication',
    categorySlug: 'english-communication',
    difficulty: 'Beginner',
    durationMinutes: 170,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master the principles of proactive and empathetic customer care',
      'Navigate multi-channel ticketing systems (Zendesk, Freshdesk, email, chat)',
      'De-escalate frustrated customers using the HEAR empathetic framework',
      'Create helpful, clear macro responses that never sound robotic',
      'Track and improve Net Promoter Score (NPS) and Customer Satisfaction (CSAT)'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic communication skills'],
    instructor: {
      name: 'Maya Lin',
      role: 'Customer Experience Operations Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-cs-1',
        title: 'Customer Experience Operations',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-cs-1',
            slug: 'the-business-value-of-cx',
            title: '1. Why Customer Support is a Revenue Center',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=nE301qG9mE4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=D0y9W92y4Bw',
            content: `Support is not a cost center; it is the frontline of customer retention. Acquiring a new customer costs 5x to 7x more than retaining an existing one. Resolving an issue swiftly turns frustrated users into vocal brand evangelists (the Service Recovery Paradox).`,
            practicePrompt: 'Reflect on a time a company resolved a problem exceptionally well for you: what specific action created loyalty?',
            quiz: {
              question: 'What is the "Service Recovery Paradox" in customer loyalty research?',
              options: ['Computers breaking repeatedly', 'A situation where a customer whose problem was resolved with exceptional speed and empathy becomes more loyal than a customer who never faced an issue', 'Customers always lying', 'Refusing refunds'],
              correctIndex: 1,
              explanation: 'Overcoming friction with grace proves genuine brand commitment to the customer.'
            },
            resources: [{ title: 'Service Recovery Principles Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-cs-2',
            slug: 'the-hear-de-escalation-framework',
            title: '2. De-Escalating Angry Customers: The HEAR Framework',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `H - Hear (listen actively without interrupting), E - Empathize (validate their frustration: "I completely understand why that would be frustrating"), A - Apologize & Acknowledge (own the experience without passing blame), R - Resolve & Reassure (offer a concrete immediate solution with a timeline).`,
            practicePrompt: 'Draft a de-escalation response to a customer whose account was locked right before a deadline.',
            quiz: {
              question: 'What should you avoid doing when a customer is expressing anger or disappointment?',
              options: ['Listening attentively', 'Becoming defensive, arguing about whose fault it was, or quoting bureaucratic rules', 'Offering a fast solution', 'Validating their feelings'],
              correctIndex: 1,
              explanation: 'Defensiveness fuels escalation; empathy defuses tension.'
            },
            resources: [{ title: 'HEAR De-escalation Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-cs-3',
            slug: 'human-macros-and-canned-responses',
            title: '3. Crafting Human-Sounding Saved Responses (Macros)',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=9g0H29W6F2U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=kY67Z3j9r7c',
            content: `Macros save time on common questions (billing, password resets, returns), but they must feel personalized. Always use the customer’s first name, acknowledge their specific context, and adapt the opening sentence before sending.`,
            practicePrompt: 'Write a warm, human macro template explaining how to request an invoice copy.',
            quiz: {
              question: 'How should support agents use pre-written macro templates effectively?',
              options: ['Click send without reading', 'Use the template as an efficient starting structure, customizing the greeting and specific details so it reads warmly and personally', 'Only send blank emails', 'Send in all caps'],
              correctIndex: 1,
              explanation: 'Personalization ensures efficiency does not come at the expense of human empathy.'
            },
            resources: [{ title: 'Customer Support Macro Swipe File', url: '#', type: 'Template' }]
          },
          {
            id: 'l-cs-4',
            slug: 'first-response-time-and-slas',
            title: '4. Service Level Agreements (SLAs) and First Contact Resolution',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=i9YQ_VkWb5M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Qc6yV8G3EAE',
            content: `Understand support benchmarks: First Response Time (FRT) under 1 hour for email and under 2 minutes for live chat. Strive for First Contact Resolution (FCR) by anticipating follow-up questions before the customer has to ask.`,
            practicePrompt: 'Draft an answer to a billing inquiry that proactively answers the next two questions the customer will likely have.',
            quiz: {
              question: 'What does "First Contact Resolution" (FCR) measure?',
              options: ['The first customer who ever bought', 'The percentage of customer issues resolved completely in a single interaction without requiring back-and-forth follow-ups', 'The internet speed', 'Closing a ticket without helping'],
              correctIndex: 1,
              explanation: 'High FCR maximizes customer satisfaction and minimizes ticket backlog.'
            },
            resources: [{ title: 'SLA Benchmark Guidelines', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-cs-5',
            slug: 'csat-nps-and-continuous-feedback',
            title: '5. Measuring CSAT, CES, and NPS for Product Improvement',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=UNer_XgY7z0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=p43qW5e3q2E',
            content: `Track CSAT (Customer Satisfaction: "How satisfied were you with this resolution?"), CES (Customer Effort Score: "How easy was it to resolve your issue?"), and NPS. Aggregate recurring complaints to report product bugs and UX friction back to engineering.`,
            practicePrompt: 'Design a 1-question post-ticket feedback survey with clear rating scales.',
            quiz: {
              question: 'Why should customer support teams share recurring feedback data with product and engineering teams?',
              options: ['To blame engineers', 'Because customer support tickets provide direct real-world evidence of product bugs, confusing UX, and missing features', 'Support data is private', 'To delete tickets'],
              correctIndex: 1,
              explanation: 'Support feedback forms an invaluable roadmap for ongoing product refinement.'
            },
            resources: [{ title: 'CSAT & NPS Survey Design Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does CSAT stand for in customer service performance tracking?',
        options: ['Computer Speed And Time', 'Customer Satisfaction score', 'Central Support Access Terminal', 'Customer Social Affinity Tag'],
        correctIndex: 1,
        explanation: 'CSAT measures direct satisfaction with a specific support interaction.'
      }
    ]
  },
  {
    id: 'course-biz-8',
    slug: 'affiliate-marketing-beginners',
    title: 'Affiliate Marketing for Beginners',
    description: 'Learn ethical performance marketing: choosing high-converting affiliate programs, niche review sites, comparison articles, disclosure compliance (FTC), deep linking, and passive referral revenue.',
    categoryId: 'cat_ecom',
    categoryName: 'E-commerce',
    categorySlug: 'e-commerce',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the affiliate revenue model: Merchants, Networks, Affiliates, and Consumers',
      'Select trustworthy affiliate programs with reliable cookie windows and recurring commissions',
      'Author high-intent comparison and honest review content that guides buyers',
      'Comply transparently with FTC affiliate disclosure guidelines',
      'Track click-throughs, EPC (Earnings Per Click), and conversion rates'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic internet and blogging familiarity'],
    instructor: {
      name: 'Marcus Vance',
      role: 'Affiliate Publisher & Growth Advisor',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-aff-1',
        title: 'Performance & Referral Marketing',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-aff-1',
            slug: 'affiliate-mechanics-and-cookies',
            title: '1. The Affiliate Ecosystem, Tracking, and Cookie Windows',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=n4p7Koy0ZqE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bixR-KIE36o',
            content: `Affiliate marketing rewards publishers for referred sales. When a reader clicks your unique referral link, a tracking cookie (e.g. 30-day cookie window) is stored in their browser. If they purchase within that window, you earn a commission.`,
            practicePrompt: 'Find an affiliate program for a software tool you genuinely use and check their cookie window and commission rate.',
            quiz: {
              question: 'What is a "cookie window" in affiliate marketing programs?',
              options: ['A bakery shop window', 'The duration of time (e.g. 30 to 90 days) after a click during which an affiliate still earns credit for a resulting purchase', 'The computer monitor size', 'A browser error'],
              correctIndex: 1,
              explanation: 'Cookie windows protect publisher referral attribution across typical buyer consideration cycles.'
            },
            resources: [{ title: 'Affiliate Program Directory Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-aff-2',
            slug: 'selecting-reputable-programs',
            title: '2. Choosing Trustworthy Programs and Recurring Commissions',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=xsVTqzratPs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=h9ZmMb_9pWk',
            content: `Promote only tools and products you have personally used and vetted. Prioritize SaaS tools that pay recurring monthly commissions (e.g. 30% every month the subscriber stays active) over one-time low-payout physical products.`,
            practicePrompt: 'Compare the long-term revenue potential of a 10% one-time e-commerce affiliate payout versus a 30% recurring software affiliate payout.',
            quiz: {
              question: 'Why are SaaS (Software-as-a-Service) affiliate programs especially attractive for publishers?',
              options: ['Software cannot be downloaded', 'Many SaaS programs offer recurring monthly subscription commissions that compound into predictable passive revenue', 'They only work on Sundays', 'They require no links'],
              correctIndex: 1,
              explanation: 'Recurring commissions provide stable, compounding long-term earnings.'
            },
            resources: [{ title: 'SaaS Affiliate Program Comparison', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-aff-3',
            slug: 'comparison-articles-and-reviews',
            title: '3. High-Intent Content: "Tool A vs. Tool B" and Honest Reviews',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Ddfg8t-Vq-4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            content: `The highest converting searchers are already holding their credit card: they are choosing between two finalists (e.g. "Figma vs Adobe XD" or "Webflow vs WordPress"). Highlight honest pros and cons. Never write fake 100% praise reviews.`,
            practicePrompt: 'Outline an honest "Tool A vs Tool B" comparison article with clear criteria and authentic drawbacks for each.',
            quiz: {
              question: 'Why does pointing out genuine cons and limitations of a recommended tool actually increase conversions?',
              options: ['It confuses readers', 'Honest balance builds immense reader trust; readers know no tool is perfect and trust your balanced judgment', 'It lowers the price', 'Search engines delete positive reviews'],
              correctIndex: 1,
              explanation: 'Authentic critique substantiates credibility and de-risks user decision making.'
            },
            resources: [{ title: 'Comparison Article Outline Blueprint', url: '#', type: 'Template' }]
          },
          {
            id: 'l-aff-4',
            slug: 'ftc-disclosure-and-ethics',
            title: '4. FTC Compliance and Transparent Disclosures',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=2Vj0n2A8fGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `The Federal Trade Commission (FTC) requires clear, conspicuous disclosures BEFORE any affiliate links appear. State plainly: "Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you."`,
            practicePrompt: 'Write a clear, friendly affiliate disclosure statement to include at the top of an article.',
            quiz: {
              question: 'Where should an affiliate disclosure appear on a web page to comply with FTC consumer guidelines?',
              options: ['Hidden in tiny grey text in the footer', 'Prominently at the top of the article or immediately before any affiliate links appear, in plain visible language', 'Only in the code comments', 'Nowhere'],
              correctIndex: 1,
              explanation: 'Disclosures must be clear and conspicuous before consumers interact with referral links.'
            },
            resources: [{ title: 'FTC Disclosure Compliance Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-aff-5',
            slug: 'tracking-epc-and-optimization',
            title: '5. EPC (Earnings Per Click) and Conversion Optimization',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Calculate Earnings Per Click (EPC): Total Earnings / Total Clicks. If an offer generates $200 from 100 clicks, your EPC is $2.00. Test call-to-action button placements, comparison summary boxes, and highlighted editor recommendations to boost click-throughs.`,
            practicePrompt: 'Calculate the EPC for an affiliate link that generated $450 in commissions from 300 outbound clicks.',
            quiz: {
              question: 'What does EPC stand for in performance affiliate metrics?',
              options: ['Electronic Page Check', 'Earnings Per Click (average revenue generated for every click sent to a merchant)', 'Email Provider Certificate', 'Entry Point Calculation'],
              correctIndex: 1,
              explanation: 'EPC measures the direct monetary yield of your outbound referral traffic.'
            },
            resources: [{ title: 'Affiliate Performance Calculator', url: '#', type: 'Spreadsheet' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is a "deep link" in affiliate marketing?',
        options: ['A link to the ocean', 'An affiliate link that directs a user directly to a specific product or signup page rather than the generic homepage', 'A broken link', 'A password protected link'],
        correctIndex: 1,
        explanation: 'Deep links reduce navigation friction by landing users directly on the target product.'
      }
    ]
  }
];
