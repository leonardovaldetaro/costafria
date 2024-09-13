import Styles from './Home.module.scss';
import img_top_md from 'assets/costaFria_top_md.jpg';
import img_top_sm from 'assets/costaFria_top_sm.jpg';
import Botao from 'components/button';
import About from './sectionAbout';
import Chef from './sectionChef';
import Citacao from './sectionCitacao';
import Menu from './menu';
import Gallery from './gallery';

import image01 from 'assets/imageGallery_01.jpg';
import image02 from 'assets/imageGallery_02.jpg';
import image03 from 'assets/imageGallery_05.jpg';


const imageList = [
    { src: image01, alt: 'Imagem 1' },
    { src: image02, alt: 'Imagem 2' },
    { src: image03, alt: 'Imagem 3' },
  ];

export default function Home () {
    return (
        <main className={Styles.top}>
            <img src={img_top_sm}
                srcSet={`${img_top_sm} 390w, ${img_top_md} 1366w`}
                sizes="(max-width: 800px) 390px, (max-width: 2000) 1366px, 100vw"
            	alt="" 
                className={Styles.top__img} />

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
            <Gallery images={imageList}/>
        </main>
    );
}