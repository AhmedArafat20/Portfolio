export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
      <p>
        © {new Date().getFullYear()} Ahmed Ayman Kamal. All Rights Reserved.
      </p>
      <div className="flex justify-center gap-6 mt-2">
        <a
          href="https://github.com/ahmedayman"
          target="_blank"
          className="hover:text-cyan-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ahmedayman"
          target="_blank"
          className="hover:text-cyan-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ahmed@example.com"
          className="hover:text-cyan-400 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
