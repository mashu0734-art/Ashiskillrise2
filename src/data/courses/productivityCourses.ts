import { Course } from './types';

export const PRODUCTIVITY_COURSES: Course[] = [
  {
    id: 'course-prod-1',
    slug: 'notion-personal-organization',
    title: 'Notion for Personal Organization',
    description: 'Build your personal "Second Brain" in Notion: relational databases, Kanban boards, formula properties, synced blocks, daily habit dashboards, and PARA methodology knowledge management.',
    categoryId: 'cat_computer',
    categoryName: 'Computer Fundamentals',
    categorySlug: 'computer-fundamentals',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master Notion blocks, nested pages, toggles, and keyboard markdown shortcuts',
      'Design relational databases with linked views (Table, Board, Calendar, Gallery)',
      'Implement Tiago Forte\'s PARA method (Projects, Areas, Resources, Archives)',
      'Create automated habit tracking dashboards with visual progress bars',
      'Share and publish beautiful client-facing wikis and project portals'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['A free Notion account'],
    instructor: {
      name: 'Maya Lin',
      role: 'Productivity Systems Designer',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-not-1',
        title: 'Notion Architecture & Second Brain',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-not-1',
            slug: 'notion-blocks-and-markdown',
            title: '1. Notion Block Architecture and Markdown Speed',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=aA7si7AmPkY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=aA7si7AmPkY',
            content: `In Notion, everything is an editable block: text, headings, callout boxes, toggle lists, images, and embedded pages. Use slash commands (\`/h1\`, \`/callout\`, \`/todo\`) to build structured documents without lifting hands from the keyboard.`,
            practicePrompt: 'Build a daily meeting notes template using headers, callouts, and toggle blocks using keyboard shortcuts.',
            quiz: {
              question: 'Which keyboard command opens the block creation menu in Notion?',
              options: ['Pressing Escape', 'Typing the forward slash "/" key', 'Pressing Shift+F1', 'Double clicking the mouse'],
              correctIndex: 1,
              explanation: 'Typing "/" instantly surfaces all block creation options.'
            },
            resources: [{ title: 'Notion Markdown Shortcuts Cheat Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-not-2',
            slug: 'relational-databases-and-views',
            title: '2. Relational Databases and Multi-View Layouts',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=m9S5I3pW_e8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=m9S5I3pW_e8',
            content: `Databases are Notion\'s superpower. Create one central task database, then display it as a Kanban board filtered by status on your dashboard, as a Calendar view for deadlines, and as a Table view for bulk editing. One data source, endless views.`,
            practicePrompt: 'Create a tasks database and build 2 filtered views: "Due Today" and "In Progress Board".',
            quiz: {
              question: 'What is a "Linked View of Database" in Notion?',
              options: ['A website link', 'A visual layout window that pulls data from a master database, allowing unique custom filters and sorts without duplicating data', 'A backup file', 'A shared email'],
              correctIndex: 1,
              explanation: 'Linked views reference existing master databases with tailored view configurations.'
            },
            resources: [{ title: 'Relational Database Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-not-3',
            slug: 'the-para-method-organization',
            title: '3. The PARA Method: Organizing Your Digital Life',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=vs8HGhTfIHg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=vs8HGhTfIHg',
            content: `Adopt the universal PARA framework: Projects (short-term goals with fixed deadlines), Areas of Responsibility (ongoing commitments: health, finances), Resources (topics of interest: design notes, recipes), and Archives (inactive completed items).`,
            practicePrompt: 'Classify 10 active tasks and reference documents into the 4 PARA folders.',
            quiz: {
              question: 'In Tiago Forte\'s PARA method, what is the difference between a Project and an Area?',
              options: ['Projects are larger', 'A Project has a specific completion deadline and goal; an Area has an ongoing standard to maintain with no final end date', 'Areas have budgets', 'They are synonyms'],
              correctIndex: 1,
              explanation: 'Projects have definitive endpoints, whereas Areas require continuous indefinite upkeep.'
            },
            resources: [{ title: 'PARA Method Quick Start Canvas', url: '#', type: 'Template' }]
          },
          {
            id: 'l-not-4',
            slug: 'habit-dashboards-and-formulas',
            title: '4. Habit Trackers with Dynamic Formula Progress',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=aA7si7AmPkY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=aA7si7AmPkY',
            content: `Use checkbox properties for daily habits (Reading, Workout, Deep Work, Hydration). Write a simple Notion formula to display a visual completion bar (e.g. \`[████░░░░░░] 40%\`) that updates automatically as boxes are checked.`,
            practicePrompt: 'Build a weekly habit tracker with 4 daily checkboxes and a visual formula progress bar.',
            quiz: {
              question: 'Why are visual habit trackers psychologically effective?',
              options: ['They take up screen space', 'They provide immediate micro-rewards and tangible visual proof of consistency that reinforces habit loops', 'They send automated text messages', 'They make computers faster'],
              correctIndex: 1,
              explanation: 'Immediate visual feedback reinforces dopamine loops that solidify habits.'
            },
            resources: [{ title: 'Habit Tracker Formula Snippets', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-not-5',
            slug: 'publishing-wikis-and-client-portals',
            title: '5. Public Sharing and Client Portals',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=m9S5I3pW_e8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=m9S5I3pW_e8',
            content: `Publish Notion pages to the web with 1 click to create beautiful client wikis, project dashboards, and resumes. Control permissions: disable comments, prevent duplication, and add password protection or custom domains.`,
            practicePrompt: 'Create a clean 1-page project kickoff portal and publish it as a view-only public link.',
            quiz: {
              question: 'What is a key benefit of using a Notion page as a client project portal?',
              options: ['It costs $1,000', 'It provides an easily updated, clean single source of truth for deliverables, timelines, and links without sending endless email attachments', 'Clients must install code', 'It works offline only'],
              correctIndex: 1,
              explanation: 'Live portals eliminate email clutter and provide a synchronized project hub.'
            },
            resources: [{ title: 'Client Portal Template', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is a "Synced Block" in Notion?',
        options: ['A clock', 'A block whose content stays synchronized in real-time across multiple pages; editing it in one place updates all instances everywhere', 'A locked page', 'A Google Calendar event'],
        correctIndex: 1,
        explanation: 'Synced blocks enable centralized content reuse across distinct pages.'
      }
    ]
  },
  {
    id: 'course-prod-2',
    slug: 'google-workspace-mastery',
    title: 'Google Workspace Mastery',
    description: 'Master business collaboration: advanced Google Docs formatting, Google Sheets automated formulas, Gmail zero-inbox workflows, Google Drive permission hygiene, and Calendar scheduling power.',
    categoryId: 'cat_computer',
    categoryName: 'Computer Fundamentals',
    categorySlug: 'computer-fundamentals',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master professional Google Docs formatting, document outlines, and version history restores',
      'Write essential Google Sheets formulas: VLOOKUP/XLOOKUP, IF, FILTER, and Pivot Tables',
      'Achieve Inbox Zero in Gmail using filters, labels, multiple inboxes, and keyboard shortcuts',
      'Manage team sharing permissions in Google Drive and Shared Drives safely',
      'Optimize Google Calendar with appointment scheduling links and focus time blocks'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['A Google / Gmail account'],
    instructor: {
      name: 'Maya Lin',
      role: 'Operations & Workspace Specialist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-gw-1',
        title: 'Collaborative Cloud Tools',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-gw-1',
            slug: 'gmail-inbox-zero-and-filters',
            title: '1. Achieving Inbox Zero: Filters, Labels, and Shortcuts',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=Vl0H-qTclOg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=V4mY2w1bZ2w',
            content: `Your inbox is not a to-do list. Enable keyboard shortcuts (\`e\` to archive, \`v\` to label, \`r\` to reply, \`c\` to compose). Build automated filters that skip the inbox for newsletters, routing them to a "Reading" folder for weekend review.`,
            practicePrompt: 'Build an automated Gmail filter that applies a label and skips the inbox for routine notifications.',
            quiz: {
              question: 'In Gmail, what is the default keyboard shortcut to archive an email thread immediately?',
              options: ['a', 'e', 'x', 'z'],
              correctIndex: 1,
              explanation: 'Pressing "e" instantly archives an open or selected email.'
            },
            resources: [{ title: 'Gmail Shortcuts Quick Reference', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-gw-2',
            slug: 'google-docs-outlines-and-version-history',
            title: '2. Professional Google Docs: Outlines and Version History',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=8L1OVkw2ZQ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Kz6T_wT7k7Y',
            content: `Never lose work or panic over accidental deletions. Access Version History (File -> Version History -> See version history) to see timestamped changes by author and restore any prior draft with one click. Use semantic Headings to auto-generate document navigation outlines.`,
            practicePrompt: 'Open an existing Google Doc, name a version checkpoint, and practice viewing past changes.',
            quiz: {
              question: 'How can you name an important draft milestone in Google Docs to easily find it later?',
              options: ['Take a screenshot', 'File -> Version History -> Name current version', 'Print to paper', 'Rename the computer'],
              correctIndex: 1,
              explanation: 'Named versions provide clear checkpoints to review major revisions.'
            },
            resources: [{ title: 'Google Docs Formatting Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-gw-3',
            slug: 'google-sheets-formulas-and-pivot-tables',
            title: '3. Google Sheets: Essential Formulas and Pivot Summaries',
            durationMinutes: 45,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=rwbho0CgEAE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `Master the essential formulas: \`=XLOOKUP(search_key, lookup_range, return_range)\`, \`=FILTER(range, condition)\`, and conditional formatting. Build a Pivot Table to group 5,000 transaction rows into a clean 5-line summary table in 10 seconds.`,
            practicePrompt: 'Create a Pivot Table grouping monthly expenses by category and calculate total sums.',
            quiz: {
              question: 'Why is XLOOKUP generally preferred over legacy VLOOKUP in modern spreadsheets?',
              options: ['It costs less money', 'XLOOKUP looks both left and right, does not break when columns are added, and has built-in fallback error handling', 'It requires no arguments', 'It only works with numbers'],
              correctIndex: 1,
              explanation: 'XLOOKUP is more flexible, robust, and bidirectional than legacy VLOOKUP.'
            },
            resources: [{ title: 'Essential Spreadsheet Formula Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-gw-4',
            slug: 'google-drive-security-and-shared-drives',
            title: '4. Google Drive Permission Hygiene and Shared Drives',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=m13x2a5mK38',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `Learn the difference between personal My Drive and team Shared Drives (files belong to the organization, so files do not disappear when an employee departs). Audit external sharing links: set expiration dates on sensitive shared documents.`,
            practicePrompt: 'Set up a folder in Google Drive, generate a time-limited view-only link, and test in incognito.',
            quiz: {
              question: 'What is a primary advantage of Google Workspace "Shared Drives" over standard "My Drive"?',
              options: ['Shared Drives are purple', 'Files are owned by the organization rather than individual user accounts, ensuring team assets are never deleted if an employee leaves', 'Shared Drives cannot be opened', 'They work on phones only'],
              correctIndex: 1,
              explanation: 'Organizational ownership prevents file loss upon team member offboarding.'
            },
            resources: [{ title: 'Google Drive Permissions Audit Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-gw-5',
            slug: 'google-calendar-and-appointment-schedules',
            title: '5. Google Calendar Scheduling and Focus Time Blocks',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=9RUeONbL0eA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Edsxf_NBFrw',
            content: `Eliminate "what time works for you?" email ping-pong. Set up native Google Calendar Appointment Schedules to share a booking link with your availability. Add "Focus Time" blocks that automatically decline conflicting meeting invites.`,
            practicePrompt: 'Create a Google Calendar appointment schedule for 30-minute consultation slots with buffer times.',
            quiz: {
              question: 'What feature does a Google Calendar "Focus Time" event provide?',
              options: ['Plays meditation music', 'Automatically declines meeting invitations that conflict with your designated deep work hours', 'Locks your phone', 'Sends flowers'],
              correctIndex: 1,
              explanation: 'Focus Time protects deep work by auto-declining conflicting meeting requests.'
            },
            resources: [{ title: 'Calendar Scheduling Setup Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does the Google Sheets formula =UNIQUE(A2:A100) do?',
        options: ['Deletes the column', 'Returns a deduplicated list of values with all repeats removed', 'Sums all numbers', 'Sorts alphabetically'],
        correctIndex: 1,
        explanation: 'UNIQUE extracts distinct values from a specified dataset range.'
      }
    ]
  },
  {
    id: 'course-prod-3',
    slug: 'professional-email-writing',
    title: 'Professional Email Writing in English',
    description: 'Master executive communication: the BLUF (Bottom Line Up Front) principle, polite yet firm boundary setting, avoiding passive aggression, following up gracefully, and reducing email length by 50%.',
    categoryId: 'cat_comm',
    categoryName: 'English Communication',
    categorySlug: 'english-communication',
    difficulty: 'Beginner',
    durationMinutes: 170,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Apply the BLUF (Bottom Line Up Front) framework to respect executive reading time',
      'Cut passive-aggressive phrasing ("As per my last email", "Just checking in")',
      'Write clear, actionable calls to action that eliminate ambiguous back-and-forth',
      'Send professional, high-converting follow-ups without sounding desperate',
      'De-escalate workplace misunderstandings with warm, solution-oriented tone'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic English reading ability'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Executive Communication Coach',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-pew-1',
        title: 'Executive Email Clarity',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-pew-1',
            slug: 'the-bluf-framework',
            title: '1. The BLUF Principle: Bottom Line Up Front',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=9g0H29W6F2U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=kY67Z3j9r7c',
            content: `Busy executives skim emails on mobile screens in 8 seconds. Put your request or key takeaway in the very first sentence. Provide background context in bullet points below. Never bury your question in paragraph 4.`,
            practicePrompt: 'Rewrite a 3-paragraph update email so that the decision request appears in the very first line.',
            quiz: {
              question: 'Why is the BLUF (Bottom Line Up Front) email framework so effective in business?',
              options: ['It makes emails longer', 'It immediately respects reader attention by stating the decision or action needed before providing supporting background details', 'It hides bad news', 'It eliminates subject lines'],
              correctIndex: 1,
              explanation: 'BLUF enables rapid comprehension and immediate decision making.'
            },
            resources: [{ title: 'BLUF Email Template Swipe File', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-pew-2',
            slug: 'cutting-wordy-and-passive-language',
            title: '2. Deleting Corporate Fluff and Passive Phrases',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=nE301qG9mE4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=D0y9W92y4Bw',
            content: `Cut "I am writing this email to let you know that...". Replace with direct action. Eliminate passive-aggressive cliches: replace "Per my previous email" with "As discussed on Tuesday, here are the links...". Replace "Sorry to bother you" with "Thank you for your time".`,
            practicePrompt: 'Edit an email draft to reduce its word count by 40% while preserving all key information.',
            quiz: {
              question: 'What is a more confident and professional alternative to "Sorry to bother you"?',
              options: ['"Hey you"', '"Thank you for your time / Thank you for your guidance on this"', '"Per my last email you missed it"', '"Pay attention"'],
              correctIndex: 1,
              explanation: 'Expressing gratitude communicates self-respect and professional warmth.'
            },
            resources: [{ title: 'Fluff-to-Power Word Replacement Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-pew-3',
            slug: 'actionable-closings-and-next-steps',
            title: '3. Actionable Closings and Explicit Deadlines',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Avoid vague endings like "Let me know your thoughts". Close with explicit questions: "Could you approve Option A by Thursday at 2:00 PM so we can start development on Friday?" Clear deadlines prevent project paralysis.`,
            practicePrompt: 'Draft an email closing specifying a choice, a deadline, and the immediate next step.',
            quiz: {
              question: 'Why is "Could you confirm Option A or B by Thursday at 3 PM?" better than "Let me know your thoughts"?',
              options: ['It is meaner', 'It eliminates ambiguity, reduces decision fatigue, and establishes a clear operational timeline', 'It requires more words', 'It forces an argument'],
              correctIndex: 1,
              explanation: 'Specific choices and deadlines eliminate cognitive friction for busy recipients.'
            },
            resources: [{ title: 'Actionable Email Closings Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-pew-4',
            slug: 'the-art-of-the-graceful-follow-up',
            title: '4. Graceful Follow-Ups: Persistence Without Annoyance',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=i9YQ_VkWb5M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Qc6yV8G3EAE',
            content: `People are busy, not malicious. Never send "Just bumping this to the top of your inbox". Add value in your follow-up: share a fresh relevant link, clarify a specification, or suggest a low-friction 1-click option. Wait 3–4 business days between touches.`,
            practicePrompt: 'Write a warm 3-sentence follow-up email that provides an extra resource while checking on a proposal.',
            quiz: {
              question: 'What is the best way to follow up on an unanswered email?',
              options: ['Send 10 question marks "???"', 'Reply politely to the original thread, provide additional helpful context or a simple choice, and reiterate the timeline warmly', 'Call their personal mobile at night', 'Complain to their boss immediately'],
              correctIndex: 1,
              explanation: 'Value-additive follow-ups make it easy for busy people to reconnect.'
            },
            resources: [{ title: '5 High-Response Follow-Up Templates', url: '#', type: 'Template' }]
          },
          {
            id: 'l-pew-5',
            slug: 'delivering-difficult-news-professionally',
            title: '5. Communicating Delays, Errors, and Boundaries',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=UNer_XgY7z0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=p43qW5e3q2E',
            content: `When a deadline will slip, inform stakeholders BEFORE they have to ask. Follow the 3-step protocol: 1. State the delay transparently, 2. Explain the root cause and why quality requires this time, 3. Provide the new locked delivery date and mitigation steps.`,
            practicePrompt: 'Draft an email proactively communicating a 48-hour delay on a software milestone.',
            quiz: {
              question: 'When should a professional communicate an unexpected project delay to a client or manager?',
              options: ['3 days after the deadline passed', 'Proactively as soon as the delay is identified, well before the scheduled deadline arrives', 'Never tell anyone', 'Only if they ask angrily'],
              correctIndex: 1,
              explanation: 'Proactive early communication preserves trust and allows stakeholders to adapt.'
            },
            resources: [{ title: 'Difficult Conversations Email Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is the primary risk of using sarcasm or dry humor in professional email correspondence?',
        options: ['Email filters ban humor', 'Without vocal intonation, facial cues, and body language, sarcasm is frequently misinterpreted as genuine hostility or passive aggression', 'Humor is copyright protected', 'It wastes bandwidth'],
        correctIndex: 1,
        explanation: 'Written communication lacks nonverbal cues, making tone easily misunderstood.'
      }
    ]
  },
  {
    id: 'course-prod-4',
    slug: 'public-speaking-presentations',
    title: 'Public Speaking and Presentation Skills',
    description: 'Conquer presentation anxiety: vocal projection, slide design simplicity (the 10-20-30 rule), body language, audience storytelling hooks, and handling live Q&A sessions with poise.',
    categoryId: 'cat_comm',
    categoryName: 'English Communication',
    categorySlug: 'english-communication',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Channel stage fright and adrenaline into dynamic speaking presence',
      'Design modern, non-cluttered slides using Guy Kawasaki\'s 10-20-30 rule',
      'Use vocal variety (pace, pitch, and deliberate pauses) to command the room',
      'Structure presentations with the What - So What - Now What framework',
      'Manage challenging Q&A questions with grace and composure'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['None'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Speech Coach & Keynote Speaker',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-psp-1',
        title: 'Confident Public Speaking',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-psp-1',
            slug: 'reframing-speaking-anxiety',
            title: '1. Reframing Anxiety: Physiology and Box Breathing',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=UNer_XgY7z0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=p43qW5e3q2E',
            content: `Glossophobia (fear of public speaking) affects 75% of people. Adrenaline causes racing heart and dry mouth. Reframe: your body is not terrified, it is energizing you to perform. Practice 4x4 Box Breathing (inhale 4s, hold 4s, exhale 4s, hold 4s) 5 minutes before stepping on stage.`,
            practicePrompt: 'Perform 3 cycles of Box Breathing and practice speaking your opening sentence out loud.',
            quiz: {
              question: 'How does physiological reframing ("I am excited" instead of "I am terrified") assist speakers?',
              options: ['It causes sleep', 'Because excitement and anxiety share identical sympathetic physiological arousal, reframing channels adrenaline productively rather than fighting it', 'It makes words louder', 'It eliminates preparation'],
              correctIndex: 1,
              explanation: 'Reframing leverages nervous energy into animated, passionate delivery.'
            },
            resources: [{ title: 'Pre-Stage Nervous System Calm Routine', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-psp-2',
            slug: 'the-10-20-30-slide-rule',
            title: '2. Slide Design: Guy Kawasaki\'s 10-20-30 Rule',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=i9YQ_VkWb5M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Qc6yV8G3EAE',
            content: `Death by PowerPoint kills attention. Follow the 10-20-30 rule: 10 slides maximum, 20 minutes duration, 30pt minimum font size. If you have 50 words on a slide, the audience reads the slide instead of listening to you. Slides are visual anchors, not teleprompters.`,
            practicePrompt: 'Take a slide with 6 bullet points and redesign it with 1 striking visual and 1 short keyword.',
            quiz: {
              question: 'Why does Guy Kawasaki mandate a minimum 30-point font size for presentation slides?',
              options: ['Projectors cannot render small fonts', 'It forces speakers to distill ideas to their essential core and prevents them from reading long text off the screen', 'It fills blank space', 'For legal compliance'],
              correctIndex: 1,
              explanation: 'Large fonts force disciplined editing and eliminate wall-of-text slides.'
            },
            resources: [{ title: '10-20-30 Slide Rule Template', url: '#', type: 'Template' }]
          },
          {
            id: 'l-psp-3',
            slug: 'vocal-variety-and-the-power-pause',
            title: '3. Vocal Variety and the Power of the Silent Pause',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Amateur speakers fear silence, filling gaps with "um", "ah", and "like". Master the deliberate 2-second silent pause. A pause lets a profound idea sink in, builds anticipation before a key reveal, and projects supreme confidence. Vary your pace between fast excitement and slow emphasis.`,
            practicePrompt: 'Record yourself speaking a 1-minute speech; replace every "um" with a deliberate 2-second silent pause.',
            quiz: {
              question: 'What is the effect of replacing filler words ("um", "like") with intentional silent pauses?',
              options: ['The audience thinks you forgot your speech', 'It projects authority, allows the audience to digest key ideas, and gives you time to formulate your next thought calmly', 'It makes speeches 5x longer', 'It causes awkward laughter'],
              correctIndex: 1,
              explanation: 'Intentional pauses exude poise and improve listener comprehension.'
            },
            resources: [{ title: 'Vocal Warmups & Pause Drills', url: '#', type: 'DrillSheet' }]
          },
          {
            id: 'l-psp-4',
            slug: 'what-so-what-now-what',
            title: '4. The "What - So What - Now What" Presentation Structure',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=nE301qG9mE4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=D0y9W92y4Bw',
            content: `Structure any presentation in 3 acts: 1. WHAT (the data, fact, or new feature), 2. SO WHAT (why this matters directly to the audience’s bottom line, team, or future), 3. NOW WHAT (the concrete call to action or decision required today).`,
            practicePrompt: 'Outline a 3-minute pitch for an educational project using the What - So What - Now What framework.',
            quiz: {
              question: 'What question does the "So What" section of a business presentation answer for the audience?',
              options: ['Where to eat lunch', 'Why this information matters to their goals, challenges, or financial bottom line', 'How to write software', 'Who made the slides'],
              correctIndex: 1,
              explanation: 'The "So What" bridges raw facts into personal relevance and urgency.'
            },
            resources: [{ title: 'Executive Presentation Framework', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-psp-5',
            slug: 'mastering-live-q-and-a',
            title: '5. Handling Q&A: The Repeat-Acknowledge-Answer Method',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=9g0H29W6F2U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=kY67Z3j9r7c',
            content: `When asked a question: 1. Repeat or paraphrase it so the whole room hears, 2. Acknowledge the premise ("That is a critical scaling consideration"), 3. Answer concisely. If you do not know the answer, never guess: say "I don't have that exact metric in front of me, but I will verify and follow up with you by tomorrow afternoon."`,
            practicePrompt: 'Practice responding to a tough skeptical question using the Repeat-Acknowledge-Answer method.',
            quiz: {
              question: 'What is the most credible response when an audience member asks a technical question you do not know the answer to?',
              options: ['Make up an impressive-sounding lie', 'Transparently acknowledge that you do not have that exact data on hand, commit to verifying it, and offer to follow up promptly', 'Insult the questioner', 'End the presentation and run'],
              correctIndex: 1,
              explanation: 'Honesty protects credibility and presents an opportunity for high-trust follow-up.'
            },
            resources: [{ title: 'Q&A De-Escalation Toolkit', url: '#', type: 'Toolkit' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'Where should a speaker direct their eye contact during a presentation?',
        options: ['At the floor', 'Staring at one single friendly person the entire time', 'Holding eye contact with individual audience members for 3–5 seconds across different sections of the room before moving to the next person', 'At the ceiling lights'],
        correctIndex: 2,
        explanation: '3-5 second individual eye contact establishes authentic human connection without sweeping nervously.'
      }
    ]
  },
  {
    id: 'course-prod-5',
    slug: 'critical-thinking-problem-solving',
    title: 'Critical Thinking and Problem Solving',
    description: 'Master intellectual models: First Principles reasoning, cognitive bias identification, root-cause analysis (5 Whys), second-order thinking, and probabilistic decision making under uncertainty.',
    categoryId: 'cat_career',
    categoryName: 'Career Development',
    categorySlug: 'career-development',
    difficulty: 'Intermediate',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Deconstruct complex challenges using First Principles reasoning',
      'Identify and neutralize common cognitive biases (Confirmation, Sunk Cost, Availability)',
      'Perform root-cause diagnosis using the 5 Whys and Fishbone diagramming',
      'Anticipate unintended consequences using Second-Order Thinking',
      'Make calibrated decisions under uncertainty with probabilistic thinking'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Curiosity and an open mind'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Cognitive Systems Researcher',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ct-1',
        title: 'Mental Models & Diagnostic Logic',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ct-1',
            slug: 'first-principles-reasoning',
            title: '1. First Principles Thinking: Reasoning from Bedrock Truths',
            durationMinutes: 40,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=dItUGF8GdTw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=dItUGF8GdTw',
            content: `Most people reason by analogy ("We do it this way because everyone else does"). First Principles reasoning breaks a problem down to its fundamental, undeniable physical truths, then reasons up from there. That is how Elon Musk reduced rocket battery costs by 90%.`,
            practicePrompt: 'Take an expensive or slow process in your work and deconstruct it to its irreducible fundamental components.',
            quiz: {
              question: 'What is the core distinction between reasoning by analogy and reasoning from First Principles?',
              options: ['First Principles requires a calculator', 'Reasoning by analogy copies existing models with minor tweaks; First Principles boils things down to bedrock facts and builds solutions from scratch', 'They are identical', 'Analogy is always better'],
              correctIndex: 1,
              explanation: 'First principles strips away convention to unlock breakthrough innovation.'
            },
            resources: [{ title: 'First Principles Deconstruction Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ct-2',
            slug: 'cognitive-biases-and-blindspots',
            title: '2. Cognitive Biases: Spotting Traps in Your Own Thinking',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=wEwGBIr_RIw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=wEwGBIr_RIw',
            content: `The human brain uses heuristics that introduce systematic errors. Spot: Confirmation Bias (seeking only evidence that supports pre-existing beliefs), Sunk Cost Fallacy (continuing a failing project because you already spent money on it), and Availability Heuristic (overestimating recent dramatic news).`,
            practicePrompt: 'Identify a decision where Sunk Cost Fallacy tempted you to keep pouring time into a dead end.',
            quiz: {
              question: 'What is the "Sunk Cost Fallacy"?',
              options: ['A boat sinking', 'The psychological tendency to continue investing resources into a failing endeavor simply because of the resources already invested, rather than future expected value', 'A financial dividend', 'A discount program'],
              correctIndex: 1,
              explanation: 'Past unrecoverable investments should never dictate forward-looking rational decisions.'
            },
            resources: [{ title: '20 Common Cognitive Biases Map', url: '#', type: 'Diagram' }]
          },
          {
            id: 'l-ct-3',
            slug: 'root-cause-analysis-5-whys',
            title: '3. Root-Cause Analysis: The 5 Whys and Fishbone Diagrams',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Never treat the surface symptom; cure the underlying disease. Developed by Sakichi Toyoda for Toyota: ask "Why?" five consecutive times. If a server crashed, don't just reboot it. Why? Out of disk space. Why? Logs not rotated. Why? No cron monitor. The 5th why reveals the systemic operational flaw.`,
            practicePrompt: 'Apply the 5 Whys framework to a recurring problem or missed deadline in your life.',
            quiz: {
              question: 'What is the ultimate purpose of the "5 Whys" root-cause methodology?',
              options: ['To annoy colleagues', 'To move past superficial symptoms and identify the fundamental procedural or systemic flaw causing the defect', 'To blame an individual', 'To spend 5 hours'],
              correctIndex: 1,
              explanation: 'Iterative interrogation unearths systemic root causes rather than surface symptoms.'
            },
            resources: [{ title: '5 Whys Root-Cause Worksheet', url: '#', type: 'Worksheet' }]
          },
          {
            id: 'l-ct-4',
            slug: 'second-order-thinking',
            title: '4. Second-Order Thinking: "And Then What?"',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=dItUGF8GdTw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=dItUGF8GdTw',
            content: `First-order thinking is simple: "We are hungry, let\'s eat a candy bar." Second-order thinking asks: "And then what?" (sugar crash, weight gain, fatigue). In business, reducing prices increases sales (first order), but attracts lower-retention customers and compresses margins (second order).`,
            practicePrompt: 'Analyze a major strategic decision through 1st, 2nd, and 3rd order downstream consequences.',
            quiz: {
              question: 'What core question does a second-order thinker constantly ask?',
              options: ['"Who pays?"', '"And then what?" (evaluating downstream consequences of consequences over time)', '"How fast can we finish?"', '"What is the weather?"'],
              correctIndex: 1,
              explanation: 'Anticipating subsequent ripple effects distinguishes strategic thinkers from naive optimists.'
            },
            resources: [{ title: 'Consequence Tree Diagramming Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ct-5',
            slug: 'probabilistic-decision-making',
            title: '5. Probabilistic Thinking and Inversion',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=wEwGBIr_RIw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=wEwGBIr_RIw',
            content: `Life is not black and white; it is probabilities. Learn Charlie Munger’s Inversion principle: "Invert, always invert." Instead of asking "How do we make this project succeed?", ask "How could this project fail horribly?", and then systematically build defenses against those failure modes.`,
            practicePrompt: 'Conduct a "pre-mortem" on your next big goal: write down all the ways it could fail and design safeguards.',
            quiz: {
              question: 'What is the "Inversion" mental model?',
              options: ['Upside-down yoga', 'Approaching a problem backwards by focusing on how to prevent failure rather than solely imagining success', 'Turning computer screens upside down', 'Reversing bank transactions'],
              correctIndex: 1,
              explanation: 'Inversion reveals overlooked vulnerabilities by illuminating pathways to disaster.'
            },
            resources: [{ title: 'Pre-Mortem Inversion Template', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is Confirmation Bias?',
        options: ['Confirming meeting calendar invites', 'The human tendency to search for, interpret, favor, and recall information in a way that confirms prior beliefs while ignoring contrary evidence', 'A computer verification test', 'Signing a contract'],
        correctIndex: 1,
        explanation: 'Confirmation bias leads people to dismiss valid counter-evidence.'
      }
    ]
  },
  {
    id: 'course-prod-6',
    slug: 'personal-finance-budgeting',
    title: 'Personal Finance and Budgeting Basics',
    description: 'Take control of your money: the 50/30/20 budgeting rule, emergency fund construction, high-interest debt elimination (snowball vs avalanche), compound interest investing, and tax-advantaged accounts.',
    categoryId: 'cat_finance',
    categoryName: 'Personal Finance Basics',
    categorySlug: 'personal-finance',
    difficulty: 'Beginner',
    durationMinutes: 190,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master the 50/30/20 budgeting system for sustainable cash flow allocation',
      'Build a resilient 3-to-6 month liquid emergency fund in a high-yield account',
      'Compare debt payoff strategies: Debt Snowball vs Debt Avalanche',
      'Harness the mathematical power of compound interest and low-cost index funds',
      'Automate your financial savings and investment pipeline'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic arithmetic'],
    instructor: {
      name: 'Elena Rostova',
      role: 'Financial Literacy Advocate',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-pf-1',
        title: 'Financial Independence Foundations',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-pf-1',
            slug: 'the-50-30-20-budgeting-rule',
            title: '1. The 50/30/20 Budgeting Rule',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8J_Kt51897k',
            content: `Budgeting is telling your money where to go instead of wondering where it went. Allocate net income: 50% Needs (rent, utilities, groceries, basic transport), 30% Wants (dining out, hobbies, subscriptions), and 20% Financial Goals (debt payoff, emergency fund, investments).`,
            practicePrompt: 'Categorize your last month of spending into Needs, Wants, and Savings percentages.',
            quiz: {
              question: 'In the 50/30/20 budgeting rule, what do the three numbers represent?',
              options: ['Age, weight, height', '50% Needs, 30% Wants, 20% Savings & Debt Payoff', '50% Rent, 30% Food, 20% Clothes', 'Taxes, insurance, savings'],
              correctIndex: 1,
              explanation: '50/30/20 provides a balanced, flexible benchmark for cash allocation.'
            },
            resources: [{ title: '50/30/20 Budgeting Calculator Spreadsheet', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-pf-2',
            slug: 'the-emergency-fund-shield',
            title: '2. The Emergency Fund: Buying Psychological Freedom',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=V4mY2w1bZ2w',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=V4mY2w1bZ2w',
            content: `Without an emergency fund, unexpected car repairs or medical bills force you into high-interest credit card debt. Build 3 to 6 months of basic living expenses in a dedicated High-Yield Savings Account (HYSA). This money is insurance, not an investment.`,
            practicePrompt: 'Calculate your exact 3-month survival living expense number for an emergency reserve.',
            quiz: {
              question: 'Where should an emergency fund be stored for optimal safety and access?',
              options: ['In volatile cryptocurrency', 'In an insured High-Yield Savings Account (HYSA) that is liquid, safe, and earns competitive interest', 'Under a physical mattress', 'Locked in a 10-year bond'],
              correctIndex: 1,
              explanation: 'Emergency funds require liquidity and capital preservation above all else.'
            },
            resources: [{ title: 'Emergency Fund Target Calculator', url: '#', type: 'Calculator' }]
          },
          {
            id: 'l-pf-3',
            slug: 'debt-snowball-vs-avalanche',
            title: '3. Conquering Debt: Snowball vs. Avalanche',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Kz6T_wT7k7Y',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Kz6T_wT7k7Y',
            content: `High-interest credit card debt (20%+ APR) is a financial emergency. The Avalanche method pays off highest interest rate first (mathematically optimal). The Snowball method pays off smallest balance first (psychological quick wins). Pick the method you will stick to!`,
            practicePrompt: 'List all debts with balances and interest rates, and sort them using both Snowball and Avalanche rankings.',
            quiz: {
              question: 'What is the "Debt Avalanche" payoff strategy?',
              options: ['Ignoring bills until winter', 'Paying minimums on all debts while directing all extra funds to the debt with the highest interest rate to minimize total interest paid', 'Paying debts alphabetically', 'Borrowing more money'],
              correctIndex: 1,
              explanation: 'The Avalanche method mathematically minimizes total interest paid over time.'
            },
            resources: [{ title: 'Debt Payoff Comparison Sheet', url: '#', type: 'Spreadsheet' }]
          },
          {
            id: 'l-pf-4',
            slug: 'compound-interest-and-index-funds',
            title: '4. The Miracle of Compound Interest and Broad Index Funds',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `Albert Einstein called compound interest the eighth wonder of the world. Investing $250/month at 8% average return grows to over $350,000 in 30 years (with only $90,000 contributed!). Avoid stock picking; invest in low-cost total market index funds (e.g. S&P 500 / Total World) with expense ratios under 0.05%.`,
            practicePrompt: 'Use an online compound interest calculator to see how saving an extra $100/month impacts your 20-year net worth.',
            quiz: {
              question: 'Why do financial advisors recommend broad, low-cost index funds over individual stock picking for most people?',
              options: ['Index funds are illegal to sell', 'Index funds provide instant diversification across hundreds of top companies with ultra-low fees, outperforming ~90% of actively managed funds over 15+ years', 'Stock picking is guaranteed to win', 'Index funds have no risk'],
              correctIndex: 1,
              explanation: 'Broad diversification and low fees beat active stock speculation long term.'
            },
            resources: [{ title: 'Compound Interest Growth Table', url: '#', type: 'Table' }]
          },
          {
            id: 'l-pf-5',
            slug: 'automating-your-money',
            title: '5. Automating Your Wealth Pipeline',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `Willpower is finite. Set up automatic bank transfers on payday: Paycheck -> High-Yield Savings -> Investment Account -> Bills -> Whatever remains in checking is guilt-free spending money. Pay yourself first, not last!`,
            practicePrompt: 'Design an automated money-flow architecture map directing payday funds to savings and investments automatically.',
            quiz: {
              question: 'What does the financial principle "Pay Yourself First" mean?',
              options: ['Go on a luxury shopping spree on payday', 'Automatically transferring a set percentage of your income to savings and investments the moment you receive your paycheck, before spending on lifestyle', 'Refusing to pay taxes', 'Borrowing money from friends'],
              correctIndex: 1,
              explanation: 'Automating savings upfront ensures your future wealth is prioritized over impulse spending.'
            },
            resources: [{ title: 'Automated Money Flow Blueprint', url: '#', type: 'PDF' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is an "expense ratio" in index funds and mutual funds?',
        options: ['The cost of electricity', 'The annual percentage fee charged by the fund management company to administer the fund', 'The price of an iPad', 'The tax rate on dividends'],
        correctIndex: 1,
        explanation: 'Low expense ratios (under 0.10%) preserve your compounding wealth.'
      }
    ]
  },
  {
    id: 'course-prod-7',
    slug: 'speed-reading-information-retention',
    title: 'Speed Reading and Information Retention',
    description: 'Process information faster: eliminate subvocalization, expand peripheral vision fixations, master the Feynman technique for deep retention, and use active recall and spaced repetition.',
    categoryId: 'cat_writing',
    categoryName: 'Content Writing',
    categorySlug: 'content-writing',
    difficulty: 'Beginner',
    durationMinutes: 170,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Double your reading speed from 200 WPM to 400+ WPM with high comprehension',
      'Reduce internal subvocalization (silent mouth reading)',
      'Use visual pacing guides to eliminate micro-regressions and eye back-tracking',
      'Apply the Feynman Technique to verify true concept understanding',
      'Implement Active Recall and Spaced Repetition (Anki) for lifelong retention'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['None'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Cognitive Learning Scientist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-sr-1',
        title: 'Accelerated Reading & Retention',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-sr-1',
            slug: 'subvocalization-and-visual-pacing',
            title: '1. Eliminating Subvocalization and Eye Regressions',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=ZwRac_6P20I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=ZwRac_6P20I',
            content: `Most people read at speaking speed (~200 words per minute) because they pronounce every word in their head (subvocalization). The visual brain can process ideas at 600+ WPM. Use a pen or fingertip as a smooth visual pacer beneath lines to prevent eyes from jumping backwards.`,
            practicePrompt: 'Read a 500-word article using a pen tip as a smooth continuous pacer and time your Words Per Minute.',
            quiz: {
              question: 'What is "subvocalization" in reading mechanics?',
              options: ['Reading out loud into a microphone', 'The internal habit of silently pronouncing every word in your vocal tract while reading, capping speed at speaking velocity', 'Skipping words', 'Reading backwards'],
              correctIndex: 1,
              explanation: 'Subvocalization limits reading rate to human speaking cadence.'
            },
            resources: [{ title: 'WPM Baseline Speed Test & Pacer Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-sr-2',
            slug: 'peripheral-vision-and-chunking',
            title: '2. Expanding Peripheral Vision and Word Chunking',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            content: `Stop fixating on individual letters. Train your eyes to take in 3 to 4 words per fixation. Start your eye gaze two words in from the left margin and stop two words before the right margin: your peripheral vision naturally captures the bookends.`,
            practicePrompt: 'Practice reading a column of text by making only 2 eye fixations per line.',
            quiz: {
              question: 'What is "chunking" in speed reading practice?',
              options: ['Cutting a book with scissors', 'Fixating eye focus on groups of 3–4 words simultaneously rather than reading word-by-word', 'Deleting sentences', 'Reading every other page'],
              correctIndex: 1,
              explanation: 'Chunking expands reading breadth and reduces eye movements.'
            },
            resources: [{ title: 'Peripheral Expansion Drills', url: '#', type: 'DrillSheet' }]
          },
          {
            id: 'l-sr-3',
            slug: 'the-feynman-technique',
            title: '3. The Feynman Technique: Simple Explanations for True Mastery',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            content: `Nobel physicist Richard Feynman noted: "If you cannot explain something in simple terms to a 10-year-old, you do not truly understand it." Step 1: Pick a concept. Step 2: Write an explanation using zero jargon. Step 3: Identify where you get stuck. Step 4: Re-read the source until your simple explanation is watertight.`,
            practicePrompt: 'Explain how the internet or an API works to a hypothetical 10-year-old in under 100 simple words.',
            quiz: {
              question: 'Why is avoiding complex technical jargon central to the Feynman Technique?',
              options: ['Jargon is copyrighted', 'Jargon frequently masks shallow memorization; explaining in plain language forces genuine understanding of underlying mechanics', 'Jargon takes too long to type', 'Children like big words'],
              correctIndex: 1,
              explanation: 'Plain language reveals conceptual gaps that jargon disguises.'
            },
            resources: [{ title: 'Feynman Technique Worksheet', url: '#', type: 'Worksheet' }]
          },
          {
            id: 'l-sr-4',
            slug: 'active-recall-vs-passive-rereading',
            title: '4. Active Recall vs. The Illusion of Passive Re-reading',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=ZwRac_6P20I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=ZwRac_6P20I',
            content: `Re-reading and highlighting create the dangerous "Illusion of Competence": recognition is NOT recall. Active recall forces the brain to retrieve information from memory without looking (e.g. closing the book and writing a 3-bullet summary from memory). Retrieval creates strong synaptic pathways.`,
            practicePrompt: 'Read a chapter, close the page, and write down everything you remember for 3 minutes without peeking.',
            quiz: {
              question: 'Why is Active Recall scientifically proven to outperform passive highlighting and re-reading?',
              options: ['Highlighters smell bad', 'The mental effort of retrieving information from memory strengthens neural pathways and signals the brain that the knowledge is critical to store', 'Re-reading is illegal in colleges', 'Active recall is easier'],
              correctIndex: 1,
              explanation: 'Memory retrieval effort triggers neurobiological retention consolidation.'
            },
            resources: [{ title: 'Active Recall Study Protocol', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-sr-5',
            slug: 'spaced-repetition-and-the-forgetting-curve',
            title: '5. Spaced Repetition and the Ebbinghaus Forgetting Curve',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            content: `Within 48 hours of learning, humans forget up to 75% of new information unless reviewed. Spaced repetition reviews material at expanding intervals (Day 1, Day 3, Day 7, Day 21, Day 60). Using tools like Anki flattens the forgetting curve for lifetime retention.`,
            practicePrompt: 'Create 5 flashcard prompts in Anki or on note cards with questions on the front and Feynman answers on the back.',
            quiz: {
              question: 'What does the Ebbinghaus Forgetting Curve illustrate?',
              options: ['How fast computers lose data', 'The exponential rate at which newly acquired information is forgotten by the human brain over time without systematic reviews', 'How fast people run', 'The cost of books'],
              correctIndex: 1,
              explanation: 'The curve proves memory decays rapidly without spaced interval reinforcement.'
            },
            resources: [{ title: 'Spaced Repetition Schedule Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is the optimal moment to review a flashcard in a spaced repetition algorithm?',
        options: ['Immediately 1 second later', 'Right when you are on the verge of forgetting it, which maximizes cognitive retrieval effort', 'Only once per year', 'Never review'],
        correctIndex: 1,
        explanation: 'Reviewing near the boundary of forgetting triggers maximum synaptic strengthening.'
      }
    ]
  },
  {
    id: 'course-prod-8',
    slug: 'habit-building-focus-mastery',
    title: 'Habit Building and Focus Mastery',
    description: 'Transform your daily routines: the habit loop (Cue, Craving, Response, Reward), environmental design, habit stacking, dopamine detox protocols, and conquering digital distraction.',
    categoryId: 'cat_career',
    categoryName: 'Career Development',
    categorySlug: 'career-development',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Deconstruct the 4-part habit loop: Cue, Craving, Response, and Reward',
      'Design environments where good habits are frictionless and bad habits are difficult',
      'Implement Habit Stacking: tying new behaviors to established daily anchors',
      'Execute a 24-hour dopamine reset to restore cognitive attention span',
      'Protect unbreakable daily streaks using the "Never Miss Twice" rule'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['None'],
    instructor: {
      name: 'Maya Lin',
      role: 'Behavioral Habit Coach',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-hb-1',
        title: 'Behavioral Architecture & Attention',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-hb-1',
            slug: 'the-4-part-habit-loop',
            title: '1. The Habit Loop: Cue, Craving, Response, and Reward',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=AdKUJxjn-R8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=AdKUJxjn-R8',
            content: `Habits are mental shortcuts solved by evolution. The Cue triggers a prediction. The Craving is the desire to change your internal state. The Response is the actual behavior you perform. The Reward satisfies the craving. To build a habit: make it Obvious, Attractive, Easy, and Satisfying.`,
            practicePrompt: 'Break down an existing automatic habit (like checking your phone upon waking) into the 4 steps.',
            quiz: {
              question: 'According to behavioral research, what are the four sequential stages of a habit loop?',
              options: ['Idea, Action, Regret, Sleep', 'Cue, Craving, Response, Reward', 'Start, Middle, Stop, Repeat', 'Input, Process, Output, Store'],
              correctIndex: 1,
              explanation: 'Every habit cycle moves from external/internal cue to craving, behavioral response, and reward.'
            },
            resources: [{ title: 'The 4 Laws of Behavior Change Cheatsheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-hb-2',
            slug: 'environment-design-over-willpower',
            title: '2. Environment Design: Motivation is Overrated',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            content: `Disciplined people do not have superhuman willpower; they design environments with fewer temptations. Want to read more? Put a book directly on your pillow every morning. Want to stop scrolling phone in bed? Charge your phone in the kitchen overnight. Reduce friction for good habits; increase friction for bad habits.`,
            practicePrompt: 'Increase friction on 1 bad habit today (e.g. log out of social apps, put snacks in high cabinets).',
            quiz: {
              question: 'Why is environmental redesign more effective than relying on willpower?',
              options: ['Willpower is free', 'Willpower is a depleting cognitive resource that exhausts under stress, whereas a well-designed physical environment automates good decisions with zero mental friction', 'Furniture is expensive', 'Willpower is an illusion'],
              correctIndex: 1,
              explanation: 'Designing low-friction environments ensures success even when motivation is low.'
            },
            resources: [{ title: 'Environment Design Audit Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-hb-3',
            slug: 'habit-stacking-and-the-2-minute-rule',
            title: '3. Habit Stacking and the 2-Minute Rule',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=W3eAKnflgZ8',
            content: `Tie new habits to existing daily anchors: "After I [CURRENT HABIT], I will [NEW HABIT]." Example: "After I pour my morning coffee, I will open Ashiskillrise and do 1 lesson." Apply the 2-Minute Rule: scale any new habit down so it takes under 120 seconds to begin.`,
            practicePrompt: 'Write down 3 habit stacking formulas connecting a learning routine to an existing daily anchor.',
            quiz: {
              question: 'What is the formula for "Habit Stacking"?',
              options: ['Stacking books on a desk', '"After [Current Habit], I will [New Habit]"', 'Doing 10 habits simultaneously', 'Waiting until Saturday to do everything'],
              correctIndex: 1,
              explanation: 'Leveraging established neural pathways makes adopting new behaviors effortless.'
            },
            resources: [{ title: 'Habit Stacking Planner', url: '#', type: 'Template' }]
          },
          {
            id: 'l-hb-4',
            slug: 'digital-dopamine-reset',
            title: '4. Digital Dopamine Reset and reclaiming Deep Focus',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=AdKUJxjn-R8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=AdKUJxjn-R8',
            content: `Algorithms hijack your dopamine system with unpredictable rewards (variable ratio schedules like slot machines). Restore sensitivity: turn your phone screen to Grayscale (Color Filters -> Grayscale in accessibility settings), remove all notification badges, and schedule 90-minute blocks of uninterrupted offline work.`,
            practicePrompt: 'Switch your smartphone display to Grayscale for 24 hours and observe how much less appealing endless scrolling feels.',
            quiz: {
              question: 'Why does setting a smartphone display to Grayscale drastically decrease compulsive phone checking?',
              options: ['The phone breaks', 'It strips away the high-saturation red and vibrant app icon cues that trigger dopamine spikes in the brain\'s reward center', 'It saves 90% battery', 'It shuts off the internet'],
              correctIndex: 1,
              explanation: 'Neutralizing bright color triggers dissolves unconscious digital compulsions.'
            },
            resources: [{ title: 'Phone Detox & Focus Setup Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-hb-5',
            slug: 'the-never-miss-twice-rule',
            title: '5. Overcoming Slumps: The "Never Miss Twice" Rule',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=iONDebHX9qk',
            content: `Missing a habit once is an accident; missing twice is the start of a new, destructive habit. Perfection is not required for transformation; relentless recovery is. If you miss yesterday’s learning session due to an emergency, do even just 3 minutes today to preserve your streak identity.`,
            practicePrompt: 'Commit to the Never Miss Twice rule and set up a backup 2-minute version of your daily learning habit.',
            quiz: {
              question: 'What is the core psychological philosophy behind the "Never Miss Twice" rule?',
              options: ['You must never sleep', 'Missing once is an isolated slip, but recovering immediately prevents the emergence of an opposing negative habit pattern', 'You get penalized points', 'You must restart from zero'],
              correctIndex: 1,
              explanation: 'Immediate recovery defends your core identity and prevents habit decay.'
            },
            resources: [{ title: 'Streak Preservation & Resilience Matrix', url: '#', type: 'Matrix' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What type of reinforcement schedule powers social media feeds and slot machines?',
        options: ['Fixed schedule', 'Variable ratio schedule (unpredictable rewards that trigger maximum dopamine compulsion)', 'Annual schedule', 'No schedule'],
        correctIndex: 1,
        explanation: 'Unpredictable intermittent rewards create intense behavioral compulsions.'
      }
    ]
  }
];
