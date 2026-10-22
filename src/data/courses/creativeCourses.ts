import { Course } from './types';

export const CREATIVE_COURSES: Course[] = [
  {
    id: 'course-crt-1',
    slug: 'ui-ux-design-fundamentals',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn wireframing, user empathy research, visual hierarchy, mobile design systems, accessibility contrast, and usability testing to craft intuitive digital experiences.',
    categoryId: 'cat_design',
    categoryName: 'Graphic Design',
    categorySlug: 'graphic-design',
    difficulty: 'Beginner',
    durationMinutes: 200,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the fundamental difference between UI (visual interface) and UX (problem-solving flow)',
      'Conduct user interviews and synthesize actionable user personas',
      'Design low-fidelity wireframes that prioritize information hierarchy',
      'Apply 8pt grid systems, typographic scale, and accessible WCAG contrast',
      'Run unmoderated usability tests to identify user friction points'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['No prior design experience required'],
    instructor: {
      name: 'Elena Rostova',
      role: 'Principal Product Designer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-uiux-1',
        title: 'User Experience & Interface Essentials',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-uiux-1',
            slug: 'ux-vs-ui-mindset',
            title: '1. UI vs UX: Mindsets, Roles, and the Double Diamond',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `UX is how it works; UI is how it looks. The Double Diamond framework guides you through: Discover (research the problem), Define (focus the challenge), Develop (prototype solutions), and Deliver (test and build).`,
            practicePrompt: 'Identify an app you use daily. Note 1 feature that has good visual UI but frustrating UX.',
            quiz: {
              question: 'Which best summarizes the distinction between UX and UI?',
              options: ['UI is code; UX is graphic design', 'UX focuses on the journey, usability, and problem-solving flow; UI focuses on the visual presentation, typography, and styling', 'They are identical', 'UX is only for mobile'],
              correctIndex: 1,
              explanation: 'UX addresses user goals and friction, while UI crafts aesthetic and sensory touchpoints.'
            },
            resources: [{ title: 'Double Diamond Design Framework', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-uiux-2',
            slug: 'user-research-and-personas',
            title: '2. User Personas and Journey Mapping',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=sByzHoiYFX0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `Never design for "everyone". Create empathy personas documenting: Primary Goals, Frustrations & Obstacles, Tech Literacy, and Emotional Triggers throughout their journey.`,
            practicePrompt: 'Create a 1-page user persona for someone trying to learn digital skills on a mobile phone.',
            quiz: {
              question: 'Why are user personas valuable in product design?',
              options: ['They decorate office walls', 'They ground design decisions in real human needs rather than internal team assumptions', 'They replace user testing', 'They generate code'],
              correctIndex: 1,
              explanation: 'Personas keep teams centered on concrete user context and pain points.'
            },
            resources: [{ title: 'User Persona Canvas', url: '#', type: 'Template' }]
          },
          {
            id: 'l-uiux-3',
            slug: 'wireframing-and-information-architecture',
            title: '3. Wireframing and Information Architecture',
            durationMinutes: 45,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=a5KYlHNKQB8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            content: `Wireframes remove distracting colors and photography so you can validate spatial hierarchy, button placements, and reading patterns (such as the F-pattern and Z-pattern).`,
            practicePrompt: 'Sketch a 3-screen mobile wireframe for an online course checkout on paper or in a simple whiteboard.',
            quiz: {
              question: 'Why should you create low-fidelity wireframes before high-fidelity visual mockups?',
              options: ['Low-fi wireframes take 10x longer', 'They allow rapid iteration on structure and flow without getting bogged down in color and typographic debates', 'Computers cannot draw colors', 'Wireframes are required by patent law'],
              correctIndex: 1,
              explanation: 'Low-fidelity prototyping de-risks layouts early when changes cost minutes instead of days.'
            },
            resources: [{ title: 'Wireframing UI Kit Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-uiux-4',
            slug: 'visual-hierarchy-and-grids',
            title: '4. Visual Hierarchy, Spacing, and the 8pt Grid',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=_2LLXnUdUIc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `Visual hierarchy guides the user's eye effortlessly. Use scale (large headings), contrast (dark vs light), and proximity. The 8pt grid system (padding and margins in multiples of 8: 8, 16, 24, 32, 48px) creates mathematical rhythm.`,
            practicePrompt: 'Audit a card component and normalize all margins and paddings to 8px multiples.',
            quiz: {
              question: 'What is the primary benefit of the 8pt grid system in digital interface design?',
              options: ['It fits 8 monitors', 'It ensures proportional consistency across components and simplifies handoff to frontend developers', 'It eliminates all text', 'It reduces file size'],
              correctIndex: 1,
              explanation: 'Consistent 8pt multiples produce harmonic visual rhythm and clean CSS implementation.'
            },
            resources: [{ title: '8pt Grid Cheat Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-uiux-5',
            slug: 'usability-testing-and-heuristics',
            title: '5. Usability Testing and Nielsen\'s Heuristics',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=YqQx75OPWA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            content: `Test with 5 users to uncover 85% of usability issues. Apply Jakob Nielsen’s heuristics: Visibility of system status, Match between system and real world, User control and freedom, and Error prevention.`,
            practicePrompt: 'Conduct a 5-minute usability test: give a friend a task on your favorite website and observe where they hesitate without interrupting.',
            quiz: {
              question: 'According to usability research by Jakob Nielsen, how many test participants are typically required to uncover ~85% of usability issues?',
              options: ['500', '5', '1', '10,000'],
              correctIndex: 1,
              explanation: 'Testing with 5 representative users uncovers the vast majority of critical interaction hurdles.'
            },
            resources: [{ title: '10 Usability Heuristics Quick Guide', url: '#', type: 'PDF' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is "cognitive load" in UX design?',
        options: ['The weight of a smartphone in grams', 'The total amount of mental effort required by a user to interpret and operate an interface', 'Internet connection speed', 'The RAM used by Chrome'],
        correctIndex: 1,
        explanation: 'Minimizing unnecessary cognitive load makes products effortless to navigate.'
      }
    ]
  },
  {
    id: 'course-crt-2',
    slug: 'figma-for-beginners',
    title: 'Figma for Beginners',
    description: 'Master industry-standard interface design: vector frames, Auto Layout, reusable component variants, color styles, interactive prototypes, and developer handoff.',
    categoryId: 'cat_design',
    categoryName: 'Graphic Design',
    categorySlug: 'graphic-design',
    difficulty: 'Beginner',
    durationMinutes: 210,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Navigate the Figma canvas, tools, frames, and vector geometry',
      'Master Auto Layout (flexbox in design) for responsive components',
      'Create and manage atomic design components with property variants',
      'Establish global design tokens (colors, typographic styles, shadows)',
      'Build clickable interactive prototypes with smart animations'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['A free Figma account and modern web browser'],
    instructor: {
      name: 'Maya Lin',
      role: 'UI Systems Specialist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-fig-1',
        title: 'Figma Tooling & Auto Layout',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-fig-1',
            slug: 'canvas-frames-and-shapes',
            title: '1. Figma Interface, Frames, and Vector Basics',
            durationMinutes: 40,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=FTFaQWZBqQ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `Unlike Photoshop artboards, Figma Frames behave like HTML div containers with nesting, clipping, and auto-resizing. Learn the fundamental tools: Frame (F), Shape (R, O), Text (T), and Pen (P).`,
            practicePrompt: 'Create a desktop frame (1440x900) and practice nesting a header and hero frame inside it.',
            quiz: {
              question: 'Why are Figma Frames superior to traditional Photoshop canvas groups?',
              options: ['They are smaller files', 'Frames support nested constraints, clip content, layout grids, and Auto Layout responsiveness', 'They only work on Mac', 'They cannot hold text'],
              correctIndex: 1,
              explanation: 'Figma frames mirror modern DOM containers with responsive constraints.'
            },
            resources: [{ title: 'Figma Keyboard Shortcuts Cheatsheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-fig-2',
            slug: 'mastering-auto-layout',
            title: '2. Auto Layout (Shift+A): The Secret to Responsive UI',
            durationMinutes: 45,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=jwMp_6hZ_hA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `Auto Layout mimics CSS Flexbox. Set directional flow (horizontal or vertical), padding, gap between items, and resize properties: Hug Contents, Fill Container, or Fixed Width.`,
            practicePrompt: 'Build a button with Auto Layout that automatically expands its background pill as you type longer text.',
            quiz: {
              question: 'Which keyboard shortcut adds Auto Layout to selected objects in Figma?',
              options: ['Ctrl+Z', 'Shift+A', 'Alt+F4', 'Cmd+K'],
              correctIndex: 1,
              explanation: 'Shift+A instantly wraps elements into an Auto Layout frame.'
            },
            resources: [{ title: 'Auto Layout Interactive Playground', url: '#', type: 'Playground' }]
          },
          {
            id: 'l-fig-3',
            slug: 'components-and-variants',
            title: '3. Atomic Components, Properties, and Variants',
            durationMinutes: 45,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=j6Ule7GXaRs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            content: `Create reusable master components (Cmd+Option+K). Combine states (Default, Hover, Disabled, Loading) into a single component set with variant dropdown properties.`,
            practicePrompt: 'Build a Master Button component with 3 variants: Primary, Secondary, and Outline.',
            quiz: {
              question: 'What happens to instances when you update the Master Component in Figma?',
              options: ['Instances break and delete', 'All connected instances update automatically while preserving local text overrides', 'Nothing changes', 'You must pay a fee'],
              correctIndex: 1,
              explanation: 'Master components maintain global design system sync across all screen instances.'
            },
            resources: [{ title: 'Component Architecture Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-fig-4',
            slug: 'design-tokens-and-styles',
            title: '4. Design Styles: Color, Typography, and Shadows',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=N66Oup8rU10',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `Define centralized color styles (Primary, Neutral-900, Success, Error) and typographic scales (H1, Body, Caption). Updating the hex code once updates your entire 50-screen design instantly.`,
            practicePrompt: 'Set up 4 color styles and 3 typographic styles in a new Figma library.',
            quiz: {
              question: 'Why should designers use defined Text and Color Styles rather than arbitrary hex values?',
              options: ['To impress colleagues', 'To ensure consistent brand cohesion and enable instant global theme updates across an entire project', 'Because Figma limits manual colors', 'It makes fonts bold'],
              correctIndex: 1,
              explanation: 'Defined styles enforce system-level consistency and eliminate design drift.'
            },
            resources: [{ title: 'Design System Token Checklist', url: '#', type: 'Checklist' }]
          },
          {
            id: 'l-fig-5',
            slug: 'interactive-prototyping-handoff',
            title: '5. Clickable Prototyping and Dev Mode Handoff',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=FTFaQWZBqQ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            content: `Link buttons to destination frames using trigger interactions (On click -> Navigate to -> Smart Animate). Switch to Dev Mode to inspect CSS, measurements, and export production SVG assets.`,
            practicePrompt: 'Connect 2 screens with a Smart Animate slide transition and preview on your mobile Figma app.',
            quiz: {
              question: 'What is Figma Dev Mode used for?',
              options: ['Playing video games', 'Inspecting exact CSS properties, padding values, assets, and token names for developer handoff', 'Editing audio', 'Writing backend databases'],
              correctIndex: 1,
              explanation: 'Dev Mode bridges design and development with ready-to-implement CSS specifications.'
            },
            resources: [{ title: 'Developer Handoff Best Practices', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is "Smart Animate" in Figma prototyping?',
        options: ['An AI that writes code', 'An engine that automatically transitions matching layers between frames with smooth positional and size animations', 'A video export plugin', 'A 3D render tool'],
        correctIndex: 1,
        explanation: 'Smart Animate interpolates shared layer states smoothly across frames.'
      }
    ]
  },
  {
    id: 'course-crt-3',
    slug: 'color-theory-and-typography',
    title: 'Color Theory and Typography',
    description: 'Learn color psychology, complementary and split harmony palettes, font pairing formulas, modular scales, kerning, line height, and accessible contrast ratios.',
    categoryId: 'cat_design',
    categoryName: 'Graphic Design',
    categorySlug: 'graphic-design',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the color wheel, hue, saturation, value, and color harmony schemes',
      'Construct a 60-30-10 color palette for web and mobile interfaces',
      'Select and pair Serif, Sans-Serif, and Monospace typefaces with confidence',
      'Establish a mathematical modular type scale for clean hierarchy',
      'Audit color combinations for WCAG 2.1 AA/AAA accessibility compliance'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['None'],
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'Visual Systems Director',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-col-1',
        title: 'Color & Typography Fundamentals',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-col-1',
            slug: 'the-color-wheel-and-harmonies',
            title: '1. The Color Wheel and Mathematical Harmonies',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=_2LLXnUdUIc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `Learn the relationship between primary, secondary, and tertiary hues. Explore classic harmony schemes: Monochromatic (clean & calm), Analogous (organic & harmonious), and Complementary (high-impact contrast).`,
            practicePrompt: 'Generate an analogous color palette with 3 adjacent hues on the color wheel using Coolors.co.',
            quiz: {
              question: 'What are complementary colors on the color wheel?',
              options: ['Colors that say nice things', 'Colors positioned directly opposite each other on the color wheel (e.g. blue and orange)', 'Black and white only', 'Colors next to each other'],
              correctIndex: 1,
              explanation: 'Opposite complementary colors yield maximum visual vibration and energy.'
            },
            resources: [{ title: 'Color Wheel Interactive Palette Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-col-2',
            slug: 'the-60-30-10-rule',
            title: '2. The 60-30-10 Rule in Interface Design',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=sByzHoiYFX0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            content: `Avoid messy rainbow UI. Allocate: 60% Dominant Neutral (white, off-white, or dark slate for background and cards), 30% Secondary Supporting Tone (slate, dark blue for text and borders), 10% Vibrant Accent (emerald, royal blue, or coral exclusively for primary CTAs).`,
            practicePrompt: 'Analyze a landing page and calculate its approximate 60-30-10 color distribution.',
            quiz: {
              question: 'In the 60-30-10 design rule, what is the 10% accent color reserved for?',
              options: ['The entire background', 'Primary interactive actions, key conversions, and focal highlights', 'All body paragraph text', 'The browser title'],
              correctIndex: 1,
              explanation: 'Reserving your accent color for primary actions maximizes conversion intent.'
            },
            resources: [{ title: '60-30-10 Rule Architecture Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-col-3',
            slug: 'typography-anatomy-and-classifications',
            title: '3. Type Anatomy, Classifications, and Legibility',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=a5KYlHNKQB8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `Understand x-height, ascenders, descenders, and serifs. Learn the 4 major classifications: Serif (editorial, trustworthy), Sans-Serif (clean, modern, digital), Monospace (technical, structured), and Display (headlines only).`,
            practicePrompt: 'Examine two typefaces: 1 Serif and 1 Sans-Serif. Compare their legibility at small 14px size.',
            quiz: {
              question: 'Why are clean Sans-Serif fonts widely preferred for digital app body copy?',
              options: ['Serifs are banned by browsers', 'Sans-Serif typefaces render crisply on pixel grids and maintain high legibility across small mobile displays', 'They take less disk space', 'They have no vowels'],
              correctIndex: 1,
              explanation: 'Clean sans-serif geometries render with exceptional clarity on modern screens.'
            },
            resources: [{ title: 'Type Anatomy Illustrated Diagram', url: '#', type: 'Diagram' }]
          },
          {
            id: 'l-col-4',
            slug: 'font-pairing-and-modular-scales',
            title: '4. Proven Font Pairing Formulas and Modular Scales',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=YqQx75OPWA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `The Golden Rule of pairing: Combine high contrast or stick to one versatile family. Pair a distinguished Serif header (Playfair Display, Merriweather) with a neutral Sans-Serif body (Inter, Plus Jakarta Sans). Use a 1.25 (Major Third) modular scale.`,
            practicePrompt: 'Select a pairing of 1 Google font for headings and 1 for body text with distinct visual contrast.',
            quiz: {
              question: 'What is a modular type scale?',
              options: ['A bathroom scale', 'A proportional ratio (such as 1.25) multiplied systematically to determine harmonic font sizes (16, 20, 25, 31, 39px)', 'A random list of numbers', 'The font weight'],
              correctIndex: 1,
              explanation: 'Modular scales produce mathematical proportion across typographic hierarchies.'
            },
            resources: [{ title: 'Modular Scale Reference Chart', url: '#', type: 'Reference' }]
          },
          {
            id: 'l-col-5',
            slug: 'wcag-contrast-and-accessibility',
            title: '5. WCAG Color Contrast and Inclusive Design',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=6O7l8m9n0Q3',
            content: `Over 8% of men and 0.5% of women experience color blindness. Never rely on color alone to convey meaning (always pair with icons or text). Meet WCAG AA: 4.5:1 ratio for normal text, 3:1 for large text.`,
            practicePrompt: 'Use a free contrast checker to test your primary button color against white text for WCAG AA compliance.',
            quiz: {
              question: 'What is the minimum WCAG 2.1 AA contrast ratio required for normal body text against its background?',
              options: ['1:1', '2:1', '4.5:1', '100:1'],
              correctIndex: 2,
              explanation: 'A 4.5:1 ratio guarantees readable legibility for users with moderate vision impairments.'
            },
            resources: [{ title: 'WCAG Accessibility Contrast Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is "leading" (line-height) in typography?',
        options: ['The first letter of a sentence', 'The vertical space between baseline lines of text', 'The speed of reading', 'The dark color of ink'],
        correctIndex: 1,
        explanation: 'Leading controls vertical line spacing for comfortable reading cadence.'
      }
    ]
  },
  {
    id: 'course-crt-4',
    slug: 'logo-design-principles',
    title: 'Logo Design Principles',
    description: 'Learn the craft of timeless brand marks: ideation sketches, geometric construction, negative space, vector bezier curve mastery, color adaptability, and client brand guidelines.',
    categoryId: 'cat_design',
    categoryName: 'Graphic Design',
    categorySlug: 'graphic-design',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master the 5 qualities of iconic marks: Simple, Memorable, Timeless, Versatile, Appropriate',
      'Conduct visual brainstorming and sketch 30 rough concepts in 30 minutes',
      'Construct logos using geometric grids and crisp Bezier curves',
      'Incorporate clever negative space techniques',
      'Deliver scalable vector brand packages (SVG, EPS, monochrome variants)'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic vector drawing knowledge'],
    instructor: {
      name: 'Maya Lin',
      role: 'Brand Identity Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-logo-1',
        title: 'Timeless Identity Design',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-logo-1',
            slug: 'anatomy-of-iconic-logos',
            title: '1. The 5 Principles of Effective Logo Design',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `The SMART test: Simple (can a child sketch it from memory?), Memorable, Appropriate (fits the industry tone), Resilient/Timeless (avoids ephemeral trends), and Scalable (works at 16px favicon and on a billboard).`,
            practicePrompt: 'Pick 3 global logos (e.g. Nike, Apple, Target) and evaluate them against the 5 principles.',
            quiz: {
              question: 'Why is simplicity considered the supreme virtue in logo design?',
              options: ['Because designers are lazy', 'Simple logos are recognized in milliseconds, scale effortlessly to tiny favicons, and are remembered for decades', 'Simple logos cost less to print', 'Complex logos are illegal'],
              correctIndex: 1,
              explanation: 'Simplicity fuels instant cognitive recognition across all mediums.'
            },
            resources: [{ title: 'Logo Evaluation Rubric', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-logo-2',
            slug: 'ideation-and-pencil-sketching',
            title: '2. Rapid Ideation: 30 Rough Sketches in 30 Minutes',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=a5KYlHNKQB8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `Never start in software. Software forces you into micro-polishing prematurely. Fill a sketchbook grid with rapid thumbnail ideas: combine letters, metaphors, tools, and abstract forms. The best idea usually appears on sketch 20, not sketch 1.`,
            practicePrompt: 'Sketch 20 quick logo thumbnail concepts for a digital gardening startup on paper.',
            quiz: {
              question: 'Why should brand designers sketch on paper before jumping into digital software?',
              options: ['Pencils are cheaper', 'Sketching removes software friction and allows rapid exploration of dozens of divergent conceptual angles in minutes', 'Vector software does not allow lines', 'Paper is required for copyright'],
              correctIndex: 1,
              explanation: 'Freeform sketching accelerates divergence before convergent vector execution.'
            },
            resources: [{ title: 'Logo Sketching Grid Sheet', url: '#', type: 'Template' }]
          },
          {
            id: 'l-logo-3',
            slug: 'geometric-grids-and-bezier-curves',
            title: '3. Geometric Grids and Bezier Precision',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=_2LLXnUdUIc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            content: `Import your best sketch into Figma or Illustrator. Use circular guides, 45-degree angles, and golden ratios to true up edges. Master the Pen tool: use the fewest anchor points possible for butter-smooth curves.`,
            practicePrompt: 'Vectorize a hand-drawn lettermark using minimum anchor points and clean circular guides.',
            quiz: {
              question: 'In vector Bezier curve drawing, what happens when you use too many anchor points?',
              options: ['The file turns into audio', 'Curves become lumpy, uneven, and difficult to edit or scale smoothly', 'The computer shuts down', 'The lines become invisible'],
              correctIndex: 1,
              explanation: 'Fewer, strategically positioned anchor points produce smoother geometric curves.'
            },
            resources: [{ title: 'Pen Tool Vector Mastery Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-logo-4',
            slug: 'negative-space-and-clever-metaphors',
            title: '4. Clever Negative Space and Visual Metaphors',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=sByzHoiYFX0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `Negative space creates rewarding "aha!" moments that burn into memory (e.g. the hidden arrow in FedEx, the spoon in Swan & Mallard). Learn how the brain perceives foreground and background figure-ground relationships.`,
            practicePrompt: 'Design a mark that incorporates a hidden shape or letter within its negative white space.',
            quiz: {
              question: 'What psychological principle explains how the human brain perceives figure vs ground in negative space?',
              options: ['Gestalt psychology', 'Quantum mechanics', 'Pavlovian conditioning', 'Thermodynamics'],
              correctIndex: 0,
              explanation: 'Gestalt principles explain how humans group visual elements and identify emergent shapes.'
            },
            resources: [{ title: 'Negative Space Case Studies', url: '#', type: 'CaseStudy' }]
          },
          {
            id: 'l-logo-5',
            slug: 'monochrome-testing-and-exporting',
            title: '5. The Monochrome Test and Brand Asset Delivery',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=YqQx75OPWA0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            content: `A logo MUST work in pure black on white and white on black. If a mark depends on gradients or 3D shading to look good, it will fail on embroidery, stamps, and small screens. Export SVG, EPS, transparent PNG, and favicon bundles.`,
            practicePrompt: 'Test your logo design in 100% flat black on white background. Check readability at 32x32px.',
            quiz: {
              question: 'Why must every professional logo pass the monochrome (flat black and white) test?',
              options: ['Printers only have black ink', 'To ensure structural recognizability when applied to stamps, laser engraving, fax, or low-contrast backgrounds', 'Color logos are banned', 'To save electricity'],
              correctIndex: 1,
              explanation: 'Monochrome testing validates core form independence from decorative colors.'
            },
            resources: [{ title: 'Brand Asset Delivery Checklist', url: '#', type: 'Checklist' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is a "lockup" in brand identity design?',
        options: ['A security padlock', 'The standardized final arrangement of the logo icon, brand wordmark, and optional tagline together', 'A software bug', 'A contract term'],
        correctIndex: 1,
        explanation: 'A lockup defines the official spatial relationship between icon and typography.'
      }
    ]
  },
  {
    id: 'course-crt-5',
    slug: 'thumbnail-design-youtube',
    title: 'Thumbnail Design for YouTube',
    description: 'Learn how to maximize Click-Through Rate (CTR): rule of thirds framing, high-contrast cutout portraits, expressive emotional cues, 3-word rule typography, and A/B split test analysis.',
    categoryId: 'cat_design',
    categoryName: 'Graphic Design',
    categorySlug: 'graphic-design',
    difficulty: 'Beginner',
    durationMinutes: 160,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Deconstruct the psychological mechanics of viewer curiosity and Click-Through Rate (CTR)',
      'Create high-impact subject cutouts with rim lighting and subtle drop shadows',
      'Apply the "3-Word Rule" so mobile viewers digest the premise in 500 milliseconds',
      'Optimize color contrast against YouTube\'s dark and light backgrounds',
      'Analyze YouTube Analytics CTR metrics and execute A/B thumbnail tests'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Basic image editing tools (Photoshop, Photopea, or Canva)'],
    instructor: {
      name: 'Tariq Mansoor',
      role: 'Digital Media Producer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-yt-1',
        title: 'High-CTR Visual Packaging',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-yt-1',
            slug: 'ctr-psychology-and-curiosity-gaps',
            title: '1. The Psychology of the Click: Curiosity Gaps',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `Your thumbnail and title are a package deal. The title poses a curiosity question; the thumbnail visually teases the stakes. Never just copy the title text into the thumbnail. Provide complementary context.`,
            practicePrompt: 'Brainstorm 3 thumbnail visual concepts for a video titled: "I Built an App in 24 Hours".',
            quiz: {
              question: 'What is the relationship between a YouTube title and its thumbnail?',
              options: ['They should show identical text', 'They should complement each other, with the thumbnail visual creating curiosity and the title providing context', 'The thumbnail does not matter', 'They must both be blank'],
              correctIndex: 1,
              explanation: 'Complementary pairing hooks attention without repetitive redundancy.'
            },
            resources: [{ title: 'Curiosity Gap Matrix', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-yt-2',
            slug: 'framing-facial-expressions-and-lighting',
            title: '2. Expressive Facial Framing and Subject Cutouts',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=a5KYlHNKQB8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `Human eyes are biologically wired to lock onto faces. Use genuine, heightened facial expressions (curiosity, shock, intense focus). Cut out subjects cleanly and add a subtle colored rim light to pop off dark backgrounds.`,
            practicePrompt: 'Cut out a portrait subject, increase facial saturation by 10%, and apply a soft rim glow.',
            quiz: {
              question: 'Why do high-performing YouTube thumbnails frequently feature large, expressive faces?',
              options: ['Faces take less memory', 'Human brains possess dedicated neural wiring for recognizing facial emotion, creating immediate emotional connection', 'YouTube mandates it', 'Cameras only photograph faces'],
              correctIndex: 1,
              explanation: 'Emotional facial cues trigger rapid unconscious attention in crowded feeds.'
            },
            resources: [{ title: 'Subject Cutout & Glow Tutorial', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-yt-3',
            slug: 'the-three-word-text-rule',
            title: '3. The 3-Word Rule and Bold Typography',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=_2LLXnUdUIc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            content: `Over 70% of YouTube views occur on small mobile screens. Never write full paragraphs. Limit thumbnail text to 2 to 4 bold words in an ultra-thick sans-serif font (e.g. Impact, Montserrat Black). Add dark strokes or background contrast pills.`,
            practicePrompt: 'Condense a 12-word video concept into 3 punchy thumbnail words with maximum intrigue.',
            quiz: {
              question: 'Why should YouTube thumbnail text usually be restricted to under 4 words?',
              options: ['Fonts are expensive', 'Mobile viewers scroll rapidly; text must be instantly readable at 150px thumbnail width in under a second', 'Long words break pixels', 'YouTube limits letters'],
              correctIndex: 1,
              explanation: 'Brevity ensures instant readability at mobile feed scale.'
            },
            resources: [{ title: 'Thumbnail Font Pairing Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-yt-4',
            slug: 'color-contrast-and-feed-testing',
            title: '4. Color Contrast and Standing Out in the Feed',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=sByzHoiYFX0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `Analyze your niche: if all competitors use red, use neon yellow or cyan. Test your thumbnail against a mock YouTube dark mode and light mode feed at 10% zoom to verify instant focal clarity.`,
            practicePrompt: 'Place your thumbnail alongside 5 top ranking competitor thumbnails in a feed previewer and test which catches the eye first.',
            quiz: {
              question: 'Why should you preview your thumbnail at 10% zoom or 150px width before publishing?',
              options: ['To save electricity', 'To simulate the real experience of mobile phone users scrolling through a busy recommendation feed', 'To compress the image', 'It makes colors brighter'],
              correctIndex: 1,
              explanation: 'Scaling down previews reveals whether the visual focal point remains clear.'
            },
            resources: [{ title: 'YouTube Feed Preview Template', url: '#', type: 'Template' }]
          },
          {
            id: 'l-yt-5',
            slug: 'analytics-and-ab-split-testing',
            title: '5. Measuring CTR and Running Thumbnail A/B Tests',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            content: `A good CTR typically ranges from 4% to 10% depending on impression reach. Use YouTube’s native "Test & Compare" feature to upload 3 variations and let real viewer data determine the highest performing visual.`,
            practicePrompt: 'Design 2 contrasting thumbnail variants for the same topic: 1 focused on a face and 1 focused on a dramatic object comparison.',
            quiz: {
              question: 'What does CTR stand for in YouTube analytics?',
              options: ['Computer Time Running', 'Click-Through Rate (the percentage of impressions that resulted in a video click)', 'Current Total Revenue', 'Customer Telephone Record'],
              correctIndex: 1,
              explanation: 'Click-Through Rate measures how effectively packaging converts impressions into views.'
            },
            resources: [{ title: 'A/B Thumbnail Testing Framework', url: '#', type: 'PDF' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What element frequently obscures the bottom-right corner of a YouTube thumbnail?',
        options: ['A watermark', 'The video duration time badge (e.g. 14:22)', 'A sponsor logo', 'A comment counter'],
        correctIndex: 1,
        explanation: 'Always keep critical visual elements away from the bottom-right timestamp badge.'
      }
    ]
  },
  {
    id: 'course-crt-6',
    slug: 'audio-editing-audacity',
    title: 'Audio Editing with Audacity',
    description: 'Learn free audio production: microphone positioning, background noise removal, equalization, compression, vocal warmth, podcast mastering, and exporting broadcast-ready WAV and MP3 files.',
    categoryId: 'cat_video',
    categoryName: 'Video Editing',
    categorySlug: 'video-editing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Set up a low-cost, echo-reduced vocal recording environment',
      'Capture clean audio with proper microphone gain staging (avoiding clipping)',
      'Eliminate continuous background hum with Spectral Noise Reduction',
      'Apply Equalization (EQ) and Compression for rich, balanced vocal punch',
      'Export master audio files adhering to standard -16 LUFS loudness targets'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Free Audacity software and any USB microphone or smartphone'],
    instructor: {
      name: 'Tariq Mansoor',
      role: 'Audio Engineer & Sound Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-aud-1',
        title: 'Vocal Production & Audacity Tools',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-aud-1',
            slug: 'recording-hygiene-and-gain-staging',
            title: '1. Recording Hygiene and Proper Gain Staging',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=8mGf_9W2kZg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8mGf_9W2kZg',
            content: `Bad acoustics cannot be magically fixed with plugins. Record in a room with soft furnishings (carpets, curtains, clothes closets). Keep mic 6 inches from mouth with a pop filter. Set input gain so vocal peaks hit between -12dB and -6dB (never redlining at 0dB!).`,
            practicePrompt: 'Record 30 seconds of speech in your room and check your peak waveform levels in Audacity.',
            quiz: {
              question: 'Why must audio recording levels avoid hitting 0 dBFS?',
              options: ['The microphone breaks', 'Audio hitting 0 dBFS causes permanent digital clipping distortion that cannot be cleanly undone', 'It increases file size', 'The computer mutes automatically'],
              correctIndex: 1,
              explanation: 'Digital clipping chops audio waveform peaks, creating harsh irreversible distortion.'
            },
            resources: [{ title: 'Home Studio Acoustic Setup Guide', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-aud-2',
            slug: 'noise-reduction-and-gate',
            title: '2. Removing Background Noise and Room Hum',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=1y6vP0vW9tA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1y6vP0vW9tA',
            content: `Always record 5 seconds of pure room silence before speaking. In Audacity, highlight this silence -> Effect -> Noise Removal -> Get Noise Profile. Then apply subtle noise reduction (6dB to 12dB). Avoid over-reducing, which makes voices sound robotic and submerged underwater.`,
            practicePrompt: 'Capture a room noise profile and clean up a recording containing computer fan hum.',
            quiz: {
              question: 'What is a Noise Profile in Audacity?',
              options: ['Your username', 'A sample of ambient room tone used by the algorithm to identify and subtract constant background frequencies', 'The song bpm', 'A volume slider'],
              correctIndex: 1,
              explanation: 'The profile isolates background frequencies so only unwanted ambient hum is removed.'
            },
            resources: [{ title: 'Noise Reduction Settings Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-aud-3',
            slug: 'equalization-eq-for-vocals',
            title: '3. Equalization (EQ): Clarity, Warmth, and De-Essing',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            content: `EQ shapes frequency balance: 1. High-pass filter at 80Hz (cuts deep floor rumble), 2. Slight cut at 300Hz-500Hz (removes boxy "cardboard" resonance), 3. Gentle boost at 3kHz-5kHz (adds presence and vocal articulation), 4. De-ess harsh "S" sounds at 7kHz.`,
            practicePrompt: 'Apply a high-pass roll-off at 80Hz and a gentle 2dB presence boost at 4kHz to your voice track.',
            quiz: {
              question: 'What is the purpose of a High-Pass (Low-Cut) filter at 80 Hz on vocal tracks?',
              options: ['To make vocals high pitched', 'To cut sub-bass rumble from air conditioning, traffic, and mic stand bumps without affecting vocal tone', 'To delete pauses', 'To add reverb'],
              correctIndex: 1,
              explanation: 'Sub-80Hz frequencies contain ambient room rumble with zero meaningful vocal content.'
            },
            resources: [{ title: 'Vocal EQ Frequency Map', url: '#', type: 'Diagram' }]
          },
          {
            id: 'l-aud-4',
            slug: 'compression-and-loudness',
            title: '4. Dynamic Compression: Smoothing Volume Spikes',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            content: `Dynamic range is the gap between whisper and shout. A compressor brings down loud peaks and boosts quiet syllables so listeners do not have to constantly adjust their headphone volume. Set a 3:1 ratio with gentle threshold.`,
            practicePrompt: 'Apply a compressor with a -16dB threshold and 3:1 ratio to even out a dynamic vocal recording.',
            quiz: {
              question: 'What does an audio compressor do to a vocal track?',
              options: ['Makes the file a ZIP archive', 'Reduces the dynamic range between loud and quiet passages, creating a steady, broadcast-ready volume', 'Translates languages', 'Speeds up playback'],
              correctIndex: 1,
              explanation: 'Compression evens out natural volume fluctuations for consistent listening comfort.'
            },
            resources: [{ title: 'Compressor Parameter Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-aud-5',
            slug: 'exporting-and-loudness-standards',
            title: '5. Loudness Standards (-16 LUFS) and Final Export',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8mGf_9W2kZg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8mGf_9W2kZg',
            content: `Podcasts and YouTube target standardized perceived loudness. Use the Loudness Normalization effect to target -16 LUFS for stereo content (or -19 LUFS for mono). Export 24-bit WAV for archival and 320kbps MP3 for web streaming.`,
            practicePrompt: 'Normalize a 1-minute audio file to -16 LUFS and export as a high-bitrate MP3.',
            quiz: {
              question: 'What is the standard target integrated loudness in LUFS for podcast streaming platforms?',
              options: ['0 LUFS', '-5 LUFS', '-16 LUFS (stereo) / -19 LUFS (mono)', '-100 LUFS'],
              correctIndex: 2,
              explanation: '-16 LUFS is the global standard for podcast and web audio distribution.'
            },
            resources: [{ title: 'Loudness Standards Reference Table', url: '#', type: 'Reference' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is a "pop filter" used for during vocal recording?',
        options: ['Filtering out pop music', 'Dispersing high-velocity bursts of air from plosive consonants (P, B, T) that cause microphone diaphragm thumps', 'Adding reverb', 'Connecting Bluetooth'],
        correctIndex: 1,
        explanation: 'Pop filters prevent plosive air bursts from overloading the microphone capsule.'
      }
    ]
  },
  {
    id: 'course-crt-7',
    slug: 'smartphone-videography',
    title: 'Smartphone Videography',
    description: 'Create cinematic videos with your smartphone: exposure locking, framing and composition, natural lighting setups, smooth camera movement, external mobile audio, and vertical video editing.',
    categoryId: 'cat_video',
    categoryName: 'Video Editing',
    categorySlug: 'video-editing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master smartphone camera settings: 4K 24fps vs 60fps, gridlines, and exposure lock',
      'Shape natural window light and affordable LED lighting with diffusion',
      'Execute smooth cinematic pans, reveals, and parallax tracking shots handheld',
      'Connect wireless lavalier microphones for crisp, professional mobile sound',
      'Format and cut vertical videos (9:16) for Reels, Shorts, and TikTok'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['Any smartphone with a working camera'],
    instructor: {
      name: 'Tariq Mansoor',
      role: 'Commercial Filmmaker',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-spv-1',
        title: 'Cinematic Mobile Filming',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-spv-1',
            slug: 'camera-settings-and-exposure-lock',
            title: '1. Smartphone Camera Settings: Framerates and AE/AF Lock',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=qT_B2-w7oYs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `Never leave exposure on auto (the phone will flutter between bright and dark as you move). Tap and hold the screen to lock Auto Exposure / Auto Focus (AE/AF Lock). Shoot at 24fps for filmic storytelling or 60fps for slow motion. Clean your lens!`,
            practicePrompt: 'Lock AE/AF on your smartphone, adjust exposure slider down slightly, and record a 15-second tracking shot.',
            quiz: {
              question: 'Why should you always lock Auto Exposure (AE Lock) before recording video on a phone?',
              options: ['To save battery', 'To prevent the phone from constantly flickering exposure levels whenever background brightness shifts slightly', 'It increases resolution', 'Phones do not record without lock'],
              correctIndex: 1,
              explanation: 'AE lock eliminates annoying exposure breathing and jitter during shots.'
            },
            resources: [{ title: 'Smartphone Videography Camera Cheat Sheet', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-spv-2',
            slug: 'lighting-setups-on-a-budget',
            title: '2. Lighting: The Secret to High-End Smartphone Video',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1K53W4Y5lZ8',
            content: `Smartphone sensors are small; they need light to avoid grainy digital noise. Position your subject at a 45-degree angle to a large window (soft directional light). Avoid standing directly under harsh overhead ceiling bulbs.`,
            practicePrompt: 'Record a 10-second selfie clip facing a window vs facing a dark room to observe grain differences.',
            quiz: {
              question: 'Why does smartphone video look grainy and muddy in dark rooms?',
              options: ['The phone has a broken screen', 'Small mobile sensors automatically crank up digital sensor gain (ISO), introducing severe electronic noise in low light', 'Low battery causes grain', 'Lens needs zooming'],
              correctIndex: 1,
              explanation: 'Small mobile camera sensors require adequate light to prevent high-ISO digital noise.'
            },
            resources: [{ title: '3-Point Natural Lighting Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-spv-3',
            slug: 'cinematic-movement-and-stabilization',
            title: '3. Handheld Stabilization and Movement Techniques',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=3K5j7l8m9N0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=2r1pZ3j7k8A',
            content: `Master the "Ninja Walk": bend knees, keep elbows tucked into your ribcage, and roll feet from heel to toe. Use leading lines, foreground parallax wipes, and slow push-ins to add cinematic production value without an expensive gimbal.`,
            practicePrompt: 'Practice the Ninja Walk for 30 seconds while executing a smooth forward push shot past an object.',
            quiz: {
              question: 'What is the "Ninja Walk" in handheld camera operation?',
              options: ['Running fast', 'Walking with bent knees and rolling feet from heel to toe to absorb footsteps and produce smooth gliding footage', 'Jumping silently', 'Shooting from a tree'],
              correctIndex: 1,
              explanation: 'Absorbing vertical body movement through knees mimics mechanical camera stabilization.'
            },
            resources: [{ title: 'Handheld Movement Drills', url: '#', type: 'DrillSheet' }]
          },
          {
            id: 'l-spv-4',
            slug: 'mobile-microphones-and-audio',
            title: '4. Capturing Professional Audio with Mobile Microphones',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=5N6k7l8m9P2',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=4M5k7l8m9O1',
            content: `Viewers forgive average video quality, but they immediately click off bad audio. Use an affordable wireless USB-C / Lightning clip-on lavalier mic. When filming outdoors, always attach a furry windscreen ("deadcat") to eliminate wind buffeting.`,
            practicePrompt: 'Record speech 6 feet away using your phone\'s internal mic versus a lavalier clip-on mic.',
            quiz: {
              question: 'What is the purpose of a furry "deadcat" windscreen on a microphone?',
              options: ['To look like an animal', 'To break up air turbulence and prevent wind buffeting from slamming against the microphone capsule', 'To make voices louder', 'To protect against rain'],
              correctIndex: 1,
              explanation: 'Furry wind muffs diffuse wind turbulence before it distorts the audio capsule.'
            },
            resources: [{ title: 'Mobile Audio Buyer & Setup Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-spv-5',
            slug: 'vertical-storytelling-formats',
            title: '5. Vertical Framing and Fast Mobile Editing',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=qT_B2-w7oYs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
            content: `For 9:16 vertical content, place eye-level in the upper third grid. Keep subtitles in the "safe zone" (avoiding TikTok/Reels right-side action buttons and bottom captions). Hook viewers in the first 2 seconds with an on-screen visual pattern interrupt.`,
            practicePrompt: 'Cut a 30-second vertical video using CapCut or VN with tight jump cuts and safe-zone captions.',
            quiz: {
              question: 'What is the "safe zone" in vertical video production for TikTok and Instagram Reels?',
              options: ['A password folder', 'The central screen area that remains unobstructed by platform overlays (profile icons, captions, like buttons, and audio titles)', 'The top 2 pixels', 'The camera lens'],
              correctIndex: 1,
              explanation: 'Safe zones ensure on-screen text and faces are not covered by social platform UI elements.'
            },
            resources: [{ title: '9:16 Social Safe Zone Template', url: '#', type: 'Template' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What framerate provides the classic cinematic film look?',
        options: ['120 fps', '24 fps', '5 fps', '1000 fps'],
        correctIndex: 1,
        explanation: '24 frames per second replicates the motion blur and aesthetic of traditional cinema.'
      }
    ]
  },
  {
    id: 'course-crt-8',
    slug: 'storytelling-digital-creators',
    title: 'Storytelling for Digital Creators',
    description: 'Learn narrative architecture: the 3-act structure, high-stakes curiosity hooks, emotional beats, pacing, character arcs, and retention editing that keeps audiences watching until the final second.',
    categoryId: 'cat_writing',
    categoryName: 'Content Writing',
    categorySlug: 'content-writing',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 5,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Deconstruct the 3-Act narrative structure adapted for modern digital media',
      'Author magnetic opening hooks that establish clear stakes in under 5 seconds',
      'Maintain tension and curiosity loops to prevent mid-video retention drop-offs',
      'Incorporate emotional vulnerability and transformation arcs',
      'Land satisfying, shareable climaxes and non-cliché conclusions'
    ],
    completionRequirements: 'Complete all 5 lessons and pass the final exam.',
    prerequisites: ['A desire to write, speak, or create compelling content'],
    instructor: {
      name: 'Elena Rostova',
      role: 'Creative Director & Author',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-st-1',
        title: 'Digital Narrative Craft',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-st-1',
            slug: 'the-anatomy-of-the-hook',
            title: '1. The First 5 Seconds: Hook, Stakes, and Urgency',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=nE301qG9mE4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=D0y9W92y4Bw',
            content: `The modern viewer’s thumb is always ready to swipe. Never start with "Hey guys, welcome back to my channel". Start in media res (in the middle of the action): state the conflict, reveal the unexpected consequence, or raise a high-stakes question immediately.`,
            practicePrompt: 'Rewrite the opening 15 seconds of a script to start directly in the middle of a tense moment.',
            quiz: {
              question: 'Why is starting a video with "Hey guys, welcome back" ineffective in modern digital media?',
              options: ['It is illegal', 'It wastes the critical 3-second attention window on pleasantries instead of hooking the audience with stakes and curiosity', 'Viewers cannot hear greetings', 'It slows down internet'],
              correctIndex: 1,
              explanation: 'Immediate stakes hook attention before the viewer swipes away.'
            },
            resources: [{ title: '15 High-Retention Video Hooks', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-st-2',
            slug: 'the-three-act-structure-digital',
            title: '2. The 3-Act Structure Adapted for Fast Media',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Act 1: The Setup & Inciting Incident (what changed?). Act 2: Rising Friction & The Midpoint Twist (the struggle gets harder). Act 3: The Climax & Resolution (the breakthrough and key lesson).`,
            practicePrompt: 'Outline a 2-minute personal story using the 3-act framework.',
            quiz: {
              question: 'What is the "Inciting Incident" in a narrative structure?',
              options: ['The credits at the end', 'The specific event that disrupts the status quo and forces the protagonist onto a new quest or challenge', 'The lighting of a fire', 'A spelling mistake'],
              correctIndex: 1,
              explanation: 'The inciting incident propels the protagonist out of comfort into action.'
            },
            resources: [{ title: '3-Act Digital Story Canvas', url: '#', type: 'Template' }]
          },
          {
            id: 'l-st-3',
            slug: 'open-loops-and-curiosity-chains',
            title: '3. Open Loops: Keeping Audiences Glued to the Screen',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=UNer_XgY7z0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=p43qW5e3q2E',
            content: `The human brain seeks cognitive closure. Introduce a question or mystery early ("By the end of this project, I made a mistake that almost lost us the entire client..."), and withhold the resolution until Act 3 while answering smaller intermediate questions along the way.`,
            practicePrompt: 'Draft an open loop for an educational tutorial that promises an unexpected revelation at the end.',
            quiz: {
              question: 'What is an "Open Loop" in storytelling psychology?',
              options: ['An infinite code crash', 'A deliberate narrative question or incomplete idea planted in the audience’s mind that compels them to keep watching for closure', 'A camera lens', 'A circular animation'],
              correctIndex: 1,
              explanation: 'Unclosed cognitive loops harness curiosity to sustain engagement.'
            },
            resources: [{ title: 'Curiosity Chain Architecture', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-st-4',
            slug: 'vulnerability-and-the-flaw',
            title: '4. Vulnerability: Why Perfect Protagonists Are Boring',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=i9YQ_VkWb5M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Qc6yV8G3EAE',
            content: `Audiences do not connect with flawless perfection; they connect with struggle, doubt, and relatable missteps. Share the moment you felt like an imposter or when your first launch fell flat. Vulnerability breeds immense trust.`,
            practicePrompt: 'Write a 100-word paragraph detailing a failure in your journey and the specific lesson it taught you.',
            quiz: {
              question: 'Why do audiences resonate more deeply with flawed, vulnerable creators than untouchable perfectionists?',
              options: ['Flaws make people laugh', 'Vulnerability mirrors the human condition and makes lessons credible, inspiring, and authentic', 'Perfection is too fast', 'People only want bad news'],
              correctIndex: 1,
              explanation: 'Authentic vulnerability bridges emotional distance and creates enduring loyalty.'
            },
            resources: [{ title: 'Authentic Narrative Prompts', url: '#', type: 'Worksheet' }]
          },
          {
            id: 'l-st-5',
            slug: 'climaxes-and-call-to-actions',
            title: '5. The Climax, Transformation, and Lingering Payoff',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=9g0H29W6F2U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=kY67Z3j9r7c',
            content: `The climax is the moment of greatest tension where the solution is realized. Conclude not with a dry sales pitch, but by connecting the story’s core transformation back to the viewer: "And that is why you do not need 10 years of experience to start today..."`,
            practicePrompt: 'Write a 4-sentence conclusion tying a personal experience back to an empowering insight for your reader.',
            quiz: {
              question: 'What should the conclusion of an educational story achieve?',
              options: ['Beg for money desperately', 'Deliver emotional closure on the central quest and transfer the empowering lesson directly to the audience’s own life', 'Fade to black with no words', 'Introduce 5 new unrelated topics'],
              correctIndex: 1,
              explanation: 'The payoff transforms entertainment into durable personal inspiration.'
            },
            resources: [{ title: 'Story Climax & CTA Formulas', url: '#', type: 'PDF' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does "In Media Res" mean in storytelling technique?',
        options: ['Writing in Latin', 'Beginning a story in the middle of the action or conflict without prior exposition', 'Recording with media files', 'Ending with a moral'],
        correctIndex: 1,
        explanation: 'In media res grabs attention by dropping audiences straight into active conflict.'
      }
    ]
  }
];
