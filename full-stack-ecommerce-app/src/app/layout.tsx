import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './globals.css';

export const metadata = {
  title: 'Full Stack E-Commerce App',
  description: 'Full Stack E-Commerce App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
};