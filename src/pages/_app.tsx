import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import PageLoader from "@/components/PageLoader"; 

// import type { AppProps } from "next/app";
// import { ThemeProvider } from "next-themes";
// import Layout from "../components/Layout";
// import "../globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <PageLoader/>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
