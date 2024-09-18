import Styles from './Citacao.module.scss';

export default function Citacao () {
    return (
        <section className={Styles.citacao}>
            <h3 className={Styles.citacao__title}>Tasting Notes</h3>
            <p className={Styles.citacao__text}>&#x201C;I fell in love with food at an early age and have been cooking around the world ever since. I’m delighted that this journey has brought me to Portugal, where my menu at Costa Fria represents Eastern Mediterranean cuisine and revisits traditional Portuguese dishes.&#x201D;</p>
            <h4 className={Styles.citacao__name}><span>-Chef</span> ATHANASIOS KARGATZIDIS</h4>
        </section>
    );
}