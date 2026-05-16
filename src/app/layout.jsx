import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header/page";
import Footer from "@/components/layouts/footers/page";
import { cn } from "@/lib/utils";
import Wrapper from "@/components/wrapper";
import SmoothScroll from "@/components/smooth-scroll";
import BlockDevTools from "@/components/block-devtools";
// import LightPillar from "@/components/lightpillar";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans", inter.variable)} suppressHydrationWarning>
        <Wrapper>
          <Header />
          <SmoothScroll>
            <main>{children}</main>
          </SmoothScroll >
          <Footer />
          <BlockDevTools />
        </Wrapper>
      </body>
    </html>
  );

}

export const metadata = {
  title: "Persona",
  description: "Show who you are",
  icons: {
    icon: '/Logo.png',
    shortcut: '/shortcut-icon.png',
    apple: '/Logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};
