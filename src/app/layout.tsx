import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Informational Structure of Space',
  description: 'Research website for ongoing conceptual project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation locale="en" />
        <main>{children}</main>
      </body>
    </html>
  );
}
