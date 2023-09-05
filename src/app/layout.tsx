import Providers from '@/Components/Providers';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Head from './Head';
import { ClerkProvider, auth } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <Head />
        <Providers>
          <body>
            <Navbar userId={userId as string} />
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