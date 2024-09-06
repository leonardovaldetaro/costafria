import Styles from './Chef.module.scss';
import chefImage from 'assets/chefTomi.jpg'

export default function Chef () {
    return (
        <section className={Styles.chef}>

            <article className={Styles.chef__container}>
                <h2 className={Styles.chef__container__title}>chef tommy</h2>   

                <p className={Styles.chef__container__text}>
                    Award-winning chef Athanasios Kargatzidis, fell in love with food and restaurants over twenty-five years ago. Cooking, researching, and studying his way across the world ever since, which led him to open one of Lebanon’s and MENA’s most renowned restaurants. Often describing his food as U+2018fusion cookingU+2018, Athanasios has been championing international flavours since stepping into kitchens, with food that holds flavour and texture, rather than tradition and provenance, as his central tenets.</p>

                <p className={Styles.chef__container__text}>
                    In 2022, Costa Fria was born. Athanasios’ love of authenticity, fresh and simple cuisine has shaped our dishes. Fusing Eastern Mediterranean and Levantine flavours, it represents Athanasios refreshing, light-hearted and relaxed Hellenic hospitality style.</p>
                
                <p className={Styles.chef__container__text}>
                    The dishes are made for sharing, grab a pitta, stuff it with grilled vegetables, smoky meat and top it with fresh salad. </p>

            </article>

                <figure className={Styles.imgContainer}>
                    <img src={chefImage} alt="" />
                </figure>

        </section>
    );
}