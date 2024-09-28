import type { Metadata } from "next";
import "./globals.css";
import "../styles/reset.css";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Inglo",
    default: "Inglo",
  },
  description: "Inglo 팀을 소개합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
