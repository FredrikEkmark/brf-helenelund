import Card from '@/components/boendeinfo/Card';
import { topics } from './topics';
import styles from './ContactGrid.module.css';

export default function ContactGrid() {
  return (
    <div className={styles.grid}>
      {topics.map((topic) => (
        <Card
          key={topic.slug}
          href={`/kontakt/${topic.slug}`}
          title={topic.label}
          icon={topic.icon}
        >
          <p>{topic.teaser}</p>
        </Card>
      ))}
    </div>
  );
}
