import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Let’s connect! 🚀
      </p>

      <div className="space-y-3">
        <a
          href="https://github.com/yawpie"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 rounded-xl shadow hover:shadow-md transition 
                     bg-indigo-100 dark:bg-indigo-900 
                     text-indigo-800 dark:text-indigo-200 
                     hover:bg-indigo-200 dark:hover:bg-indigo-800"
        >
          GitHub: @yawpie
        </a>

        <a
          href="mailto:mail@muhammadrafi.dev"
          className="block p-4 rounded-xl shadow hover:shadow-md transition 
                     bg-green-100 dark:bg-green-900 
                     text-green-800 dark:text-green-200 
                     hover:bg-green-200 dark:hover:bg-green-800"
        >
          Email: mail@muhammadrafi.dev
        </a>

        <a
          href="https://www.linkedin.com/in/iammuhammadrafi/"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 rounded-xl shadow hover:shadow-md transition 
                     bg-purple-100 dark:bg-purple-900 
                     text-purple-800 dark:text-purple-200 
                     hover:bg-purple-200 dark:hover:bg-purple-800"
        >
          LinkedIn: iammuhammadrafi
        </a>
      </div>
    </motion.section>
  );
}
