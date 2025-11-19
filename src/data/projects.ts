export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Al-Marj Transportation Company",
    description:
      "A frozen goods and cargo transportation company operating across all regions of Saudi Arabia. Developed a web platform for managing shipments, tracking deliveries, and improving client experience.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    github: "https://github.com/AhmedArafat20/almarj_cooler",
    demo: "https://almarjco.com",
  },
  {
    id: 2,
    title: "Al-Madina Glass Company",
    description:
      "Created a modern corporate website for showcasing the factory’s products and services. Features include product catalog, contact forms, and responsive design for seamless browsing across devices.",
    tech: ["React",  "TailwindCSS"],
    github: "https://github.com/AhmedArafat20/Almadina_Company",
    demo: "https://almadina-company.vercel.app/",
  },
  {
    id: 3,
    title: "Arabian Falcon Factory (Saudi Arabia)",
    description:
      "Built a custom business website for Arabian Falcon Factory, highlighting product ranges and services. Implemented SEO-friendly structure, smooth animations, and a professional gallery to display products.",
    tech: ["Html", "JavaScript", "CSS"],
    github: "https://github.com/AhmedArafat20/AlSaqr-Project",
    demo: "https://ahmedarafat20.github.io/AlSaqr-Project/",
    },
    {
    id: 4,
    title: "Movies Website",
    description:
      "Developed a dynamic web application for browsing and searching movies. Integrated with external APIs to fetch movie data and display ratings, trailers, and genres. Features interactive UI with filters and search functionality.",
    tech: ["React", "Framer Motion", "TailwindCSS" , "TMDb API" ,"Redux"],
    github: "https://github.com/AhmedArafat20/Movies",
    demo: "https://movies-eight-api.vercel.app/",
    },
      {
    id: 5,
    title: "NASA Space Apps Project",
    description:
      "Participated in NASA’s Space Apps Challenge, creating a web-based project to visualize and analyze space data. Implemented interactive charts and maps to help users explore datasets and gain insights efficiently.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/ahmedayman/todo-app",
    demo: "https://github.com/ahmedayman/todo-app",
    },
         {
    id: 5,
    title: "Graduation Project (Fit Web)",
    description:
      "A showcase website for the app, highlighting all features and benefits. Focused on health and lifestyle, it provides users with easy access to details and interactive exploration across all devices.",
    tech: ["React", "Bootstrap", "Framer Motion"],
    github: "https://github.com/AhmedArafat20/Graduation_Project",
    demo: "https://graduation-project-vert.vercel.app/",
    },
            {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React, TailwindCSS, and Framer Motion.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/AhmedArafat20/Portfolio",
    demo: "https://portfolio-ahmed-ayman.vercel.app/",
  },
];

export default projects;
