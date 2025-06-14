import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/navbar";
import { ScrollArea } from "~/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Couch Social",
  description: "Social media site demo",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <main className="min-h-screen flex-none justify-center bg-gradient-to-b from-blue-950 to-slate-950 px-4 text-white md:flex">
            <div className="hidden min-h-screen justify-end pt-10 pr-6 md:block">
              <Navbar />
            </div>
            <ScrollArea className="flex flex-col items-center justify-center border-r-1 border-l-1 md:max-w-2/3">
              {children}
            </ScrollArea>
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
