import Card from '@/components/boendeinfo/Card';
import styles from './Styrelsen.module.css';

const ledamoter = [
  { name: 'Karim Bakhteyari', role: 'Ordförande' },
  { name: 'Hamed Veghar', role: 'Kassör' },
  { name: 'Mireille Yachouh' },
  { name: 'Stellan Crusoe' },
  { name: 'Peter Larsson' },
];

const suppleanter = [
  { name: 'Behnam Bolhasani' },
  { name: 'Soulie Savander' },
  { name: 'Ranjeet Kumar Barnwal' },
];

const valberedningen = [
  { name: 'Leonardo Canales' },
  { name: 'Jousef Vahan Manouk' },
  { name: 'Karim Bakhteyari' },
];

function PersonGrid({ people }: { people: { name: string; role?: string }[] }) {
  return (
    <div className={styles.grid}>
      {people.map((person) => (
        <Card key={person.name} title={person.name} subtitle={person.role} />
      ))}
    </div>
  );
}

export default function Styrelsen() {
  return (
    <>
      <Card>
        <p>
          Styrelsens uppgift är att verkställa de beslut som tas på stämman samt att se till att
          fastigheten mår bra.
        </p>
        <p>
          Styrelsen kan du träffa torsdagar jämna veckor, mellan 19.00-19.30 i föreningens
          expedition. Se anslag på dörren till expeditionen vilka dagar som det är öppet. Det går
          även bra att kontakta styrelsen på{' '}
          <a href="mailto:styrelsen@grusgropen.se">styrelsen@grusgropen.se</a>.
        </p>
        <p>
          Föreningens brevlåda hittar du på Stupvägen 37. Din tagg öppnar porten. Du når också
          brevlådan via källaren i höghuset.
        </p>
      </Card>

      <section className={styles.section}>
        <h2 className={styles.heading}>Styrelseledamöter</h2>
        <PersonGrid people={ledamoter} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Styrelsesuppleanter</h2>
        <PersonGrid people={suppleanter} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Valberedningen</h2>
        <PersonGrid people={valberedningen} />
      </section>
    </>
  );
}
