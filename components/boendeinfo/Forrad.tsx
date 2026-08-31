import Card from './Card';
import ImageGallery from './ImageGallery';

const images = [{ src: '/media/image/forrad.jpg', alt: 'Förråd' }];

export default function Forrad() {
  return (
    <Card>
      <p>
        Till varje bostadslägenhet ingår ett förråd. Förråd finns antingen på
        vinden eller i källaren.
      </p>
      <p>Vill du hyra ytterligare förråd, kontakta styrelsen.</p>
      <ImageGallery images={images} />
    </Card>
  );
}
