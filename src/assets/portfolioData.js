import portfolioImg01 from "./portfolio-01.jpg";
import portfolioImg02 from "./portfolio-02.jpg";
import portfolioImg03 from "./portfolio-03.jpg";
import portfolioImg04 from "./portfolio-04.jpg";
import portfolioImg05 from "./portfolio-05.jpg";
import portfolioImg06 from "./portfolio-06.jpg";
import portfolioImg07 from "./portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "web-development",
    title: "Finance Technology Website",
    description:
      "This dynamic platform seamlessly integrates various technologies to provide an exceptional user experience. Leveraging the power of React, I ensure that the front-end is not only visually appealing but also highly responsive. CSS3 enables me to craft stunning and intuitive interfaces that captivate users from the moment they land on the site",
    technologies: ["React", "CSS3", "Node", "Database"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "ui-design",
    title: "Video Conference Website",
    description:
      "A project that exemplifies my proficiency in a range of key technologies. Leveraging the power of React, I crafted a seamless and intuitive front-end that ensures users have a smooth video conferencing experience. CSS3 played a pivotal role in creating visually appealing interfaces that enhance user engagement.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "ui-design",
    title: "Multimedia Sharing Website",
    description:
      "I had the opportunity to demonstrate my expertise in a range of essential technologies. React served as the backbone of the project, enabling me to build a responsive and dynamic front-end that seamlessly adapts to users' needs. The use of CSS3 allowed me to design captivating and user-friendly interfaces, enhancing the overall user experience.",
    technologies: ["React", "CSS3", "Node", "Database"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "web-development",
    title: "Modern Landing Page",
    description:
      "i actively specialized in bringing this creative concept to life through a harmonious blend of UI/UX art techniques with a mix of React and Javascript logic. My dedication to storytelling through captivating visuals has enabled me to craft unique and engaging illustrations that resonate with audiences across various platforms and media. With a keen eye for detail and a deep understanding of design principles, I strive to deliver applications that not only captivates but also communicates ideas effectively, making every project a visually stimulating journey.",
    technologies: ["React", "CSS3", "Node", "Database"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "web-development",
    title: "Landing Page: Modern",
    description:
      "Node.js and a robust database system were instrumental in building a reliable and efficient backend. Node.js allowed me to implement server-side logic, ensuring real-time interactions and smooth data flow. The database technology underpins data storage and management, guaranteeing the security and accessibility of critical information.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "ui-design",
    title: "Online Therapy Website",
    description:
      "my proficiency in utilizing key technologies to create a platform that promotes mental well-being and support. Leveraging Node.js, I crafted a secure and responsive back-end infrastructure that enables users to access therapy resources and connect with mental health professionals seamlessly.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "web-development",
    title: "Appointment Booking Website",
    description:
      "CSS3 played a significant role in crafting an appealing and responsive design, enhancing the overall user experience. Meanwhile, the Node.js backend ensured smooth communication between the front-end and the database.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "08",
    imgUrl: portfolioImg01,
    category: "web-development",
    title: "Finance Technology Website",
    description:
      "This project is a testament to my ability to leverage modern web development tools and technologies to create engaging and functional websites that meet the unique needs of the finance and technology industry.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "09",
    imgUrl: portfolioImg02,
    category: "ui-design",
    title: "Video Conference Website",
    description:
      "my expertise in building user-friendly and efficient platforms. I harnessed the power of React to create an engaging front-end interface that allows users to seamlessly schedule appointments and access information.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "10",
    imgUrl: portfolioImg03,
    category: "ui-design",
    title: "File Sharing Website",
    description:
      "This project highlights my ability to create web applications that simplify complex tasks, providing a valuable service to users while maintaining a strong focus on design and functionality.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "11",
    imgUrl: portfolioImg04,
    category: "web-development",
    title: "Landing Page",
    description:
      "This project underscores my dedication to leveraging technology to address important societal needs, while maintaining a strong focus on security and user experience.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "12",
    imgUrl: portfolioImg05,
    category: "web-development",
    title: "Landing Page",
    description:
      "This project underscores my dedication to leveraging technology to address important societal needs, such as mental health support, while maintaining a strong focus on security and user experience.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "13",
    imgUrl: portfolioImg06,
    category: "web-development",
    title: "Online Therapy Website",
    description:
      "This project reflects my expertise in creating modern, technology-driven solutions that meet the demands of the online therapy while delivering a user-friendly experience.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
  {
    id: "14",
    imgUrl: portfolioImg07,
    category: "ui-design",
    title: "Appointment Booking Website",
    description:
      "React, as the frontend framework, ensures a seamless and interactive user experience. CSS3 allows for custom styling, enhancing the website's aesthetics and usability. Node.js serves as the backend technology, enabling efficient server-side operations and real-time updates. The database integration ensures data persistence and management, critical for an appointment booking system.",
    technologies: [
      "React",
      "CSS3",
      "Node",
      "Database",
      // Add more technologies as needed
    ],
    siteUrl: "#",
  },
];

export default portfolios;
