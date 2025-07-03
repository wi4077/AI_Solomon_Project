import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "Solomon ChatBot",
  description: "RAGBot Starter - Powered by DataStax and Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
