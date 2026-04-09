import "./globals.css";

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}