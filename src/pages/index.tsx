import Image from "next/image";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";


export default function Home() {
  return (
    <>
      <SEO
        title="Muhammad Rafi | Android & Backend Developer"
        description="Hi, I’m Rafi. Experienced in Android (Kotlin, Jetpack) and backend (Express.js, Prisma). Passionate about blockchain, cloud, and cybersecurity."
      />
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/89141167?v=4"
            alt="Rafi Profile"
            width={180}
            height={180}
            className="rounded-full mx-auto mb-6 border-4 border-[var(--primary)] shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="text-5xl font-bold mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Muhammad Rafi
        </motion.h1>

        <motion.p
          className="text-lg mb-6 text-[var(--muted)]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Android & Backend Developer · Blockchain Learner · Archery Enthusiast
        </motion.p>

        <motion.a
          href="/projects"
          className="px-6 py-3 rounded-xl shadow transition text-white bg-[var(--primary)] hover:bg-[var(--primary-hover)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>

        
      </main>
    </>
  );
}
