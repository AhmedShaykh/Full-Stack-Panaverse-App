import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import Providers from '@/Redux/Providers';
import Head from './Head';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        {/* <Providers> */}
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  )
};