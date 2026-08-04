import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Studio — Diseño y Desarrollo para Proyectos Creativos",
  description:
    "Webs, herramientas digitales y experiencias interactivas para músicos, artistas y creadores.",
  keywords: ["diseño web", "desarrollo web", "músicos", "artistas", "creativos", "portfolio"],
  openGraph: {
    title: "Studio — Diseño y Desarrollo para Proyectos Creativos",
    description: "Webs, herramientas digitales y experiencias interactivas para músicos, artistas y creadores.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-base text-ink font-body antialiased overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
