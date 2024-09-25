import Masonry from './masonry';
import Styles from './Galeria.module.scss';

import image01 from 'assets/imageGallery_01.jpg';
import image02 from 'assets/imageGallery_02.jpg';
import image03 from 'assets/imageGallery_03.jpg';
import image04 from 'assets/imageGallery_04.jpg';
import image06 from 'assets/imageGallery_06.jpg';
import image08 from 'assets/imageGallery_08.jpg';
import image09 from 'assets/imageGallery_09.jpg';
import image10 from 'assets/imageGallery_10.jpg';
import image11 from 'assets/imageGallery_11.jpg';
import image12 from 'assets/imageGallery_12.jpg';
import image13 from 'assets/imageGallery_13.jpg';
import image14 from 'assets/costaFria_sunsetView_03.jpg';
import image15 from 'assets/costaFria_sunsetView_01.jpg';
import image16 from 'assets/costaFria_sunsetView_02.jpg';


const imageList = [
    { src: image01, alt: 'Imagem 1' },
    { src: image10, alt: 'Imagem 2' },
    { src: image03, alt: 'Imagem 3' },
    { src: image04, alt: 'Imagem 4' },
    { src: image14, alt: 'Imagem 14' },
    { src: image06, alt: 'Imagem 7' },
    { src: image08, alt: 'Imagem 8' },
    { src: image09, alt: 'Imagem 9' },
    { src: image13, alt: 'Imagem 13' },
    { src: image02, alt: 'Imagem 10' },
    { src: image15, alt: 'Imagem 15' },
    { src: image11, alt: 'Imagem 11' },
    { src: image12, alt: 'Imagem 12' },
    { src: image16, alt: 'Imagem 16' },
];

export default function Galeria () {
    return (
        <section className={Styles.galeria}>
            <div className={Styles.galeria__container}>
                <h2 className={Styles.galeria__container__title}>Gallery</h2>
                <p className={Styles.galeria__container__text}>Explore our gallery to discover the vibrant atmosphere and unique dishes of Costa Fria. From carefully crafted plates to the cozy dining spaces, these images capture the essence of our culinary experience and the beauty of the Atlantic coast.</p>
                <Masonry images={imageList} />
            </div>
        </section>
    );
}