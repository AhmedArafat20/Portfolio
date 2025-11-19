import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

type Notification = {
  message: string;
  type: "success" | "error";
};

type EmailJSResult = {
  text: string;
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [notification, setNotification] = useState<Notification | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_s6q46qj", 
        "template_u24kc6k", 
        formRef.current, 
        "cd6XzKb4a3kF-2J8k"
      )
      .then(
        (result: EmailJSResult) => {
          setNotification({ message: "Message sent successfully!", type: "success" });
          formRef.current?.reset();
          setTimeout(() => setNotification(null), 4000);
        },
        (error: EmailJSResult) => {
          setNotification({ message: "Failed to send the message.", type: "error" });
          setTimeout(() => setNotification(null), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 px-6 md:px-20 py-20 flex flex-col items-center relative"
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
        ref={formRef}
        className="w-full max-w-xl flex flex-col gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
          required
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

      {notification && (
        <div
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg font-semibold text-white shadow-lg ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}
    </section>
  );
}
