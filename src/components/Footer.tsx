import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-[var(--secondary)] text-[var(--secondary-foreground)] mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left text */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Rafi. Built with{" "}
          <span className="text-[var(--accent)]">❤️</span> using{" "}
          <span className="text-[var(--primary)] font-semibold">Next.js</span>
        </p>

        {/* Right social links */}
        <div className="flex justify-center md:justify-end gap-5 text-lg">
          <a
            href="https://github.com/yawpie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/iammuhammadrafi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/iammuhammadrafi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}