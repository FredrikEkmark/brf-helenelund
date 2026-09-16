import { IconFileTypePdf, IconDownload } from '@tabler/icons-react';
import styles from './DocumentRow.module.css';

export default function DocumentRow({
  title,
  href,
  size,
}: {
  title: string;
  href?: string;
  size?: string;
}) {
  const content = (
    <>
      <IconFileTypePdf className={styles.fileIcon} stroke={1.5} />
      <span className={styles.title}>{title}</span>
      {size && <span className={styles.size}>{size}</span>}
      {href ? (
        <IconDownload className={styles.downloadIcon} stroke={1.5} />
      ) : (
        <span className={styles.unavailable}>Ej tillgänglig</span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.row}>
        {content}
      </a>
    );
  }

  return <div className={`${styles.row} ${styles.disabled}`}>{content}</div>;
}
