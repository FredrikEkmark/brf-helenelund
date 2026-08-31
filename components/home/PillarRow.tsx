import { Fragment } from 'react';
import { IconBuildingCommunity, IconRipple, IconHeartHandshake } from '@tabler/icons-react';
import styles from './PillarRow.module.css';

const pillars = [
  { Icon: IconBuildingCommunity, label: 'Modernt boende' },
  { Icon: IconRipple, label: 'Edsviken nära' },
  { Icon: IconHeartHandshake, label: 'Tryggt och stabilt' },
];

export default function PillarRow() {
  return (
    <div className={styles.row}>
      {pillars.map(({ Icon, label }, index) => (
        <Fragment key={label}>
          {index > 0 && <span className={styles.divider} aria-hidden="true" />}
          <div className={styles.pillar}>
            <Icon className={styles.icon} stroke={1.5} />
            <p className={styles.label}>{label}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
