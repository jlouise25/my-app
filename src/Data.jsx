// import Project1 from './assets/project1.jpeg';
// import Project2 from './assets/project2.jpg';
// import Project3 from './assets/project3.jpeg';
// import Project4 from './assets/project4.jpeg';
// import Project5 from './assets/project5.jpg';
// import Project6 from './assets/project6.jpg';
import doc from './assets/doconchain.png';
import Quiz from './assets/forQuiz.png';
import Lou from './assets/Louthography.png'
import Pic from  './assets/graphics.png';
import art from './assets/illustrations.png';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Portfolio',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  // {
  //   name: 'Testimonials',
  //   path: 'testimonial',
  // },
  // {
  //   name: 'Pricing',
  //   path: 'pricing',
  // },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Frontend Development',
    description:
      'I specialize in front-end development, focusing on crafting immersive web experiences using HTML, CSS, and JavaScript. With a keen proficiency in the React library, I bring dynamic interactivity and seamless user interfaces to life, translating design concepts into responsive and captivating websites.',
  },
  {
    id: 2,
    name: ' Web Development ',
    title: ' Backend Development ',
    description:
      'Backend development, I harness the power of Java and Python to build robust and efficient systems. I have knowledge in utilizing the Java Spring framework for creating scalable and feature-rich backends. For Python for intricate problem-solving tasks and have delved into the Machine Learning to expand my horizons.',
  },
  {
    id: 3,
    name: ' Cloud Services',
    title: ' AWS ',
    description:
      'I have a foundational understanding of AWS Cloud and its capabilities. Im enthusiastic about furthering my expertise and eager to embark on a continuous learning journey to harness my skill AWS Cloud fully. My aim is to leverage cloud technology to optimize infrastructure, enhance scalability, and contribute to innovative solutions that align with the evolving landscape of modern computing.',
  },
  {
    id: 4,
    name: ' UI / UX ',
    title: ' Figma and Adobe XD ',
    description:
      'My UI/UX design proficiency extends to industry-standard tools such as Figma and Adobe XD. With these tools, I craft intuitive and visually appealing user interfaces, ensuring seamless interactions and memorable user experiences',
  },
  {
    id: 5,
    name: ' Graphic Design ',
    title: ' Adobe Photoshop ',
    description:
      'I excel in graphic design, specializing in creating captivating visuals, logos, and banners. I leverage my creative skills to produce eye-catching designs that convey brand identity and messaging effectively.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'SQL',
    percentage: 85,
    description:
      'I possess strong SQL expertise, adept at crafting complex queries to extract precise insights from databases. Proficient in optimizing database performance and designing relational structures to ensure seamless data management.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 75,
    description:
      'I skillfully develop dynamic and interactive web applications, enhancing user engagement through smooth functionalities and responsive designs. My proficiency extends to leveraging modern frameworks to create seamless user experiences and robust frontend solutions.',
  },

  {
    id: 3,
    name: 'Photoshop',
    percentage: 90,
    description:
      'My proficiency in Photoshop enables me to transform concepts into captivating visuals, enhancing images, designing graphics, and crafting compelling compositions with precision and creativity. I harness Photoshops tools to produce polished designs that align with brand aesthetics and communication objectives.',
  },

  {
    id: 4,
    name: 'Python',
    percentage: 75,
    description:
      'I wield Python as a versatile tool, utilizing it for backend logic, algorithmic problem-solving, and even exploring the field of machine learning. My adeptness in Python empowers me to deliver efficient, scalable, and innovative solutions across diverse domains.',
  },

  {
    id: 5,
    name: 'ReactJS',
    percentage: 70,
    description:
      'Im adept at harnessing the power of ReactJS to build dynamic and user-centric web interfaces. With its component-based architecture, I create seamless, responsive, and engaging frontend solutions that elevate user experiences and streamline interactions.',
  },

  {
    id: 6,
    name: 'Figma',
    percentage: 80,
    description:
      'With my knowledge in Figma, I craft visually compelling and user-centric designs, collaborating seamlessly with teams to iterate and refine concepts. I transform ideas into interactive prototypes, ensuring a comprehensive understanding of the user journey and design aesthetics.',
  },
];

export const projects = [
  {
    id: 1,
    img: Lou,
    category: 'Development',
    title: 'LOUthography',
    link: 'https://jlouise25.github.io/LOUthography/',
    description:
      'My personal photography website developed using HTML5, CSS3, and JavaScript.',
  },
  {
    id: 2,
    img: doc,
    category: 'UI UX Design',
    title: 'Doconchain',
    link: 'https://www.figma.com/proto/l5Svw2mwMTvLp2iJPgtoVB/DOC-Sign-mockup-050222?page-id=0%3A1&type=design&node-id=3-3492&viewport=186%2C-16%2C0.09&t=K1J5RQbNMPNAQ6SR-1&scaling=min-zoom&starting-point-node-id=3%3A3492&mode=design',
    description:
      'Created a end product prototype of new DocOnChain website using figma.',
  },
  {
    id: 3,
    img: Quiz,
    category: 'Development',
    title: 'BDTK Quiz Site',
    link: 'https://jlouise25.github.io/BDTKQuizGame.github.io/game.html',
    description:
      'Experimental quiz game to test my JavaScript knowledge.',
  },
  {
    id: 4,
    img: Pic,
    category: 'Graphics Design',
    title: 'Banner Posters',
    link: 'https://www.behance.net/gallery/177742657/Graphic-Designs-for-MLBB-Event',
    description: 'Created banner posters, videos, logo, ingame design for ACEN MLBB Events.',
  },
  {
    id: 5,
    img: art,
    category: 'Illustrations',
    title: 'Making my Own Illustrations',
    link: 'https://www.behance.net/gallery/177744717/Illustrations',
    description:
      'Created own Illustrations that I can be used in my future projects.',
  },
  // {
  //   id: 6,
  //   img: Project6,
  //   category: 'Branding',
  //   title: 'Kana',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  // },
];

export const cv = [
  {
    id: 1,
    title: 'Technological Institute of the Philippines',
    subtitle: 'Bachelor of Science in Computer Science',
    date: '2018 - 2022',
    description:
      'Graduated with Honor Distinction with the weighted average of 1.39 GPA',
    category: 'education',
  },

  {
    id: 2,
    title: 'Southeast Asian College Inc',
    subtitle: 'Technical Vocational ICT Strand (SHS)',
    date: '2016 - 2018',
    description:
      'Graduated with Honors with the average of 92%, Best Programmer in Thesis 1&2.',
    category: 'education',
  },

  // {
  //   id: 3,
  //   title: 'IT Future',
  //   subtitle: 'High School',
  //   date: '2010 - 2012',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   category: 'education',
  // },

  {
    id: 4,
    title: 'Trend Micro Inc.',
    subtitle: 'Cloud Engineer',
    date: 'Jan 2023 - April 2023',
    description:
      'Trained as a Fullstack developer with experience in Frontend, Backend, CI/CD, and deployment on AWS. I follow AGILE methodologies and use Sprint to manage projects effectively.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'DocOnChain',
    subtitle: 'Frontend Developer & UI/UX Designer',
    date: 'March 2022 - May 2022',
    description:
      'Create Frontend Designs for their projects in Doconchain, using Tailwind CSS and React JS. Create Graphic Designs for UI/UX Team, using Adobe Illustrator, Adobe Photoshop and Adobe XD. Create Mockups using Figma and collaborate with the frontend team. Create animation (CANVAS) in Adobe Animate CC.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Ayala Energy Corporation',
    subtitle: 'Graphic Designer',
    date: 'August 2021',
    description:
      'Creating graphics, logos, illustrations, layouts, and banners for ACEN MLBB 2nd Tournament, and Communicate with stake holders to deliver the end product effectively.',
    category: 'experience',
  },
];

// export const testimonials = [
//   {
//     id: 1,
//     img: Testimonial1,
//     name: 'Barbara Wilson',
//     author: 'CEO Company',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 2,
//     img: Testimonial2,
//     name: 'Charlie Smith',
//     author: 'Designer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 3,
//     img: Testimonial3,
//     name: 'Roy Wang',
//     author: 'Manager GYM',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 4,
//     img: Testimonial4,
//     name: 'Jennifer Smith',
//     author: 'CEO & Founder',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 5,
//     img: Testimonial5,
//     name: 'Paul Freeman',
//     author: 'Photographer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
// ];
