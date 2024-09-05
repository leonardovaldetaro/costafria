import Styles from './About.module.scss';
import imageAbout from 'assets/image-3.jpg';

export default function About () {
    return (
        <section className={Styles.about}>
            <h2 className={Styles.about__title}>About the Costa Fria restaurant</h2>
            <p className={Styles.about__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tortor id elit egestas sodales. Nullam imperdiet vitae est vel tincidunt. Praesent consectetur lorem et felis ultrices, ac dictum enim lobortis. Quisque mattis erat et nisi gravida, sit amet sollicitudin diam convallis. Donec lobortis euismod sem sed tristique. Quisque sit amet ipsum orci. Nullam pharetra lobortis tempus.</p>
            <figure className={Styles.about__imgContainer}>
                <img src={imageAbout} alt="" className={Styles.about__imgContainer__img} />
            </figure>
            <article className={Styles.about__concept}>
                <h2 className={Styles.about__concept__title}>About the concept</h2>
                <p className={Styles.about__concept__text}>Inspirados pelo nosso cenário idílico à beira-mar, ao longo da costa atlântica trazemos sabores arrojados, ingredientes
                    costeiros e a diversidade da cultura gastronómica Portuguesa. pratos contemporâneos e clássicos, pensados para partilhar.
                </p>
                <span className={Styles.about__concept__welcome}>welcome to ericeira</span>
            </article>
        </section>
    );
}