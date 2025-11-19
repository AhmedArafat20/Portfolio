import { motion } from "framer-motion";
import projects from "../data/projects";
import type { Project } from "../data/projects"; // استيراد النوع فقط

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 px-6 md:px-20 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.slice(0, 7).map((project: Project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between shadow-lg hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="text-sm bg-gray-700 px-2 py-1 rounded text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900 font-bold hover:scale-105 transition-transform"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
