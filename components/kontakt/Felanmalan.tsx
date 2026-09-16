import {
  IconTools,
  IconDeviceTv,
  IconElevator,
  IconCar,
  IconWifi,
  IconShieldExclamation,
} from '@tabler/icons-react';
import Card from '@/components/boendeinfo/Card';
import styles from './Felanmalan.module.css';

export default function Felanmalan() {
  return (
    <div className={styles.grid}>
      <Card title="Felanmälan Fastigheten Generellt" icon={IconTools}>
        <p>
          Felanmälan kan göras via hemsidan{' '}
          <a href="https://www.jproperties.nu/felanmälan" target="_blank" rel="noopener noreferrer">
            Jakobsen Properties
          </a>{' '}
          eller via telefon 08 – 447 77 08.
        </p>
        <p>Öppettider: helgfria vardagar 07:00-16:00.</p>
        <p>
          Vid akuta fel kvällar och helger hänvisar vi till Bravida Larmcentral. Telefon: 020 –
          212 112.
        </p>
        <p>Felanmälan som ej är akut debiteras anmälaren.</p>
      </Card>

      <Card title="Felanmälan Kabel-TV" icon={IconDeviceTv}>
        <p>Sollentuna Energi AB, SEOM</p>
        <p>Telefon: 08-623 88 66</p>
      </Card>

      <Card title="Felanmälan Hiss" icon={IconElevator}>
        <p>Schindler Hiss AB</p>
        <p>Telefon: 020 – 31 33 33</p>
      </Card>

      <Card title="Felparkering" icon={IconCar}>
        <p>Aimo Park Sweden AB</p>
        <p>Telefon: 0771 – 96 90 00</p>
      </Card>

      <Card title="Felanmälan Bredband" icon={IconWifi}>
        <p>Bahnhof AB</p>
        <p>Telefon: 010 – 510 40 20</p>
        <p>
          Mejladress: <a href="mailto:kundservice@bahnhof.se">kundservice@bahnhof.se</a>
        </p>
      </Card>

      <Card title="Störningsjour" icon={IconShieldExclamation}>
        <p>Säkerhet Ordningsbevakning Sob AB</p>
        <p>Telefon: 08 – 519 315 21</p>
      </Card>
    </div>
  );
}
