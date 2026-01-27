import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import './korean-layout.css';

export const metadata: Metadata = {
  title: {
    default: '공간의 정보적 구조 | EonHeon',
    template: '%s | EonHeon',
  },
  description: '공간을 비어 있는 배경이 아닌, 정보로 채워진 구조로 탐구하는 장기 개념 연구 프로젝트.',
  openGraph: {
    type: 'website',
    locale: 'ko',
    siteName: 'EonHeon',
    title: '공간의 정보적 구조',
    description: '공간을 비어 있는 배경이 아닌, 정보로 채워진 구조로 탐구하는 장기 개념 연구 프로젝트.',
  },
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
