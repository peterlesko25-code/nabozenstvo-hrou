import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katechéza hrou | Biblické hry pre deti",
  description: "Jednoduché interaktívne hry pre katechézu a rodiny.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
