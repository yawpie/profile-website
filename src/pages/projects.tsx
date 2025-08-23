import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "📱 BanaTrack",
      desc: "An Android app for monitoring bioplastic production and distribution, built for SMEs, farmers, and cooperatives.",
    },
    {
      title: "🔗 Medical Record Blockchain",
      desc: "A blockchain-based medical record system using PBFT and exploring Proof of Stake, built with TypeScript.",
    },
    {
      title: "🥖 Bakery Shopping App",
      desc: "An Android shopping app with Firebase serverless backend, handling CRUD for bread products and orders.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="p-5 rounded-2xl shadow transition-colors duration-500 
                       bg-[var(--secondary)] text-[var(--secondary-foreground)] 
                       hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">
              {project.title}
            </h3>
            <p>{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
