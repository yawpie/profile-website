import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function SEO({
  title,
  description = "Muhammad Rafi — Android developer, backend enthusiast, exploring blockchain and cloud.",
  url = "https://muhammadrafi.dev",
  image = "https://muhammadrafi.dev/og-image.jpg",
}: SEOProps) {
  return (
    <Head>
      {/* Title */}
      <title>{title}</title>
      <meta name="title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}