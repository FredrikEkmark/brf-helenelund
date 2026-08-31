import { IconPhoto } from '@tabler/icons-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Sollentuna</p>
        <h1 className={styles.headline}>Välkommen till ditt hem.</h1>
      </div>
      <div className={styles.photoPlaceholder}>
        <IconPhoto className={styles.photoIcon} stroke={1.5} />
      </div>
    </section>
  );
}
