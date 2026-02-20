'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  locale?: 'en' | 'ko';
}

export default function Navigation({ locale = 'en' }: NavigationProps) {
  const pathname = usePathname();
  const basePath = locale === 'ko' ? '/ko_' : '';

  const isActive = (path: string) => {
    if (path === '/' || path === '/ko_') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'Home', href: basePath || '/' },
    { name: 'Projects', href: `${basePath}/projects` },
    { name: 'Concepts', href: `${basePath}/concepts` },
    { name: 'Examples', href: `${basePath}/examples` },
    { name: 'Notes', href: `${basePath}/notes` },
    { name: 'About', href: `${basePath}/about` },
    { name: 'Support', href: `${basePath}/support` },
  ];

  return (
    <nav>
      <div className="container">
        <div className="site-title">
          <Link href={basePath || '/'}>Informational Structure of Space</Link>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive(link.href) ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
