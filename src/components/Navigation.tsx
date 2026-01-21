import Link from 'next/link';

interface NavigationProps {
  locale?: 'en' | 'ko';
}

export default function Navigation({ locale = 'en' }: NavigationProps) {
  const basePath = locale === 'ko' ? '/ko_' : '';

  return (
    <nav>
      <div className="container">
        <div className="site-title">
          <Link href={basePath || '/'}>Informational Structure of Space</Link>
        </div>
        <ul>
          <li><Link href={basePath || '/'}>Home</Link></li>
          <li><Link href={`${basePath}/projects`}>Projects</Link></li>
          <li><Link href={`${basePath}/concepts`}>Concepts</Link></li>
          <li><Link href={`${basePath}/examples`}>Examples</Link></li>
          <li><Link href={`${basePath}/notes`}>Notes</Link></li>
          <li><Link href={`${basePath}/about`}>About</Link></li>
          <li><Link href={`${basePath}/support`}>Support</Link></li>
        </ul>
      </div>
    </nav>
  );
}
