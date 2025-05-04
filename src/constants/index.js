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
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Disclaimer: This review is for testing purposes. Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Disclaimer: This review is for testing purposes. Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech',
        img: 'assets/review3.png',
        review:
            'Disclaimer: This review is for testing purposes. I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Disclaimer: This review is for testing purposes. Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend development are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Review App cu QR',
        desc: 'O aplicație web care permite utilizatorilor să lase recenzii verificate folosind coduri QR și geolocalizare.',
        subdesc:
            'Include integrare cu Google Maps pentru navigare și autentificarea locației. Tech Stack: Vue 3 (Vuetify), Node.js (Express), Google Maps API.',
        href: 'https://github.com/NeacsuBogdan/review-qr-app',
        texture: '/textures/project/project1.mp4',
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
        desc: 'Aplicație mobilă pentru încărcarea și explorarea de videoclipuri generate cu AI, cu partajare de prompturi.',
        subdesc:
            'Include autentificare, stocare cloud și interfață adaptabilă. Tech Stack: React Native, Expo Router, Appwrite, Tailwind CSS, Expo Media Library.',
        href: 'https://github.com/NeacsuBogdan/Aora',
        texture: '/textures/project/project2.mp4',
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
        title: 'Portofoliu Interactiv 3D',
        desc: 'Site portofoliu 3D care evidențiază proiectele într-un mod vizual captivant și interactiv.',
        subdesc:
            'Realizat cu Three.js, React Three Fiber, GSAP și EmailJS. Include glob 3D, tranziții animate și layout responsive.',
        href: 'https://github.com/NeacsuBogdan/threejs_portofolio',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#1E1E1E',
            border: '0.2px solid #333333',
            boxShadow: '0px 0px 60px 0px #FFD7004D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            { id: 1, name: 'Three.js', path: '/assets/threejs.png' },
            { id: 2, name: 'React.js', path: '/assets/react.svg' },
            { id: 3, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
        ],
    },
];



export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        dijinScale: isSmall ? 0.2 : isMobile ? 0.4 : 0.5,
        dijinPosition: isMobile ? [0, -1, 0] : [0, -2, 0],
        cubePosition: isSmall ? [-1, -4, 0] : isMobile ? [0, 2, 0] : isTablet ? [0, 2, 0] : [0, 2, 0],
        reactLogoPosition: isSmall ? [-1, -4, 0] : isMobile ? [7.5, 13, -25] : isTablet ? [8, 12, -20] : [8, 12, -20],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Cornerstone Technology',
        pos: 'Frontend Intern',
        duration: '2023',
        title: 'Am dezvoltat o aplicație de management al rețetelor folosind Angular și TypeScript, implementând funcționalități CRUD printr-o interfață intuitivă.',
        icon: '/assets/angular.png',
        animation: 'looking',
    },
    {
        id: 2,
        name: 'Cornerstone Technology',
        pos: 'Backend Intern',
        duration: '2022',
        title: 'Am construit logica backend pentru o aplicație de tip rețea socială folosind C# și .NET, concentrându-mă pe interacțiunea utilizatorilor și fluxuri sigure de date.',
        icon: '/assets/dotnet.png',
        animation: 'bow',
    },
    {
        id: 3,
        name: 'Freelance',
        pos: 'Junior Developer (Proiecte freelance și personale)',
        duration: '2021 - prezent',
        title: 'Am dezvoltat aplicații mobile, web și 3D folosind tehnologii moderne precum React Native, Vue, Node.js și Three.js. Am integrat o rețea neuronală (NCF) într-un proiect pentru recomandări personalizate.',
        icon: '/assets/code.png',
        animation: 'waving',
    },
];
