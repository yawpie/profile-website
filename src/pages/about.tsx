import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">
        About Me
      </h2>

      <p className="mb-4 leading-relaxed text-[var(--foreground)] transition-colors ">
        Hi, I’m Rafi 👋. I’m an Android developer experienced with Kotlin,
        Jetpack, Retrofit, and Firebase. On the backend, I work with Express.js
        and Prisma. Recently, I started exploring blockchain, cloud computing,
        and cybersecurity.
      </p>

      <p className="mb-4 leading-relaxed text-[var(--foreground)] transition-colors ">
        Outside of coding, I’m passionate about archery (Olympic Recurve 🎯). I
        dream of combining my interests into unique projects, like my idea of a
        coffee shop with an archery range.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-[var(--foreground)]">
        Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "Android (Kotlin, Jetpack, Retrofit, Firebase)",
          "Backend (Express.js, Prisma)",
          "Blockchain (PBFT, PoS, IPFS, Hyperledger)",
          "Cloud Services (beginner)",
          "Cybersecurity (network security basics)",
        ].map((skill, idx) => (
          <motion.div
            className="p-5 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-2xl shadow hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors duration-500"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
