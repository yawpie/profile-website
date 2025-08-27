import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const navbarLists = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Articles", href: "/articles" },
    { title: "Contact", href: "/contact" },
  ];

  // biar nggak error pas SSR
  useEffect(() => setMounted(true), []);

  const menuVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: -10, height: 0 },
  };

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
          <Link href="/" className="text-xl font-bold">
            muhammadrafi.dev
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-[var(--foreground)] transition-colors">
          {navbarLists.map((item) => (
            <Link key={item.title} href={item.href} className="hover:text-indigo-500">
              {item.title}
            </Link>
          ))}
          

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

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl text-[var(--foreground)]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--background)] border-t border-gray-300 dark:border-gray-700 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4 text-[var(--foreground)] font-medium">
              {navbarLists.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="hover:text-indigo-500"
                  onClick={() => setOpen(false)} // Close menu on link click
                >
                  {item.title}
                </Link>
              ))}

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => {
                    setTheme(resolvedTheme === "dark" ? "light" : "dark");
                    setOpen(false);
                  }}
                  className="px-3 py-1 rounded-md border border-[var(--foreground)] text-[var(--foreground)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  {resolvedTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}