import Link from 'next/link';
import {
  IconWashMachine,
  IconTools,
  IconListCheck,
  IconChargingPile,
} from '@tabler/icons-react';
import styles from './IconShortcuts.module.css';

const shortcuts = [
  { Icon: IconWashMachine, label: 'Boka tvätt', href: '/boendeinfo/boka-tvattstuga' },
  { Icon: IconTools, label: 'Felanmälan', href: '/kontakt/felanmalan' },
  {
    Icon: IconListCheck,
    label: 'Regler',
    href: '/boendeinfo/foreningslokal/ordningsregler-lokalen',
  },
  { Icon: IconChargingPile, label: 'Laddplatser', href: '/boendeinfo/parkering' },
];

export default function IconShortcuts() {
  return (
    <div className={styles.row}>
      {shortcuts.map(({ Icon, label, href }) => (
        <Link key={label} href={href} className={styles.shortcut}>
          <Icon className={styles.icon} stroke={1.5} />
          <span className={styles.label}>{label}</span>
        </Link>
      ))}
    </div>
  );
}
