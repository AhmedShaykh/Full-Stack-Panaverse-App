import Providers from "@/Components/Providers";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ClerkProvider, auth } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full Stack Dine Market App",
  description: "Full Stack Dine Market App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <Providers>
          <body>
            <Navbar
            // userId={userId as string}
            />
            {children}
            <Toaster
              reverseOrder={true}
            />
            <Footer />
          </body>
        </Providers>
      </html>
    </ClerkProvider>
  )
};