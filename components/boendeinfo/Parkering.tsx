import Card from './Card';
import PriceList from './PriceList';

const priceItems = [
  {
    label: 'Garageplats',
    price: 'från 650 kr/månad',
    note: '64 garageplatser i föreningen.',
  },
  {
    label: 'Parkeringsplats (utomhus)',
    price: 'från 350 kr/månad',
    note: '61 p-platser i föreningen.',
  },
  {
    label: 'Parkeringsplats med laddstolpe',
    price: '+140 kr/månad',
    note: '20 av p-platserna är utrustade med laddstolpe. Utöver tillägget tillkommer en fast kostnad om 89 kr/månad från Elaway samt egen elförbrukning.',
  },
];

export default function Parkering() {
  return (
    <>
      <Card title="Priser">
        <p>
          Föreningen har garageplatser och parkeringsplatser (utomhus) för
          uthyrning. Är du i behov av parkering eller garageplats, skicka
          e-post till{' '}
          <a href="mailto:styrelsen@grusgropen.se">styrelsen@grusgropen.se</a>
          .
        </p>
        <PriceList items={priceItems} />
      </Card>

      <Card title="Elaway-appen">
        <p>
          Elaways app ger möjlighet att se elprisets variation över dygnet
          och att starta laddning vid tider då kostnaden är som lägst.
        </p>
      </Card>

      <Card title="Tillgänglighet">
        <p>
          I dagsläget finns det lediga garageplatser. Det finns även lediga
          vanliga p-platser, men inga lediga p-platser med laddstolpe.
        </p>
      </Card>
    </>
  );
}
