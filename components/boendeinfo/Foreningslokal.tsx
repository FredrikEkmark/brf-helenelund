import Card from './Card';
import PriceList from './PriceList';
import ImageGallery from './ImageGallery';

const priceItems = [
  { label: 'Hyra', price: '700 kr / dygn' },
  { label: '2 dygn', price: '1 050 kr totalt' },
  {
    label: 'Deposition',
    price: '1 000 kr',
    note: 'Återbetalas när lokalen är städad och i godkänt skick.',
  },
];

const images = [
  { src: '/media/image/foreningslokal-1.jpg', alt: 'Föreningslokalen' },
  { src: '/media/image/foreningslokal-2.jpg', alt: 'Föreningslokalen' },
  { src: '/media/image/foreningslokal-3.jpg', alt: 'Föreningslokalen' },
];

export default function Foreningslokal() {
  return (
    <>
      <Card title="Bokning">
        <p>
          <strong>Vem kan hyra?</strong> Lokalen kan endast hyras av boende i
          föreningen (Stupvägen 23–49).
        </p>
        <p>
          <strong>Så bokar du:</strong> Skicka e-post till{' '}
          <a href="mailto:styrelsen@grusgropen.se">styrelsen@grusgropen.se</a>{' '}
          (eller lämna meddelande i brevlådan vid Stupvägen 37) minst 14
          dagar i förväg. Din förfrågan måste innehålla:
        </p>
        <ul>
          <li>Namn</li>
          <li>Lägenhetsnummer (t.ex. 23-0901)</li>
          <li>Mobilnummer</li>
          <li>Önskat datum (och om du vill hyra 1 eller 2 dygn)</li>
        </ul>
        <p>
          Exempel på bokningsmail: &ldquo;Jag vill hyra Lokalen den 4 april
          (1 dygn). Namn: …, Lägenhetsnr: 23-0901, Mobil: …&rdquo;
        </p>
        <p>
          <strong>Hyrestid:</strong> 12:00–11:59 dagen efter. Exempel: 4
          april kl. 12:00 till 5 april kl. 11:59.
        </p>
      </Card>

      <Card title="Pris">
        <PriceList items={priceItems} />
      </Card>

      <Card title="Betalning">
        <p>
          <strong>Viktigt!</strong> När du fått bekräftelse från styrelsen
          betalar du hyra + deposition via Swish senast 7 dagar innan
          hyresdatum. Swish-nummer: <strong>123 312 3908</strong>.
        </p>
        <p>
          Skriv alltid exakt detta i Swish-meddelandet: &ldquo;Lokalen –
          lägenhetsnummer – datum&rdquo;, t.ex. &ldquo;Lokalen 23-0901
          26-04-04&rdquo;. Betalningar utan Lokalen + lägenhetsnummer + datum
          kan inte kopplas till rätt bokning och riskerar att fördröja
          bekräftelsen.
        </p>
      </Card>

      <Card title="Övrigt">
        <p>
          <strong>Taggar/åtkomst:</strong> Dina taggar som fungerar till
          tvättstugan och portarna fungerar även till lokalen.
        </p>
        <p>
          <strong>Max hyrestid &amp; regler:</strong> Lokalen kan hyras max
          två dygn. Genom att hyra lokalen godkänner du föreningens{' '}
          <a href="/boendeinfo/foreningslokal/ordningsregler-lokalen">
            Ordningsregler lokalen
          </a>
          .
        </p>
        <ImageGallery images={images} />
      </Card>
    </>
  );
}
