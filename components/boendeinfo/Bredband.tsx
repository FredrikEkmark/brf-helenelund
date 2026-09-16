import Link from 'next/link';
import Card from './Card';

export default function Bredband() {
  return (
    <Card>
      <p>
        Samtliga bostadslägenheter har tillgång till bredband från Bahnhof.
        Bredband via fiber från Bahnhof ingår i avgiften. Maxhastigheten är
        1000/1000 Mbit/s.
      </p>
      <p>
        Lägenhetsinnehavaren behöver inte teckna eget avtal utan kopplar bara
        in sin router.
      </p>
      <p>
        Kontaktuppgifter hittar du på sidan för{' '}
        <Link href="/kontakt/felanmalan">felanmälningar</Link>.
      </p>
    </Card>
  );
}
