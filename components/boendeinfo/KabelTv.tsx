import Card from './Card';

export default function KabelTv() {
  return (
    <>
      <Card title="Kanalutbud">
        <p>
          Det finns digital-tv till samtliga lägenheter via Sollentuna
          Energi. Föreningen har tecknat ett avtal som ger alla lägenheter i
          fastigheten anslutning till digitala TV-kanaler. Utbudet ingår i
          avgiften/hyran. För att se dessa behöver du inga digitalboxar och
          du kan titta på flera TV-apparater samtidigt.
        </p>
        <p>
          Dessa kanaler: SVT 1, SVT2, TV3, TV4, Kanal 5, TV6, Sjuan, TV8,
          Kanal 9, TV10, Kanal 11, TV12, SVT 24, SVT Barn, Kunskapskanalen,
          Discovery, ATG Live, Axess TV, Viaplay Sport och Sappa.
        </p>
      </Card>

      <Card title="Fler kanaler">
        <p>
          Canal Digital, Boxer och Tele2 levererar digital-TV som ett
          tillägg till den här tjänsten. Mer information om priser och
          kanalutbud hittar du hos respektive leverantör:
        </p>
        <ul>
          <li>Boxer (tel. 0771-21 10 00)</li>
          <li>Canal Digital (tel. 0770-33 22 11)</li>
          <li>Tele2 (tel. 0200-22 55 00)</li>
        </ul>
      </Card>
    </>
  );
}
