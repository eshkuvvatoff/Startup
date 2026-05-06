import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header/page";
import Footer from "@/components/layouts/footers/page";
import { cn } from "@/lib/utils";
import Wrapper from "@/components/wrapper";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans", inter.variable)} suppressHydrationWarning>
        <Wrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
