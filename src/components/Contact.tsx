import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 px-6 md:px-20 py-20 flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="w-full max-w-xl flex flex-col gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
        ></textarea>
        <motion.button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900 font-bold rounded-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
