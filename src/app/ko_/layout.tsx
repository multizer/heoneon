import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import './korean-layout.css';

export const metadata: Metadata = {
  title: 'Informational Structure of Space',
  description: 'Research website for ongoing conceptual project',
};

export default function KoreanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="korean-layout">
      <Navigation locale="ko" />
      {children}
    </div>
  );
}
