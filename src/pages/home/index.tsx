import Styles from './Home.module.scss';
import img_top_md from 'assets/costaFria_top_md.jpg';
import img_top_sm from 'assets/costaFria_top_sm.jpg';

export default function Home () {
    return (
        <section className={Styles.top}>
            <img src={img_top_sm}
                srcSet={`${img_top_sm} 390w, ${img_top_md} 1366w`}
                sizes="(max-width: 600px) 390px, (max-width: 2000) 1366px, 100vw"
            	alt="" 
                className={Styles.top__img} />
        </section>
    );
}