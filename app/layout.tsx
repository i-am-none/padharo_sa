import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Padharo Sa",
  description: "A premium Rajasthani hospitality experience in Mauritius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full antialiased" lang="en">
      <body className="flex min-h-full flex-col bg-bg-base text-text-primary">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
