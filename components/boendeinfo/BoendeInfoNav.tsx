'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { topics } from './topics';
import styles from './BoendeInfoNav.module.css';

export default function BoendeInfoNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Boendeinfo">
      <Link
        href="/boendeinfo"
        className={`${styles.link} ${
          pathname === '/boendeinfo' || pathname === '/boendeinfo/' ? styles.active : ''
        }`}
      >
        Översikt
      </Link>
      {topics.map((topic) => {
        const href = `/boendeinfo/${topic.slug}`;
        const isActive = pathname.startsWith(href);
        return (
          <Link
            key={topic.slug}
            href={href}
            className={`${styles.link} ${isActive ? styles.active : ''}`}
          >
            {topic.label}
          </Link>
        );
      })}
    </nav>
  );
}
