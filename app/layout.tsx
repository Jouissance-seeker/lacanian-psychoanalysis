import { cn } from "@/lib/utils";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Providers } from "./providers";

export const iranYekan = localFont({
  src: [
    { path: "../public/fonts/iran-yekan/thin.woff", weight: "100", style: "normal" },
    { path: "../public/fonts/iran-yekan/light.woff", weight: "300", style: "normal" },
    {
      path: "../public/fonts/iran-yekan/regular.woff",
      weight: "400",
      style: "normal",
    },
    { path: "../public/fonts/iran-yekan/medium.woff", weight: "500", style: "normal" },
    { path: "../public/fonts/iran-yekan/bold.woff", weight: "700", style: "normal" },
    {
      path: "../public/fonts/iran-yekan/extra-bold.woff",
      weight: "800",
      style: "normal",
    },
    { path: "../public/fonts/iran-yekan/black.woff", weight: "900", style: "normal" },
    {
      path: "../public/fonts/iran-yekan/extra-black.woff",
      weight: "950",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata
 = {
  title: "روانکاوی لکانی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={cn(iranYekan.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
