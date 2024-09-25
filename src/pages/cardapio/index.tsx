import Styles from './Cardapio.module.scss';
import CardapioImagem from 'assets/lasai-menu-menu-bg-image-v3.png';
import BotaoMenu from 'components/botaoMenu';

export default function Cardapio() {
    return (
        <section className={Styles.cardapio}>
            <article className={Styles.cardapio__container}>
                <h2 className={Styles.cardapio__container__title}>The Costa Fria menu</h2>
                <p className={Styles.cardapio__container__text}>Building on the essence of our menu, we are committed to using only the freshest, locally sourced ingredients, ensuring that every dish is full of flavor and authenticity. Each plate is a celebration of land and sea, carefully prepared to showcase the best seasonal produce. Our chefs take pride in preserving traditional Portuguese techniques while adding a modern touch and a blend of flavors from the Eastern Mediterranean and the Middle East, creating a unique culinary experience that stays true to the rich gastronomic heritage of the Atlantic coast.</p>
                <div className={Styles.cardapio__containerButton}>
                    <BotaoMenu href="/assets/costaFria_menu_en.pdf" download>Dowload Menu</BotaoMenu>
                </div>
            </article>
            <figure className={Styles.cardapio__containerImagem}>
                <img className={Styles.cardapio__containerImagem__img} src={CardapioImagem} alt="" />
            </figure>
        </section>
    );
}