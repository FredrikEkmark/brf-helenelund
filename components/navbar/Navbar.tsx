"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconHomeEco } from '@tabler/icons-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'START', href: '/' },
  { label: 'BOENDEINFO', href: '/boendeinfo' },
  { label: 'FÖR MÄKLARE', href: '/maklare' },
  { label: 'KONTAKT', href: '/kontakt' },
  { label: 'DOKUMENT', href: '/dokument' },
];

function isLinkActive(pathname: string, href: string) {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  if (href === '/') return normalized === '/';
  return normalized === href || normalized.startsWith(`${href}/`);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={styles.sidebar}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <IconHomeEco className={styles.logoIcon} size={26} stroke={1.75} />
          <span className={styles.logoText}>Brf Helenelund</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={styles.toggleButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => {
            const isActive = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
