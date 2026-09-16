import { IconBuilding, IconFileText } from '@tabler/icons-react';
import Card from '@/components/boendeinfo/Card';
import styles from './Forvaltningsfragor.module.css';

export default function Forvaltningsfragor() {
  return (
    <div className={styles.grid}>
      <Card title="Fastighetsförvaltning och skötsel" icon={IconBuilding}>
        <p>Våra fastigheter ägs av Brf Grusgropen.</p>
        <p>
          Jakobsen Properties svarar för fastighetsskötsel, den ekonomiska och tekniska
          förvaltningen på uppdrag av Brf Grusgropen.
        </p>
      </Card>

      <Card title="Hyresfrågor" icon={IconFileText}>
        <p>Frågor kring överlåtelser, pantsättning, hyror, avgifter m.m.</p>
        <p>Öppettider: helgfria vardagar, kl. 08:00 – 16:00.</p>
        <p>Telefon: 08 – 447 77 08</p>
        <p>
          Mejl: <a href="mailto:info@jakobsenekonomi.se">info@jakobsenekonomi.se</a>
        </p>
      </Card>
    </div>
  );
}
