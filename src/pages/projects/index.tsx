import SEO from "@/components/SEO";
import { getPinnedRepos } from "@/lib/github";
import { motion } from "framer-motion";

export default function ProjectsPage({ repos }: { repos: any[] }) {
  return (
    <>
      <SEO
        title="Projects | Muhammad Rafi"
        description="Explore my projects including Android apps, backend systems, and blockchain experiments."
        url="https://muhammadrafi.dev/projects"
      />
      <motion.main
        className="min-h-screen p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-[var(--primary)]">
          My Projects
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="
              group
              p-6 
              rounded-xl 
              shadow-md 
              bg-[var(--secondary)] 
              hover:bg-[var(--accent)] 
              text-[var(--secondary-foreground)]
              hover:text-[var(--accent-foreground)]
              transition-colors duration-500
            "
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }} // animasi berantai
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary-foreground)] transition-colors">
                {repo.name}
              </h2>
              <p className="mb-3">{repo.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span>⭐ {repo.stargazerCount}</span>
                <span>🍴 {repo.forkCount}</span>
                {repo.primaryLanguage && (
                  <span className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: repo.primaryLanguage.color }}
                    />
                    {repo.primaryLanguage.name}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.main>
    </>
  );
}

// ✅ SSR (sisi server)
export async function getServerSideProps() {
  const repos = await getPinnedRepos();
  return { props: { repos } };
}
