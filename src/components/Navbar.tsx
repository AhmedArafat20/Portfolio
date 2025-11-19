import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-gray-900 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center h-16">
        {/* Logo / Shorthand */}
        <div className="text-2xl font-bold text-cyan-400 cursor-pointer">
          WELCOME
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-cyan-400 mb-1"></div>
            <div className="w-6 h-0.5 bg-cyan-400 mb-1"></div>
            <div className="w-6 h-0.5 bg-cyan-400"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900 w-full text-center py-10 flex flex-col gap-6 absolute top-16 left-0"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold text-cyan-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
