import styles from './PriceList.module.css';

type PriceItem = {
  label: string;
  price: string;
  note?: string;
};

export default function PriceList({ items }: { items: PriceItem[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <div className={styles.row}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.price}>{item.price}</span>
          </div>
          {item.note && <span className={styles.note}>{item.note}</span>}
        </li>
      ))}
    </ul>
  );
}
