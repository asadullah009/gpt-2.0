import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chat UI",
  description: "Modern ChatGPT-like frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d0d] text-white antialiased">
        {children}
      </body>
    </html>
  );
}