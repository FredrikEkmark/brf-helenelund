import Hero from '@/components/home/Hero';
import PillarRow from '@/components/home/PillarRow';
import IconShortcuts from '@/components/home/IconShortcuts';

export default function Home() {
  return (
    <main className="pageContainer">
      <Hero />
      <PillarRow />
      <IconShortcuts />
    </main>
  );
}
