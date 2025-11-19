import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-12 lg:px-20">
      {/* Name */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Ahmed Ayman Kamal
      </motion.h1>

      {/* Profession */}
      <motion.p
        className="text-xl md:text-2xl mb-8 text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Front-end Developer (React)
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {/* See Projects */}
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900 font-bold hover:scale-105 transition-transform"
        >
          See My Work
        </a>

        {/* Download CV */}
        <a
          href="/Ahmed Ayman Kamal.pdf"
          download
          className="px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400 hover:text-gray-900 transition-colors"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
