import Image from 'next/image';
import styles from './ImageGallery.module.css';

type GalleryImage = {
  src: string;
  alt: string;
};

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className={styles.grid}>
      {images.map((image) => (
        <div key={image.src} className={styles.imageBox}>
          <Image src={image.src} alt={image.alt} fill style={{ objectFit: 'cover' }} />
        </div>
      ))}
    </div>
  );
}
