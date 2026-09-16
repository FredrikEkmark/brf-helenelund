import Link from 'next/link';
import {
  IconCamera,
  IconReceipt,
  IconWifi,
  IconBuildingCog,
  IconListNumbers,
  IconShieldCheck,
  IconFolder,
} from '@tabler/icons-react';
import Card from '@/components/boendeinfo/Card';
import styles from './Maklare.module.css';

export default function Maklare() {
  return (
    <>
      <div className={styles.factGrid}>
        <Card eyebrow="Garageplats" value="650 kr/månad">
          <p>64 st garageplatser. För närvarande finns lediga platser.</p>
        </Card>
        <Card eyebrow="Parkeringsplats" value="350 kr/månad">
          <p>61 st p-platser.</p>
        </Card>
        <Card eyebrow="Laddplats, tillägg" value="+140 kr/månad">
          <p>
            20 av p-platserna har laddstolpe. Utöver tillägget tillkommer en kostnad om 89 kr
            från Elaway för att använda elstolpen, samt egen elförbrukning. I dagsläget finns
            inga lediga platser med laddstolpe.
          </p>
        </Card>
        <Card eyebrow="Avgift" value="Justerad 2025">
          <p>Avgiften är justerad från 2025.</p>
        </Card>
      </div>

      <Card title="Mäklarbilder" icon={IconCamera}>
        <p>Kan dom boende själva hämta hos vår ekonomiska förvaltare.</p>
      </Card>

      <Card title="Vad ingår i avgiften" icon={IconReceipt}>
        <p>I månadsavgiften ingår:</p>
        <p>Värme, Vatten, Källarförråd, samt Bredband 1000/1000 Mbit och Kabel-TV.</p>
      </Card>

      <Card title="Bredband & Kabel-TV" icon={IconWifi}>
        <p>Föreningen har ett gruppavtal med Bahnhof gällande bredband.</p>
        <p>Inga andra leverantörer finns via fiber.</p>
        <p>
          Det finns digital-TV till samtliga lägenheter via Sollentuna Energi. Detta ger ett
          basutbud och det går att teckna eget digital-avtal med någon av 3 leverantörer knutna
          till tjänsten. Dessa kanaler ingår:
        </p>
        <p>
          SVT 1, SVT2, TV3, TV4, Kanal 5, TV6, Sjuan, TV8, Kanal 9, TV10, Kanal 11, TV12, SVT 24,
          SVT Barn, Kunskapskanalen, Discovery, ATG Live, Axess TV, Viaplay Sport och Sappa.
        </p>
      </Card>

      <Card title="Planerade renoveringar" icon={IconBuildingCog}>
        <p>Föreningen har beslutat om att genomföra stambyte.</p>
        <ul>
          <li>Nya portar, levereras snart.</li>
          <li>Nytt passersystem, pågår.</li>
          <li>Målning av källargolv, pågår.</li>
        </ul>
        <p>Föreningen har inga fler planerade renoveringar.</p>
      </Card>

      <Card title="Lägenhetsnumrering" icon={IconListNumbers}>
        <p>Vi använder skatteverkets numrering på lägenheterna.</p>
        <p>För att snabba upp processen för medlemskap och dylikt bör detta användas.</p>
        <p>Här är exempel: 43-1001, 23-1201, 37-1601</p>
      </Card>

      <Card title="Försäkring" icon={IconShieldCheck}>
        <p>
          Bostadsrättstillägget ska den enskilde medlemmen teckna själv hos sitt
          försäkringsbolag.
        </p>
      </Card>

      <Card title="Årsredovisningar och dokument" icon={IconFolder}>
        <p>
          Stadgar och årsredovisningar finns på <Link href="/dokument">Dokument</Link>-sidan.
        </p>
      </Card>
    </>
  );
}
