import Image from 'next/image';

export default function Home() {
  return (
    <main className="pageContainer">
      {/* Flush Hero Image Box */}
      <div className="heroBox">
        <Image
          src="/media/image/hero-image.jpg"
          alt="Hero Image"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Padded Text Content Box */}
      <div className="sectionBox">
        <h1>BRF Helenelund</h1>
      </div>
    </main>
  );
}