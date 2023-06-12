import Head from './Head';
import Providers from '@/Redux/Providers';
import './globals.css';

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
          {children}
        </Providers>
      </body>
    </html>
  )
};