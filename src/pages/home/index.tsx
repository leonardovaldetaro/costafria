import Styles from './Home.module.scss';
import img_top_sm from 'assets/costaFria_top_sm.jpg';
import Botao from 'components/button';
import About from './sectionAbout';
import Chef from './sectionChef';
import Citacao from './sectionCitacao';
import Menu from './menu';
import Gallery from './gallery';

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
import image17 from 'assets/imageGallery_14.jpg';
import image18 from 'assets/imageGallery_15.jpg';
import image19 from 'assets/costaFria_sunsetView_07.jpg';
import image20 from 'assets/imageGallery_16.jpg';


const imageList = [
    { src: image18, alt: 'Imagem 18' },
    { src: image01, alt: 'Imagem 1' },
    { src: image10, alt: 'Imagem 2' },
    { src: image03, alt: 'Imagem 3' },
    { src: image04, alt: 'Imagem 4' },
    { src: image14, alt: 'Imagem 14' },
    { src: image06, alt: 'Imagem 7' },
    { src: image08, alt: 'Imagem 8' },
    { src: image09, alt: 'Imagem 9' },
    { src: image17, alt: 'Imagem 17' },
    { src: image13, alt: 'Imagem 13' },
    { src: image02, alt: 'Imagem 10' },
    { src: image15, alt: 'Imagem 15' },
    { src: image11, alt: 'Imagem 11' },
    { src: image19, alt: 'Imagem 17' },
    { src: image12, alt: 'Imagem 12' },
    { src: image16, alt: 'Imagem 16' },
    { src: image20, alt: 'Imagem 16' },
];

export default function Home() {
    return (
        <main className={Styles.top}>

            <img src={img_top_sm}
                alt=""
                className={Styles.top__img} 
            />

            <div className={Styles.top__info}>
                <h1 className={Styles.top__info__title}>costa fria</h1>
                <p className={Styles.top__info__text}>Welcome to Costa Fria, where every meal becomes a lasting memory.</p>
                <p className={Styles.top__info__text2}>Discover a cuisine that delights in every detail.</p>
                <div className={Styles.top__info__button}>
                    <Botao to={"/reservations"} >Book your reservation</Botao>
                </div>
            </div>
            <About />
            <Menu />
            <Chef />
            <Citacao />
            <Gallery images={imageList} />
        </main>
    );
}