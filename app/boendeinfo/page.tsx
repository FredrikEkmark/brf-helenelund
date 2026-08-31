// Migrated from https://www.grusgropen.se/boende/
import Card from '@/components/boendeinfo/Card';
import IntroNote from '@/components/boendeinfo/IntroNote';
import TopicGrid from '@/components/boendeinfo/TopicGrid';

export default function BoendeInfo() {
  return (
    <>
      <h1>Boendeinfo</h1>
      <Card>
        <IntroNote />
      </Card>
      <TopicGrid />
    </>
  );
}
