import Navbar from '@/Components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Full Stack E-Commerce App'
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
      </body>
    </html>
  )
};