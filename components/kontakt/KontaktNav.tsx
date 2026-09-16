'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { topics } from './topics';
import styles from './KontaktNav.module.css';

export default function KontaktNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Kontakt">
      <Link
        href="/kontakt"
        className={`${styles.link} ${
          pathname === '/kontakt' || pathname === '/kontakt/' ? styles.active : ''
        }`}
      >
        Översikt
      </Link>
      {topics.map((topic) => {
        const href = `/kontakt/${topic.slug}`;
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
