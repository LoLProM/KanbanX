import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KanbanX - Kanban Board",
  description: "A Kanban board application built with Next.js, React, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
