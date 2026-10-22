import { Course } from './types';

export const AI_TECH_COURSES: Course[] = [
  {
    id: 'course-ai-1',
    slug: 'ai-productivity-tools',
    title: 'AI Productivity Tools',
    description: 'Learn how to streamline research, automate repetitive spreadsheet tasks, summarize lengthy documents, and speed up communication using modern AI productivity suites.',
    categoryId: 'cat_ai',
    categoryName: 'Artificial Intelligence',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Evaluate AI tools across writing, research, spreadsheets, and design',
      'Synthesize 50-page reports into actionable executive briefs',
      'Generate formula calculations and data extraction scripts with AI',
      'Automate email triage and draft professional client responses',
      'Integrate privacy guardrails to protect confidential business information',
      'Design a personalized multi-tool productivity stack'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic internet and computer literacy'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Applied AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-aip-1',
        title: 'Workplace AI Integration',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-aip-1',
            slug: 'evaluating-ai-toolsets',
            title: '1. Mapping Your Workflow to Modern AI Capabilities',
            durationMinutes: 25,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=jC4v5AS4RIM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Identify high-friction cognitive bottlenecks in your day: drafting emails, transcribing meetings, summarizing PDF reports, and formulating spreadsheet logic. Learn the difference between generative chat, document grounding tools, and browser automation extensions.`,
            practicePrompt: 'Audit your typical workday and list the top 3 repetitive text or data tasks that consume over 30 minutes daily.',
            quiz: {
              question: 'Which type of task is best suited for generative AI assistance?',
              options: ['Executing audited financial transactions', 'Drafting initial outlines, summarizing long notes, and formatting messy data', 'Making final strategic executive hires', 'Signing legal documents'],
              correctIndex: 1,
              explanation: 'AI excels at synthesis, drafting, and transforming unstructured text.'
            },
            resources: [{ title: 'AI Productivity Audit Template', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-aip-2',
            slug: 'document-synthesis-research',
            title: '2. Research Synthesis and Long Document Analysis',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=5p248yoa3oE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `Learn how document-grounded AI tools extract key findings, dates, and conclusions from dense PDFs without reading cover-to-cover, while requiring verbatim citations to verify authenticity.`,
            practicePrompt: 'Upload a 10-page public report into a grounded document AI and extract 5 key statistical findings with page numbers.',
            quiz: {
              question: 'Why is document grounding crucial when analyzing legal or technical reports?',
              options: ['It makes reading slower', 'It constrains the AI to answer exclusively from the provided document, drastically reducing hallucinations', 'It deletes the PDF', 'It encrypts the browser'],
              correctIndex: 1,
              explanation: 'Grounding anchors answers in verified source pages.'
            },
            resources: [{ title: 'Document Synthesis Framework', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-aip-3',
            slug: 'spreadsheet-formula-automation',
            title: '3. Automating Spreadsheets and Data Cleaning with AI',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `Prompt AI to generate complex XLOOKUP, REGEXEXTRACT, and nested IF formulas by explaining your raw columns and desired outcome in plain English.`,
            practicePrompt: 'Prompt an AI to write a formula that extracts domain names from a column of 200 mixed email addresses.',
            quiz: {
              question: 'How should you describe your spreadsheet data to an AI to get the most accurate formula?',
              options: ['Say "make a formula for me"', 'Provide sample column headers, 2 rows of sample input data, and the exact expected output format', 'Paste 10,000 rows at once', 'Use vague terms'],
              correctIndex: 1,
              explanation: 'Concrete input-output examples give the model exact schema context.'
            },
            resources: [{ title: 'Spreadsheet Prompt Swipe File', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-aip-4',
            slug: 'email-and-correspondence-triage',
            title: '4. Communication Triage and Draft Polishing',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=tk5aI8uY-H0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Use AI as a thought partner to soften defensive language, tighten wordy correspondence, and convert messy meeting voice notes into clean agendas with assignees.`,
            practicePrompt: 'Rewrite an emotional, frustrated email draft using an AI persona constraint for constructive, calm collaboration.',
            quiz: {
              question: 'What is a positive side effect of using AI to review critical business emails before sending?',
              options: ['It makes you sound robotic', 'It helps remove emotional bias and ensures clarity and professional tone', 'It automatically CCs everyone', 'It sends emails without reading'],
              correctIndex: 1,
              explanation: 'AI acts as an objective mirror to polish communication tone.'
            },
            resources: [{ title: 'Executive Communication Templates', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-aip-5',
            slug: 'privacy-guardrails-data-safety',
            title: '5. Enterprise Data Privacy and Protecting Sensitive Information',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2ePf9rue1Ao',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=fKkwjN2kP7s',
            content: `Understand the terms of service of public vs enterprise AI tools. Never paste confidential customer PII, unreleased financial projections, passwords, or intellectual property into public consumer AI models that train on inputs.`,
            practicePrompt: 'Create a company-wide 5-point data sanitization checklist for employees using AI tools.',
            quiz: {
              question: 'What is a primary danger of pasting proprietary company secrets into standard consumer AI models?',
              options: ['The computer freezes', 'The data may be retained and used to train future public foundation models', 'It changes your desktop background', 'It deletes your account'],
              correctIndex: 1,
              explanation: 'Public consumer models typically retain prompt data unless opt-out or enterprise tiers are active.'
            },
            resources: [{ title: 'AI Data Privacy Guide', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-aip-6',
            slug: 'building-personal-ai-stack',
            title: '6. Building Your Repeatable Daily AI Productivity Stack',
            durationMinutes: 30,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=5p248yoa3oE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `Tie your tools together into a frictionless morning ritual: Calendar review -> Task decomposition -> Focus drafting -> Async status summary.`,
            practicePrompt: 'Document your personal AI productivity stack outlining tool, task, and time saved per week.',
            quiz: {
              question: 'What is the ultimate goal of adopting AI productivity tools?',
              options: ['To stop thinking entirely', 'To eliminate low-value friction and free up cognitive focus for deep, strategic human work', 'To work 100 hours a week', 'To replace all coworkers'],
              correctIndex: 1,
              explanation: 'AI augments human capability by automating routine friction.'
            },
            resources: [{ title: 'Productivity Stack Template', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is the primary role of an AI productivity assistant?',
        options: ['Autonomous replacement for human decisions', 'Cognitive augment for drafting, summarizing, and structuring information', 'A physical robot', 'An internet router'],
        correctIndex: 1,
        explanation: 'AI acts as an intelligent assistant augmenting human thought.'
      },
      {
        question: 'Which technique ensures an AI answers questions strictly from your provided reference text?',
        options: ['Context grounding (retrieval augmented generation)', 'Typing in all caps', 'Using multiple emojis', 'Asking twice'],
        correctIndex: 0,
        explanation: 'Context grounding confines the model to the provided documentation.'
      },
      {
        question: 'When using AI to generate spreadsheet formulas, what should you always do before applying it to live production sheets?',
        options: ['Delete the sheet', 'Test the formula on a small sample data range to verify calculation accuracy', 'Assume it is 100% correct without checking', 'Email it to Google'],
        correctIndex: 1,
        explanation: 'Human verification on test datasets prevents silent data corruption.'
      },
      {
        question: 'What is "context window" in an AI language model?',
        options: ['The computer monitor size', 'The maximum amount of tokens (text) the model can read and remember in a single interaction', 'The browser tab', 'The internet speed'],
        correctIndex: 1,
        explanation: 'The context window defines the memory capacity of the prompt exchange.'
      },
      {
        question: 'Which file format is standard for exporting tabular data between tools and AI models?',
        options: ['EXE', 'CSV or JSON', 'MP3', 'BMP'],
        correctIndex: 1,
        explanation: 'CSV and JSON are universal plaintext formats for structured records.'
      },
      {
        question: 'What is an AI "hallucination"?',
        options: ['When the computer screen flickers', 'When an AI outputs convincing, grammatically fluent statements that are factually false', 'When the internet disconnects', 'A software update'],
        correctIndex: 1,
        explanation: 'Hallucinations are confident-sounding factual inaccuracies generated by LLMs.'
      },
      {
        question: 'Why is zero-shot prompting often less accurate than few-shot prompting?',
        options: ['Zero-shot takes too long', 'Few-shot provides explicit input-output examples that anchor expected patterns and formats', 'Zero-shot is illegal', 'Few-shot uses more electricity'],
        correctIndex: 1,
        explanation: 'Few-shot examples guide the model directly toward desired output schemas.'
      },
      {
        question: 'How can you protect confidential customer details when using AI?',
        options: ['Anonymize or replace real names and sensitive identifiers with pseudonyms before pasting', 'Paste everything openly', 'Use bold fonts', 'Ask the AI not to read it'],
        correctIndex: 0,
        explanation: 'Anonymization strips confidential PII from prompt payloads.'
      },
      {
        question: 'What does OCR (Optical Character Recognition) do in AI productivity apps?',
        options: ['Plays audio files', 'Extracts machine-readable text from scanned images and PDF pages', 'Draws paintings', 'Deletes old photos'],
        correctIndex: 1,
        explanation: 'OCR converts image pixels into editable text strings.'
      },
      {
        question: 'Which habit ensures high-quality AI-assisted written output?',
        options: ['Instant copy-pasting without reading', 'Human-in-the-loop editing for tone, factuality, and voice consistency', 'Using the shortest prompt possible', 'Never editing'],
        correctIndex: 1,
        explanation: 'Human review guarantees accuracy and personal voice.'
      }
    ],
    finalProject: {
      title: 'Weekly Automated Workflow Blueprint',
      brief: 'Design and document an integrated 3-stage AI productivity workflow for your profession. Include exact prompt templates, input sanitization rules, and a before/after time audit demonstrating at least 2 hours saved per week.',
      requirements: [
        'Documented 3-part workflow (Research -> Drafting -> Review)',
        'Three fully tested, repeatable prompt architectures with constraints',
        'Data privacy checklist for handling proprietary information'
      ]
    }
  },
  {
    id: 'course-ai-2',
    slug: 'prompt-engineering-fundamentals',
    title: 'Prompt Engineering Fundamentals',
    description: 'Learn the science of prompt design, system personas, context framing, few-shot examples, chain-of-thought reasoning, and negative constraints for deterministic AI output.',
    categoryId: 'cat_ai',
    categoryName: 'Artificial Intelligence',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Beginner',
    durationMinutes: 210,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master the 5 core elements of effective prompt architecture',
      'Leverage Few-Shot learning to enforce strict JSON and table output schemas',
      'Implement Chain-of-Thought (CoT) reasoning for complex multi-step problems',
      'Apply negative constraints to eliminate repetitive cliches and buzzwords',
      'Calibrate temperature and top-p sampling parameters',
      'Build reusable prompt templates for real-world business scenarios'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic familiarity with generative AI chat interfaces'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Applied AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-pe-1',
        title: 'Prompt Architecture',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-pe-1',
            slug: 'the-five-elements-of-prompts',
            title: '1. The 5 Core Elements of Robust Prompts',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=jC4v5AS4RIM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `A high-performance prompt consists of: Role/Persona, Objective Task, Contextual Background, Format Specifications, and Explicit Constraints.\n\n\`\`\`text\n[ROLE]: Senior Copywriter\n[TASK]: Write 3 email subject lines\n[CONTEXT]: Announcing a free digital skills course for remote freelancers\n[FORMAT]: Numbered list, under 8 words each\n[CONSTRAINTS]: No clickbait, no exclamation marks, no buzzwords like 'revolutionary'\n\`\`\``,
            practicePrompt: 'Write a prompt using all 5 elements to generate a 100-word product description for ergonomic keyboard.',
            quiz: {
              question: 'Which element is most important for preventing generic or bloated AI responses?',
              options: ['Writing in all capitals', 'Explicit constraints and negative rules defining what NOT to do', 'Asking nicely', 'Adding 10 exclamation marks'],
              correctIndex: 1,
              explanation: 'Constraints narrow the probability distribution away from generic cliches.'
            },
            resources: [{ title: 'Prompt Structure Architecture Card', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-pe-2',
            slug: 'few-shot-prompting',
            title: '2. Few-Shot In-Context Learning',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=_ZvnD73YTgk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Providing 2-3 concrete input-output examples directly inside the prompt teaches the model the exact tone, syntax, and schema you expect.\n\n\`\`\`text\nInput: "The package was delayed and arrived soaking wet."\nSentiment: Negative | Category: Logistics | Severity: High\n\nInput: "Customer support resolved my billing question within 5 minutes."\nSentiment: Positive | Category: Support | Severity: Low\n\nInput: "Website showed 404 error when clicking pricing."\nSentiment: \n\`\`\``,
            practicePrompt: 'Design a 2-shot prompt that classifies incoming student support tickets into Category, Urgency, and Recommended Action.',
            quiz: {
              question: 'Why is few-shot prompting more deterministic than zero-shot prompting?',
              options: ['It uses a faster server', 'It shows the model concrete pattern demonstrations to follow', 'It requires no tokens', 'It only works with numbers'],
              correctIndex: 1,
              explanation: 'In-context examples dramatically reduce pattern ambiguity for the model.'
            },
            resources: [{ title: 'Few-Shot Classification Patterns', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-pe-3',
            slug: 'chain-of-thought-reasoning',
            title: '3. Chain-of-Thought (CoT) Prompting',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=b-Q_1k97aD0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `Instructing an AI to "think step by step" or decompose a problem into explicit intermediate reasoning steps forces it to calculate dependencies before stating a conclusion, drastically reducing logic errors.`,
            practicePrompt: 'Write a chain-of-thought prompt that breaks down a complex business pricing strategy calculation step-by-step.',
            quiz: {
              question: 'What does "Let\'s think step by step" accomplish in LLM reasoning?',
              options: ['Slows down internet connection', 'Allocates more tokens for intermediate reasoning before predicting the final conclusion', 'Deletes previous conversation history', 'Translates into French'],
              correctIndex: 1,
              explanation: 'Intermediate tokens allow the model to build contextual foundations for complex answers.'
            },
            resources: [{ title: 'Chain-of-Thought Research Summary', url: '#', type: 'Paper' }]
          },
          {
            id: 'l-pe-4',
            slug: 'delimiter-techniques-markdown',
            title: '4. Delimiters, Markdown Tags, and XML Enclosures',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=5p248yoa3oE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Use clear delimiters like triple quotes (\`\"\"\"\`), XML tags (\`<document>...</document>\`), or Markdown headers to isolate user data from instructions, preventing prompt injection.`,
            practicePrompt: 'Structure a prompt enclosing raw customer review text inside <feedback> tags and asking for 3 action points.',
            quiz: {
              question: 'Why are delimiters like XML tags or triple quotes recommended in production prompts?',
              options: ['They make text colorful', 'They cleanly separate instructions from untrusted user data, preventing prompt injection attacks', 'They compress files', 'They are required by HTML'],
              correctIndex: 1,
              explanation: 'Delimiters delineate boundaries between instructions and data.'
            },
            resources: [{ title: 'Delimiter Best Practices', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-pe-5',
            slug: 'temperature-and-sampling',
            title: '5. Calibrating Temperature and Sampling Parameters',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=tk5aI8uY-H0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=fKkwjN2kP7s',
            content: `Understand sampling hyperparameters:\n- Temperature 0.0 - 0.2: Deterministic, factual, analytical tasks (coding, SQL, classification).\n- Temperature 0.7 - 1.0: Creative brainstorming, fiction, diverse headline generation.`,
            practicePrompt: 'Determine the optimal temperature setting for: A) Legal contract extraction, and B) Fantasy novel brainstorming.',
            quiz: {
              question: 'Which temperature setting is best for extracting structured dates from contracts?',
              options: ['0.0 (near-deterministic)', '0.9 (high randomness)', '1.5 (extreme variation)', 'Temperature does not matter'],
              correctIndex: 0,
              explanation: 'Lower temperatures minimize probabilistic variance for factual extraction.'
            },
            resources: [{ title: 'Model Hyperparameter Cheat Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-pe-6',
            slug: 'evaluating-and-iterating-prompts',
            title: '6. Prompt Evaluation, Benchmarking, and Iteration',
            durationMinutes: 35,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=jC4v5AS4RIM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `Treat prompts as code. Build test datasets of 10-20 diverse inputs, run automated sanity checks on edge cases, and measure failure rates before deploying to users.`,
            practicePrompt: 'Assemble a 5-item test suite with tricky edge cases to test a customer support classification prompt.',
            quiz: {
              question: 'What is a "prompt regression"?',
              options: ['When editing a prompt to fix one edge case inadvertently breaks performance on previously working cases', 'When the prompt deletes files', 'When the prompt is too short', 'A hardware failure'],
              correctIndex: 0,
              explanation: 'Regressions happen when updates compromise previous test pass rates.'
            },
            resources: [{ title: 'Prompt Testing Matrix', url: '#', type: 'Spreadsheet' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is prompt injection?',
        options: ['Injecting vaccines into computers', 'A vulnerability where untrusted user input overrides the original system instructions of an AI model', 'Speeding up internet', 'A database query'],
        correctIndex: 1,
        explanation: 'Prompt injection tricks an LLM into ignoring its original instructions.'
      },
      {
        question: 'Which prompt instruction best enforces pure JSON output without markdown wrapper backticks?',
        options: ['Give me JSON', 'Respond ONLY with a valid, parseable JSON object. Do not include markdown code blocks, backticks, or any introductory or concluding text.', 'JSON please', 'Make it technical'],
        correctIndex: 1,
        explanation: 'Explicit negative constraints against backticks and prose guarantee parseable JSON.'
      },
      {
        question: 'What is a "system message" or "developer instruction"?',
        options: ['An operating system error', 'A top-level instruction setting the enduring persona, constraints, and behavior guidelines for the entire conversation', 'A user text message', 'A router command'],
        correctIndex: 1,
        explanation: 'System instructions define persistent boundary rules for the AI assistant.'
      },
      {
        question: 'Why should you avoid open-ended prompts like "Write about freelancing"?',
        options: ['AI cannot write about freelancing', 'Without constraints on audience, length, tone, and angle, the model produces generic, low-value text', 'It costs more money', 'It crashes the server'],
        correctIndex: 1,
        explanation: 'Under-specified prompts default to average, generic language.'
      },
      {
        question: 'What does "hallucination grounding" require in a prompt?',
        options: ['Instructing the model to cite exact quotes from provided text and state "Information not provided" if missing', 'Using long paragraphs', 'Typing in Spanish', 'Using emojis'],
        correctIndex: 0,
        explanation: 'Explicit fallback instructions ("state not found if absent") prevent fabrication.'
      },
      {
        question: 'Which formatting instruction guarantees that a model output is structured in rows and columns?',
        options: ['Format as a Markdown table with column headers: Category | Description | Priority', 'Make a nice list', 'Do it in order', 'Draw a picture'],
        correctIndex: 0,
        explanation: 'Explicit Markdown table column specifications yield structured grid tables.'
      },
      {
        question: 'What is the role of role-prompting (e.g. "Act as a senior cybersecurity auditor")?',
        options: ['It activates domain-specific vocabulary and stylistic patterns associated with that persona in model weights', 'It grants the AI actual security clearance', 'It is purely cosmetic', 'It bypasses passwords'],
        correctIndex: 0,
        explanation: 'Persona framing conditions the model to draw on domain-relevant lexical sub-spaces.'
      },
      {
        question: 'How do negative constraints improve writing quality?',
        options: ['They make the model angry', 'They explicitly forbid overused AI filler words like "delve", "tapestry", "game-changer", and "in summary"', 'They reduce accuracy', 'They add errors'],
        correctIndex: 1,
        explanation: 'Banning specific cliches forces the model to choose direct, human vocabulary.'
      },
      {
        question: 'What is "self-consistency" prompting?',
        options: ['Asking the model to repeat itself', 'Sampling multiple reasoning paths at temperature > 0 and selecting the majority consensus answer', 'Writing with one hand', 'Using one font'],
        correctIndex: 1,
        explanation: 'Self-consistency samples multiple reasoning chains to find the most robust outcome.'
      },
      {
        question: 'Why should complex multi-step workflows be split into a pipeline of chained prompts rather than one giant mega-prompt?',
        options: ['Mega-prompts often degrade instruction-following on nuanced intermediate steps; chained prompts allow verification at each stage', 'It is faster to type', 'LLMs only accept 10 words', 'Computers overheat'],
        correctIndex: 0,
        explanation: 'Decomposing complex tasks into serial prompts isolates failures and improves quality.'
      }
    ],
    finalProject: {
      title: 'Production Prompt Suite for Client Intake',
      brief: 'Build a production-ready 3-stage prompt pipeline for an online agency. Stage 1: Categorize raw email inquiry. Stage 2: Extract project scope and timeline into valid JSON. Stage 3: Generate a customized 3-milestone proposal response.',
      requirements: [
        'Strict negative constraints against hallucinations and buzzwords',
        'Demonstrated 2-shot formatting examples in each prompt',
        'Valid parseable JSON schema in Stage 2',
        'Tested with 3 distinct client scenarios'
      ]
    }
  },
  {
    id: 'course-ai-3',
    slug: 'responsible-ai-fact-checking',
    title: 'Responsible AI and Fact Checking',
    description: 'Learn how to detect AI hallucinations, verify sources, evaluate model bias, inspect data provenance, and establish ethical, accountable AI practices.',
    categoryId: 'cat_ai',
    categoryName: 'Artificial Intelligence',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand why probabilistic language models hallucinate plausible untruths',
      'Apply lateral reading and primary source verification protocols',
      'Identify training data bias and demographic skews in model outputs',
      'Verify citations, academic references, and statistical claims',
      'Implement transparency and attribution disclosure frameworks',
      'Conduct an ethical AI risk assessment'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic internet familiarity'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Applied AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-rai-1',
        title: 'Verification & Ethics',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-rai-1',
            slug: 'mechanics-of-hallucination',
            title: '1. Why Large Language Models Hallucinate',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=tk5aI8uY-H0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=fKkwjN2kP7s',
            content: `LLMs are statistical sequence predictors trained to generate fluent, probable tokens—not truth engines. A model has no intrinsic concept of reality; it predicts what words traditionally follow in similar contexts.`,
            practicePrompt: 'Ask an AI for historical citations on a niche topic and check if the author, journal, and DOI actually exist.',
            quiz: {
              question: 'Why do AI models invent non-existent book titles or legal cases?',
              options: ['The computer has a virus', 'The model mimics the syntactic structure of real citations based on learned probabilistic patterns without live database grounding', 'It is trying to deceive you', 'The file was corrupted'],
              correctIndex: 1,
              explanation: 'LLMs generate patterns that look like real citations without verifying real-world existence.'
            },
            resources: [{ title: 'Understanding Hallucinations Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-rai-2',
            slug: 'lateral-reading-verification',
            title: '2. The Lateral Reading Verification Technique',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=2ePf9rue1Ao',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Professional fact-checkers do not stay on one page; they read laterally—opening new browser tabs to verify the publisher, the author, and consensus across independent external sources.`,
            practicePrompt: 'Take a statistical claim generated by an AI and verify it across at least two independent research institutions.',
            quiz: {
              question: 'What is "lateral reading" in digital fact-checking?',
              options: ['Reading sideways on a monitor', 'Opening multiple browser tabs to research the source and claim externally before believing it', 'Reading backwards', 'Skimming only the first paragraph'],
              correctIndex: 1,
              explanation: 'Lateral reading investigates authority and consensus externally.'
            },
            resources: [{ title: 'Stanford Lateral Reading Method', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-rai-3',
            slug: 'algorithmic-bias-and-fairness',
            title: '3. Identifying Algorithmic Bias and Representational Harms',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=5p248yoa3oE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `Models inherit the historical prejudices, demographic skews, and cultural blind spots embedded in internet training corpora. Learn how to test prompts for gender, racial, and occupational stereotypes.`,
            practicePrompt: 'Test a role-playing prompt for subtle occupational stereotypes and reformulate it for balanced inclusivity.',
            quiz: {
              question: 'Where does algorithmic bias primarily originate in AI foundation models?',
              options: ['In the computer screen pixels', 'In the historical datasets, human annotation feedback, and societal biases present in training data', 'In the programming language syntax', 'In the internet router'],
              correctIndex: 1,
              explanation: 'Models reflect the biases of the human data they were trained on.'
            },
            resources: [{ title: 'AI Fairness Principles Checklist', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-rai-4',
            slug: 'verifying-numbers-and-citations',
            title: '4. Verifying Statistics, Math, and Citation DOIs',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=q6kJ71tEYqM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `Never rely on language models for complex math or statistical precision without code execution or external calculation. Always look up DOIs on official registries like Crossref or Google Scholar.`,
            practicePrompt: 'Verify an AI-generated academic DOI link using doi.org.',
            quiz: {
              question: 'What registry can you use to instantly verify if a digital object identifier (DOI) is legitimate?',
              options: ['doi.org / Crossref', 'Wikipedia', 'Twitter', 'YouTube'],
              correctIndex: 0,
              explanation: 'doi.org resolves verified academic publications worldwide.'
            },
            resources: [{ title: 'Citation Verification Tool', url: 'https://doi.org', type: 'Tool' }]
          },
          {
            id: 'l-rai-5',
            slug: 'transparency-and-attribution',
            title: '5. Transparency, Disclosure, and Intellectual Property',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=_ZvnD73YTgk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Y8kI0R1n8xM',
            content: `Ethical professionals disclose AI usage when submitting articles, code, or design work. Understand copyright policies around synthetic content and avoid plagiarizing existing creators.`,
            practicePrompt: 'Write a standard transparent AI disclosure statement to include in an academic or client deliverable.',
            quiz: {
              question: 'Why is transparent AI disclosure important in professional deliverables?',
              options: ['It lowers your grade', 'It maintains client trust, ethical integrity, and complies with legal accountability standards', 'It is required to print documents', 'It deletes the file'],
              correctIndex: 1,
              explanation: 'Disclosure fosters accountability and client confidence.'
            },
            resources: [{ title: 'AI Disclosure Templates', url: '#', type: 'Template' }]
          },
          {
            id: 'l-rai-6',
            slug: 'ethical-risk-assessments',
            title: '6. Conducting an Ethical AI Risk Assessment',
            durationMinutes: 30,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=b-Q_1k97aD0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=fKkwjN2kP7s',
            content: `Before deploying an AI feature to end users, audit for safety: privacy leakage, harmful output risk, failure fallback protocols, and human-in-the-loop oversight points.`,
            practicePrompt: 'Complete a 1-page risk assessment for an AI chatbot handling student mental health queries.',
            quiz: {
              question: 'What is a "human-in-the-loop" safeguard?',
              options: ['A human standing in a circle', 'A mandatory review checkpoint where a qualified human verifies an AI recommendation before action is taken', 'A computer fan', 'A password check'],
              correctIndex: 1,
              explanation: 'Human-in-the-loop ensures human accountability on high-stakes actions.'
            },
            resources: [{ title: 'Risk Assessment Framework', url: '#', type: 'PDF' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'Why are LLMs considered "stochastic parrots"?',
        options: ['They talk like birds', 'They mimic linguistic form without true underlying semantic understanding or direct perception of reality', 'They only work in zoos', 'They eat crackers'],
        correctIndex: 1,
        explanation: 'The term highlights pattern replication without authentic understanding.'
      },
      {
        question: 'What should you do if an AI model provides a surprising statistical claim with no source?',
        options: ['Believe it immediately', 'Verify the claim using authoritative primary research databases before sharing or relying on it', 'Post it on social media', 'Ignore facts'],
        correctIndex: 1,
        explanation: 'Unverified statistical assertions must always be checked at the primary source.'
      },
      {
        question: 'What is synthetic data?',
        options: ['Plastic memory chips', 'Data artificially generated by computer programs or AI models rather than collected from real-world events', 'Deleted data', 'Encrypted text'],
        correctIndex: 1,
        explanation: 'Synthetic data is computer-generated information.'
      },
      {
        question: 'How can you verify that a quote attributed to a historical figure is authentic?',
        options: ['Check historical archives, speeches, and verified memoirs rather than relying on AI memory', 'Ask the AI again', 'Assume quotes are always true', 'Change the font'],
        correctIndex: 0,
        explanation: 'Historical archives confirm authentic attribution.'
      },
      {
        question: 'What is a "deepfake"?',
        options: ['A deep ocean trench', 'Synthetic media (audio, video, image) created or manipulated using AI to depict individuals saying or doing things they never did', 'A fast computer', 'A video game'],
        correctIndex: 1,
        explanation: 'Deepfakes use AI synthesis to manipulate voice and likeness.'
      },
      {
        question: 'What is watermarking in generative media?',
        options: ['Adding water to computers', 'Embedding cryptographic metadata or imperceptible statistical patterns into AI-generated media to identify provenance', 'Spilling tea', 'Drawing waves'],
        correctIndex: 1,
        explanation: 'Watermarking verifies whether content originated from an AI model.'
      },
      {
        question: 'What does RLHF stand for in AI model development?',
        options: ['Reinforcement Learning from Human Feedback', 'Real Language High Frequency', 'Rapid Learning Hardware Format', 'Red Line Hyper Flow'],
        correctIndex: 0,
        explanation: 'RLHF aligns models with human preferences using human evaluators.'
      },
      {
        question: 'Why must medical, financial, and legal AI outputs always be reviewed by certified human experts?',
        options: ['AI is 100% accurate', 'Errors in high-stakes domains can cause catastrophic real-world harm, liability, or loss of life', 'Computers are too fast', 'Experts need exercise'],
        correctIndex: 1,
        explanation: 'High-stakes decisions carry legal, ethical, and safety consequences.'
      },
      {
        question: 'What is copyright status for works generated entirely by AI without human creative input in many jurisdictions?',
        options: ['Automatically copyrighted by the AI', 'Generally ineligible for copyright protection due to absence of human authorship', 'Owned by Google', 'Owned by the power company'],
        correctIndex: 1,
        explanation: 'US and international copyright offices require human authorship for copyright.'
      },
      {
        question: 'What is the most effective attitude when working with generative AI outputs?',
        options: ['Unquestioning faith', 'Rigorous constructive skepticism paired with active source verification', 'Total refusal to use modern tools', 'Apathy'],
        correctIndex: 1,
        explanation: 'Constructive skepticism leverages AI speed while guaranteeing factual accuracy.'
      }
    ],
    finalProject: {
      title: 'Fact-Checking Investigation & Source Audit',
      brief: 'Take a generated 500-word article on a controversial scientific or historical topic. Fact-check every assertion, statistic, and quote. Annotate each claim with primary source citations or classify it as a hallucination, producing a polished, verified version.',
      requirements: [
        'Detailed line-by-line verification table with primary source URLs',
        'Identification of at least two subtle hallucinations or overgeneralizations',
        'Ethical attribution and disclosure statement'
      ]
    }
  },
  {
    id: 'course-ai-4',
    slug: 'intro-machine-learning',
    title: 'Introduction to Machine Learning',
    description: 'Learn the principles of supervised, unsupervised, and reinforcement learning, model evaluation metrics, regression, classification, and neural network foundations.',
    categoryId: 'cat_ai',
    categoryName: 'Artificial Intelligence',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Intermediate',
    durationMinutes: 240,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Distinguish between Supervised, Unsupervised, and Reinforcement Learning',
      'Understand features, labels, training sets, and test set splits',
      'Implement Linear Regression and Logistic Regression conceptually',
      'Evaluate models using Precision, Recall, F1-Score, and ROC-AUC',
      'Recognize Overfitting, Underfitting, and regularization techniques',
      'Understand how deep neural networks process features in layers'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic math and programming familiarity'],
    instructor: {
      name: 'Dr. Tariq Al-Mansoor',
      role: 'Machine Learning Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ml-1',
        title: 'Machine Learning Foundations',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ml-1',
            slug: 'the-three-paradigms-of-ml',
            title: '1. Supervised, Unsupervised, and Reinforcement Learning',
            durationMinutes: 40,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=i_LwzRVP7bg',
            content: `Machine learning trains mathematical algorithms to detect patterns in data rather than executing hardcoded rules.\n\n- Supervised Learning: Model learns from labeled input-output pairs (predicting house prices, email spam detection).\n- Unsupervised Learning: Model discovers hidden structures in unlabeled data (customer clustering, anomaly detection).\n- Reinforcement Learning: Agent learns optimal actions through rewards and penalties (robotics, game playing).`,
            practicePrompt: 'Classify 5 real-world applications into Supervised, Unsupervised, or Reinforcement learning.',
            quiz: {
              question: 'Which machine learning paradigm uses labeled data with known targets?',
              options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Zero-shot Learning'],
              correctIndex: 0,
              explanation: 'Supervised learning pairs input features with ground-truth target labels.'
            },
            resources: [{ title: 'ML Paradigms Cheat Sheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ml-2',
            slug: 'features-labels-datasets',
            title: '2. Features, Labels, and Train-Test Splits',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=ukzFI9rgwfU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=JxzZxdPR-48',
            content: `Features are individual measurable properties (e.g. square footage, bedrooms). Labels are the target variable (e.g. price). Always split datasets (e.g. 80% train, 20% test) to evaluate how well models generalize to unseen data.`,
            practicePrompt: 'Identify 4 features you would use to predict whether a student will complete an online course.',
            quiz: {
              question: 'Why do data scientists split datasets into training and testing sets?',
              options: ['To save disk space', 'To evaluate model generalization on unseen data and prevent overfitting', 'Because computers crash on big files', 'To delete duplicates'],
              correctIndex: 1,
              explanation: 'Testing on unseen data measures true generalization capability.'
            },
            resources: [{ title: 'Dataset Preparation Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ml-3',
            slug: 'regression-vs-classification',
            title: '3. Regression vs Classification Algorithms',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Regression predicts continuous numerical values (temperature, stock price). Classification predicts discrete category labels (cat vs dog, fraud vs legitimate).`,
            practicePrompt: 'State whether each of the following is a Regression or Classification task: A) Estimating delivery time in minutes, B) Determining credit card fraud.',
            quiz: {
              question: 'Predicting tomorrow\'s temperature in Celsius is an example of what type of task?',
              options: ['Regression', 'Classification', 'Clustering', 'Dimensionality Reduction'],
              correctIndex: 0,
              explanation: 'Temperature is a continuous numerical value, making it a regression task.'
            },
            resources: [{ title: 'Regression vs Classification Reference', url: '#', type: 'Reference' }]
          },
          {
            id: 'l-ml-4',
            slug: 'model-evaluation-metrics',
            title: '4. Evaluation Metrics: Precision, Recall, and Accuracy',
            durationMinutes: 45,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=I74ymkoNTnw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            content: `Accuracy alone is misleading on imbalanced datasets (e.g. 99% of transactions are non-fraud). Learn the Confusion Matrix:\n- True Positives (TP)\n- False Positives (FP)\n- True Negatives (TN)\n- False Negatives (FN)\n- Precision = TP / (TP + FP)\n- Recall = TP / (TP + FN)`,
            practicePrompt: 'Calculate precision and recall for a spam filter given 90 true spam detected, 10 false alarms, and 5 missed spam.',
            quiz: {
              question: 'In medical diagnosis for a rare fatal disease, which metric is more critical to maximize: Precision or Recall?',
              options: ['Recall (minimizing False Negatives so no sick patient is missed)', 'Precision (only diagnosing when 100% sure)', 'Neither', 'Accuracy on healthy patients'],
              correctIndex: 0,
              explanation: 'High recall ensures life-threatening conditions are not missed as false negatives.'
            },
            resources: [{ title: 'Confusion Matrix Explained', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-ml-5',
            slug: 'overfitting-and-regularization',
            title: '5. The Bias-Variance Tradeoff: Overfitting and Underfitting',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=i_LwzRVP7bg',
            content: `Overfitting occurs when a model memorizes noise in training data, performing poorly on new data. Underfitting occurs when a model is too simplistic to capture real patterns. Combat overfitting with regularization, cross-validation, and pruning.`,
            practicePrompt: 'Explain how cross-validation helps detect overfitting.',
            quiz: {
              question: 'What is a hallmark sign of an overfitted machine learning model?',
              options: ['High error on both training and test data', 'Near-perfect 99% accuracy on training data, but poor 60% performance on unseen test data', 'Slow internet', 'The model refuses to train'],
              correctIndex: 1,
              explanation: 'A large discrepancy between training and testing accuracy signals overfitting.'
            },
            resources: [{ title: 'Bias-Variance Tradeoff Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ml-6',
            slug: 'neural-networks-and-deep-learning',
            title: '6. Introduction to Neural Networks and Deep Learning',
            durationMinutes: 45,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=ukzFI9rgwfU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            content: `Artificial Neural Networks are composed of layers of interconnected nodes (neurons) that apply weighted sums and non-linear activation functions (ReLU, Sigmoid). Backpropagation iteratively updates weights using gradient descent.`,
            practicePrompt: 'Sketch a simple 3-layer neural network with 2 inputs, 1 hidden layer of 3 nodes, and 1 output node.',
            quiz: {
              question: 'What algorithm updates the weights of an artificial neural network during training?',
              options: ['Backpropagation with Gradient Descent', 'Bubble Sort', 'Binary Search', 'Linear scan'],
              correctIndex: 0,
              explanation: 'Backpropagation computes gradients of the loss function to adjust weights.'
            },
            resources: [{ title: '3Blue1Brown Neural Networks Video Guide', url: 'https://www.youtube.com', type: 'Video' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does the loss function measure in machine learning?',
        options: ['The file download time', 'The mathematical difference between the model\'s predictions and the true target values', 'The battery level', 'Memory leakage'],
        correctIndex: 1,
        explanation: 'Loss functions quantify prediction error during training.'
      },
      {
        question: 'What is the purpose of an activation function in a neural network?',
        options: ['To turn on the computer', 'To introduce non-linearity, allowing the network to learn complex non-linear relationships', 'To delete negative numbers', 'To format text'],
        correctIndex: 1,
        explanation: 'Non-linear activations enable networks to model non-linear phenomena.'
      },
      {
        question: 'What is K-Means clustering an example of?',
        options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Rule-based logic'],
        correctIndex: 1,
        explanation: 'K-Means partitions unlabeled data into clusters.'
      },
      {
        question: 'What is the learning rate hyperparameter in gradient descent?',
        options: ['The speed of typing', 'The step size taken towards the minimum of the loss function on each iteration', 'The number of GPUs', 'The memory bandwidth'],
        correctIndex: 1,
        explanation: 'Learning rate controls how aggressively model weights adapt.'
      },
      {
        question: 'What does a False Positive mean in binary classification?',
        options: ['Model correctly predicted positive', 'Model incorrectly predicted positive when the true condition was negative', 'Model crashed', 'Model predicted negative correctly'],
        correctIndex: 1,
        explanation: 'A false positive is a false alarm.'
      },
      {
        question: 'What is data normalization (e.g. Min-Max scaling)?',
        options: ['Capitalizing letters', 'Scaling numerical feature values into a standard range (e.g. 0 to 1) so no single feature dominates gradients', 'Deleting outliers', 'Formatting as CSV'],
        correctIndex: 1,
        explanation: 'Scaling features accelerates convergence and stabilizes weights.'
      },
      {
        question: 'What is cross-validation (e.g. K-Fold)?',
        options: ['Validating passwords', 'Splitting data into K subsets, iteratively training on K-1 folds and validating on the remaining fold to assess stability', 'Cross-referencing books', 'Running two models at once'],
        correctIndex: 1,
        explanation: 'K-fold cross validation yields robust performance estimates across partitions.'
      },
      {
        question: 'Which technique randomly deactivates neurons during training to prevent co-adaptation and overfitting?',
        options: ['Dropout', 'Pruning', 'Batch Norm', 'Softmax'],
        correctIndex: 0,
        explanation: 'Dropout forces redundant feature representation across neurons.'
      },
      {
        question: 'What is a confusion matrix?',
        options: ['A confusing spreadsheet', 'A table showing counts of True Positives, False Positives, True Negatives, and False Negatives', 'A math puzzle', 'A memory error'],
        correctIndex: 1,
        explanation: 'Confusion matrices cross-tabulate predicted vs actual classes.'
      },
      {
        question: 'What is the primary advantage of Deep Learning over traditional machine learning on images and audio?',
        options: ['It runs on older computers', 'It automatically learns hierarchical feature representations from raw pixels or waveforms without manual feature engineering', 'It requires zero data', 'It uses no math'],
        correctIndex: 1,
        explanation: 'Deep learning extracts automated feature representations.'
      }
    ],
    finalProject: {
      title: 'End-to-End Classification Model Pipeline',
      brief: 'Plan a complete machine learning pipeline to predict customer churn for an e-commerce platform. Specify feature selection, data preprocessing, model selection, train-test split strategy, and the chosen evaluation metric with justification.',
      requirements: [
        'Defined feature engineering plan for 10 customer behavior signals',
        'Justified selection of evaluation metric based on business costs of false negatives',
        'Cross-validation plan to guard against overfitting'
      ]
    }
  },
  {
    id: 'course-ai-5',
    slug: 'data-analysis-fundamentals',
    title: 'Data Analysis Fundamentals',
    description: 'Learn exploratory data analysis (EDA), data cleaning, statistical measures (mean, median, standard deviation), correlation vs causation, and visual charting.',
    categoryId: 'cat_ai',
    categoryName: 'Artificial Intelligence',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Beginner',
    durationMinutes: 200,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the data analysis lifecycle: Ask, Prepare, Process, Analyze, Share',
      'Handle missing values, duplicate records, and outliers',
      'Compute descriptive statistics (mean, median, variance, IQR)',
      'Distinguish between correlation and causation',
      'Select appropriate charts (histograms, scatter plots, box plots)',
      'Communicate data-driven business insights through storytelling'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic math understanding'],
    instructor: {
      name: 'David Chen',
      role: 'Lead Data Analyst',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-da-1',
        title: 'Exploratory Data Analysis',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-da-1',
            slug: 'data-analysis-lifecycle',
            title: '1. The 5 Stages of Data Analysis',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
            content: `The Google Data Analytics lifecycle follows: Ask business questions -> Prepare raw data -> Process and clean -> Analyze and model -> Share insights with stakeholders.`,
            practicePrompt: 'Formulate 3 clear, measurable business questions for an online store experiencing a drop in checkouts.',
            quiz: {
              question: 'What is the first step in any meaningful data analysis project?',
              options: ['Open a spreadsheet and make a random pie chart', 'Define the business problem and articulate clear questions to answer', 'Delete rows', 'Install software'],
              correctIndex: 1,
              explanation: 'Analysis begins with clear problem scoping.'
            },
            resources: [{ title: 'Data Analysis Process Map', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-da-2',
            slug: 'data-cleaning-and-wrangling',
            title: '2. Data Cleaning: Null Values, Duplicates, and Outliers',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=vmEHCJofslg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=vmEHCJofslg',
            content: `80% of data work is cleaning. Decide when to impute missing values (mean/median replacement), when to drop null rows, and how to detect extreme outliers using Interquartile Range (IQR).`,
            practicePrompt: 'Explain whether you would drop or impute missing customer age values in a marketing dataset.',
            quiz: {
              question: 'Why can taking the average (mean) be problematic when a dataset has extreme outliers?',
              options: ['Means cannot be calculated with decimals', 'A single extreme value skews the mean, making it unrepresentative of the typical value', 'It is forbidden in statistics', 'Calculators crash'],
              correctIndex: 1,
              explanation: 'Outliers pull the mean away from the true center of distribution.'
            },
            resources: [{ title: 'Data Cleaning Checklist', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-da-3',
            slug: 'descriptive-statistics-distributions',
            title: '3. Descriptive Statistics and Normal Distributions',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Liv6eeb1VfE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Liv6eeb1VfE',
            content: `Measure central tendency (Mean, Median, Mode) and spread (Range, Standard Deviation, Variance). Understand bell-shaped normal distributions and the empirical rule (68-95-99.7).`,
            practicePrompt: 'Given salaries of [30k, 32k, 35k, 38k, 400k], calculate the mean and median and explain which represents typical employee pay.',
            quiz: {
              question: 'Which measure of central tendency is most robust to extreme outliers?',
              options: ['Mean', 'Median (middle value)', 'Standard Deviation', 'Variance'],
              correctIndex: 1,
              explanation: 'The median is resistant to extreme values.'
            },
            resources: [{ title: 'Descriptive Statistics Reference', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-da-4',
            slug: 'correlation-vs-causation',
            title: '4. Correlation vs Causation and Common Biases',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
            content: `Correlation measures whether two variables move together (Pearson r from -1.0 to +1.0). Correlation NEVER proves causation! Beware of confounding variables, selection bias, and survivorship bias.`,
            practicePrompt: 'Identify a confounding variable in the claim: "Ice cream sales and drowning rates correlate strongly, so ice cream causes drowning."',
            quiz: {
              question: 'What is the confounding variable that explains why ice cream sales and drownings rise together?',
              options: ['Sugar intake', 'Summer warm weather (which increases both swimming and ice cream consumption)', 'Shark attacks', 'Water quality'],
              correctIndex: 1,
              explanation: 'Hot weather is the underlying confounder driving both behaviors.'
            },
            resources: [{ title: 'Cognitive Biases in Analytics', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-da-5',
            slug: 'chart-selection-visualization',
            title: '5. Choosing the Right Visual Chart for the Story',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=vmEHCJofslg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=vmEHCJofslg',
            content: `- Time series trends: Line chart\n- Categorical comparison: Bar chart\n- Distribution: Histogram or Box plot\n- Relationship between 2 continuous metrics: Scatter plot\nAvoid cluttered 3D pie charts!`,
            practicePrompt: 'Select the optimal chart type to show the distribution of employee ages across a 500-person company.',
            quiz: {
              question: 'Which chart is ideal for showing the frequency distribution of a continuous variable?',
              options: ['Pie chart', 'Histogram', 'Scatter plot', 'Radial tree'],
              correctIndex: 1,
              explanation: 'Histograms bin continuous values into frequency columns.'
            },
            resources: [{ title: 'Financial Times Visual Vocabulary Chart', url: '#', type: 'Poster' }]
          },
          {
            id: 'l-da-6',
            slug: 'data-storytelling-stakeholders',
            title: '6. Data Storytelling: Presenting Insights to Executives',
            durationMinutes: 35,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=Liv6eeb1VfE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Liv6eeb1VfE',
            content: `Executives do not want 50 complex charts; they want insights and actions. Structure reports: Context -> Key Finding -> Business Impact -> Recommended Next Steps.`,
            practicePrompt: 'Write a 3-bullet executive summary communicating that mobile checkout dropoff is 40% higher than desktop due to slow load times.',
            quiz: {
              question: 'What is the primary objective of data storytelling in business?',
              options: ['To show off complicated math formulas', 'To translate raw data into clear, actionable recommendations that guide decision-makers', 'To fill 100 slides', 'To make colorful graphics'],
              correctIndex: 1,
              explanation: 'Data storytelling drives informed strategic action.'
            },
            resources: [{ title: 'Executive Presentation Template', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does a Pearson correlation coefficient of r = 0 indicate?',
        options: ['Perfect positive relationship', 'No linear relationship between variables', 'Perfect negative relationship', 'Calculation error'],
        correctIndex: 1,
        explanation: 'r = 0 means no linear correlation.'
      },
      {
        question: 'What is the Interquartile Range (IQR)?',
        options: ['The range of the middle 50% of data (Q3 - Q1)', 'The minimum minus maximum', 'The average plus median', 'The total count'],
        correctIndex: 0,
        explanation: 'IQR measures the spread of the central 50% of observations.'
      },
      {
        question: 'What is survivorship bias?',
        options: ['Surviving a medical test', 'Focusing only on successful cases that survived a selection process while ignoring failures that did not', 'Testing software', 'Saving files'],
        correctIndex: 1,
        explanation: 'Survivorship bias over-indexes on successes while omitting failures.'
      },
      {
        question: 'What is qualitative data?',
        options: ['Numeric data like weights and prices', 'Non-numerical descriptive data like interview transcripts and feedback reviews', 'Binary data', 'Computer code'],
        correctIndex: 1,
        explanation: 'Qualitative data captures descriptive, non-numeric properties.'
      },
      {
        question: 'What is a scatter plot used to analyze?',
        options: ['The relationship and correlation between two continuous numeric variables', 'Displaying website navigation', 'Listing names', 'Showing percentages'],
        correctIndex: 0,
        explanation: 'Scatter plots reveal bivariate relationships between continuous metrics.'
      },
      {
        question: 'What does "data provenance" refer to?',
        options: ['The original source, history, and transformation lineage of a dataset', 'The price of a dataset', 'The file size', 'The date of birth'],
        correctIndex: 0,
        explanation: 'Data provenance documents origin and history.'
      },
      {
        question: 'What is standard deviation?',
        options: ['The highest score', 'A measure of how dispersed the data points are around the mean', 'The total number of rows', 'The median'],
        correctIndex: 1,
        explanation: 'Standard deviation measures spread relative to the mean.'
      },
      {
        question: 'Why should pie charts with more than 5 slices generally be avoided?',
        options: ['They take up too much memory', 'Human eyes struggle to compare relative angles and areas accurately on multiple narrow wedges', 'Printers cannot print circles', 'They are illegal'],
        correctIndex: 1,
        explanation: 'Bar charts provide far superior quantitative legibility than multi-slice pies.'
      },
      {
        question: 'What is an outlier?',
        options: ['An element outside the browser', 'A data point that differs significantly from other observations in the dataset', 'A deleted file', 'An empty cell'],
        correctIndex: 1,
        explanation: 'Outliers deviate markedly from the general distribution.'
      },
      {
        question: 'What is A/B testing in web analytics?',
        options: ['Testing blood types', 'Comparing two versions of a webpage against each other to determine which performs better statistically on a target conversion metric', 'Alphabet testing', 'Testing keyboards'],
        correctIndex: 1,
        explanation: 'A/B testing evaluates causal impact of variations experimentally.'
      }
    ],
    finalProject: {
      title: 'Customer Churn Exploratory Data Analysis',
      brief: 'Conduct a thorough exploratory data analysis on a 1,000-customer telecom dataset. Clean missing values, analyze correlations between contract length and churn, create 3 insightful visual charts, and write an executive briefing with 3 actionable retention initiatives.',
      requirements: [
        'Missing value and outlier documentation',
        'Descriptive statistics summary table (Mean, Median, IQR)',
        'Three distinct visual charts (Distribution, Correlation, Comparison)',
        'Actionable executive summary with business recommendations'
      ]
    }
  },
  {
    id: 'course-ai-6',
    slug: 'cybersecurity-beginners',
    title: 'Cybersecurity for Beginners',
    description: 'Learn cyber threat landscapes, social engineering, password security, multi-factor authentication (MFA), network hygiene, malware defense, and basic incident response.',
    categoryId: 'cat_ai',
    categoryName: 'Artificial Intelligence',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the CIA Triad: Confidentiality, Integrity, and Availability',
      'Identify phishing, spear-phishing, and social engineering attacks',
      'Implement robust password management and hardware Multi-Factor Authentication',
      'Secure home and remote Wi-Fi networks and VPN usage',
      'Defend against malware, ransomware, and unauthorized credential harvesting',
      'Follow an incident response checklist when an account is compromised'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic internet familiarity'],
    instructor: {
      name: 'Kai Tanaka',
      role: 'Cybersecurity Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-sec-1',
        title: 'Cyber Defense Fundamentals',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-sec-1',
            slug: 'the-cia-triad',
            title: '1. The Core Security Model: The CIA Triad',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
            content: `All information security revolves around the CIA Triad:\n- Confidentiality: Protecting data from unauthorized viewing (encryption, access controls).\n- Integrity: Ensuring data is accurate and has not been tampered with (checksums, digital signatures).\n- Availability: Ensuring authorized users can access systems when needed (backups, DDoS mitigation).`,
            practicePrompt: 'Give an example of a security incident that compromises Integrity but leaves Confidentiality intact.',
            quiz: {
              question: 'What does the "I" stand for in the cybersecurity CIA Triad?',
              options: ['Internet', 'Integrity', 'Intelligence', 'Identification'],
              correctIndex: 1,
              explanation: 'Integrity guarantees data remains untampered and authentic.'
            },
            resources: [{ title: 'CIA Triad Visual Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-sec-2',
            slug: 'phishing-and-social-engineering',
            title: '2. Phishing and Social Engineering Red Flags',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
            content: `Over 80% of security breaches begin with human manipulation. Learn to spot urgent language, spoofed sender domains, mismatched hyperlinks, and malicious invoice attachments.`,
            practicePrompt: 'Inspect the headers of a suspicious email and determine if the sender domain matches the display name.',
            quiz: {
              question: 'What is "spear-phishing"?',
              options: ['Phishing with fishing poles', 'A highly tailored, personalized phishing attack aimed at a specific individual or organization', 'Mass automated spam', 'A virus scan'],
              correctIndex: 1,
              explanation: 'Spear-phishing uses customized research to deceive specific targets.'
            },
            resources: [{ title: 'Phishing Red Flags Poster', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-sec-3',
            slug: 'passwords-and-mfa',
            title: '3. Password Managers and Multi-Factor Authentication',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=sdpxddDzXfE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=sdpxddDzXfE',
            content: `Never reuse passwords across websites. Use open-source or trusted password managers to generate 20+ character random strings. Secure accounts with authenticator apps (TOTP) or FIDO2 hardware security keys.`,
            practicePrompt: 'Audit your current email account and configure an authenticator app (TOTP) for 2-step verification.',
            quiz: {
              question: 'Why is SMS-based verification less secure than an authenticator app (TOTP) or security key?',
              options: ['SMS uses too much battery', 'SMS is vulnerable to SIM-swapping attacks where attackers hijack your phone number', 'SMS only works in cities', 'SMS is too fast'],
              correctIndex: 1,
              explanation: 'SIM swaps allow attackers to intercept SMS verification codes.'
            },
            resources: [{ title: 'MFA Security Hierarchy', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-sec-4',
            slug: 'wifi-and-network-hygiene',
            title: '4. Wi-Fi Security, Public Hotspots, and VPNs',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
            content: `Public unencrypted coffee shop Wi-Fi exposes unencrypted traffic to packet sniffing. Use WPA3 protocols, disable automatic connection to open networks, and verify HTTPS padlock indicators.`,
            practicePrompt: 'Check your home router admin settings to ensure WPA2/WPA3 encryption is enabled and the default admin password has been changed.',
            quiz: {
              question: 'What does HTTPS encrypt between your browser and the web server?',
              options: ['Only passwords', 'The entire HTTP request and response including URLs, headers, cookies, and page content', 'Nothing', 'Only photos'],
              correctIndex: 1,
              explanation: 'HTTPS encrypts all data in transit across the network.'
            },
            resources: [{ title: 'Home Network Hardening Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-sec-5',
            slug: 'malware-and-ransomware-defense',
            title: '5. Malware, Ransomware, and Backup Best Practices',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
            content: `Ransomware encrypts your files and demands payment. Implement the 3-2-1 backup rule: 3 copies of data, on 2 different media types, with 1 copy stored offline or offsite.`,
            practicePrompt: 'Formulate an offline backup routine for your critical career documents using the 3-2-1 rule.',
            quiz: {
              question: 'What does the "3-2-1" backup rule dictate?',
              options: ['Backup 3 times a day for 2 hours on 1 drive', 'Keep 3 total copies of data, on 2 different media formats, with 1 copy stored offsite/offline', '3 passwords on 2 accounts for 1 user', 'A countdown'],
              correctIndex: 1,
              explanation: 'The 3-2-1 strategy ensures resilience against ransomware and physical disasters.'
            },
            resources: [{ title: 'Backup Strategy Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-sec-6',
            slug: 'incident-response-checklist',
            title: '6. Incident Response: What to Do If You Are Compromised',
            durationMinutes: 30,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=sdpxddDzXfE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=sdpxddDzXfE',
            content: `When a breach happens: 1. Disconnect device from network, 2. Change passwords from a known secure device, 3. Invalidate active sessions, 4. Check email forwarding rules, 5. Notify affected contacts.`,
            practicePrompt: 'Write an emergency 5-step checklist you would execute if your primary email was accessed by an intruder.',
            quiz: {
              question: 'After reclaiming an email account from a hacker, why must you immediately inspect the account\'s "Forwarding & Filters" settings?',
              options: ['To change the theme', 'Attackers frequently set silent auto-forwarding rules to receive all future password resets', 'To delete emails', 'To speed up inbox'],
              correctIndex: 1,
              explanation: 'Silent forwarding rules allow attackers to maintain access after password changes.'
            },
            resources: [{ title: 'Emergency Incident Response Protocol', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is a "zero-day" vulnerability?',
        options: ['A vulnerability with zero risk', 'A software security flaw that is known to attackers before the vendor has developed or released a patch', 'A 24-hour sale', 'A clean computer'],
        correctIndex: 1,
        explanation: 'A zero-day has had zero days of patch availability.'
      },
      {
        question: 'What is the purpose of software security patches and updates?',
        options: ['To slow down older computers', 'To close known vulnerabilities and security exploits discovered in operating systems and apps', 'To change desktop wallpapers', 'To delete user files'],
        correctIndex: 1,
        explanation: 'Patches repair discovered vulnerabilities.'
      },
      {
        question: 'What is the principle of least privilege?',
        options: ['Users should be granted only the minimum permissions necessary to perform their specific job responsibilities', 'Everyone should be an administrator', 'No one can use computers', 'Passwords are not needed'],
        correctIndex: 0,
        explanation: 'Least privilege minimizes the blast radius of any compromised account.'
      },
      {
        question: 'What is a brute-force attack?',
        options: ['Physical theft of a computer', 'An automated attack that systematically tries millions of password combinations until one works', 'A power outage', 'Deleting an app'],
        correctIndex: 1,
        explanation: 'Brute-force tries combinations systematically.'
      },
      {
        question: 'How does Multi-Factor Authentication (MFA) stop attacks even if a hacker steals your password?',
        options: ['It changes your username', 'The attacker cannot access the account without the second factor (e.g. phone authenticator token or physical security key)', 'It shuts down the server', 'It alerts the police'],
        correctIndex: 1,
        explanation: 'The second factor blocks login even with stolen credentials.'
      },
      {
        question: 'What is a DDoS attack?',
        options: ['Distributed Denial of Service: overwhelming a target server with flood traffic from thousands of infected machines to make it unavailable', 'Downloading data fast', 'Database backup', 'Domain registration'],
        correctIndex: 0,
        explanation: 'DDoS floods targets with junk requests.'
      },
      {
        question: 'What is ransomware?',
        options: ['Free software', 'Malware that encrypts a victim\'s files and demands payment to release the decryption key', 'Antivirus software', 'A web browser'],
        correctIndex: 1,
        explanation: 'Ransomware holds digital assets hostage.'
      },
      {
        question: 'What is credential stuffing?',
        options: ['Typing very quickly', 'Automated attacks where hackers test leaked username/password pairs from previous breaches against other websites', 'Saving passwords in notes', 'Resetting email'],
        correctIndex: 1,
        explanation: 'Credential stuffing exploits password reuse across multiple sites.'
      },
      {
        question: 'Which tool allows you to check if your email address has appeared in known public data breaches?',
        options: ['HaveIBeenPwned.com', 'Google Maps', 'Wikipedia', 'YouTube'],
        correctIndex: 0,
        explanation: 'HaveIBeenPwned tracks known public data breaches.'
      },
      {
        question: 'Why should you never click on links in unexpected SMS messages claiming your bank account is suspended?',
        options: ['SMS is expensive', 'It is almost certainly a smishing attack designed to steal your credentials via a fake clone login page', 'Phones do not have screens', 'It stops your carrier'],
        correctIndex: 1,
        explanation: 'Smishing uses fake urgent texts to steal account credentials.'
      }
    ],
    finalProject: {
      title: 'Personal & Home Office Security Audit',
      brief: 'Conduct a thorough cybersecurity audit of your personal devices, home Wi-Fi network, and digital accounts. Document your password manager setup, enable MFA on your 3 critical accounts, verify your 3-2-1 backup plan, and write an incident response playbook.',
      requirements: [
        'Audit of at least 5 accounts with unique passwords and MFA enabled',
        'Home Wi-Fi router hardening checklist verified',
        'Documented 3-2-1 backup protocol for important personal files',
        '5-step emergency incident response playbook'
      ]
    }
  },
  {
    id: 'course-ai-7',
    slug: 'internet-privacy-digital-safety',
    title: 'Internet Privacy and Digital Safety',
    description: 'Learn browser privacy, tracking cookies, fingerprinting, search engine privacy, VPNs vs Tor, permissions management on mobile, and data footprint reduction.',
    categoryId: 'cat_ai',
    categoryName: 'Artificial Intelligence',
    categorySlug: 'artificial-intelligence',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand third-party tracking cookies, web beacons, and browser fingerprinting',
      'Configure private browser profiles and tracker-blocking extensions',
      'Audit mobile application permissions (Location, Microphone, Contacts)',
      'Evaluate privacy-focused search engines and email aliases',
      'Understand metadata embedded in photos and PDF files',
      'Remove your personal information from public people-search brokers'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic internet familiarity'],
    instructor: {
      name: 'Kai Tanaka',
      role: 'Cybersecurity Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-piv-1',
        title: 'Digital Privacy Architecture',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-piv-1',
            slug: 'tracking-cookies-fingerprinting',
            title: '1. How the Web Tracks You: Cookies and Fingerprinting',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=YRhh801X36w',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=YRhh801X36w',
            content: `Ad networks track your path across the internet using third-party cookies, tracking pixels, and browser fingerprinting (analyzing your screen resolution, installed fonts, canvas rendering, and GPU).`,
            practicePrompt: 'Visit CoverYourTracks.eff.org and inspect your current browser fingerprint uniqueness score.',
            quiz: {
              question: 'What is browser fingerprinting?',
              options: ['Using a physical fingerprint reader on your laptop', 'A tracking method collecting unique hardware and software configurations to identify your device across websites', 'A touch screen gesture', 'A browser extension'],
              correctIndex: 1,
              explanation: 'Fingerprinting aggregates technical parameters into a unique identifier.'
            },
            resources: [{ title: 'EFF Cover Your Tracks Tool', url: 'https://coveryourtracks.eff.org', type: 'Tool' }]
          },
          {
            id: 'l-piv-2',
            slug: 'private-browsing-and-extensions',
            title: '2. Private Browsing Modes and Content Blockers',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=sO4EOD_Lz0o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=sO4EOD_Lz0o',
            content: `Understand what "Incognito Mode" does and does not do. It clears local cookies and history upon closing, but DOES NOT hide your IP address from your ISP, employer, or visited websites. Use trusted open-source content blockers like uBlock Origin.`,
            practicePrompt: 'Install an open-source tracker blocker and observe how many third-party trackers are blocked on a news site.',
            quiz: {
              question: 'Does standard "Incognito / Private" browsing hide your online activity from your Internet Service Provider (ISP)?',
              options: ['Yes, completely', 'No, it only prevents your local browser from storing cookies and history on your device', 'Only on Sundays', 'Only on mobile'],
              correctIndex: 1,
              explanation: 'Incognito only protects local device history, not network transmission.'
            },
            resources: [{ title: 'Browser Privacy Configuration Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-piv-3',
            slug: 'email-masking-and-aliases',
            title: '3. Email Aliasing and Disposable Numbers',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Never give your real primary personal email address to marketing websites. Use email masking services (e.g. SimpleLogin, Firefox Relay) to generate disposable forwarding aliases that you can turn off if spammed.`,
            practicePrompt: 'Create a free email alias and test sending an email through it.',
            quiz: {
              question: 'What is the primary benefit of using unique email aliases for online service sign-ups?',
              options: ['Emails arrive faster', 'If a company sells your data or suffers a breach, you can identify the source and instantly disable the specific alias', 'It saves hard drive space', 'It makes passwords unnecessary'],
              correctIndex: 1,
              explanation: 'Aliases isolate breaches and enable one-click spam deactivation.'
            },
            resources: [{ title: 'Email Privacy Tools', url: '#', type: 'Reference' }]
          },
          {
            id: 'l-piv-4',
            slug: 'mobile-app-permissions',
            title: '4. Auditing Smartphone and App Permissions',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=YRhh801X36w',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=YRhh801X36w',
            content: `Smartphones collect location, microphone access, contacts, and photos. Review permission manager settings on iOS or Android: set location to "While Using" with approximate accuracy, and revoke unused permissions.`,
            practicePrompt: 'Open your phone settings and audit which apps have background location access.',
            quiz: {
              question: 'Why should a flashlight app never be granted access to your contacts or location?',
              options: ['It uses too much flashlight bulb', 'It is a clear sign of data harvesting that serves no legitimate utility purpose for the app', 'It makes the phone heavy', 'Phones cannot run flashlights'],
              correctIndex: 1,
              explanation: 'Unnecessary permissions indicate invasive data collection.'
            },
            resources: [{ title: 'Smartphone Privacy Hardening Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-piv-5',
            slug: 'exif-metadata-scrubbing',
            title: '5. Scrubbing EXIF Metadata from Photos and Documents',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=sO4EOD_Lz0o',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=sO4EOD_Lz0o',
            content: `Photos taken on smartphones embed EXIF metadata including exact GPS coordinates, camera model, and timestamp. Learn to scrub metadata before uploading photos to public forums.`,
            practicePrompt: 'Inspect the properties/metadata of a smartphone photo to see if GPS coordinates are embedded.',
            quiz: {
              question: 'What sensitive information can be embedded inside smartphone photo EXIF metadata?',
              options: ['Your bank account number', 'The exact GPS coordinates of where the photo was taken', 'Your credit score', 'Your computer password'],
              correctIndex: 1,
              explanation: 'EXIF metadata commonly records exact GPS coordinates of shooting locations.'
            },
            resources: [{ title: 'EXIF Metadata Cleaner', url: '#', type: 'Tool' }]
          },
          {
            id: 'l-piv-6',
            slug: 'minimizing-digital-footprint',
            title: '6. Minimizing Your Public Digital Footprint and Opt-Outs',
            durationMinutes: 30,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `People-search data brokers aggregate your address, phone numbers, and family records. Learn how to submit opt-out requests, set social media accounts to private, and minimize your digital shadow.`,
            practicePrompt: 'Search your full name in quotation marks on a search engine to assess your public digital footprint.',
            quiz: {
              question: 'What are "data brokers"?',
              options: ['Stock market brokers', 'Companies that scrape, aggregate, and sell personal consumer records to marketers and individuals', 'Computer repairmen', 'Web designers'],
              correctIndex: 1,
              explanation: 'Data brokers commercialize public and commercial consumer records.'
            },
            resources: [{ title: 'Data Broker Opt-Out Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does a VPN (Virtual Private Network) hide from your local network and ISP?',
        options: ['Your browsing history and true IP address from local network snooping', 'Your credit card charges', 'Your physical location from the police', 'Computer viruses'],
        correctIndex: 0,
        explanation: 'VPNs encrypt traffic tunnels between device and VPN server.'
      },
      {
        question: 'Does using a VPN provide complete anonymity on the web if you remain logged into personal accounts like Google or Amazon?',
        options: ['Yes, 100% anonymous', 'No, websites still track you directly through your logged-in user profile, account actions, and cookies', 'Only on Mac', 'Only with Wi-Fi'],
        correctIndex: 1,
        explanation: 'Being logged into an account identifies you regardless of your IP address.'
      },
      {
        question: 'Which of the following is a privacy-first search engine that does not track your search queries?',
        options: ['DuckDuckGo or Brave Search', 'Standard ad-tracking engines', 'Social media feeds', 'Yellow Pages'],
        correctIndex: 0,
        explanation: 'DuckDuckGo and Brave Search do not build personalized search profiles.'
      },
      {
        question: 'What is end-to-end encryption (E2EE) in messaging apps (like Signal)?',
        options: ['Only the sender and recipient have keys to decrypt messages; even the service provider cannot read the content', 'Messages are public', 'Messages are read by AI', 'Messages are printed'],
        correctIndex: 0,
        explanation: 'E2EE ensures only conversation participants can decrypt content.'
      },
      {
        question: 'What is a tracking pixel?',
        options: ['A colored square on a monitor', 'A tiny 1x1 transparent image embedded in emails and webpages that notifies a server when and where the content was opened', 'A computer mouse', 'A camera lens'],
        correctIndex: 1,
        explanation: 'Tracking pixels signal email open and page visit events.'
      },
      {
        question: 'Why should you avoid logging into third-party websites using social media "Login with..." buttons when privacy is a priority?',
        options: ['It crashes the website', 'It links your third-party activity directly to your central social advertising profile', 'It is slower', 'It costs money'],
        correctIndex: 1,
        explanation: 'Social login buttons link cross-site activity to your advertising identifier.'
      },
      {
        question: 'What does "approximate location" permission on modern smartphones achieve?',
        options: ['Turns off the phone', 'Provides apps with a general regional area (e.g. city) rather than pinpoint GPS coordinates', 'Speeds up GPS', 'Disables maps'],
        correctIndex: 1,
        explanation: 'Approximate location fulfills weather/local search without exposing exact coordinates.'
      },
      {
        question: 'What is DNS over HTTPS (DoH)?',
        options: ['A new programming language', 'A security protocol encrypting domain name lookups so your ISP cannot log the website domains you visit', 'An email protocol', 'A hard drive'],
        correctIndex: 1,
        explanation: 'DoH encrypts DNS requests preventing ISP domain eavesdropping.'
      },
      {
        question: 'What is "doxxing"?',
        options: ['Creating documents', 'Maliciously publishing an individual\'s private personal information (home address, phone, family) online without consent', 'A medical checkup', 'A video game cheat'],
        correctIndex: 1,
        explanation: 'Doxxing weaponizes private personal details publicly.'
      },
      {
        question: 'What is a clean digital hygiene habit when selling or recycling an old smartphone or laptop?',
        options: ['Throwing it in water', 'Performing a secure cryptographic factory reset to wipe all user keys and data', 'Closing all browser tabs', 'Deleting photos only'],
        correctIndex: 1,
        explanation: 'Cryptographic factory reset wipes storage encryption keys.'
      }
    ],
    finalProject: {
      title: 'Digital Footprint Minimization Plan',
      brief: 'Conduct a comprehensive audit of your digital privacy footprint. Create an action plan: configure a privacy-hardened browser setup, audit your mobile app permissions, generate email aliases for marketing logins, and remove your records from 3 public directories.',
      requirements: [
        'Browser configuration with content blocker and DoH enabled',
        'Mobile permissions audit with location access minimized',
        'Demonstrated implementation of email aliasing',
        'Written personal digital safety protocol'
      ]
    }
  },
  {
    id: 'course-ai-8',
    slug: 'computer-internet-essentials',
    title: 'Computer and Internet Essentials',
    description: 'Learn operating system fundamentals (Windows/Mac/Linux), file management, cloud storage, shortcut productivity, internet architecture, and basic troubleshooting.',
    categoryId: 'cat_computer',
    categoryName: 'Computer Fundamentals',
    categorySlug: 'computer-fundamentals',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand computer hardware components (CPU, RAM, SSD/HDD, GPU)',
      'Organize files, folders, and directory trees systematically',
      'Master essential keyboard shortcuts for 2x navigation speed',
      'Understand how the Internet works: IP addresses, DNS, and routers',
      'Manage cloud storage syncing and file sharing permissions',
      'Diagnose and troubleshoot common computer and connectivity problems'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['None - complete beginner friendly'],
    instructor: {
      name: 'Sarah Jenkins',
      role: 'Digital Literacy Educator',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-comp-1',
        title: 'Digital Literacy Core',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-comp-1',
            slug: 'hardware-and-operating-systems',
            title: '1. Computer Hardware Essentials: CPU, RAM, and Storage',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=OAx_6-wdslM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=OAx_6-wdslM',
            content: `Demystify computer hardware:\n- CPU (Central Processing Unit): The brain executing calculations.\n- RAM (Random Access Memory): Fast, temporary memory holding active apps.\n- Storage (SSD / Hard Drive): Permanent storage holding files when power is off.\n- GPU: Graphics processor accelerating visual rendering.`,
            practicePrompt: 'Check your computer system settings to find your processor type, RAM capacity, and free disk space.',
            quiz: {
              question: 'What is the main difference between RAM and an SSD storage drive?',
              options: ['RAM is temporary volatile memory lost when power shuts down; an SSD retains files permanently', 'RAM holds photos forever', 'SSD is temporary', 'They are identical'],
              correctIndex: 0,
              explanation: 'RAM is high-speed temporary memory, while SSDs store data persistently.'
            },
            resources: [{ title: 'Computer Hardware Diagram', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-comp-2',
            slug: 'file-organization-and-paths',
            title: '2. Professional File Management and Folder Architecture',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=AkFi90lZmXA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=AkFi90lZmXA',
            content: `Stop saving everything onto your cluttered Desktop. Establish a clear root folder hierarchy (e.g. \`01_Projects\`, \`02_Admin\`, \`03_Archives\`) and adopt clear naming conventions (\`YYYY-MM-DD_project_v1.pdf\`).`,
            practicePrompt: 'Create an organized 3-tier folder structure for your digital learning courses and practice exercises.',
            quiz: {
              question: 'Which file naming convention avoids broken links on web servers and command lines?',
              options: ['Using spaces and special symbols like "my project #1 (final)!.pdf"', 'Using lowercase with hyphens or underscores like "2026-10-ashiskillrise-project.pdf"', 'Writing in all emojis', 'Naming every file "document"'],
              correctIndex: 1,
              explanation: 'Hyphens, underscores, and lowercase prevent encoding issues across file systems.'
            },
            resources: [{ title: 'File Organization Cheat Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-comp-3',
            slug: 'essential-keyboard-shortcuts',
            title: '3. Essential Keyboard Shortcuts for Rapid Navigation',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=Dxcc6ycZ73M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Dxcc6ycZ73M',
            content: `Master essential universal shortcuts:\n- Copy / Paste: Ctrl+C / Ctrl+V (Cmd+C / Cmd+V on Mac)\n- Undo / Redo: Ctrl+Z / Ctrl+Y\n- Find: Ctrl+F\n- Switch apps: Alt+Tab (Cmd+Tab on Mac)\n- Reopen closed browser tab: Ctrl+Shift+T\n- Lock screen: Win+L (Ctrl+Cmd+Q on Mac)`,
            practicePrompt: 'Practice using only keyboard shortcuts to copy a paragraph, paste it into a text file, undo, and reopen a closed tab.',
            quiz: {
              question: 'Which keyboard shortcut instantly reopens the most recently closed browser tab in Chrome, Firefox, and Edge?',
              options: ['Ctrl+Z', 'Ctrl+Shift+T (Cmd+Shift+T on Mac)', 'Ctrl+N', 'Alt+F4'],
              correctIndex: 1,
              explanation: 'Ctrl+Shift+T reopens closed browser tabs.'
            },
            resources: [{ title: 'Top 50 Universal Keyboard Shortcuts', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-comp-4',
            slug: 'how-the-internet-works',
            title: '4. How the Internet Works: IP, DNS, and Browsers',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=OAx_6-wdslM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=OAx_6-wdslM',
            content: `When you type \`ashiskillrise.org\` into a browser:\n1. DNS translates the domain into an IP address (e.g. \`104.21.50.12\`).\n2. Browser sends an encrypted HTTPS request across routers.\n3. Server responds with HTML, CSS, and JavaScript files.\n4. Browser engine renders pixels on your display.`,
            practicePrompt: 'Use your terminal or web tool to look up the IP address of a website using the ping or nslookup command.',
            quiz: {
              question: 'What does DNS (Domain Name System) do on the Internet?',
              options: ['Stores passwords', 'Acts as the phonebook of the internet, translating human-friendly domain names into computer IP addresses', 'Makes videos load', 'Controls screen brightness'],
              correctIndex: 1,
              explanation: 'DNS translates domain names into numerical IP addresses.'
            },
            resources: [{ title: 'How the Web Works Illustrated', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-comp-5',
            slug: 'cloud-storage-and-syncing',
            title: '5. Cloud Storage and Collaborative File Sharing',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=AkFi90lZmXA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=AkFi90lZmXA',
            content: `Learn how Google Drive, OneDrive, and Dropbox sync local files to cloud servers. Master sharing permissions: "Viewer" (read-only) vs "Commenter" vs "Editor" to avoid accidental file deletion.`,
            practicePrompt: 'Create a cloud folder, set sharing permissions to "Anyone with link can view", and test opening it in Incognito.',
            quiz: {
              question: 'What is the danger of granting "Editor" permission to a shared public link?',
              options: ['It slows down your computer', 'Anyone with the link can edit, overwrite, or permanently delete your files', 'It cancels your subscription', 'It changes your password'],
              correctIndex: 1,
              explanation: 'Editor permissions grant destructive write capabilities.'
            },
            resources: [{ title: 'Cloud Collaboration Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-comp-6',
            slug: 'troubleshooting-common-problems',
            title: '6. Basic Computer and Wi-Fi Troubleshooting',
            durationMinutes: 30,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=Dxcc6ycZ73M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Dxcc6ycZ73M',
            content: `Diagnose common glitches: 1. Restart the computer, 2. Check physical cables, 3. Restart Wi-Fi router (unplug 30 seconds), 4. Clear browser cache, 5. Force quit frozen applications via Task Manager / Activity Monitor.`,
            practicePrompt: 'Open Task Manager (Ctrl+Shift+Esc on Windows) or Activity Monitor (Mac) to view which app is consuming the most RAM.',
            quiz: {
              question: 'Why does restarting a computer frequently resolve sluggishness and software glitches?',
              options: ['It cleans the physical fan', 'It clears temporary RAM cache, closes rogue background processes, and restarts unhandled software states', 'It installs new hardware', 'It charges the battery'],
              correctIndex: 1,
              explanation: 'Rebooting flushes volatile memory and resets running states cleanly.'
            },
            resources: [{ title: 'Computer Troubleshooting Flowchart', url: '#', type: 'PDF' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is the operating system (OS)?',
        options: ['An app for watching videos', 'The core system software that manages computer hardware, memory, and running applications', 'A physical cable', 'The monitor glass'],
        correctIndex: 1,
        explanation: 'The OS manages hardware resources and provides interfaces for apps.'
      },
      {
        question: 'What does an uncompressed ZIP file achieve?',
        options: ['Deletes files', 'Bundles multiple files and folders into a single compressed archive file for easy sharing', 'Plays music', 'Encrypts with military security'],
        correctIndex: 1,
        explanation: 'ZIP archives bundle and compress multiple files.'
      },
      {
        question: 'What is a browser cache?',
        options: ['A bank account for web browsing', 'A temporary storage area on your computer holding downloaded images and scripts so pages load faster on return visits', 'A computer virus', 'A bookmark folder'],
        correctIndex: 1,
        explanation: 'Browser cache stores static assets locally for speed.'
      },
      {
        question: 'Which tool on Windows force-quits an unresponsive program?',
        options: ['Task Manager (Ctrl+Shift+Esc)', 'Calculator', 'Paint', 'Command Prompt only'],
        correctIndex: 0,
        explanation: 'Task Manager allows termination of hung processes.'
      },
      {
        question: 'What is an IP address?',
        options: ['A website password', 'A unique numerical label assigned to every device connected to a computer network', 'A postal address', 'A serial number for screens'],
        correctIndex: 1,
        explanation: 'An IP address identifies a device on a network.'
      },
      {
        question: 'What happens when you delete a file on Windows or Mac?',
        options: ['It is permanently gone immediately', 'It moves to the Recycle Bin / Trash, where it can be restored until emptied', 'It emails your friend', 'It shuts down the computer'],
        correctIndex: 1,
        explanation: 'Files go to the trash bin first for safety.'
      },
      {
        question: 'What is bandwidth in internet connectivity?',
        options: ['The weight of the router', 'The maximum rate of data transfer across a network path (usually measured in Mbps)', 'The length of the cable', 'The screen resolution'],
        correctIndex: 1,
        explanation: 'Bandwidth measures network throughput capacity.'
      },
      {
        question: 'What does PDF stand for?',
        options: ['Personal Data File', 'Portable Document Format', 'Print Desktop File', 'Private Document Folder'],
        correctIndex: 1,
        explanation: 'PDF stands for Portable Document Format.'
      },
      {
        question: 'Why is it risky to run out of free storage space on an operating system drive?',
        options: ['The screen turns blue', 'Operating systems need free disk space for virtual memory (swap files) and updates; filling it causes severe freezing and crashes', 'Files turn into text', 'It cancels Wi-Fi'],
        correctIndex: 1,
        explanation: 'Low disk space prevents virtual memory allocation and crashes systems.'
      },
      {
        question: 'Which shortcut locks your workstation screen when stepping away?',
        options: ['Win + L (or Ctrl + Cmd + Q on Mac)', 'Ctrl + C', 'Alt + F4', 'Ctrl + P'],
        correctIndex: 0,
        explanation: 'Win+L / Ctrl+Cmd+Q immediately locks the screen.'
      }
    ],
    finalProject: {
      title: 'Digital Workspace Overhaul & Optimization',
      brief: 'Perform a comprehensive audit of your digital computer environment. Organize your desktop files into a structured archive, clean out temporary browser caches and old downloads, configure an automated cloud sync folder, and document a 5-shortcut workflow that doubles your speed.',
      requirements: [
        'Documented clean folder hierarchy with consistent naming conventions',
        'Cloud storage synchronization set up with view-only test folder',
        'Summary of 5 daily keyboard shortcuts implemented'
      ]
    }
  }
];
