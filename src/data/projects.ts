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
    github: "https://github.com/ahmedayman/portfolio",
    demo: "almarjco.com",
  },
  {
    id: 2,
    title: "Al-Madina Glass Company",
    description:
      "Created a modern corporate website for showcasing the factory’s products and services. Features include product catalog, contact forms, and responsive design for seamless browsing across devices.",
    tech: ["React", "Redux", "TailwindCSS", "Stripe API"],
    github: "https://github.com/ahmedayman/ecommerce",
    demo: "#",
  },
  {
    id: 3,
    title: "Arabian Falcon Factory (Saudi Arabia)",
    description:
      "Built a custom business website for Arabian Falcon Factory, highlighting product ranges and services. Implemented SEO-friendly structure, smooth animations, and a professional gallery to display products.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/ahmedayman/todo-app",
    demo: "#",
    },
    {
    id: 4,
    title: "Movies Website",
    description:
      "Developed a dynamic web application for browsing and searching movies. Integrated with external APIs to fetch movie data and display ratings, trailers, and genres. Features interactive UI with filters and search functionality.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/ahmedayman/todo-app",
    demo: "#",
    },
      {
    id: 5,
    title: "NASA Space Apps Project",
    description:
      "Participated in NASA’s Space Apps Challenge, creating a web-based project to visualize and analyze space data. Implemented interactive charts and maps to help users explore datasets and gain insights efficiently.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/ahmedayman/todo-app",
          demo: "#",
    },
            {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React, TailwindCSS, and Framer Motion.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/ahmedayman/todo-app",
          demo: "#",
  },
];

export default projects;
