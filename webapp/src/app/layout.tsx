import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maihem Chat UI",
  description: "Maihem Chat UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
