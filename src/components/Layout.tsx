import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
