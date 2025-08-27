import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "./LoadingSpinner";

export default function PageLoader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[var(--background)] bg-opacity-70 flex items-center justify-center z-50">
      <LoadingSpinner />
    </div>
  );
}