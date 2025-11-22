import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 bg-gray-950"
    >
      {/* صورة */}
      <motion.div
        className="w-64 h-64 rounded-full overflow-hidden shadow-xl flex items-center justify-center"
        initial={{ x: -200, opacity: 0, rotate: -45 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, duration: 1 }}
      >
        <img
          src="/images/profile.jpg"
          alt="Ahmed Ayman Kamal"
          className="w-full h-full object-contain scale-90"
        />
      </motion.div>

      {/* النص */}
      <motion.div
        className="flex-1 text-left space-y-4" 
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, duration: 1 }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          About Me
        </h2>

        {/* فقرة 1 */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Hi, I am <span className="text-cyan-400 font-bold">Ahmed Ayman Kamal</span>,
          a fresh Computer Science graduate with strong experience in
          <span className="text-blue-400 font-semibold"> web development</span> and
          <span className="text-blue-400 font-semibold"> IT systems</span>, with a proven
          track record as a freelancer since 2022. Skilled in
          <span className="text-blue-400 font-semibold"> React</span> and
          <span className="text-blue-400 font-semibold"> front-end technologies</span>,
          with additional knowledge in
          <span className="text-blue-400 font-semibold"> databases</span>,
          <span className="text-blue-400 font-semibold"> networking (CCNA)</span>, and
          <span className="text-blue-400 font-semibold"> cyber security</span>.
        </p>

        {/* فقرة 2 */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Equipped with strong
          <span className="text-blue-400 font-semibold"> analytical</span> and
          <span className="text-blue-400 font-semibold"> problem‑solving</span> skills,
          eager to contribute to the
          <span className="text-blue-400 font-semibold"> digital transformation</span>{' '}
          and technology‑driven growth of the banking sector. Aiming to establish a
          <span className="text-blue-400 font-semibold"> software company</span> that
          addresses
          <span className="text-blue-400 font-semibold"> diverse programming needs</span>.
        </p>

        {/* فقرة 3 */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Known for
          <span className="text-blue-400 font-semibold"> leadership</span>,
          <span className="text-blue-400 font-semibold"> problem‑solving under pressure</span>,
          and a deep
          <span className="text-blue-400 font-semibold"> passion for coding</span> and building
          efficient, modern applications.
        </p>

        {/* الـ Stack */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          My stack includes
          <span className="text-blue-400 font-semibold">
            {' '}React, TailwindCSS, Vite, Framer Motion{' '}
          </span>
          and more. I’m constantly learning and pushing the limits of modern web development.
        </p>
      </motion.div>
    </section>
  );
}
