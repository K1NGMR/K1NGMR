import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'K1NGMR: Builder of useful, ambitious things',
  description: 'The portfolio of K1NGMR: AI products, developer tools, game systems, and the Nexara ecosystem.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
