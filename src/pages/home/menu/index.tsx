import Botao from 'components/button';
import Styles from './Menu.module.scss';

export default function Menu () {
    return (
        <section className={Styles.menu}>
            <h2 className={Styles.menu__title}>The Costa Fria menu</h2>
            <p className={Styles.menu__text}>Our menu reflects the essence of the Atlantic coast, where authentic flavors meet innovation. We combine fresh, local ingredients with the rich Portuguese culinary tradition, creating contemporary and classic dishes designed for sharing and celebrating the diversity of our culture at the table.</p>
            <div className={Styles.menu__containerButton}>
                <Botao to={"/rervas"}>Download Menu</Botao>
            </div>
        </section>
    );
}