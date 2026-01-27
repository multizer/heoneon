import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Informational Structure of Space | EonHeon',
    template: '%s | EonHeon',
  },
  description: 'A long-term conceptual research project exploring space as an informational structure rather than an empty background.',
  openGraph: {
    type: 'website',
    locale: 'en',
    siteName: 'EonHeon',
    title: 'Informational Structure of Space',
    description: 'A long-term conceptual research project exploring space as an informational structure rather than an empty background.',
  },
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
