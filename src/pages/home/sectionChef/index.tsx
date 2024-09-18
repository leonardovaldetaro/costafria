import Styles from './Chef.module.scss';
import chefImage from 'assets/chefTomi.jpg'

export default function Chef() {
    return (
        <section className={Styles.chef}>

            <article className={Styles.chef__container}>


                <div className={Styles.chef__container__info}>
                    <h2 className={Styles.chef__container__info__title}>chef tommy</h2>

                    <p className={Styles.chef__container__info__text}>
                        The award-winning chef Athanasios Kargatzidis, passionate about food and restaurants for over 25 years, has been cooking, researching, and studying around the world. This led him to open one of the most renowned restaurants in Lebanon and the MENA region. Describing his food as &#x201C;fusion cooking,&#x201D; he values flavors and textures rather than traditions and origins.</p>

                    <p className={Styles.chef__container__info__text}>
                        In 2022, Costa Fria was born. Athanasios’ love of authenticity, fresh and simple cuisine has shaped our dishes. Fusing Eastern Mediterranean and Levantine flavours, it represents Athanasios refreshing, light-hearted and relaxed Hellenic hospitality style.</p>
                </div>

                <img src={chefImage} alt="" className={Styles.chef__container__img} />

            </article>


        </section>
    );
}