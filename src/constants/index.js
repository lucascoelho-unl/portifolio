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
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
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
    name: 'Amazon Price Tracker',
    description:
        'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
        'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
        'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
        'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
        'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
        'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  }
];