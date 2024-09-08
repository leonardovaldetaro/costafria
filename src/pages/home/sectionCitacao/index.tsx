import Styles from './Citacao.module.scss';

export default function Citacao () {
    return (
        <section className={Styles.citacao}>
            <h3 className={Styles.citacao__title}>Tasting Notes</h3>
            <p className={Styles.citacao__text}>“I fell in love with food at an early age and have been cooking across the world ever since. I’m delighted this journey brings me to London where my menu at Assembly showcases Eastern Mediterranean cuisine in all its excellence.”</p>
            <h4 className={Styles.citacao__name}><span>-Chef</span> ATHANASIOS KARGATZIDIS</h4>
        </section>
    );
}