import { Course } from './types';

export const PROGRAMMING_COURSES: Course[] = [
  {
    id: 'course-prog-1',
    slug: 'javascript-beginners',
    title: 'JavaScript for Beginners',
    description: 'Learn fundamental programming syntax, variables, conditionals, loops, functions, array methods, and DOM manipulation to make websites interactive.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Beginner',
    durationMinutes: 240,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand variables (const, let), primitives, and data types',
      'Control program flow using if/else logic and loops',
      'Write modular, reusable functions and arrow syntax',
      'Manipulate arrays using map, filter, and reduce',
      'Select and update DOM elements dynamically',
      'Handle asynchronous operations with Promises and async/await'
    ],
    completionRequirements: 'Complete all 6 lessons, pass the 10-question final exam with at least 70%, and submit the interactive counter final project.',
    prerequisites: ['Basic HTML and CSS understanding'],
    instructor: {
      name: 'Kavita Patel',
      role: 'Senior JavaScript Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-js-1',
        title: 'Core Language Fundamentals',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-js-1',
            slug: 'variables-and-data-types',
            title: '1. Variables, Constants, and Data Types',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=13gLB6hDHR8',
            content: `JavaScript is a dynamically typed language that executes inside web browsers and server runtimes like Node.js.\n\n### Variable Declarations\nAlways default to \`const\` for values that do not reassign. Use \`let\` when a variable must change value. Avoid legacy \`var\`.\n\n\`\`\`javascript\nconst courseName = "Ashiskillrise JavaScript";\nlet studentCount = 150;\nstudentCount += 1;\n\`\`\`\n\n### Primitive Types\n1. String: \`"Hello World"\`\n2. Number: \`42\`, \`3.14\`\n3. Boolean: \`true\`, \`false\`\n4. Null: Explicit absence of a value\n5. Undefined: Uninitialized variable\n6. Symbol & BigInt`,
            practicePrompt: 'Declare three variables storing your first name (string), current age (number), and whether you are enrolled in Ashiskillrise (boolean). Print them to the console.',
            quiz: {
              question: 'Which variable keyword should you prefer by default in modern JavaScript?',
              options: ['var', 'const', 'global', 'define'],
              correctIndex: 1,
              explanation: 'Using const by default prevents unintentional reassignments and bugs.'
            },
            resources: [{ title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org', type: 'Documentation' }]
          },
          {
            id: 'l-js-2',
            slug: 'conditionals-and-logic',
            title: '2. Conditional Logic and Comparison Operators',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=IsG4Xd6LlsM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=ajdRvxDWH4w',
            content: `Decisions in code allow programs to branch and respond to inputs.\n\n### Strict Equality vs Loose Equality\nAlways use strict equality (\`===\`) instead of loose equality (\`==\`) to prevent unexpected type coercion.\n\n\`\`\`javascript\nconst score = 85;\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 70) {\n  console.log("Grade: B");\n} else {\n  console.log("Needs revision");\n}\n\`\`\``,
            practicePrompt: 'Write an if/else block that checks if an item price is over $50. If true, apply a 10% discount and print the new price.',
            quiz: {
              question: 'Why is "===" preferred over "==" in JavaScript?',
              options: ['It runs 10x faster', 'It checks both value and type without type coercion', 'It works only with numbers', 'It ignores capitalization'],
              correctIndex: 1,
              explanation: 'Strict equality (===) ensures both data type and value match exactly.'
            },
            resources: [{ title: 'JavaScript Operators Reference', url: '#', type: 'Reference' }]
          },
          {
            id: 'l-js-3',
            slug: 'functions-and-scope',
            title: '3. Functions, Parameters, and Arrow Syntax',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=N8ap4k_1QEQ',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=P0XMXqdgQ_4',
            content: `Functions are first-class citizens in JavaScript: they can be passed as arguments, assigned to variables, and returned from other functions.\n\n\`\`\`javascript\n// Arrow function syntax\nconst calculateTotal = (price, taxRate = 0.08) => {\n  return price + (price * taxRate);\n};\nconsole.log(calculateTotal(100)); // 108\n\`\`\``,
            practicePrompt: 'Write an arrow function named calculateDiscount that accepts totalAmount and discountPercent, returning the discounted price.',
            quiz: {
              question: 'What is a default parameter in a JavaScript function?',
              options: ['A parameter that cannot be changed', 'A fallback value assigned if no argument is passed during execution', 'A parameter only available to admins', 'An error handler'],
              correctIndex: 1,
              explanation: 'Default parameters guarantee a value is present even if the caller omits the argument.'
            },
            resources: [{ title: 'Functions Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-js-4',
            slug: 'arrays-and-iteration',
            title: '4. Arrays and Modern Methods (map, filter, reduce)',
            durationMinutes: 45,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=oigfaZ5ApsM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=938gWwsf3rQ',
            content: `Modern JavaScript emphasizes declarative array manipulation over traditional for loops.\n\n\`\`\`javascript\nconst scores = [65, 82, 90, 45, 95];\n// Filter passing scores\nconst passing = scores.filter(s => s >= 70);\n// Double scores\nconst curved = scores.map(s => s + 5);\n\`\`\``,
            practicePrompt: 'Given an array of student names, use .filter() to return only names starting with the letter "A".',
            quiz: {
              question: 'Which array method transforms every element in an array into a new array of equal length?',
              options: ['filter', 'map', 'forEach', 'splice'],
              correctIndex: 1,
              explanation: 'Array.prototype.map creates a new array with the results of calling a provided function on every element.'
            },
            resources: [{ title: 'Array Methods Cheat Sheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-js-5',
            slug: 'dom-manipulation-and-events',
            title: '5. DOM Selection, Manipulation, and Event Listeners',
            durationMinutes: 45,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=y17RuWkWdn8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=s3w2bF0Gj7g',
            content: `The Document Object Model (DOM) connects JavaScript to web page elements.\n\n\`\`\`javascript\nconst button = document.querySelector('#enroll-btn');\nbutton.addEventListener('click', (e) => {\n  button.textContent = 'Enrolled!';\n  button.classList.add('bg-emerald-600');\n});\n\`\`\``,
            practicePrompt: 'Write a small script that listens to a form submit event, prevents the default reload with e.preventDefault(), and reads input values.',
            quiz: {
              question: 'What does "event.preventDefault()" do in a form submission handler?',
              options: ['Clears all inputs immediately', 'Prevents the browser from executing the default page reload', 'Closes the browser window', 'Deletes the database'],
              correctIndex: 1,
              explanation: 'preventDefault() stops standard browser behavior such as full page refresh on submit.'
            },
            resources: [{ title: 'DOM Manipulation Interactive Guide', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-js-6',
            slug: 'async-await-and-fetch',
            title: '6. Asynchronous Programming with Async/Await and Fetch',
            durationMinutes: 45,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=PoRJizFvM7s',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7wUCzGQ_B0I',
            content: `Web applications constantly fetch data across networks. Async/await allows you to write asynchronous code that reads like synchronous steps.\n\n\`\`\`javascript\nasync function loadCourses() {\n  try {\n    const response = await fetch('/api/courses');\n    if (!response.ok) throw new Error('Network error');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Fetch failed:', error.message);\n  }\n}\n\`\`\``,
            practicePrompt: 'Write an async function that queries a public mock API, parses JSON, and logs the first title to the console.',
            quiz: {
              question: 'Which keyword must precede a function definition if you intend to use "await" inside it?',
              options: ['defer', 'async', 'promise', 'fetch'],
              correctIndex: 1,
              explanation: 'The async keyword designates that a function returns a Promise and permits the await keyword.'
            },
            resources: [{ title: 'Async/Await Tutorial', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'Which declaration creates a block-scoped variable that cannot be reassigned?',
        options: ['var', 'let', 'const', 'static'],
        correctIndex: 2,
        explanation: 'const creates an immutable binding within its block scope.'
      },
      {
        question: 'What data type is the result of typeof NaN in JavaScript?',
        options: ['number', 'undefined', 'object', 'NaN'],
        correctIndex: 0,
        explanation: 'In JavaScript, NaN (Not-a-Number) is formally of type number.'
      },
      {
        question: 'Which method removes the last element from an array and returns it?',
        options: ['shift()', 'pop()', 'push()', 'splice()'],
        correctIndex: 1,
        explanation: 'pop() removes and returns the last element of an array.'
      },
      {
        question: 'How do you check if an array includes a specific item in modern JavaScript?',
        options: ['arr.hasItem(item)', 'arr.includes(item)', 'arr.contains(item)', 'arr.findItem(item)'],
        correctIndex: 1,
        explanation: 'Array.prototype.includes() returns true if the specified element is found.'
      },
      {
        question: 'What is the purpose of JSON.stringify()?',
        options: ['Converts a JSON string into an object', 'Converts a JavaScript object into a JSON string', 'Encrypts a string', 'Validates email formats'],
        correctIndex: 1,
        explanation: 'JSON.stringify() converts a JavaScript object or value into a JSON string.'
      },
      {
        question: 'Which event fires when an HTML input element loses focus?',
        options: ['hover', 'blur', 'change', 'unload'],
        correctIndex: 1,
        explanation: 'The blur event fires when an element loses focus.'
      },
      {
        question: 'What does the spread operator (...) do when used with an array?',
        options: ['Deletes duplicate elements', 'Expands an iterable into individual elements', 'Reverses the array order', 'Sorts numbers'],
        correctIndex: 1,
        explanation: 'The spread operator expands an array or object in-place.'
      },
      {
        question: 'What is a JavaScript closure?',
        options: ['Closing the browser tab', 'A function bundled with references to its surrounding lexical state', 'A CSS property', 'A syntax error'],
        correctIndex: 1,
        explanation: 'A closure gives an inner function access to an outer function scope.'
      },
      {
        question: 'Which method parses a JSON string into a JavaScript object?',
        options: ['JSON.parse()', 'JSON.decode()', 'JSON.objectify()', 'JSON.toObject()'],
        correctIndex: 0,
        explanation: 'JSON.parse() deserializes a JSON string into memory objects.'
      },
      {
        question: 'What state is a Promise in while an async operation is still executing?',
        options: ['fulfilled', 'pending', 'rejected', 'settled'],
        correctIndex: 1,
        explanation: 'A pending Promise is neither fulfilled nor rejected yet.'
      }
    ],
    finalProject: {
      title: 'Interactive Task & Budget Calculator',
      brief: 'Build a fully functioning interactive web application using pure JavaScript. Allow users to add items with amounts, calculate total expenses in real-time, filter by category, and save state to localStorage.',
      requirements: [
        'Form with input validation for task title and numeric cost',
        'Dynamic DOM creation and deletion of items',
        'Real-time running balance calculation',
        'Persistence using localStorage so data survives page refresh'
      ]
    }
  },
  {
    id: 'course-prog-2',
    slug: 'python-programming-fundamentals',
    title: 'Python Programming Fundamentals',
    description: 'Learn clean Python syntax, data structures (lists, dictionaries, sets), file I/O, error handling, and basic automation scripts for real-world tasks.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Beginner',
    durationMinutes: 240,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master Python syntax, whitespace rules, and core types',
      'Work with lists, tuples, dictionaries, and list comprehensions',
      'Create reusable functions with *args and **kwargs',
      'Read and write text and CSV files on the local file system',
      'Handle exceptions using try/except/finally blocks',
      'Build a command-line automation script'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the 10-question final exam with 70%+.',
    prerequisites: ['Basic computer literacy'],
    instructor: {
      name: 'Dr. Tariq Al-Mansoor',
      role: 'Computer Science Instructor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-py-1',
        title: 'Python Essentials',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-py-1',
            slug: 'python-syntax-and-variables',
            title: '1. Python Syntax, Indentation, and Types',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7wnove7K-ZQ',
            content: `Python uses significant whitespace and clean English-like syntax instead of curly brackets.\n\n\`\`\`python\nname = "Ashiskillrise"\nage = 3\nis_active = True\nprint(f"Welcome to {name}, online for {age} years.")\n\`\`\``,
            practicePrompt: 'Write a Python snippet declaring your name, a target annual salary, and compute your monthly income using an f-string.',
            quiz: {
              question: 'How does Python define code blocks such as loops and function bodies?',
              options: ['Curly braces {}', 'Consistent indentation (typically 4 spaces)', 'Begin/End keywords', 'Semicolons'],
              correctIndex: 1,
              explanation: 'Python uses indentation to demarcate blocks of code.'
            },
            resources: [{ title: 'Official Python Tutorial', url: 'https://docs.python.org/3/tutorial/', type: 'Documentation' }]
          },
          {
            id: 'l-py-2',
            slug: 'lists-and-dictionaries',
            title: '2. Lists, Tuples, and Dictionaries',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=gfDE2a79abA',
            content: `Master Python’s built-in collection types:\n- Lists: ordered, mutable \`[1, 2, 3]\`\n- Tuples: ordered, immutable \`(1, 2, 3)\`\n- Dictionaries: key-value hash maps \`{"course": "Python", "hours": 4}\`\n\n\`\`\`python\nuser = {"name": "Alex", "enrolled": ["AI", "Web"]}\nuser["enrolled"].append("Python")\n\`\`\``,
            practicePrompt: 'Create a dictionary representing a book with title, author, and page count. Add a new key for rating.',
            quiz: {
              question: 'What is the primary difference between a Python list and a tuple?',
              options: ['Lists are immutable; tuples are mutable', 'Lists are mutable; tuples are immutable', 'Tuples only hold numbers', 'Lists cannot be indexed'],
              correctIndex: 1,
              explanation: 'Once created, tuples cannot be modified (immutable), while lists can change (mutable).'
            },
            resources: [{ title: 'Data Structures in Python', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-py-3',
            slug: 'loops-and-comprehensions',
            title: '3. For Loops, While Loops, and List Comprehensions',
            durationMinutes: 40,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=6iF8Xb7Z3wQ',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=TqPzwenhMj0',
            content: `List comprehensions provide an elegant syntax to create lists based on existing lists.\n\n\`\`\`python\nnumbers = [1, 2, 3, 4, 5, 6]\nevens = [n for n in numbers if n % 2 == 0]\nsquares = [n**2 for n in numbers]\n\`\`\``,
            practicePrompt: 'Use a list comprehension to extract all words longer than 4 characters from a list of strings.',
            quiz: {
              question: 'What does the expression [x * 2 for x in [1, 2, 3]] evaluate to?',
              options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', '6'],
              correctIndex: 1,
              explanation: 'Each element in [1, 2, 3] is multiplied by 2.'
            },
            resources: [{ title: 'List Comprehensions Illustrated', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-py-4',
            slug: 'functions-and-modules',
            title: '4. Functions, Return Values, and Imports',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=daefaLgNkw0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=JxzZxdPR-48',
            content: `Encapsulate repetitive logic with functions. Import standard libraries such as \`math\`, \`random\`, and \`datetime\`.\n\n\`\`\`python\ndef calculate_roi(investment, returns):\n    gain = returns - investment\n    return round((gain / investment) * 100, 2)\n\`\`\``,
            practicePrompt: 'Write a function that accepts a sentence string and returns the count of vowels.',
            quiz: {
              question: 'Which keyword is used to import an external module in Python?',
              options: ['require', 'import', 'include', 'use'],
              correctIndex: 1,
              explanation: 'The import keyword brings modules into current namespace.'
            },
            resources: [{ title: 'Python Standard Library', url: '#', type: 'Reference' }]
          },
          {
            id: 'l-py-5',
            slug: 'file-handling-and-csv',
            title: '5. File I/O and Working with CSV Files',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7uV8Zl3-u5g',
            content: `Always use the \`with\` context manager when reading or writing files to ensure system descriptors close automatically.\n\n\`\`\`python\nwith open("students.txt", "w") as f:\n    f.write("Alice\\nBob\\nCharlie")\n\nwith open("students.txt", "r") as f:\n    content = f.read()\n\`\`\``,
            practicePrompt: 'Write a Python snippet that reads lines from a text file and prints each with line numbers.',
            quiz: {
              question: 'Why should you use the "with open(...)" statement when opening files in Python?',
              options: ['It accelerates reading by 50%', 'It automatically closes the file even if an exception occurs', 'It is required to open PDFs', 'It encrypts the data'],
              correctIndex: 1,
              explanation: 'Context managers guarantee resources are cleaned up safely.'
            },
            resources: [{ title: 'Working with Files in Python', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-py-6',
            slug: 'exception-handling-and-cli',
            title: '6. Error Handling and Command Line Tools',
            durationMinutes: 45,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=D0y9W92y4Bw',
            content: `Defensive programming catches errors before they crash running scripts.\n\n\`\`\`python\ntry:\n    user_input = int(input("Enter number: "))\n    result = 100 / user_input\nexcept ValueError:\n    print("Please enter a valid integer.")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero.")\nelse:\n    print(f"Result: {result}")\n\`\`\``,
            practicePrompt: 'Create a CLI tool that prompts the user for two numbers and safely divides them with full error handling.',
            quiz: {
              question: 'Which block in a Python try/except statement executes only when NO exception was raised?',
              options: ['finally', 'else', 'catch', 'ensure'],
              correctIndex: 1,
              explanation: 'The else block runs only if the try block succeeded without exceptions.'
            },
            resources: [{ title: 'Python Exceptions Guide', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'Which built-in function returns the length of a string or collection in Python?',
        options: ['count()', 'size()', 'len()', 'length()'],
        correctIndex: 2,
        explanation: 'len() returns the number of items in an object.'
      },
      {
        question: 'What is the output of print(2 ** 3) in Python?',
        options: ['6', '8', '9', '5'],
        correctIndex: 1,
        explanation: '** is the exponentiation operator in Python (2^3 = 8).'
      },
      {
        question: 'How do you create an empty dictionary in Python?',
        options: ['{}', '[]', '()', 'dict.empty()'],
        correctIndex: 0,
        explanation: '{} initializes an empty dictionary.'
      },
      {
        question: 'Which operator checks if an item exists inside a list or dictionary in Python?',
        options: ['has', 'in', 'contains', 'exists'],
        correctIndex: 1,
        explanation: 'The in operator checks membership.'
      },
      {
        question: 'What does the break statement do inside a loop?',
        options: ['Skips current iteration', 'Terminates the loop immediately', 'Restarts the loop from beginning', 'Causes a syntax error'],
        correctIndex: 1,
        explanation: 'break exits the enclosing loop.'
      },
      {
        question: 'How do you convert a string "42" to an integer in Python?',
        options: ['Integer("42")', 'int("42")', 'to_int("42")', 'parse("42")'],
        correctIndex: 1,
        explanation: 'int() casts numeric strings into integers.'
      },
      {
        question: 'Which file mode opens a file for appending without truncating existing content?',
        options: ['"r"', '"w"', '"a"', '"x"'],
        correctIndex: 2,
        explanation: '"a" opens a file in append mode.'
      },
      {
        question: 'What does PEP 8 represent in Python?',
        options: ['The Python compiler version', 'The official style guide for Python code', 'A database protocol', 'A security package'],
        correctIndex: 1,
        explanation: 'PEP 8 is the official Python style guide.'
      },
      {
        question: 'What data type is returned by the input() function in Python 3?',
        options: ['int', 'str', 'float', 'None'],
        correctIndex: 1,
        explanation: 'input() always returns a string.'
      },
      {
        question: 'Which method removes leading and trailing whitespace from a Python string?',
        options: ['trim()', 'strip()', 'clean()', 'chop()'],
        correctIndex: 1,
        explanation: 'strip() strips whitespace from both ends.'
      }
    ],
    finalProject: {
      title: 'Automated Log Analyzer & Summary Report',
      brief: 'Write a Python script that reads an unorganized text log file of server events, extracts error messages, counts occurrences per hour, and outputs a formatted summary report to both console and a new CSV file.',
      requirements: [
        'Read text file using with open() context manager',
        'Extract timestamps and error types using string methods or regex',
        'Store and count frequencies using a dictionary',
        'Output a clean formatted CSV report'
      ]
    }
  },
  {
    id: 'course-prog-3',
    slug: 'responsive-web-design',
    title: 'Responsive Web Design',
    description: 'Learn modern fluid layouts, flexible grids, media queries, mobile-first breakpoints, fluid typography, and responsive imagery across all viewports.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Beginner',
    durationMinutes: 210,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Master the viewport meta tag and fluid box sizing',
      'Implement mobile-first media query architectures',
      'Build dynamic multi-column layouts using CSS Grid and Flexbox',
      'Apply fluid typography using clamp()',
      'Implement responsive images with srcset and sizes attributes',
      'Test layouts across mobile, tablet, and widescreen displays'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the 10-question final exam.',
    prerequisites: ['HTML and CSS basics'],
    instructor: {
      name: 'Elena Rostova',
      role: 'UI Systems Specialist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-rwd-1',
        title: 'Responsive Foundations',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-rwd-1',
            slug: 'viewport-meta-and-units',
            title: '1. The Viewport Meta Tag and Modern CSS Units',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=srvUrASNj0s',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BSwa_5_Zg8A',
            content: `Without the viewport meta tag, mobile browsers display websites zoomed out like a miniature desktop page.\n\n\`\`\`html\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\`\`\`\n\nUse relative units: \`rem\` for typography, \`%\` and \`fr\` for fluid containers, and \`ch\` for readable text measure.`,
            practicePrompt: 'Set up an HTML document head with proper responsive viewport meta tags.',
            quiz: {
              question: 'What happens on a smartphone if the viewport meta tag is omitted?',
              options: ['The page fails to load', 'The smartphone renders a 980px desktop viewport and scales it down, making text tiny', 'The browser crashes', 'All images turn black'],
              correctIndex: 1,
              explanation: 'Mobile browsers default to a desktop virtual viewport when the tag is missing.'
            },
            resources: [{ title: 'MDN Viewport Guide', url: '#', type: 'Documentation' }]
          },
          {
            id: 'l-rwd-2',
            slug: 'mobile-first-media-queries',
            title: '2. Mobile-First Media Queries',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=vqW1L3Q3P5M',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Edsxf_NBFrw',
            content: `Write base styles for mobile devices first. Use \`min-width\` queries to enhance the layout as screen real estate grows.\n\n\`\`\`css\n.card-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n@media (min-width: 768px) {\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\`\`\``,
            practicePrompt: 'Write a mobile-first media query that switches a navigation menu from a vertical stack to a horizontal bar at 640px.',
            quiz: {
              question: 'Why is mobile-first design considered standard practice?',
              options: ['It guarantees the fastest performance on low-power devices and simplifies CSS cascading', 'Desktop monitors are obsolete', 'Search engines forbid max-width queries', 'It eliminates the need for HTML'],
              correctIndex: 0,
              explanation: 'Mobile-first prioritizes core content and adds visual complexity progressively.'
            },
            resources: [{ title: 'CSS Breakpoints Guide', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-rwd-3',
            slug: 'fluid-typography-clamp',
            title: '3. Fluid Typography with clamp()',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `Instead of writing dozens of media queries for font sizes, use CSS \`clamp(min, preferred, max)\`.\n\n\`\`\`css\nh1 {\n  font-size: clamp(2rem, 5vw, 3.5rem);\n}\n\`\`\``,
            practicePrompt: 'Create a heading style that smoothly scales between 24px on mobile and 48px on large screens using clamp().',
            quiz: {
              question: 'In clamp(1.5rem, 4vw, 3rem), what is the smallest font size rendered?',
              options: ['4vw', '1.5rem', '3rem', '0'],
              correctIndex: 1,
              explanation: 'The first parameter in clamp() defines the minimum value.'
            },
            resources: [{ title: 'Modern Fluid Typography Calculator', url: '#', type: 'Tool' }]
          },
          {
            id: 'l-rwd-4',
            slug: 'responsive-images-srcset',
            title: '4. Responsive Images with srcset and sizes',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `Never serve a 4MB 4000px desktop banner to a smartphone on mobile data. Use \`srcset\` to supply tailored resolutions.\n\n\`\`\`html\n<img src="small.jpg"\n     srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1600w"\n     sizes="(max-width: 600px) 100vw, 50vw"\n     alt="Responsive showcase">\n\`\`\``,
            practicePrompt: 'Write an img tag using srcset with three resolutions for mobile, tablet, and desktop.',
            quiz: {
              question: 'What is the purpose of the srcset attribute on an img tag?',
              options: ['It applies CSS filters', 'It provides a list of image file sources and their intrinsic widths for the browser to choose from', 'It renames the image', 'It disables right-clicking'],
              correctIndex: 1,
              explanation: 'srcset lets browsers download the optimal image file for the device display.'
            },
            resources: [{ title: 'Responsive Images MDN', url: '#', type: 'Documentation' }]
          },
          {
            id: 'l-rwd-5',
            slug: 'flexbox-and-grid-synergy',
            title: '5. Combining Flexbox and CSS Grid',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=2RLPtWz8v70',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=vqW1L3Q3P5M',
            content: `Use CSS Grid for page-level 2D layouts (headers, sidebars, main feeds). Use Flexbox for 1D component micro-layouts (navigation links, buttons with icons, pill lists).`,
            practicePrompt: 'Create a page layout using CSS Grid for the outer shell and Flexbox for the top navbar items.',
            quiz: {
              question: 'When should you choose CSS Grid over Flexbox?',
              options: ['When aligning items in a single horizontal row', 'When designing a two-dimensional layout with both rows and columns', 'Only when using Safari', 'Never'],
              correctIndex: 1,
              explanation: 'Grid is designed for two-dimensional layout control.'
            },
            resources: [{ title: 'CSS Layout Mastery', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-rwd-6',
            slug: 'cross-device-testing',
            title: '6. Responsive Testing, DevTools, and Touch Targets',
            durationMinutes: 35,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BSwa_5_Zg8A',
            content: `Always audit tap targets for mobile usability (minimum 44x44px per WCAG standards). Use browser responsive design mode, test zoom behavior, and test portrait versus landscape orientations.`,
            practicePrompt: 'Inspect your favorite website using browser DevTools responsive device simulation at 375px width.',
            quiz: {
              question: 'What is the recommended minimum touch target size for interactive mobile buttons?',
              options: ['12x12px', '24x24px', '44x44px', '100x100px'],
              correctIndex: 2,
              explanation: 'WCAG guidelines recommend interactive targets be at least 44x44 CSS pixels.'
            },
            resources: [{ title: 'Mobile Usability Checklist', url: '#', type: 'Cheatsheet' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'Which CSS media feature detects whether the user prefers dark mode?',
        options: ['(screen: dark)', '(prefers-color-scheme: dark)', '(color-mode: dark)', '(theme: dark)'],
        correctIndex: 1,
        explanation: '@media (prefers-color-scheme: dark) targets system color preferences.'
      },
      {
        question: 'What does 1rem equal by default in standard browser environments?',
        options: ['10px', '16px', '24px', '12px'],
        correctIndex: 1,
        explanation: 'Default root html font size is 16px.'
      },
      {
        question: 'Which property prevents horizontal scrollbars caused by oversized child containers?',
        options: ['overflow-x: hidden', 'display: none', 'margin: 0', 'width: 100%'],
        correctIndex: 0,
        explanation: 'overflow-x: hidden clips any horizontal overflow.'
      },
      {
        question: 'In CSS Grid, what does repeat(auto-fit, minmax(250px, 1fr)) do?',
        options: ['Creates exactly 3 columns', 'Automatically wraps columns when viewport narrows below 250px without media queries', 'Fixes grid width to 250px', 'Errors out'],
        correctIndex: 1,
        explanation: 'auto-fit creates intrinsically responsive column wrapping.'
      },
      {
        question: 'Which CSS rule makes an image scale proportionally within its container without distortion?',
        options: ['max-width: 100%; height: auto;', 'width: 100%; height: 100%;', 'object-fit: none;', 'transform: scale(1);'],
        correctIndex: 0,
        explanation: 'max-width: 100% and height: auto keeps intrinsic aspect ratio intact.'
      },
      {
        question: 'What unit represents 1% of the viewport width?',
        options: ['1vh', '1vw', '1rem', '1ch'],
        correctIndex: 1,
        explanation: 'vw stands for viewport width.'
      },
      {
        question: 'What does the picture element allow in HTML5?',
        options: ['Embedding MP4 videos', 'Providing multiple art-directed image sources tailored for different viewports and formats', 'Playing music', 'Editing photos online'],
        correctIndex: 1,
        explanation: 'The picture element enables art direction and format switching (e.g. WebP/AVIF).'
      },
      {
        question: 'Which CSS property enables hardware acceleration for smoother mobile transitions?',
        options: ['transform', 'left', 'margin-left', 'width'],
        correctIndex: 0,
        explanation: 'Transforms and opacity animate on the compositor thread.'
      },
      {
        question: 'How do you prevent font sizes from shrinking below 14px on small mobile displays?',
        options: ['Use clamp(14px, 2vw, 18px)', 'Disable mobile devices', 'Use font-size: 10px', 'Remove body tags'],
        correctIndex: 0,
        explanation: 'clamp() enforces an explicit minimum value.'
      },
      {
        question: 'What does "text-wrap: balance" achieve in modern browsers?',
        options: ['Centers all paragraphs', 'Balances line lengths to avoid typographic orphan words in headlines', 'Underlines headlines', 'Translates text'],
        correctIndex: 1,
        explanation: 'text-wrap: balance harmonizes heading lines aesthetically.'
      }
    ],
    finalProject: {
      title: 'Responsive Multi-Device Agency Landing Page',
      brief: 'Design and code a fully responsive landing page for a creative agency. Include a fluid hero section, a responsive 3-column features grid, an accessible mobile navigation drawer, and an FAQ accordion.',
      requirements: [
        '100% responsive from 320px mobile to 1920px ultrawide',
        'Fluid typography using clamp()',
        'WCAG AA accessible tap targets and color contrast',
        'No horizontal overflow on any viewport'
      ]
    }
  },
  {
    id: 'course-prog-4',
    slug: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Learn modern React with functional components, JSX, props, state management with useState, side effects with useEffect, and custom hooks.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Intermediate',
    durationMinutes: 240,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand declarative UI and virtual DOM diffing',
      'Compose clean reusable components with typed props',
      'Manage local component state with useState and immutability',
      'Synchronize with external systems using useEffect safely',
      'Lift state up and share data via React Context',
      'Build performant custom hooks'
    ],
    completionRequirements: 'Complete all 6 lessons and score 70%+ on final exam.',
    prerequisites: ['JavaScript for Beginners'],
    instructor: {
      name: 'Alex Rivera',
      role: 'Staff Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-react-1',
        title: 'Modern React Architecture',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-react-1',
            slug: 'components-and-jsx',
            title: '1. Functional Components, JSX, and Props',
            durationMinutes: 40,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=RGKi6LSPDLU',
            content: `React lets you build user interfaces out of individual pieces called components.\n\n\`\`\`tsx\ninterface CourseBadgeProps {\n  title: string;\n  isFree: boolean;\n}\n\nexport function CourseBadge({ title, isFree }: CourseBadgeProps) {\n  return (\n    <div className="flex items-center gap-2 p-2">\n      <span>{title}</span>\n      <span>{isFree ? "Free" : "Premium"}</span>\n    </div>\n  );\n}\n\`\`\``,
            practicePrompt: 'Write a React component that accepts studentName and courseProgress (number) and renders a progress bar.',
            quiz: {
              question: 'What is JSX in React?',
              options: ['A separate programming language', 'A syntax extension for JavaScript that looks similar to HTML', 'A CSS preprocessor', 'A database format'],
              correctIndex: 1,
              explanation: 'JSX allows you to write HTML-like markup inside JavaScript.'
            },
            resources: [{ title: 'React Official Documentation', url: 'https://react.dev', type: 'Documentation' }]
          },
          {
            id: 'l-react-2',
            slug: 'state-with-usestate',
            title: '2. Managing Component State with useState',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=4UZrsTqkcW4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=vz1RlUyrc3w',
            content: `State holds data that changes over time. Always treat React state as immutable.\n\n\`\`\`tsx\nconst [count, setCount] = useState(0);\n// Increment correctly with updater function\nsetCount(prev => prev + 1);\n\`\`\``,
            practicePrompt: 'Build a counter component with Increment, Decrement, and Reset buttons using useState.',
            quiz: {
              question: 'Why should you never mutate React state directly like "state.value = 5"?',
              options: ['It causes a syntax error', 'React will not detect the change and will not trigger a re-render', 'The browser deletes memory', 'It triggers infinite loops'],
              correctIndex: 1,
              explanation: 'React relies on object reference identity checks to trigger re-renders.'
            },
            resources: [{ title: 'State: A Component\'s Memory', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-react-3',
            slug: 'side-effects-useeffect',
            title: '3. Side Effects and Lifecycle with useEffect',
            durationMinutes: 45,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=O6P86uwfdR0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=FxgM9k1rg0Q',
            content: `useEffect lets you synchronize a component with external systems (fetching data, setting timers, or subscribing to events).\n\n\`\`\`tsx\nuseEffect(() => {\n  async function load() {\n    const res = await fetch('/api/courses');\n    const data = await res.json();\n    setCourses(data.courses);\n  }\n  load();\n}, []); // Empty dependency array runs once on mount\n\`\`\``,
            practicePrompt: 'Write an effect that adds a window resize event listener and cleans it up in the return function.',
            quiz: {
              question: 'What happens when you pass an empty dependency array [] to useEffect?',
              options: ['The effect runs on every single re-render', 'The effect runs only once after the initial render', 'The effect never executes', 'It throws an error'],
              correctIndex: 1,
              explanation: 'An empty array tells React the effect does not depend on any props or state, running once.'
            },
            resources: [{ title: 'Synchronizing with Effects', url: '#', type: 'Documentation' }]
          },
          {
            id: 'l-react-4',
            slug: 'handling-forms-and-events',
            title: '4. Controlled Forms and User Inputs',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=0ZJgIjIuY7U',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
            content: `In controlled components, input form values are driven by React state.\n\n\`\`\`tsx\nconst [email, setEmail] = useState('');\n<input\n  value={email}\n  onChange={(e) => setEmail(e.target.value)}\n  placeholder="Enter email"\n/>\n\`\`\``,
            practicePrompt: 'Create a controlled form with Name, Email, and a submit button that displays an alert with values.',
            quiz: {
              question: 'What makes an input element "controlled" in React?',
              options: ['Its value is bound to and updated by React state', 'It has disabled=true', 'It is wrapped in a form tag', 'It requires a password'],
              correctIndex: 0,
              explanation: 'A controlled input gets its current value from state and updates state on change.'
            },
            resources: [{ title: 'React Forms Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-react-5',
            slug: 'context-api-state-sharing',
            title: '5. Sharing Global State with React Context',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=dH6GT4u0_a8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
            content: `Avoid prop drilling through deep component trees by providing shared values via createContext and useContext (e.g. AuthContext, ThemeContext).`,
            practicePrompt: 'Create a simple ThemeContext with "light" and "dark" values consumed by a child button.',
            quiz: {
              question: 'What problem does React Context primarily solve?',
              options: ['Database storage', 'Prop drilling across intermediate components', 'CSS compilation', 'Router configuration'],
              correctIndex: 1,
              explanation: 'Context lets components pass data deep down without manually threading props.'
            },
            resources: [{ title: 'Passing Data Deeply with Context', url: '#', type: 'Docs' }]
          },
          {
            id: 'l-react-6',
            slug: 'custom-hooks-modular-logic',
            title: '6. Building Custom Hooks',
            durationMinutes: 40,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
            content: `Custom hooks let you extract and reuse stateful logic across multiple components (e.g. \`useLocalStorage\`, \`useDebounce\`).\n\n\`\`\`tsx\nfunction useDebounce<T>(value: T, delay: number): T {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n  return debounced;\n}\n\`\`\``,
            practicePrompt: 'Write a custom hook useWindowSize that returns the current browser window width and height.',
            quiz: {
              question: 'What naming convention must all custom React hooks follow?',
              options: ['Must end with Hook', 'Must start with the lowercase word "use"', 'Must be capitalized', 'Must start with "react_"'],
              correctIndex: 1,
              explanation: 'React relies on the "use" prefix to enforce the Rules of Hooks.'
            },
            resources: [{ title: 'Reusing Logic with Custom Hooks', url: '#', type: 'Documentation' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What is the Virtual DOM in React?',
        options: ['A direct reference to Chrome DOM', 'A lightweight in-memory representation of real DOM elements', 'A database table', 'A hardware accelerator'],
        correctIndex: 1,
        explanation: 'React compares its Virtual DOM tree to compute minimal real DOM mutations.'
      },
      {
        question: 'Why must list items in React have unique "key" props?',
        options: ['For CSS styling', 'To help React identify which items have changed, been added, or removed', 'To sort them alphabetically', 'Keys are optional'],
        correctIndex: 1,
        explanation: 'Keys allow React to reconcile lists efficiently during renders.'
      },
      {
        question: 'Which hook should you use to store a mutable reference that does NOT trigger a re-render when changed?',
        options: ['useState', 'useRef', 'useEffect', 'useMemo'],
        correctIndex: 1,
        explanation: 'useRef persists values across renders without causing re-renders.'
      },
      {
        question: 'What does useMemo hook do?',
        options: ['Caches the result of an expensive calculation between renders', 'Fetches data from server', 'Creates animations', 'Manages forms'],
        correctIndex: 0,
        explanation: 'useMemo memoizes calculated values.'
      },
      {
        question: 'What hook is used to cache a function definition between re-renders?',
        options: ['useCallback', 'useMemo', 'useState', 'useRef'],
        correctIndex: 0,
        explanation: 'useCallback returns a memoized version of the callback.'
      },
      {
        question: 'Can you call React hooks inside conditional if statements?',
        options: ['Yes, always', 'No, hooks must be called at the top level of a component unconditionally', 'Only in development', 'Only inside useEffect'],
        correctIndex: 1,
        explanation: 'The Rules of Hooks require hooks to execute in the exact same order on every render.'
      },
      {
        question: 'What does React.Fragment (<>...</>) allow you to do?',
        options: ['Group child elements without adding extra nodes to the DOM', 'Split code into multiple files', 'Add animations', 'Speed up internet'],
        correctIndex: 0,
        explanation: 'Fragments avoid redundant wrapper <div> tags.'
      },
      {
        question: 'How do you pass a function to a child component in React?',
        options: ['Via props', 'Through localStorage', 'Via URL queries', 'It is not allowed'],
        correctIndex: 0,
        explanation: 'Functions are passed as normal props in React.'
      },
      {
        question: 'What is prop drilling?',
        options: ['A database indexing technique', 'Passing props through multiple layers of intermediate components that do not need them', 'Validating form fields', 'Exporting modules'],
        correctIndex: 1,
        explanation: 'Prop drilling occurs when data passes through intermediate children merely to reach deeper nodes.'
      },
      {
        question: 'What does the cleanup function in useEffect do?',
        options: ['Deletes user data', 'Cleans up subscriptions, timers, or event listeners before the component unmounts or before re-running the effect', 'Clears browser cache', 'Restarts React'],
        correctIndex: 1,
        explanation: 'The return function cleans up previous effects to prevent memory leaks.'
      }
    ],
    finalProject: {
      title: 'Full-Featured Digital Flashcard App',
      brief: 'Build a complete interactive flashcard learning application in React. Users can create flashcard decks, flip cards on click, rate their difficulty, track mastery scores, and save cards to localStorage.',
      requirements: [
        'Deck creation with title and category',
        'Interactive 3D card flip animation',
        'Study mode with mastery score tracking',
        'Local state persistence via custom hook'
      ]
    }
  },
  {
    id: 'course-prog-5',
    slug: 'typescript-fundamentals',
    title: 'TypeScript Fundamentals',
    description: 'Learn static typing, interfaces, type aliases, union types, generics, and strict TypeScript configurations to build rock-solid web applications.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Intermediate',
    durationMinutes: 240,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1516116211227-bbc13c74414c?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the TypeScript compiler and benefits of compile-time type safety',
      'Define data contracts with interfaces and type aliases',
      'Master union types, literal types, and type narrowing',
      'Write reusable type-safe logic using Generics',
      'Type React props, events, and hooks cleanly',
      'Configure tsconfig.json for strict enterprise standards'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['JavaScript for Beginners'],
    instructor: {
      name: 'Sarah Jenkins',
      role: 'TypeScript Educator & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-ts-1',
        title: 'Static Typing Mastery',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-ts-1',
            slug: 'why-typescript-and-basics',
            title: '1. Why TypeScript? Basic Types and Annotations',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=30LWjhZzg50',
            content: `TypeScript adds static typing to JavaScript, catching typos, undefined property accesses, and incorrect argument types before code ever runs.\n\n\`\`\`typescript\nlet studentName: string = "Elena";\nlet completedLessons: number = 12;\nlet isGraduated: boolean = false;\n\`\`\``,
            practicePrompt: 'Annotate a function that accepts two numbers and returns their sum.',
            quiz: {
              question: 'When are TypeScript type errors detected?',
              options: ['At runtime while the user uses the site', 'At compile/build time inside the editor and compiler', 'In the database', 'Only on mobile devices'],
              correctIndex: 1,
              explanation: 'TypeScript is a compile-time check that prevents runtime crashes.'
            },
            resources: [{ title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org', type: 'Documentation' }]
          },
          {
            id: 'l-ts-2',
            slug: 'interfaces-vs-type-aliases',
            title: '2. Interfaces and Type Aliases',
            durationMinutes: 40,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=d56mG7DezGs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=13gLB6hDHR8',
            content: `Define explicit shapes for objects and functions.\n\n\`\`\`typescript\ninterface UserProfile {\n  readonly id: string;\n  name: string;\n  email: string;\n  bio?: string; // Optional property\n}\n\`\`\``,
            practicePrompt: 'Create an interface for a Course with id, title, lessonCount, and an optional instructor string.',
            quiz: {
              question: 'What does a question mark after a property name (e.g. bio?: string) signify in TypeScript?',
              options: ['The property is private', 'The property is optional and can be undefined', 'The property causes a warning', 'The property is a function'],
              correctIndex: 1,
              explanation: 'Optional properties do not need to be present on instances.'
            },
            resources: [{ title: 'Interfaces in TypeScript', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ts-3',
            slug: 'unions-and-type-narrowing',
            title: '3. Union Types, Discriminated Unions, and Narrowing',
            durationMinutes: 45,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=ahCwqrYpIuM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=ajdRvxDWH4w',
            content: `A variable can hold one of several types. Use \`typeof\`, \`instanceof\`, or literal tags to narrow types.\n\n\`\`\`typescript\ntype RequestState =\n  | { status: 'loading' }\n  | { status: 'success'; data: string[] }\n  | { status: 'error'; message: string };\n\`\`\``,
            practicePrompt: 'Write a function that accepts a parameter that can be a string or number, formatting it accordingly.',
            quiz: {
              question: 'What is a discriminated union in TypeScript?',
              options: ['A union type with a common literal property used for type narrowing', 'A union that is forbidden by ESLint', 'A merge of two CSS classes', 'A syntax error'],
              correctIndex: 0,
              explanation: 'Discriminated unions use a common tag property (like status) to safely narrow possibilities.'
            },
            resources: [{ title: 'Narrowing in TypeScript', url: '#', type: 'Documentation' }]
          },
          {
            id: 'l-ts-4',
            slug: 'generics-fundamentals',
            title: '4. Generics: Writing Reusable Type-Safe Code',
            durationMinutes: 45,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=gieEQFIfgYc',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=P0XMXqdgQ_4',
            content: `Generics act like variables for types, allowing functions and data structures to work across any type while retaining full safety.\n\n\`\`\`typescript\nfunction getFirstElement<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst num = getFirstElement([10, 20, 30]); // Type is number\n\`\`\``,
            practicePrompt: 'Write a generic function wrapInArray<T>(item: T): T[] that returns an array containing the single item.',
            quiz: {
              question: 'In function identity<T>(arg: T): T, what does <T> represent?',
              options: ['A HTML tag', 'A generic type parameter', 'A template literal', 'An import statement'],
              correctIndex: 1,
              explanation: 'T is a type variable capturing the type provided by the caller.'
            },
            resources: [{ title: 'Generics Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-ts-5',
            slug: 'typescript-with-react',
            title: '5. Typing React Props, Events, and Hooks',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=Z5iWr6Srsj8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=938gWwsf3rQ',
            content: `Type React elements with strict precision:\n\n\`\`\`typescript\ninterface ButtonProps {\n  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;\n  children: React.ReactNode;\n}\n\`\`\``,
            practicePrompt: 'Define TypeScript props for a Modal component that accepts isOpen (boolean), onClose (callback), and title (string).',
            quiz: {
              question: 'Which type correctly represents any valid React children (strings, numbers, JSX, arrays)?',
              options: ['React.ReactNode', 'string', 'HTMLElement', 'JSX.ElementOnly'],
              correctIndex: 0,
              explanation: 'React.ReactNode covers all renderable entities in React.'
            },
            resources: [{ title: 'React TypeScript Cheatsheet', url: '#', type: 'Reference' }]
          },
          {
            id: 'l-ts-6',
            slug: 'strict-tsconfig-and-utilities',
            title: '6. tsconfig.json and Built-in Utility Types',
            durationMinutes: 35,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=BCg4U1FzODs',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=s3w2bF0Gj7g',
            content: `Leverage built-in utility types: \`Partial<T>\`, \`Required<T>\`, \`Pick<T, K>\`, \`Omit<T, K>\`, and enable \`"strict": true\` in \`tsconfig.json\` for maximum security.`,
            practicePrompt: 'Use Partial<UserProfile> to represent an update payload where any field can be optional.',
            quiz: {
              question: 'What does the utility type "Omit<T, K>" do?',
              options: ['Deletes the entire interface', 'Constructs a type with all properties of T except those specified in K', 'Makes all properties readonly', 'Exports types'],
              correctIndex: 1,
              explanation: 'Omit constructs a type by picking all properties from T and then removing K.'
            },
            resources: [{ title: 'Utility Types Reference', url: '#', type: 'Documentation' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does "unknown" type differ from "any" in TypeScript?',
        options: ['They are identical', 'unknown is type-safe because you cannot perform operations on it without narrowing first', 'unknown only permits numbers', 'any is faster'],
        correctIndex: 1,
        explanation: 'unknown forces developers to verify or narrow types before accessing properties.'
      },
      {
        question: 'Which keyword defines an immutable array in TypeScript?',
        options: ['const arr = []', 'readonly number[]', 'static number[]', 'freeze[]'],
        correctIndex: 1,
        explanation: 'readonly number[] prevents mutating methods like push() and pop().'
      },
      {
        question: 'What does the "never" type represent in TypeScript?',
        options: ['A type of value that never occurs (e.g. a function that always throws)', 'A null pointer', 'A comment', 'Undefined value'],
        correctIndex: 0,
        explanation: 'never represents the type of values that never occur.'
      },
      {
        question: 'What does "as" keyword perform in TypeScript (e.g. value as string)?',
        options: ['Type assertion (telling the compiler you know the type)', 'Variable assignment', 'Module export', 'Looping'],
        correctIndex: 0,
        explanation: 'Type assertions override the compiler\'s inferred type.'
      },
      {
        question: 'Which operator checks if a property exists on an object at runtime in TypeScript?',
        options: ['in', 'is', 'has', 'exists'],
        correctIndex: 0,
        explanation: '"property" in object acts as a runtime check and TypeScript type guard.'
      },
      {
        question: 'What does "keyof T" return in TypeScript?',
        options: ['A list of values', 'A union of all known property keys of T', 'The number of keys', 'The first key'],
        correctIndex: 1,
        explanation: 'keyof produces a union of string or numeric literal keys.'
      },
      {
        question: 'What does the "strictNullChecks" compiler flag enforce?',
        options: ['null and undefined are not acceptable values unless explicitly declared in a union', 'All variables must be null', 'Numbers cannot be zero', 'Ignores errors'],
        correctIndex: 0,
        explanation: 'strictNullChecks prevents the infamous "cannot read property of undefined" errors.'
      },
      {
        question: 'What is a type predicate function in TypeScript?',
        options: ['A function with return type "arg is Type"', 'A function that always returns false', 'A math equation', 'A database stored procedure'],
        correctIndex: 0,
        explanation: 'A user-defined type guard uses "arg is Type" as its return type.'
      },
      {
        question: 'Which utility type makes all properties of an object read-only?',
        options: ['Readonly<T>', 'Immutable<T>', 'Freeze<T>', 'Static<T>'],
        correctIndex: 0,
        explanation: 'Readonly<T> sets all properties to readonly.'
      },
      {
        question: 'Does TypeScript code execute directly in web browsers?',
        options: ['Yes, modern browsers natively execute TypeScript', 'No, TypeScript must first be compiled or transpiled into JavaScript', 'Only in Google Chrome', 'Only in Firefox'],
        correctIndex: 1,
        explanation: 'Browsers only execute standard JavaScript; TypeScript is compiled away.'
      }
    ],
    finalProject: {
      title: 'Type-Safe API Client & Data Normalizer',
      brief: 'Build a production-grade TypeScript utility module that defines strict request/response interfaces, handles network calls, validates response schemas with type guards, and normalizes records into a type-safe map.',
      requirements: [
        'Strict union types for API error responses',
        'Generic fetcher function with custom headers and error handling',
        'Custom type guard validating incoming untrusted payloads',
        'Zero usage of any in the entire project'
      ]
    }
  },
  {
    id: 'course-prog-6',
    slug: 'git-github-beginners',
    title: 'Git and GitHub for Beginners',
    description: 'Learn version control fundamentals, repository setup, commits, branches, merge conflicts, pull requests, and collaborative open-source workflows.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand version control and Git tracking mechanisms',
      'Initialize repos, stage changes, and write meaningful commit messages',
      'Branch, merge, and resolve conflicts safely',
      'Push and pull code to remote repositories on GitHub',
      'Create and review collaborative Pull Requests (PRs)',
      'Use .gitignore to keep secrets and build artifacts out of version control'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['Basic terminal/command line familiarity'],
    instructor: {
      name: 'Kai Tanaka',
      role: 'DevOps & Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-git-1',
        title: 'Git & Version Control',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-git-1',
            slug: 'git-init-add-commit',
            title: '1. Repositories, Staging, and Commits',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=apGV9Kg7ics',
            content: `Git tracks snapshots of files over time.\n\n\`\`\`bash\ngit init\ngit add index.html style.css\ngit commit -m "feat: implement responsive hero banner"\n\`\`\``,
            practicePrompt: 'Initialize a local test Git repo, create a README.md file, stage it, and create your first commit.',
            quiz: {
              question: 'What is the staging area in Git?',
              options: ['The remote GitHub server', 'A preview area where changes are prepared before committing', 'A deleted file folder', 'A backup hard drive'],
              correctIndex: 1,
              explanation: 'git add moves changes into the staging index prior to committing.'
            },
            resources: [{ title: 'Git Cheat Sheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-git-2',
            slug: 'branching-and-switching',
            title: '2. Branching Strategies and Switching Branches',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=8JJ101D3KnE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=gwWKnnCMQ5c',
            content: `Isolate new features on separate branches so the main production branch stays clean.\n\n\`\`\`bash\ngit checkout -b feature/dark-mode\n# Make edits and commit\ngit checkout main\ngit merge feature/dark-mode\n\`\`\``,
            practicePrompt: 'Create a new branch called "experiment", make a change, and switch back to "main".',
            quiz: {
              question: 'Which modern Git command creates and switches to a new branch in one step?',
              options: ['git branch -new <name>', 'git switch -c <name>', 'git create <name>', 'git jump <name>'],
              correctIndex: 1,
              explanation: 'git switch -c creates and checks out the new branch.'
            },
            resources: [{ title: 'Branching Workflows', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-git-3',
            slug: 'resolving-merge-conflicts',
            title: '3. Understanding and Resolving Merge Conflicts',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=USjZcfj8yxE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1U-L8d7Wd1Y',
            content: `Merge conflicts happen when two branches modify the same line of code in different ways. Learn to inspect conflict markers (\`<<<<<<<\`, \`=======\`, \`>>>>>>>\`) and accept incoming or current changes.`,
            practicePrompt: 'Simulate a merge conflict by editing line 1 of a file on two branches and resolve it.',
            quiz: {
              question: 'What do the "<<<<<<< HEAD" markers indicate in a file during a merge?',
              options: ['A syntax error from Git', 'The beginning of the changes from your current active branch', 'A deleted file notice', 'A password requirement'],
              correctIndex: 1,
              explanation: 'HEAD indicates the code on the branch you currently have checked out.'
            },
            resources: [{ title: 'Conflict Resolution Step-by-Step', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-git-4',
            slug: 'remotes-and-github',
            title: '4. Remote Repositories and GitHub Workflows',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=HVsySz-h9r4',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=apGV9Kg7ics',
            content: `Connect local repositories to remote servers on GitHub.\n\n\`\`\`bash\ngit remote add origin https://github.com/username/ashiskillrise.git\ngit branch -M main\ngit push -u origin main\n\`\`\``,
            practicePrompt: 'Link your local Git repo to an empty GitHub repository and push your main branch.',
            quiz: {
              question: 'What does "git pull" do under the hood?',
              options: ['Deletes remote files', 'Executes git fetch followed by git merge', 'Only downloads photos', 'Installs npm packages'],
              correctIndex: 1,
              explanation: 'git pull fetches remote commits and immediately merges them into the current branch.'
            },
            resources: [{ title: 'GitHub Quickstart Guide', url: 'https://docs.github.com', type: 'Documentation' }]
          },
          {
            id: 'l-git-5',
            slug: 'pull-requests-and-code-review',
            title: '5. Pull Requests and Collaborative Code Review',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=DVRQxok8z70',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=gwWKnnCMQ5c',
            content: `Pull Requests (PRs) let teams discuss, review, test, and approve code changes before merging into production. Learn how to draft clear PR summaries and respond to review comments.`,
            practicePrompt: 'Open a Pull Request on GitHub with a 3-bullet description explaining what changed and why.',
            quiz: {
              question: 'What is the primary benefit of Pull Request code reviews?',
              options: ['Slowing down developers', 'Catching bugs, enforcing architecture standards, and sharing knowledge across the team', 'Eliminating the need for tests', 'Generating ad revenue'],
              correctIndex: 1,
              explanation: 'Peer code reviews catch edge cases and maintain repository quality.'
            },
            resources: [{ title: 'Effective PR Guidelines', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-git-6',
            slug: 'gitignore-and-security',
            title: '6. The .gitignore File and Preventing Secret Leaks',
            durationMinutes: 25,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=mJ-qvsxPHpY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1U-L8d7Wd1Y',
            content: `Never commit \`.env\`, API keys, passwords, or \`node_modules\` to Git. Create a \`.gitignore\` file at the project root.\n\n\`\`\`text\nnode_modules/\n.env\ndist/\n.DS_Store\n\`\`\``,
            practicePrompt: 'Create a .gitignore file ignoring node_modules and .env files.',
            quiz: {
              question: 'What happens if you commit a secret API key to a public GitHub repository?',
              options: ['Nothing', 'Automated scrapers can detect and exploit it within seconds; you must revoke and rotate it immediately', 'GitHub deletes your account', 'The computer reboots'],
              correctIndex: 1,
              explanation: 'Public Git repos are constantly scraped; leaked keys must be revoked immediately.'
            },
            resources: [{ title: 'Gitignore Templates', url: 'https://github.com/github/gitignore', type: 'Templates' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'Which command shows the status of working tree and staged files?',
        options: ['git log', 'git status', 'git check', 'git diff'],
        correctIndex: 1,
        explanation: 'git status displays modified, untracked, and staged files.'
      },
      {
        question: 'How do you view commit history in reverse chronological order?',
        options: ['git history', 'git log', 'git show-all', 'git timeline'],
        correctIndex: 1,
        explanation: 'git log prints commit logs.'
      },
      {
        question: 'What does "git clone <url>" do?',
        options: ['Uploads your files', 'Copies an existing remote Git repository to your local machine', 'Deletes a repository', 'Renames files'],
        correctIndex: 1,
        explanation: 'git clone downloads an entire repository with its history.'
      },
      {
        question: 'Which flag is commonly used with "git commit -m" to specify the message inline?',
        options: ['-m', '-msg', '-text', '-c'],
        correctIndex: 0,
        explanation: '-m provides the commit message in the command line.'
      },
      {
        question: 'How do you discard uncommitted changes in a specific file with modern Git?',
        options: ['git restore <file>', 'git delete <file>', 'git undo <file>', 'git erase <file>'],
        correctIndex: 0,
        explanation: 'git restore restores working tree files.'
      },
      {
        question: 'What is a "fork" on GitHub?',
        options: ['A kitchen utensil', 'A personal copy of another user\'s repository on your GitHub account', 'A merge conflict', 'A private repo'],
        correctIndex: 1,
        explanation: 'A fork copies a remote repo to your personal namespace.'
      },
      {
        question: 'What is a Git commit hash (SHA-1)?',
        options: ['A random password', 'A unique 40-character hexadecimal checksum identifying that specific commit snapshot', 'The date of the commit', 'The author email'],
        correctIndex: 1,
        explanation: 'The SHA hash uniquely fingerprints the commit contents.'
      },
      {
        question: 'Which command downloads remote changes without merging them into your branch?',
        options: ['git fetch', 'git pull', 'git checkout', 'git branch'],
        correctIndex: 0,
        explanation: 'git fetch retrieves remote objects without altering your working branch.'
      },
      {
        question: 'What command temporarily shelves uncommitted changes so you can work on something else?',
        options: ['git stash', 'git pause', 'git shelf', 'git hold'],
        correctIndex: 0,
        explanation: 'git stash temporarily shelves modified tracked files.'
      },
      {
        question: 'What is the default primary branch name in modern Git repositories?',
        options: ['master', 'main', 'production', 'root'],
        correctIndex: 1,
        explanation: 'main is the universal modern standard default branch name.'
      }
    ],
    finalProject: {
      title: 'Open Source Collaborative Workflow Simulation',
      brief: 'Create a GitHub repository with a complete documentation site. Practice branching, submit a pull request with multiple commits, resolve an intentional merge conflict, and add a production .gitignore file.',
      requirements: [
        'Initialized repo with .gitignore and README',
        'At least two feature branches created and merged',
        'Demonstrated pull request merge workflow'
      ]
    }
  },
  {
    id: 'course-prog-7',
    slug: 'sql-database-basics',
    title: 'SQL and Database Basics',
    description: 'Learn relational database concepts, tables, primary/foreign keys, SELECT queries, WHERE filters, JOINs, aggregations, and CRUD operations using SQLite and PostgreSQL.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Beginner',
    durationMinutes: 210,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand relational models, tables, columns, and rows',
      'Perform CRUD operations (INSERT, SELECT, UPDATE, DELETE)',
      'Filter and sort records using WHERE, LIKE, IN, and ORDER BY',
      'Combine data across tables using INNER and LEFT JOINs',
      'Compute analytics using COUNT, SUM, AVG, and GROUP BY',
      'Design normalized database schemas with foreign keys and indexes'
    ],
    completionRequirements: 'Complete all 6 lessons and score 70%+ on final exam.',
    prerequisites: ['Basic computer literacy'],
    instructor: {
      name: 'David Chen',
      role: 'Database Architect & Data Engineer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-sql-1',
        title: 'Relational Queries & Schemas',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-sql-1',
            slug: 'relational-concepts-select',
            title: '1. Relational Tables, Data Types, and SELECT Queries',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=hlGoQC332VM',
            content: `Relational databases organize structured information into tables of columns and rows.\n\n\`\`\`sql\nSELECT title, duration_minutes, difficulty\nFROM courses\nWHERE difficulty = 'Beginner'\nORDER BY duration_minutes ASC;\n\`\`\``,
            practicePrompt: 'Write a SQL query that retrieves all course titles and categories sorted alphabetically.',
            quiz: {
              question: 'Which SQL keyword specifies which columns to retrieve from a table?',
              options: ['EXTRACT', 'SELECT', 'GET', 'RETRIEVE'],
              correctIndex: 1,
              explanation: 'SELECT indicates which columns should appear in query results.'
            },
            resources: [{ title: 'SQL Basics Cheatsheet', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-sql-2',
            slug: 'filtering-where-like-in',
            title: '2. Filtering Data with WHERE, AND, OR, and LIKE',
            durationMinutes: 35,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=7S_tz1z_5bA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BPHAr4QGGVE',
            content: `Filter records precisely using comparison operators (\`=\`, \`!=\`, \`>\`, \`<\`) and text pattern matching with \`LIKE\` (\`%term%\`).\n\n\`\`\`sql\nSELECT * FROM users\nWHERE role = 'student'\n  AND email LIKE '%@gmail.com'\n  AND is_verified = 1;\n\`\`\``,
            practicePrompt: 'Write a query to find all courses whose title contains the word "Fundamentals".',
            quiz: {
              question: 'What does the wildcard "%" represent in a SQL LIKE statement?',
              options: ['Exactly one character', 'Zero, one, or multiple characters', 'A percentage number', 'An error'],
              correctIndex: 1,
              explanation: '% matches any sequence of zero or more characters in LIKE clauses.'
            },
            resources: [{ title: 'SQL Filtering Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-sql-3',
            slug: 'crud-operations',
            title: '3. Data Manipulation: INSERT, UPDATE, and DELETE',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=9Pzj7Aj25lw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=KB8fSZpUu1k',
            content: `Manage records through CRUD operations. Always include a WHERE clause with UPDATE and DELETE to prevent modifying entire tables accidentally!\n\n\`\`\`sql\nINSERT INTO categories (id, name, slug) \nVALUES ('cat_prog', 'Programming', 'programming');\n\nUPDATE users \nSET full_name = 'Alex Morgan' \nWHERE id = 'usr_123';\n\`\`\``,
            practicePrompt: 'Write a SQL query that updates the progress_percent of course-1 to 100 for a specific user ID.',
            quiz: {
              question: 'What happens if you run "DELETE FROM courses;" without a WHERE clause?',
              options: ['It deletes only the first row', 'It deletes every single record in the courses table', 'It throws a syntax error', 'It creates a backup'],
              correctIndex: 1,
              explanation: 'Without a WHERE clause, DELETE affects every row in the target table.'
            },
            resources: [{ title: 'SQL DML Reference', url: '#', type: 'Docs' }]
          },
          {
            id: 'l-sql-4',
            slug: 'joining-tables',
            title: '4. Combining Tables with INNER JOIN and LEFT JOIN',
            durationMinutes: 40,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=zpTuK_NqNqY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
            content: `Connect tables using primary keys and foreign keys.\n\n\`\`\`sql\nSELECT \n  courses.title AS course_title,\n  categories.name AS category_name\nFROM courses\nINNER JOIN categories ON courses.category_id = categories.id;\n\`\`\``,
            practicePrompt: 'Write an INNER JOIN query connecting lessons to their parent course to display lesson titles with course titles.',
            quiz: {
              question: 'How does a LEFT JOIN differ from an INNER JOIN in SQL?',
              options: ['They are identical', 'A LEFT JOIN returns all rows from the left table, even if there is no match in the right table', 'INNER JOIN only works on numbers', 'LEFT JOIN deletes duplicates'],
              correctIndex: 1,
              explanation: 'LEFT JOIN preserves all rows from the left table with NULLs for non-matching right columns.'
            },
            resources: [{ title: 'Visual Guide to SQL Joins', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-sql-5',
            slug: 'aggregations-group-by',
            title: '5. Aggregations: COUNT, SUM, AVG, and GROUP BY',
            durationMinutes: 35,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=7S_tz1z_5bA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BPHAr4QGGVE',
            content: `Calculate summaries and metrics across rows.\n\n\`\`\`sql\nSELECT \n  category_id,\n  COUNT(*) AS total_courses,\n  AVG(duration_minutes) AS avg_duration\nFROM courses\nGROUP BY category_id\nHAVING COUNT(*) >= 5;\n\`\`\``,
            practicePrompt: 'Write a query counting how many lessons each course has using COUNT and GROUP BY.',
            quiz: {
              question: 'Which clause filters aggregated groups after GROUP BY is calculated?',
              options: ['WHERE', 'HAVING', 'FILTER', 'ORDER BY'],
              correctIndex: 1,
              explanation: 'HAVING filters aggregate groups, whereas WHERE filters individual rows before grouping.'
            },
            resources: [{ title: 'SQL Aggregations Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-sql-6',
            slug: 'schema-design-indexes',
            title: '6. Schema Normalization, Constraints, and Indexes',
            durationMinutes: 30,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=9Pzj7Aj25lw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=hlGoQC332VM',
            content: `Design clean database structures with primary keys, unique constraints, and foreign key cascades. Add indexes to columns frequently used in WHERE queries to accelerate search speed.`,
            practicePrompt: 'Write a CREATE TABLE statement for an enrollment table with foreign keys to users and courses.',
            quiz: {
              question: 'Why do database administrators add indexes to specific table columns?',
              options: ['To change the text color', 'To drastically speed up search and query retrieval performance on large datasets', 'To save disk space', 'To encrypt columns'],
              correctIndex: 1,
              explanation: 'Indexes create search trees (like B-trees) that find matching rows without scanning the entire table.'
            },
            resources: [{ title: 'Database Indexing Explained', url: '#', type: 'Guide' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What does SQL stand for?',
        options: ['Structured Query Language', 'Simple Question Language', 'Standard Quality Logic', 'Server Query Link'],
        correctIndex: 0,
        explanation: 'SQL stands for Structured Query Language.'
      },
      {
        question: 'Which constraint ensures that all values in a column are distinct?',
        options: ['CHECK', 'UNIQUE', 'NOT NULL', 'FOREIGN KEY'],
        correctIndex: 1,
        explanation: 'UNIQUE prevents duplicate values in that column.'
      },
      {
        question: 'What is a Primary Key in a relational database table?',
        options: ['A password', 'A column or set of columns that uniquely identifies every single row', 'The first column alphabetically', 'An optional note'],
        correctIndex: 1,
        explanation: 'A Primary Key guarantees unique row identification and non-null values.'
      },
      {
        question: 'Which SQL keyword eliminates duplicate rows from a query result?',
        options: ['DISTINCT', 'UNIQUE', 'SINGLE', 'FILTER'],
        correctIndex: 0,
        explanation: 'SELECT DISTINCT returns only unique values.'
      },
      {
        question: 'What does "LIMIT 10 OFFSET 20" achieve in a SQL query?',
        options: ['Deletes 10 rows', 'Skips the first 20 rows and returns the next 10 rows for pagination', 'Multiplies by 200', 'Errors out'],
        correctIndex: 1,
        explanation: 'LIMIT and OFFSET are standard for implementing pagination.'
      },
      {
        question: 'What value represents missing or unknown data in SQL?',
        options: ['0', '"" (empty string)', 'NULL', 'UNDEFINED'],
        correctIndex: 2,
        explanation: 'NULL denotes the absence of data in SQL.'
      },
      {
        question: 'How do you check if a column value is NULL in a WHERE clause?',
        options: ['WHERE column = NULL', 'WHERE column IS NULL', 'WHERE column.isNull()', 'WHERE column == NULL'],
        correctIndex: 1,
        explanation: 'SQL requires the IS NULL or IS NOT NULL syntax.'
      },
      {
        question: 'Which SQL statement adds a new column to an existing table?',
        options: ['ALTER TABLE table_name ADD COLUMN column_name data_type;', 'UPDATE TABLE ADD;', 'MODIFY TABLE ADD;', 'INSERT COLUMN;'],
        correctIndex: 0,
        explanation: 'ALTER TABLE modifies table definitions.'
      },
      {
        question: 'What is the purpose of database transactions (BEGIN, COMMIT, ROLLBACK)?',
        options: ['To ensure multiple database operations execute atomically as an all-or-nothing unit', 'To charge credit cards', 'To compress files', 'To rename tables'],
        correctIndex: 0,
        explanation: 'Transactions guarantee ACID compliance and data integrity.'
      },
      {
        question: 'Which database engine is built-in natively to Cloudflare D1?',
        options: ['MongoDB', 'SQLite', 'Redis', 'Cassandra'],
        correctIndex: 1,
        explanation: 'Cloudflare D1 is built on SQLite.'
      }
    ],
    finalProject: {
      title: 'E-Learning Schema Design & Reporting Query Suite',
      brief: 'Design a normalized SQLite relational database schema for an online learning platform with students, courses, enrollments, and quiz attempts. Write 5 advanced analytical SQL queries reporting student retention and completion rates.',
      requirements: [
        'CREATE TABLE statements with primary, foreign keys, and indexes',
        'Working seed data with 20+ sample rows',
        'Complex JOIN query connecting 3 tables',
        'Aggregation query calculating average completion rates per category'
      ]
    }
  },
  {
    id: 'course-prog-8',
    slug: 'api-development-fundamentals',
    title: 'API Development Fundamentals',
    description: 'Learn REST architecture, HTTP methods (GET, POST, PUT, DELETE), status codes, JSON formatting, request validation, authentication, and building serverless endpoints.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Intermediate',
    durationMinutes: 210,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand Client-Server architecture and REST design principles',
      'Choose appropriate HTTP methods and status codes',
      'Parse request bodies, headers, and query parameters safely',
      'Validate payloads and handle edge-case errors gracefully',
      'Secure endpoints with JWT bearer authentication',
      'Build and test serverless API routes on Cloudflare Workers'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['JavaScript for Beginners'],
    instructor: {
      name: 'Alex Rivera',
      role: 'Staff Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-api-1',
        title: 'REST Architecture & Endpoints',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-api-1',
            slug: 'rest-principles-http-methods',
            title: '1. REST Principles, Resources, and HTTP Verbs',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=WXsD0ZgxjRw',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7r4xVDI2vho',
            content: `Representational State Transfer (REST) models systems as resources identified by clean URIs.\n\n- GET /api/courses (Read collection)\n- GET /api/courses/intro-to-ai (Read specific resource)\n- POST /api/courses (Create resource)\n- PUT /api/courses/:id (Replace resource)\n- DELETE /api/courses/:id (Remove resource)`,
            practicePrompt: 'Design RESTful URL paths and HTTP verbs for an online bookstore API.',
            quiz: {
              question: 'Which HTTP method should be used to create a new resource on the server?',
              options: ['GET', 'POST', 'FETCH', 'CREATE'],
              correctIndex: 1,
              explanation: 'POST is the standard REST method for resource creation.'
            },
            resources: [{ title: 'RESTful API Guidelines', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-api-2',
            slug: 'http-status-codes',
            title: '2. HTTP Status Codes and Headers',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=-MTSQjw5DrM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
            content: `Always communicate the outcome of a request with standard HTTP status codes:\n- 200 OK: Successful request\n- 201 Created: New resource created\n- 400 Bad Request: Missing or invalid parameters\n- 401 Unauthorized: Authentication required\n- 403 Forbidden: Insufficient permissions\n- 404 Not Found: Resource does not exist\n- 500 Internal Server Error: Unhandled backend fault`,
            practicePrompt: 'Match 5 common client errors with their appropriate 4xx HTTP status code.',
            quiz: {
              question: 'Which status code indicates a request was successful and resulted in a newly created resource?',
              options: ['200', '201', '204', '301'],
              correctIndex: 1,
              explanation: '201 Created denotes successful resource creation.'
            },
            resources: [{ title: 'HTTP Status Code Reference', url: 'https://httpstatuses.io', type: 'Reference' }]
          },
          {
            id: 'l-api-3',
            slug: 'request-validation-and-json',
            title: '3. Request Validation, Sanitization, and JSON Serialization',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=GZvSYJDk-us',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BLl32FvcdVM',
            content: `Never trust client-supplied data. Validate types, string lengths, and schema invariants on the server before database execution.\n\n\`\`\`javascript\nif (!body.email || !body.email.includes('@')) {\n  return new Response(JSON.stringify({ error: 'Valid email required' }), { status: 400 });\n}\n\`\`\``,
            practicePrompt: 'Write a validation function for a user registration endpoint checking email format and minimum password length.',
            quiz: {
              question: 'Why must validation always occur on the backend even if frontend validation exists?',
              options: ['Frontend validation is slow', 'Frontend checks can easily be bypassed by API clients or malicious scripts', 'Browsers forbid backend checks', 'It reduces database size'],
              correctIndex: 1,
              explanation: 'Client-side code can be modified or bypassed; backend validation is mandatory for security.'
            },
            resources: [{ title: 'API Security Best Practices', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-api-4',
            slug: 'cors-and-preflight',
            title: '4. Understanding CORS and OPTIONS Preflight Requests',
            durationMinutes: 35,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=0sOvCWFmrtA',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=7r4xVDI2vho',
            content: `Cross-Origin Resource Sharing (CORS) is a browser security mechanism that restricts web pages from making requests to a different domain unless the server permits it via headers like \`Access-Control-Allow-Origin\`.`,
            practicePrompt: 'Write an OPTIONS preflight handler returning 204 status with Access-Control-Allow-Methods headers.',
            quiz: {
              question: 'What HTTP method does the browser automatically send as a CORS preflight check?',
              options: ['HEAD', 'OPTIONS', 'CHECK', 'PING'],
              correctIndex: 1,
              explanation: 'Browsers send an OPTIONS preflight request before non-simple cross-origin requests.'
            },
            resources: [{ title: 'MDN CORS Explained', url: '#', type: 'Documentation' }]
          },
          {
            id: 'l-api-5',
            slug: 'authentication-and-jwt',
            title: '5. Authentication with Bearer JWT and Cookies',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=fgTGADljAeg',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
            content: `Stateless authentication uses JSON Web Tokens (JWT). The client transmits the signed token in the \`Authorization: Bearer <token>\` header or an HttpOnly cookie, which the server verifies without querying a session database on every request.`,
            practicePrompt: 'Write a middleware function that extracts the Bearer token from an Authorization header.',
            quiz: {
              question: 'Where should a client place a JWT token when making an authenticated HTTP request?',
              options: ['In the URL query string', 'In the Authorization: Bearer <token> header', 'In the CSS file', 'In the HTML title'],
              correctIndex: 1,
              explanation: 'The standard location is the Authorization header with the Bearer prefix.'
            },
            resources: [{ title: 'JWT Architecture Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-api-6',
            slug: 'serverless-worker-apis',
            title: '6. Building Edge API Routes on Cloudflare Workers',
            durationMinutes: 35,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=SLwpqD8n3d0',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BLl32FvcdVM',
            content: `Cloudflare Workers execute lightweight serverless functions at the edge across 300+ global cities with 0ms cold starts, handling requests using standard Fetch API Request and Response objects.`,
            practicePrompt: 'Write a basic Cloudflare Worker fetch handler routing GET /api/health to a JSON response.',
            quiz: {
              question: 'What global API does Cloudflare Workers use for handling HTTP requests?',
              options: ['Apache Tomcat', 'Standard web Fetch API (Request and Response)', 'Node.js Express only', 'PHP FastCGI'],
              correctIndex: 1,
              explanation: 'Cloudflare Workers implement standard Web Platform APIs including Fetch Request/Response.'
            },
            resources: [{ title: 'Cloudflare Workers API Docs', url: 'https://developers.cloudflare.com/workers/', type: 'Docs' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'Which HTTP method should be idempotent (calling it multiple times produces the same result)?',
        options: ['POST', 'GET', 'All methods are identical', 'None'],
        correctIndex: 1,
        explanation: 'GET, PUT, and DELETE are defined as idempotent in HTTP specifications.'
      },
      {
        question: 'What header specifies the format of the data being sent in an HTTP request body?',
        options: ['Accept', 'Content-Type', 'User-Agent', 'Authorization'],
        correctIndex: 1,
        explanation: 'Content-Type: application/json tells the server how to parse the payload.'
      },
      {
        question: 'Which status code indicates that the client is not authenticated?',
        options: ['404 Not Found', '401 Unauthorized', '500 Server Error', '200 OK'],
        correctIndex: 1,
        explanation: '401 Unauthorized indicates missing or invalid credentials.'
      },
      {
        question: 'What is API rate limiting used for?',
        options: ['Making the site slower', 'Preventing abuse, denial-of-service, and resource exhaustion by capping requests per minute', 'Deleting user accounts', 'Encrypting text'],
        correctIndex: 1,
        explanation: 'Rate limiting protects infrastructure from abusive request spikes.'
      },
      {
        question: 'What is the purpose of the 204 No Content status code?',
        options: ['The page crashed', 'The request succeeded but there is no body data to return (e.g. after a DELETE)', 'The database is empty', 'File not found'],
        correctIndex: 1,
        explanation: '204 indicates success with an empty response payload.'
      },
      {
        question: 'Which HTTP header tells browsers which web origins can read API responses under CORS?',
        options: ['Access-Control-Allow-Origin', 'Allow-Domain', 'CORS-Permit', 'Origin-Open'],
        correctIndex: 0,
        explanation: 'Access-Control-Allow-Origin controls cross-origin access.'
      },
      {
        question: 'What are the three parts of a JSON Web Token (JWT)?',
        options: ['User, Pass, Email', 'Header, Payload, Signature', 'Key, IV, Ciphertext', 'Method, Route, Status'],
        correctIndex: 1,
        explanation: 'A JWT consists of Header, Payload, and cryptographic Signature separated by dots.'
      },
      {
        question: 'What status code should be returned when a requested ID does not exist in the database?',
        options: ['500', '404', '200', '403'],
        correctIndex: 1,
        explanation: '404 Not Found is standard for non-existent resources.'
      },
      {
        question: 'What is API versioning (e.g. /api/v1/courses)?',
        options: ['A practice that prevents breaking changes from affecting older client apps', 'A marketing strategy', 'A database index', 'A compiler flag'],
        correctIndex: 0,
        explanation: 'Versioning ensures backwards compatibility when updating API contracts.'
      },
      {
        question: 'Which tool is commonly used to inspect and test API endpoints locally?',
        options: ['Photoshop', 'cURL, Postman, or Hoppscotch', 'Excel', 'VLC'],
        correctIndex: 1,
        explanation: 'cURL, Postman, and Hoppscotch are standard HTTP client test tools.'
      }
    ],
    finalProject: {
      title: 'Serverless Notes API on Cloudflare Workers',
      brief: 'Build and deploy a complete serverless REST API on Cloudflare Workers. Implement endpoints for creating, reading, updating, and deleting personal notes, complete with input validation and JSON error handling.',
      requirements: [
        'GET /api/notes and GET /api/notes/:id',
        'POST /api/notes with payload validation',
        'DELETE /api/notes/:id with 204 No Content',
        'CORS headers configured for browser fetch support'
      ]
    }
  },
  {
    id: 'course-prog-9',
    slug: 'web-accessibility',
    title: 'Web Accessibility & Inclusive Design',
    description: 'Learn WCAG AA standards, semantic markup, keyboard navigation, ARIA roles, color contrast ratios, screen reader testing, and building accessible web applications.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Beginner',
    durationMinutes: 180,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Understand the four principles of WCAG: Perceivable, Operable, Understandable, Robust (POUR)',
      'Build fully keyboard-navigable interactive controls with visible focus rings',
      'Meet minimum color contrast thresholds (4.5:1 text, 3:1 graphical)',
      'Use native semantic HTML before reaching for ARIA attributes',
      'Provide meaningful alt text and accessible names for form inputs',
      'Test interfaces using automated linters and screen readers'
    ],
    completionRequirements: 'Complete all 6 lessons and pass the final exam.',
    prerequisites: ['HTML and CSS fundamentals'],
    instructor: {
      name: 'Maya Lin',
      role: 'Inclusive Design Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-a11y-1',
        title: 'Accessibility Foundations',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-a11y-1',
            slug: 'wcag-pour-principles',
            title: '1. The Four WCAG Principles (POUR)',
            durationMinutes: 30,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=20SHvU2PKsM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BSwa_5_Zg8A',
            content: `The Web Content Accessibility Guidelines (WCAG) are anchored in POUR:\n1. Perceivable: Users must be able to perceive content with their senses.\n2. Operable: Navigation and interactive controls must be operable by keyboard or voice.\n3. Understandable: Content and UI operations must be clear.\n4. Robust: Content must be interpretable by modern browsers and assistive technologies.`,
            practicePrompt: 'Audit an existing webpage and identify one feature supporting each POUR principle.',
            quiz: {
              question: 'What does the acronym "POUR" stand for in web accessibility?',
              options: ['Perceivable, Operable, Understandable, Robust', 'Performance, Optimization, Usability, Readiness', 'Page, Object, User, Resource', 'Power, Order, Unit, Rate'],
              correctIndex: 0,
              explanation: 'POUR defines the four foundation pillars of WCAG standards.'
            },
            resources: [{ title: 'WCAG Overview W3C', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', type: 'Documentation' }]
          },
          {
            id: 'l-a11y-2',
            slug: 'keyboard-navigation-focus',
            title: '2. Keyboard Navigation and Visible Focus Rings',
            durationMinutes: 30,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=cOmehxAU_4s',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Edsxf_NBFrw',
            content: `Many users navigate exclusively with Tab, Enter, Space, and Arrow keys. Never use \`outline: none\` without supplying a high-contrast \`:focus-visible\` alternative!\n\n\`\`\`css\nbutton:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}\n\`\`\``,
            practicePrompt: 'Navigate your favorite web app using only the Tab key and note if the focus indicator is always visible.',
            quiz: {
              question: 'Why should you never remove the default focus outline without a visible replacement?',
              options: ['It breaks mouse clicks', 'Keyboard-only and screen reader users cannot see which interactive element is currently focused', 'It slows down CSS', 'It is forbidden by Google'],
              correctIndex: 1,
              explanation: 'Visible focus indicators are vital for keyboard navigation orientation.'
            },
            resources: [{ title: 'Focus Visible Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-a11y-3',
            slug: 'color-contrast-and-text',
            title: '3. Color Contrast Ratios and Visual Accessibility',
            durationMinutes: 30,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=e2nkq3h1P68',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `WCAG AA requires a contrast ratio of at least 4.5:1 for normal body text and 3:1 for large text (18pt / 24px) and essential UI controls against their background. Never rely on color alone to indicate state.`,
            practicePrompt: 'Use a contrast checker to verify that slate-600 text on a white background meets 4.5:1 ratio.',
            quiz: {
              question: 'What is the minimum WCAG AA contrast ratio for standard body text?',
              options: ['2:1', '3:1', '4.5:1', '7:1'],
              correctIndex: 2,
              explanation: 'WCAG AA requires at least 4.5:1 contrast for normal text.'
            },
            resources: [{ title: 'WebAIM Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/', type: 'Tool' }]
          },
          {
            id: 'l-a11y-4',
            slug: 'semantic-html-vs-aria',
            title: '4. First Rule of ARIA: Use Native HTML First',
            durationMinutes: 30,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=z8xUCzToFQ8',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=T_7bY5c4vSw',
            content: `No ARIA is better than bad ARIA. A native \`<button>\` has keyboard enter/space triggers, focusability, and role built-in automatically. Avoid recreating buttons using \`<div onClick=...>\`!`,
            practicePrompt: 'Refactor a clickable div element into a semantic button with an accessible label.',
            quiz: {
              question: 'What is the "First Rule of ARIA"?',
              options: ['Use ARIA on every element', 'If you can use a native HTML element with the semantics you need, do so instead of re-purposing an element and adding ARIA', 'Never use HTML', 'Only use ARIA in tables'],
              correctIndex: 1,
              explanation: 'Native HTML provides built-in accessibility without fragile custom ARIA attributes.'
            },
            resources: [{ title: 'W3C Using ARIA', url: '#', type: 'Documentation' }]
          },
          {
            id: 'l-a11y-5',
            slug: 'form-accessibility-labels',
            title: '5. Accessible Forms, Labels, and Error Announcements',
            durationMinutes: 30,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=HtTyRajRrqY',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=vqW1L3Q3P5M',
            content: `Every \`<input>\` must have an associated \`<label for="...">\`. Group radio buttons in \`<fieldset>\` with \`<legend>\`. Connect error messages with \`aria-describedby\` so screen readers announce errors immediately.`,
            practicePrompt: 'Code an accessible login form with explicit labels and an aria-describedby error message.',
            quiz: {
              question: 'How do you explicitly associate a text label with an input in HTML?',
              options: ['Place them in the same file', 'Give the input an id and match it with the label\'s "for" attribute', 'Give them the same class name', 'Use an h1 tag'],
              correctIndex: 1,
              explanation: 'label for="my-id" programmatically links to input id="my-id".'
            },
            resources: [{ title: 'Accessible Forms Tutorial', url: '#', type: 'Tutorial' }]
          },
          {
            id: 'l-a11y-6',
            slug: 'screen-reader-testing',
            title: '6. Testing with Screen Readers and Automated Audits',
            durationMinutes: 25,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=20SHvU2PKsM',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BSwa_5_Zg8A',
            content: `Test your applications with real screen readers (NVDA on Windows, VoiceOver on Mac/iOS, TalkBack on Android) and run automated lighthouse audits to catch missing alt tags and contrast faults.`,
            practicePrompt: 'Turn on VoiceOver (Mac) or NVDA (Windows) and navigate through your web app.',
            quiz: {
              question: 'What is VoiceOver?',
              options: ['A microphone software', 'The built-in screen reader for macOS and iOS', 'A video player', 'A code editor'],
              correctIndex: 1,
              explanation: 'VoiceOver is Apple\'s built-in accessibility screen reader.'
            },
            resources: [{ title: 'Screen Reader Keyboard Shortcuts', url: '#', type: 'Cheatsheet' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What should the alt attribute contain for a purely decorative background image?',
        options: ['alt="image"', 'alt="" (empty string) so screen readers skip it', 'alt="decorative decoration"', 'Omit alt completely'],
        correctIndex: 1,
        explanation: 'alt="" marks an image as decorative, instructing assistive tech to ignore it.'
      },
      {
        question: 'Which HTML attribute specifies the primary language of the document to screen readers?',
        options: ['<html lang="en">', '<html dialect="en">', '<html speech="en">', '<meta language="en">'],
        correctIndex: 0,
        explanation: 'lang="en" ensures screen readers use the correct pronunciation engine.'
      },
      {
        question: 'What does "aria-hidden=true" do?',
        options: ['Hides an element visually from the screen', 'Hides an element from screen readers while keeping it visible visually', 'Deletes the element', 'Darkens colors'],
        correctIndex: 1,
        explanation: 'aria-hidden="true" excludes elements from the accessibility tree.'
      },
      {
        question: 'Can color alone be used to communicate error states in an input?',
        options: ['Yes, red borders are enough', 'No, color must be paired with an icon or explicit text message', 'Only in dark mode', 'Only on desktop'],
        correctIndex: 1,
        explanation: 'Colorblind users cannot perceive hue differences alone; text labels are required.'
      },
      {
        question: 'What role does a "skip-to-content" link play?',
        options: ['Skips ads', 'Allows keyboard users to bypass repetitive top navigation bars and jump straight to the main page content', 'Reloads the page', 'Closes popups'],
        correctIndex: 1,
        explanation: 'Skip links let keyboard users bypass repetitive header navigation.'
      },
      {
        question: 'What is the correct heading hierarchy practice in accessible documents?',
        options: ['Only use h3 tags', 'Maintain logical heading levels (h1 followed by h2, then h3) without skipping levels for visual styling', 'Use h1 for all titles', 'Headings are irrelevant'],
        correctIndex: 1,
        explanation: 'Screen reader users navigate documents by logical heading levels.'
      },
      {
        question: 'Which attribute communicates whether an accordion or dropdown menu is open or closed?',
        options: ['aria-expanded="true/false"', 'aria-visible', 'data-open', 'role="dropdown"'],
        correctIndex: 0,
        explanation: 'aria-expanded communicates open/closed state to assistive technologies.'
      },
      {
        question: 'What is the purpose of the "prefers-reduced-motion" CSS media query?',
        options: ['Stops the internet connection', 'Disables or minimizes decorative motion and animations for users with vestibular disorders', 'Speeds up video', 'Lowers screen brightness'],
        correctIndex: 1,
        explanation: 'prefers-reduced-motion respects users sensitive to motion sickness.'
      },
      {
        question: 'Why is placeholder text alone insufficient as an input label?',
        options: ['Placeholders disappear when typing and often lack sufficient color contrast', 'It causes JavaScript errors', 'Computers do not support placeholders', 'Only English is allowed'],
        correctIndex: 0,
        explanation: 'Placeholders vanish when typing, causing memory strain for users.'
      },
      {
        question: 'What tool in Chrome DevTools evaluates overall accessibility compliance?',
        options: ['Lighthouse', 'Memory Profiler', 'Network tab', 'Performance tab'],
        correctIndex: 0,
        explanation: 'Lighthouse runs automated WCAG compliance accessibility audits.'
      }
    ],
    finalProject: {
      title: 'Full Accessibility Audit & Remediation Lab',
      brief: 'Take an inaccessible web template with missing alt text, poor contrast, broken keyboard focus, and unlabeled form inputs. Audit and remediate every flaw until it achieves 100% on automated Lighthouse checks and passes manual keyboard testing.',
      requirements: [
        'Visible :focus-visible outlines on all interactive controls',
        'WCAG AA 4.5:1 contrast compliance across all text',
        'Semantic HTML elements with explicit form labels',
        'Accessible skip-to-content link implemented'
      ]
    }
  },
  {
    id: 'course-prog-10',
    slug: 'build-deploy-first-website',
    title: 'Build and Deploy Your First Website',
    description: 'Build a complete multi-page personal or business website from scratch and deploy it globally on Cloudflare with a custom domain, HTTPS, and analytics.',
    categoryId: 'cat_prog',
    categoryName: 'Programming',
    categorySlug: 'programming',
    difficulty: 'Beginner',
    durationMinutes: 240,
    lessonCount: 6,
    language: 'English',
    isPremium: false,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    learningObjectives: [
      'Structure a multi-page site with semantic HTML5 and clean CSS styling',
      'Optimize web assets (images, fonts, scripts) for sub-second page loads',
      'Configure Git and build commands with Vite',
      'Deploy static assets to Cloudflare Workers and Pages with global CDN caching',
      'Connect custom domain names and configure automated SSL certificates',
      'Set up basic web analytics and monitor deployment logs'
    ],
    completionRequirements: 'Complete all 6 lessons and deploy a live project to Cloudflare.',
    prerequisites: ['HTML and CSS basics'],
    instructor: {
      name: 'Elena Rostova',
      role: 'Cloudflare Deployment Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    sections: [
      {
        id: 'sec-dep-1',
        title: 'Project Architecture & Global Deployment',
        orderIndex: 1,
        lessons: [
          {
            id: 'l-dep-1',
            slug: 'project-planning-and-wireframes',
            title: '1. Project Scoping, Wireframes, and File Architecture',
            durationMinutes: 35,
            orderIndex: 1,
            videoUrl: 'https://www.youtube.com/watch?v=D-h8L5hgW-w',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=BSwa_5_Zg8A',
            content: `Before writing code, plan your page hierarchy: Home, About, Services/Projects, and Contact. Establish modular CSS and asset directories.`,
            practicePrompt: 'Sketch a wireframe for your personal homepage with hero, project grid, and footer.',
            quiz: {
              question: 'Why is wireframing recommended before writing HTML and CSS?',
              options: ['To waste time', 'To clarify layout structure and user journeys before getting lost in styling details', 'It is required by law', 'To generate passwords'],
              correctIndex: 1,
              explanation: 'Planning prevents costly rewrites during development.'
            },
            resources: [{ title: 'Website Planning Checklist', url: '#', type: 'PDF' }]
          },
          {
            id: 'l-dep-2',
            slug: 'coding-semantic-pages',
            title: '2. Coding the Semantic Pages and Global Navigation',
            durationMinutes: 45,
            orderIndex: 2,
            videoUrl: 'https://www.youtube.com/watch?v=srvUrASNj0s',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=Edsxf_NBFrw',
            content: `Build clean, reusable page templates with semantic HTML5 markup, responsive navigation bars, and cohesive typography.`,
            practicePrompt: 'Write the HTML markup for an About page including a personal bio and skill badges.',
            quiz: {
              question: 'Which tag should contain the primary navigational links of a website?',
              options: ['<aside>', '<nav>', '<menu-bar>', '<links>'],
              correctIndex: 1,
              explanation: 'The <nav> tag semantically encloses navigation links.'
            },
            resources: [{ title: 'HTML5 Semantic Layouts', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-dep-3',
            slug: 'asset-optimization-speed',
            title: '3. Image Compression, Web Fonts, and Fast Loading',
            durationMinutes: 35,
            orderIndex: 3,
            videoUrl: 'https://www.youtube.com/watch?v=apGV9Kg7ics',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=gwWKnnCMQ5c',
            content: `Convert images to modern WebP format, preconnect to font servers, and minimize render-blocking stylesheets to achieve sub-second page loads.`,
            practicePrompt: 'Compress an image using Squoosh.app and compare the file size difference.',
            quiz: {
              question: 'Which image format provides superior compression compared to legacy JPEG and PNG?',
              options: ['BMP', 'WebP / AVIF', 'TIFF', 'RAW'],
              correctIndex: 1,
              explanation: 'WebP and AVIF provide substantial byte savings without loss of visual fidelity.'
            },
            resources: [{ title: 'Web Performance Checklist', url: '#', type: 'Cheatsheet' }]
          },
          {
            id: 'l-dep-4',
            slug: 'cloudflare-deployment-wrangler',
            title: '4. Deploying to Cloudflare with Wrangler and Git',
            durationMinutes: 45,
            orderIndex: 4,
            videoUrl: 'https://www.youtube.com/watch?v=cOmehxAU_4s',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=pHxRR_2p-eY',
            content: `Use Cloudflare Workers with Static Assets. With \`npx wrangler deploy\`, your site distributes to 300+ data centers across the globe in seconds.`,
            practicePrompt: 'Deploy a static HTML site to Cloudflare using the Wrangler CLI.',
            quiz: {
              question: 'What is a CDN (Content Delivery Network)?',
              options: ['A database', 'A geographically distributed network of servers that caches content close to users for minimal latency', 'A coding language', 'A web browser'],
              correctIndex: 1,
              explanation: 'CDNs cache and serve static assets from the edge closest to the visitor.'
            },
            resources: [{ title: 'Cloudflare Deployment Guide', url: '#', type: 'Guide' }]
          },
          {
            id: 'l-dep-5',
            slug: 'custom-domains-and-ssl',
            title: '5. Custom Domains, DNS Records, and Automated HTTPS',
            durationMinutes: 40,
            orderIndex: 5,
            videoUrl: 'https://www.youtube.com/watch?v=8JJ101D3KnE',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=1U-L8d7Wd1Y',
            content: `Configure CNAME and A records to point your custom domain (e.g. \`yourname.com\`) to Cloudflare. Cloudflare automatically issues and renews free SSL/TLS certificates.`,
            practicePrompt: 'Configure a CNAME DNS record in Cloudflare pointing a subdomain to your Worker deployment.',
            quiz: {
              question: 'What DNS record type maps an alias subdomain to another domain name?',
              options: ['MX', 'CNAME', 'TXT', 'A'],
              correctIndex: 1,
              explanation: 'CNAME (Canonical Name) maps an alias name to a canonical domain name.'
            },
            resources: [{ title: 'DNS Records Explained', url: '#', type: 'Reference' }]
          },
          {
            id: 'l-dep-6',
            slug: 'post-launch-seo-analytics',
            title: '6. Post-Launch SEO, Sitemap, and Web Analytics',
            durationMinutes: 40,
            orderIndex: 6,
            videoUrl: 'https://www.youtube.com/watch?v=D-h8L5hgW-w',
            videoUrlUrdu: 'https://www.youtube.com/watch?v=gwWKnnCMQ5c',
            content: `Submit your \`sitemap.xml\` to Google Search Console, verify \`robots.txt\`, test mobile usability, and monitor privacy-friendly analytics.`,
            practicePrompt: 'Generate a sitemap.xml file for your site and inspect it for valid XML syntax.',
            quiz: {
              question: 'What tool allows site owners to verify indexing and monitor search traffic on Google?',
              options: ['Google Search Console', 'Adobe Reader', 'Photoshop', 'Terminal'],
              correctIndex: 0,
              explanation: 'Google Search Console tracks indexing status and organic search performance.'
            },
            resources: [{ title: 'SEO Launch Checklist', url: '#', type: 'Checklist' }]
          }
        ]
      }
    ],
    finalQuiz: [
      {
        question: 'What protocol secures website traffic with encryption and an SSL certificate?',
        options: ['HTTP', 'HTTPS', 'FTP', 'SSH'],
        correctIndex: 1,
        explanation: 'HTTPS encrypts communication between the browser and web server.'
      },
      {
        question: 'What file in the project root lists URLs for search engines to index?',
        options: ['robots.txt', 'sitemap.xml', 'index.html', 'package.json'],
        correctIndex: 1,
        explanation: 'sitemap.xml lists published URLs for crawlers.'
      },
      {
        question: 'What does the robots.txt file do?',
        options: ['Controls which pages automated web crawlers are permitted or forbidden to request', 'Plays robotic voices', 'Stops spam comments', 'Encrypts code'],
        correctIndex: 0,
        explanation: 'robots.txt instructs search bots on crawl boundaries.'
      },
      {
        question: 'Which tool runs Lighthouse performance audits directly inside the browser?',
        options: ['Chrome DevTools', 'Calculator', 'Terminal', 'Postman'],
        correctIndex: 0,
        explanation: 'Chrome DevTools includes the Lighthouse audit panel.'
      },
      {
        question: 'What command compiles a Vite project into a production distribution directory?',
        options: ['npm run start', 'npm run build', 'npm run deploy', 'npm test'],
        correctIndex: 1,
        explanation: 'npm run build triggers vite build.'
      },
      {
        question: 'What is a 404 HTTP status code?',
        options: ['Server crashed', 'Resource or page was not found at the requested URL', 'Successful payment', 'Access denied'],
        correctIndex: 1,
        explanation: '404 indicates the requested URL could not be found.'
      },
      {
        question: 'Why is caching beneficial for static website assets?',
        options: ['It saves battery', 'It enables returning visitors to load assets instantly from local cache without re-downloading', 'It prevents hacks', 'It changes colors'],
        correctIndex: 1,
        explanation: 'Browser and CDN caching avoids redundant network roundtrips.'
      },
      {
        question: 'What is the primary advantage of deploying on Cloudflare Workers edge architecture?',
        options: ['Requires expensive servers', 'Content and serverless code execute from hundreds of global locations within milliseconds of the user', 'Only works in the US', 'Deletes old files'],
        correctIndex: 1,
        explanation: 'Global edge distribution minimizes network latency worldwide.'
      },
      {
        question: 'What meta tags specify images and summaries when sharing links on LinkedIn or Twitter?',
        options: ['Open Graph (og:) and Twitter card meta tags', 'CSS style tags', 'Heading tags', 'JSON-LD only'],
        correctIndex: 0,
        explanation: 'Open Graph (og:title, og:image, etc.) powers social card previews.'
      },
      {
        question: 'What does a favicon represent on a website?',
        options: ['A favorite song', 'The small icon displayed next to the page title in the browser tab', 'The footer copyright', 'A virus check'],
        correctIndex: 1,
        explanation: 'The favicon is the browser tab and bookmark icon.'
      }
    ],
    finalProject: {
      title: 'Live Global Production Website Launch',
      brief: 'Build and deploy a complete 3-page personal portfolio or business website live on Cloudflare Workers or Pages. Include Open Graph meta tags, sitemap.xml, robots.txt, and achieve a 95+ score on mobile Lighthouse.',
      requirements: [
        'Live accessible URL hosted on Cloudflare edge',
        'Valid sitemap.xml and robots.txt in public root',
        '100% mobile-friendly responsive design',
        'Zero broken links or missing assets'
      ]
    }
  }
];
