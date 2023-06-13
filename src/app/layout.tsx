import Head from "./Head";
import Navbar from "@/Components/Navbar";
import Providers from "@/Redux/Providers";
import Footer from "@/Components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
};