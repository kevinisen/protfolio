import "./globals.css";
import AnimatedDots from "@/components/animations/AnimatedDots";

export const metadata = {
  title: "Kevin NETH — Portfolio",
  description: "Full-stack developer building production-ready systems and integrating AI when it matters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-white text-neutral-900 antialiased selection:bg-indigo-100 selection:text-indigo-900 relative">
        <AnimatedDots />
        
        {children}
      </body>
    </html>
  );
}