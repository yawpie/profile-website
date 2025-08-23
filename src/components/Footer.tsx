export default function Footer() {
  return (
    <footer className="py-4 text-center bg-[var(--secondary)] text-[var(--secondary-foreground)]">
      <p className="text-sm">
        © {new Date().getFullYear()} Rafi. Built with{" "}
        <span className="text-[var(--accent)]">❤️</span> using{" "}
        <span className="text-[var(--primary)] font-semibold">Next.js</span>
      </p>
    </footer>
  );
}
