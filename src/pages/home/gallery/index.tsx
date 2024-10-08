import Styles from './Gallery.module.scss';
import Masonry from 'react-masonry-css';


interface Image {
  src: string;
  alt: string;
}


const Gallery: React.FC<{ images: Image[] }> = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
    <h2 className={Styles.galleryTitle}>gallery</h2>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={Styles.gallery}
      columnClassName={Styles.galleryColumn}
    >
      {images.map((image) => (
        image.src ? (
          <img key={image.src} src={image.src} alt={image.alt} className={Styles.galleryImage} />
        ) : null
      ))}
    </Masonry>
    </>
  );
};

export default Gallery;