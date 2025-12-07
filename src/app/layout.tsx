"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ul/ParticlesBackground";
import ParticleOrbitEffect from "@/components/ul/ParticleOrbitEffect";
import FloatingElements from "@/components/ul/FloatingElements";
import AnimatedGradientBg from "@/components/ul/AnimatedGradientBg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>Aman Portfolio | Full Stack Developer & AI Specialist</title>
        <meta
          name="title"
          content="Aman Portfolio | Full Stack Developer & AI Specialist"
        />
        <meta
          name="description"
          content="Portfolio of Aman Gera - Full Stack Developer specializing in Next.js, React, TypeScript, AI Development, and modern web technologies. Explore my projects including AI Code Generator, Horoscopix, and Delivery platforms."
        />
        <meta
          name="keywords"
          content="Aman Gera, Full Stack Developer, Next.js Developer, React Developer, TypeScript, AI Development, Web Developer, Portfolio, Frontend Developer, Backend Developer"
        />
        <meta name="author" content="Aman Gera" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://amangera-portfolio.vercel.app/"
        />
        <meta
          property="og:title"
          content="Aman Portfolio | Full Stack Developer & AI Specialist"
        />
        <meta
          property="og:description"
          content="Portfolio of Aman Gera - Full Stack Developer specializing in Next.js, React, TypeScript, and AI Development. Explore my innovative projects and skills."
        />
        <meta
          property="og:image"
          content="https://amangera-portfolio.vercel.app/og-image.jpg"
        />
        <meta property="og:site_name" content="Aman Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://amangera-portfolio.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Aman Portfolio | Full Stack Developer & AI Specialist"
        />
        <meta
          property="twitter:description"
          content="Portfolio of Aman Gera - Full Stack Developer specializing in Next.js, React, TypeScript, and AI Development."
        />
        <meta
          property="twitter:image"
          content="https://amangera-portfolio.vercel.app/twitter-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://amangera-portfolio.vercel.app/" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aman Gera",
              url: "https://amangera-portfolio.vercel.app/",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in Next.js, React, TypeScript, and AI Development",
              sameAs: [
                "https://github.com/Amangera27",
                "https://www.linkedin.com/in/aman-gera",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "AI Development",
                "Web Development",
                "Full Stack Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Your University Name",
              },
            }),
          }}
        />
      </head>
      <body className="bg-gradient-to-r from-[#000000] to-[#0d0d9b] h-screen overflow-x-hidden">
        {/* Animated gradient background */}
        <AnimatedGradientBg />

        {/* Particle effects */}
        <ParticleOrbitEffect />
        <ParticlesBackground />

        {/* Floating elements */}
        <FloatingElements />

        {/* Main content */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
