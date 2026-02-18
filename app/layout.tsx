import type { Metadata } from "next";
import "./globals.css";
import LayoutWithSidebar from "@/components/LayoutWithSidebar";

export const metadata: Metadata = {
  title: "ILF Community",
  description: "Join our vibrant community of developers and creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LayoutWithSidebar>
          {children}
        </LayoutWithSidebar>
      </body>
    </html>
  );
}
