import {c, car, contact, cpp, css, estate, express, git, github, html, java, javascript, linkedin, mongodb, motion, mui, mysql, nextjs, nodejs, postgresql, pricewise, python, react, redux, sass, snapgram, summiz, tailwindcss, threads, typescript} from '../assets/icons';
import {meta, nu, payby, shopify, starbucks, tesla, unl} from '../assets/images';

export const skills = [
  {
    imageUrl: python,
    name: 'Python',
    type: 'Backend',
  },
  {
    imageUrl: java,
    name: 'Java',
    type: 'Backend',
  },
  {
    imageUrl: c,
    name: 'C',
    type: 'Backend',
  },
  {
    imageUrl: cpp,
    name: 'C++',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Database',
  },
  {
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database',
  },
];

export const experiences = [
  {
    title: 'Software Developer Intern',
    company_name: 'Payby',
    icon: payby,
    iconBg: '#f9e0b8',
    date: 'May 2024 - September 2024',
    points: [
      'Developed robust API integrations to support multiple Points of Purchase (POP), optimizing data reuse and system performance.',
      'Built a responsive user management interface using Vue.js, integrating backend APIs for seamless user operations.',
      'Collaborated with cross-functional teams, including developers and product managers, to deliver scalable backend systems.',
      'Participated in code reviews, contributing to improved code quality and system architecture discussions.',
    ],

  },
  {
    title: 'Teacher Assistant for Computer Science II',
    company_name: 'UNL',
    icon: unl,
    iconBg: '#fbc3b9',
    date: 'January 2024 - Present',
    points: [
      'Conducted recitation sections, teaching core computing concepts and assisting with troubleshooting and debugging assignments.',
      'Held one-on-one help sessions during office hours, clarifying complex topics and debugging code to support student success.',
      'Graded assignments and provided detailed feedback to help students improve their coding and problem-solving skills.',
      'Fostered an open and supportive learning environment to encourage academic growth and success.',
    ],

  },
  {
    title: 'MySurveys Developer',
    company_name: 'Nebraska University',
    icon: nu,
    iconBg: '#d2d2d2',
    date: 'October 2023 - December 2024',
    points: [
      'Implemented a robust survey system to evaluate professors’ performance using student feedback.',
      'Created customized surveys to accommodate diverse teaching styles and performance metrics.',
      'Leveraged Python, NumPy, and Excel to analyze large datasets, providing insights for data-driven decision-making.',
      'Produced actionable insights that enhanced institutional understanding of teaching quality.',
    ],
  },
];

export const volunteering = [
  {
    title: 'English Teacher Volunteer for Lincoln Literacy',
    description:
        'Taught English to students from Turkey, Iran, and Iraq with little prior knowledge of the language. Designed interactive classes and activities to foster communication and confidence.',
  },
  {
    title: 'Creative Coding Club Teacher',
    description:
        'Introduced middle schoolers to HTML, CSS, and JavaScript through hands-on projects, fostering creativity and collaboration in an engaging environment.',
  },
  {
    title: 'Math Tutoring Program',
    description:
        'Founded a program to help students learn basic concepts in mathmatics, teaching trough inovative methods to keep the kids engaged and teach them not only math, but to like to learn math.',
  },

];

export const extracurriculars = [
  {
    imageUrl: '/src/assets/images/tenaska.jpg',
    title: 'Tenaska Business Challenge',
    description:
        'Collaborated with a team to develop strategic solutions for a real estate company, placing 2nd out of 30 teams. Strengthened public speaking and interdisciplinary communication skills, qualifying for the regional round.',
  },
  {
    imageUrl: '/src/assets/images/brasa.jpg',
    title: 'Vice-President of BRASA',
    description:
        'Led a project to recruit Brazilian students to UNL, helping four students enroll in one semester. Focused on storytelling and mentorship to break barriers and highlight opportunities for prospective students.',
  },
  {
    imageUrl: '/src/assets/images/teqball.jpg',
    title: 'President of the TeqBall Club',
    description:
        'Expanded membership for the sport, organizing weekly sessions, managing logistics, and promoting events. Fostered teamwork and inclusivity, building a sense of community through shared passion.',
  },
  {
    imageUrl: '/src/assets/images/unitednations.jpg',
    title: 'United Nations',
    description:
        'Participated on a diverse group to win multiple intramural championships at UNL, including indoor and outdoor soccer. Fostered cultural exchange and inclusivity, creating a strong community of friends and teammates.',
  },
  {
    imageUrl: '/src/assets/images/huskers.jpg',
    title: 'Watching Huskers Games',
    description:
        'Cheered for the Huskers at Memorial Stadium with friends, enjoying the vibrant atmosphere and building lifelong memories. These moments strengthened friendships and showcased the powerful sense of community at UNL.',
  },
  {
    imageUrl: '/src/assets/images/bbq.jpg',
    title: 'Hosting Barbecues',
    description:
        'I love hosting barbecues with my friends, sharing the Brazilian way of grilling. It’s a perfect opportunity to bond, enjoy great food, and introduce a taste of Brazilian culture to everyone.',
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Sales Management and Reporting System',
    description:
        'Object-oriented system, written in Java, that supports YRLess’s business model implementing a sales subsystem that will be responsible for managing sales data and producing complete reports in a database-backed system.',
    link: 'https://github.com/lucascoelho-unl/proj-sales-system',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: '3D Portfolio Website',
    description:
        'This project is what you are looking at right now! This 3D portfolio website, built with Three.js, is a visual playground of interactive 3D rendering, creative animations, and immersive experiences. Packed with cool features, it’s not just a website—it’s a digital portifolio.!',
    link: 'https://github.com/lucascoelho-unl/portifolio',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Chess engine',
    description:
        'I developed a chess engine from scratch using advanced algorithms like bitboards, magic hashing, and quiescence search. The project integrates a C++ backend with a JavaScript frontend, allowing users to play and interact with the engine via an API.',
    link: 'https://github.com/lucascoelho-unl/chess_engine',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'J.A.R.V.I.S.',
    description:
        'I created a voice-activated virtual assistant using Python, with OpenAI API integration for natural language processing. J.A.R.V.I.S. enables speech recognition, voice response, and full computer control for automating daily tasks.',
    link: 'https://github.com/lucascoelho-unl/proj-jarvis',
  }
];