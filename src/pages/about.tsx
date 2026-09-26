import SEO from "@/components/SEO";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
     <SEO 
        title="About Me | Muhammad Rafi" 
        description="Learn about Muhammad Rafi's work in Android, backend development, and sales force automation research."
        url="https://iammuhammadrafi.my.id/about"
      />
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">
        About Me
      </h2>

      <p className="mb-4 leading-relaxed text-[var(--foreground)] transition-colors ">
        Hi, I’m Rafi 👋. I build Android apps and backend services, with
        experience using Kotlin, Jetpack, Express.js, and Prisma. I’m currently
        working on Pridata, a sales force automation project shaped by research
        into the day-to-day needs of sales teams and merchants.
      </p>

      <p className="mb-4 leading-relaxed text-[var(--foreground)] transition-colors ">
        I enjoy connecting software design with real workflows, from gathering
        requirements and mapping processes to building practical features. Outside
        of coding, I enjoy Olympic Recurve archery 🎯.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-[var(--foreground)]">
        Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "Android (Kotlin, Jetpack)",
          "Backend (Express.js, Prisma)",
          "Sales force automation research",
          "Requirements and process design",
        ].map((skill) => (
          <motion.div
            key={skill}
            className="p-5 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-2xl shadow hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors duration-500"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
    </>

  );
}
