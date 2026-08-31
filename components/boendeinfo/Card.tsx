import { ReactNode, ComponentType } from 'react';
import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({
  title,
  href,
  icon: Icon,
  children,
}: {
  title?: string;
  href?: string;
  icon?: ComponentType<{ className?: string; stroke?: number }>;
  children: ReactNode;
}) {
  const content = (
    <>
      {Icon && <Icon className={styles.icon} stroke={1.5} />}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.body}>{children}</div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.card} ${styles.linkCard}`}>
        {content}
      </Link>
    );
  }

  return <div className={styles.card}>{content}</div>;
}
