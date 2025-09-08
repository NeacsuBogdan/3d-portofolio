export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Andrei Munteanu',
    position: 'Team Lead at BitSense',
    img: 'assets/no-img.png',
    review:
      'Bogdan proved to be a reliable full-stack developer. He handled both frontend and backend tasks with ease, and the IoT dashboard he built helped us monitor devices in real time. His ability to deliver under pressure really stood out.',
  },
  {
    id: 2,
    name: 'Raluca Iordache',
    position: 'Project Manager at Mensis Agency',
    img: 'assets/no-img.png',
    review:
      'Working with Bogdan was smooth from day one. He developed several React components for client campaigns, always meeting deadlines and maintaining great communication. The landing pages he optimized scored much higher on SEO after launch.',
  },
  {
    id: 3,
    name: 'Romeghea Andrei',
    position: 'Freelance Client — Mobile App',
    img: 'assets/no-img.png',
    review:
      'Bogdan created a clean and functional React Native app for our small business. He guided us through the technical decisions, implemented authentication and cloud storage, and the end product exceeded our expectations.',
  },
  {
  id: 4,
  name: 'Cristina Șerban',
  position: 'Professor at University Ovidius Constanta',
  img: 'assets/no-img.png',
  review:
    'I had the opportunity to supervise Bogdan during his academic projects, and I was impressed by his curiosity and ability to quickly grasp complex concepts. He consistently delivered well-structured, functional applications and demonstrated strong teamwork skills. His passion for software development is evident, and I am confident he will excel in any professional environment.',
  },
];

export const myProjects = [
  {
    title: 'QR Review App',
    desc: 'A web app that lets users leave verified reviews using QR codes and geolocation.',
    subdesc:
      'Includes Google Maps integration for navigation and location verification. Tech stack: Vue 3 (Vuetify), Node.js (Express), Google Maps API.',
    href: 'https://github.com/NeacsuBogdan/tellthetruth-frontend',
    texture: '/textures/project/3d-portofolio.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#1E1E1E',
      border: '0.2px solid #999',
      boxShadow: '0px 0px 60px 0px #FF45004D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Vue 3', path: '/assets/vue.png' },
      { id: 2, name: 'Node.js', path: '/assets/node.png' },
      { id: 3, name: 'Google Maps API', path: '/assets/maps.png' },
    ],
  },
  {
    title: 'AORA – AI Video Sharing App',
    desc: 'Mobile app for uploading and exploring AI-generated videos with prompt sharing.',
    subdesc:
      'Includes authentication, cloud storage, and adaptive UI. Tech stack: React Native, Expo Router, Appwrite, Tailwind CSS, Expo Media Library.',
    href: 'https://github.com/NeacsuBogdan/Aora',
    texture: '/textures/project/3d-portofolio.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#1E1E1E',
      border: '0.2px solid #3A3A3A',
      boxShadow: '0px 0px 60px 0px #00A3FF4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React Native', path: '/assets/react.svg' },
      { id: 2, name: 'Expo', path: '/assets/expo.png' },
      { id: 3, name: 'Tailwind CSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Interactive 3D Portfolio',
    desc: 'A 3D portfolio site showcasing projects in a visually engaging and interactive way.',
    subdesc:
      'Built with Three.js, React Three Fiber, GSAP, and EmailJS. Includes a 3D globe, animated transitions, and responsive layout.',
    href: 'https://github.com/NeacsuBogdan/3d-portofolio',
    texture: '/textures/project/3d-portofolio.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#1E1E1E',
      border: '0.2px solid #333333',
      boxShadow: '0px 0px 60px 0px #FFD7004D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Three.js', path: '/assets/threejs.png' },
      { id: 2, name: 'React', path: '/assets/react.svg' },
      { id: 3, name: 'Tailwind CSS', path: '/assets/tailwindcss.png' },
    ],
  },
];




export const calculateSizes = (isSmall, isMobile, isTablet) => {
  if (isSmall) {
    return {
      dijinScale: 0.75,
      dijinPosition: [-0.5, -3.0, 0],
      reactLogoScale: 0.7,
      cameraZ: 26,
      fov: 55,
    };
  }
  if (isMobile) {
    return {
      dijinScale: 0.9,
      dijinPosition: [-0.8, -3.0, 0],
      reactLogoScale: 0.8,
      cameraZ: 24,
      fov: 52,
    };
  }
  if (isTablet) {
    return {
      dijinScale: 1.0,
      dijinPosition: [-0.9, -3.2, 0],
      reactLogoScale: 0.9,
      cameraZ: 22,
      fov: 50,
    };
  }
  // desktop
  return {
    dijinScale: 1.15,
    dijinPosition: [-1.10, -3.40, 0],
    reactLogoScale: 0.9,
    cameraZ: 26,
    fov: 50,
  };
};


export const workExperiences = [
  {
    id: 1,
    name: 'BitSense',
    pos: 'Full-Stack Software Developer',
    duration: 'Jun 2024 – 2025',
    title:
      'Built an IoT Monitoring Dashboard with real-time updates and device management (React, TypeScript, Node.js/Express, PostgreSQL, WebSockets, Docker). Also created internal automation tools for reports and maintenance (REST APIs, Jest, Azure DevOps).',
    icon: '/assets/react.png',
    animation: 'looking',
  },
  {
    id: 2,
    name: 'Mensis Agency',
    pos: 'Full-Stack Software Developer',
    duration: 'Aug 2023 – Jun 2024',
    title:
      'Developed custom React components and high-performance landing pages; collaborated closely with design and backend teams. Stack: React, TypeScript, Redux, Tailwind CSS, Node.js (Express), PostgreSQL.',
    icon: '/assets/tailwindcss.png',
    animation: 'bow',
  },
  {
    id: 3,
    name: 'Freelance',
    pos: 'Developer (personal & freelance projects)',
    duration: '2021 – Present',
    title:
      'Built web/mobile apps and a 3D portfolio site (Three.js/React Three Fiber). Notable projects: AORA (React Native + Expo + Appwrite) and 3D portfolio (React, Three.js, Vite, GSAP, EmailJS).',
    icon: '/assets/threejs.png',
    animation: 'waving',
  },
];
