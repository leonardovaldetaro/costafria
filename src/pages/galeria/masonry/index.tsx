import Styles from './Masonry.module.scss';
import Masonry from 'react-masonry-css';
import { Fancybox as FancyboxNative } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from 'react';


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

    useEffect(() => {
        FancyboxNative.bind("[data-fancybox]", {}); //Inicia o fancybox
        return () => {
            FancyboxNative.destroy(); //Limpa a instancia ao desmontar o componente
        };
    }, [images]);

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={Styles.gallery}
            columnClassName={Styles.galleryColumn}
        >
            {images.map((image) => (
                image.src ? (
                    <a key={image.src} href={image.src} data-fancybox="gallery" data-caption={image.alt} >
                        <img key={image.src} src={image.src} alt={image.alt} className={Styles.galleryImage} />
                    </a>
                ) : null
            ))}
        </Masonry>
    );
};

export default Gallery;