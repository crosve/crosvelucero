"use client";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-parchment text-sepia font-body">
        {children}
      </body>
    </html>
  );
}
