import Card from './Card';
import { topics } from './topics';
import styles from './TopicGrid.module.css';

export default function TopicGrid() {
  return (
    <div className={styles.grid}>
      {topics.map((topic) => (
        <Card
          key={topic.slug}
          href={`/boendeinfo/${topic.slug}`}
          title={topic.label}
          icon={topic.icon}
        >
          <p>{topic.teaser}</p>
        </Card>
      ))}
    </div>
  );
}
