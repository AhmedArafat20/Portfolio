import { motion } from "framer-motion";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year?: string;
  img?: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Graduation Certificate",
    issuer: "Egyptian e-Learning University",
    year: "2025",
    img: "/images/grad.jpg",
  },
  {
    id: 2,
    title: "Front end (Angular)",
    issuer: "ItI",
    year: "2023",
    img: "/images/frontend.jpg",
  },
  {
    id: 3,
    title: "Software Fundementals",
    issuer: "ITI",
    year: "2022",
    img: "/images/sw.jpg",
  },
    {
    id: 4,
    title: "Cyber Security",
    issuer: "ITI",
    year: "2024",
    img: "/images/cyber.jpg",
  },
    {
    id: 5,
    title: "Nasa Space Apps Challenge",
    issuer: "Nasa space apps",
    year: "2024",
    img: "/images/Nasa.jpg",
  },
    {
    id: 6,
    title: "Graduation Achievement",
    issuer: "EELU",
    year: "2025",
    img: "/images/eelu.jpg",
  },
    {
    id: 7,
    title: "Preparatory Certificate",
    issuer: "Suhaj Governorate",
    year: "2022",
    img: "/images/third.jpg",
  },
    {
    id: 8,
    title: "Device Configuration & Management",
    issuer: "Information Technology Specialist",
    year: "2024",
    img: "/images/Screenshot 2025-11-19 161402.png",
  },
    {
    id: 9,
    title: "Network Virtualization Concepts",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161512.png",
  },
    {
    id: 10,
    title: "Cloud and Virtualization Concepts",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161525.png",
  },
    {
    id: 11,
    title: " Ethical Hacking",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161543.png",
  },
      {
    id: 12,
    title: " Implementation of Computer Network Fundamentals",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161556.png",
  },
    {
    id: 13,
    title: "OWASP Top 10 (Web) 2021",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161610.png",
  },
    {
    id: 14,
    title: "Python",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161634.png",
  },
    {
    id: 15,
    title: "Computer Network Fundementals",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161650.png",
  },
    {
    id: 16,
    title: "Red Hat System Administration I",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161706.png",
  },
      {
    id: 17,
    title: "Secure Software Development Lifecycle (SSDLC)",
    issuer: "Mahara Tech",
    year: "2022",
    img: "/images/Screenshot 2025-11-19 161721.png",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="min-h-screen px-2 md:px-20 py-20 bg-gray-900"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-beige-200"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Certificates
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="bg-gray-800/40 rounded-xl p-4 flex flex-col gap-4 shadow-md border border-gray-700/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {cert.img && (
              <img
                src={cert.img}
                className="w-full rounded-md"
                alt={cert.title}
              />
            )}

            <div>
              <h3 className="text-xl font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
              {cert.year && (
                <p className="text-gray-500 text-sm mt-1">{cert.year}</p>
              )}
            </div>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                className="text-center py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700 transition"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
