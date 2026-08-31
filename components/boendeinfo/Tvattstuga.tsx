import Card from './Card';
import ImageGallery from './ImageGallery';

const images = [{ src: '/media/image/tvattstuga.jpg', alt: 'Tvättstugan' }];

export default function Tvattstuga() {
  return (
    <Card>
      <p>
        Gemensam tvättstuga finns i en separat byggnad på gården. Tvättstugan
        är belägen vid trappan mot Stupvägen.
      </p>
      <p>
        Du reserverar tid på en elektronisk lista i tvättstugans entré eller
        via <a href="/boendeinfo/boka-tvattstuga">vår hemsida</a>.
      </p>
      <p>Glöm inte att städa efter dig!</p>
      <ImageGallery images={images} />
    </Card>
  );
}
