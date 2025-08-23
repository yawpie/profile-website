import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      name: "GitHub",
      href: "https://github.com/yawpie",
      text: "yawpie",
      icon: <FaGithub />,
      bg: "bg-[var(--secondary)]",
      textColor: "text-[var(--secondary-foreground)]",
      hover: "hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
    },
    {
      name: "Email",
      href: "mailto:mail@muhammadrafi.dev",
      text: "mail@muhammadrafi.dev",
      icon: <FaEnvelope />,
      bg: "bg-[var(--secondary)]",
      textColor: "text-[var(--secondary-foreground)]",
      hover: "hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/iammuhammadrafi/",
      text: "iammuhammadrafi",
      icon: <FaLinkedin />,
      bg: "bg-[var(--secondary)]",
      textColor: "text-[var(--secondary-foreground)]",
      hover: "hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/iammuhammadrafi",
      text: "@iammuhammadrafi",
      icon: <FaInstagram />,
      bg: "bg-[var(--secondary)]",
      textColor: "text-[var(--secondary-foreground)]",
      hover: "hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
    },
  ];

  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Contact</h2>
      <p className="mb-6">Let’s connect! 🚀</p>

      <div className="space-y-4">
        {contacts.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`flex items-center gap-3 p-4 rounded-xl shadow-md transition-colors duration-300 ${c.bg} ${c.textColor} ${c.hover}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl">{c.icon}</span>
            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm opacity-80">{c.text}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
