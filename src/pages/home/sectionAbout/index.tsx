import Styles from './About.module.scss';
import imageAbout from 'assets/image-3_b.jpg';
import imageSunset from 'assets/costaFria_sunsetView_04.jpg';

export default function About() {
    return (
        <section className={Styles.about}>

            <article className={Styles.about__container}>
                <h2 className={Styles.about__container__title}>About the Costa Fria restaurant</h2>
                <p className={Styles.about__container__text}>A modern restaurant that combines a cozy atmosphere with contemporary aesthetics. The interior space is charming, with an industrial design and steel tables that blend with vibrant-colored chairs, creating an interesting contrast. The textured ceiling, reminiscent of the sea foam that washes the coast, contrasts with the industrial lighting and exposed structure, creating a modern and laid-back environment.</p>
                <h2 className={Styles.about__container__titleConcept}>The concept</h2>
                <p className={Styles.about__container__text}>Inspired by our idyllic seaside setting along the Atlantic coast, we bring bold flavors, coastal ingredients, and the diversity of Portuguese culinary culture. Contemporary and classic dishes, designed for sharing.
                </p>
            </article>
            <figure className={Styles.about__imgContainer}>
                <img src={imageAbout} alt="" className={Styles.about__imgContainer__imgInside} />
            </figure>


            <article className={Styles.about__sunsetContainer}>
                <h2 className={Styles.about__sunsetContainer__title}>Flavors at Sunset</h2>
                <p className={Styles.about__sunsetContainer__text}>At sunset, the restaurant transforms into an ideal spot to enjoy the breathtaking view of the ocean in the background, where visitors can relax over dinner as daylight fades. The open kitchen also invites interaction, offering a glimpse into the preparation of dishes that highlight the fresh flavors of the region.</p>
                <span className={Styles.about__sunsetContainer__welcome}>welcome to ericeira</span>
            </article>

            <figure className={Styles.about__imgContainerSunset}>
                <img src={imageSunset} alt="" className={Styles.about__imgContainer__imgSunset} />
            </figure>

        </section>
    );
}