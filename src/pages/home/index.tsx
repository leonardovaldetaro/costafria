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

            <div className={Styles.top__info}>
                <h1 className={Styles.top__info__title}>costa fria</h1>
                <p className={Styles.top__info__text}>Bem-vindo ao Costa Fria, onde cada refeição é uma experiência memorável. uma culinária que impressiona em cada detalhe. No Costa Fria, o prazer de compartilhar é essencial, e cada prato é pensado para proporcionar uma viagem gustativa inesquecível. Venha, viva essa experiência e descubra por que tantos retornam encantados.</p>
            </div>
            
        </section>
    );
}