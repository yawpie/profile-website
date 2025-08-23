import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // biar nggak error pas SSR
  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      className="bg-[var(--background)] shadow-md sticky top-0 z-50 transition-colors"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <h1 className="font-bold text-2xl text-[var(--foreground)]">
          <a href="/" className="text-xl font-bold">
            muhammadrafi.dev
          </a>
        </h1>

        {/* Menu Links */}
        <div className="flex items-center space-x-6 font-medium text-[var(--foreground)] transition-colors">
          <Link href="/" className="hover:text-indigo-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-500">
            About
          </Link>
          <Link href="/projects" className="hover:text-indigo-500">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-indigo-500">
            Contact
          </Link>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="px-3 py-1 rounded-md border border-[var(--foreground)] text-[var(--foreground)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              {resolvedTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
