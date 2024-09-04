import Styles from './Reservas.module.scss';

export default function Reservas () {
    return (
        <section className={Styles.reservas}>
            <h1 className={Styles.reservas__app__title}>Book your reservation</h1>
            <div className={Styles.reservas__app}> 
                <iframe title="Eat Widget" src="https://eatapp.co/reserve/costa-fria-4-rua-capitao-joao-lopes?source=iframe" className={Styles.reservas__app__iframe} />
            </div>
        </section>
    );
}