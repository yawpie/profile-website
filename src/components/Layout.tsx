import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}