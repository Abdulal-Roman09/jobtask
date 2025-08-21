import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavClients from "@/components/navber/NavClients";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "JobTask",
  description: "Best Ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavClients>
          <div className="container mx-auto">{children}</div>
        </NavClients>
      </body>
    </html>
  );
}
