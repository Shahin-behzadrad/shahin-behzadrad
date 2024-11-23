import type { Metadata } from "next";
import "@/styles/globals.scss";
import { getInitialTheme } from "@/lib/themes";
import Header from "@/components/Header";
import SocialShortcuts from "@/components/SocialShortcuts";

export const metadata: Metadata = {
  title: "Shahin BehzadRad",
  description: "Front-End focused Full-Stack developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getInitialTheme();

  return (
    <html lang="en" data-theme={theme || "dark"}>
      <body className="root-layout">
        <Header />
        <SocialShortcuts />
        <main>{children}</main>
      </body>
    </html>
  );
}
