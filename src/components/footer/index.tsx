import Botao from 'components/button';
import Styles from './Footer.module.scss';
import { MdOutlineLocationOn, MdOutlineDirectionsCar, MdMailOutline, MdAccessTime, MdCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { ReactComponent as LogoCreditos } from 'assets/leonardoValdetaroFrontEndDeveloperLogo.svg';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <footer className={Styles.footer}>
            
            <Link to={'/'} className={Styles.footer__logo__link}>
                <h2 className={Styles.footer__logo}>costa fria</h2>
            </Link>

            <address className={Styles.footer__adress}>
                <MdOutlineLocationOn 
                    size={20} 
                    color="#79747e"
                    className={Styles.footer__adress__icon}
                />
                Rua Capitão João Lopes 4, Ericeira
            </address>

            <div className={Styles.footer__googleMaps}>
                <MdOutlineDirectionsCar 
                    size={20} 
                    color="#79747e"
                    className={Styles.footer__googleMaps__icon}
                />
                <a href="https://maps.app.goo.gl/1A5mi63a2TEUTxew9" className={Styles.footer__googleMaps__link}>
                    Google Maps
                </a>
            </div>

            <div className={Styles.footer__email}>
                <MdMailOutline 
                    size={20} 
                    color="#79747e"
                    className={Styles.footer__email__icon}
                />
            	<a href="mailto:costafria@costafria.com" className={Styles.footer__email__link}>
                    costafria@costafria.com
                </a>
            </div>

            <div className={Styles.footer__phone}>
                <MdCall 
                    size={20} 
                    color="#79747e"
                    className={Styles.footer__phone__icon}
                />
            	<a href="tel:+351926367969" className={Styles.footer__phone__link}>
                    +351 926 367 969
                </a>
            </div>

            <div className={Styles.footer__time}>
                <MdAccessTime 
                    size={20}
                    color="#79747e"
                    className={Styles.footer__time__icon}
                />
                De segunda a domingo 12:00 - 22:00
            </div>

            <div className={Styles.botaoFooter}>
                <Botao to={"/reservations"}>Book your reservation</Botao>
            </div>

            <div className={Styles.footer__socialIcons}>
                <a href="https://www.instagram.com/costa.fria/" className={Styles.footer__socialIcons__icon} target='new'>
                    <FaInstagram 
                        size={18}
                        color="#79747e"
                    />
                    <span className={Styles.footer__socialIcons__icon__name}>instagram</span>
                </a>
            </div>

            <hr />
            
            <div className={Styles.footerCreditos}>
                <p className={Styles.footerCreditos__copyright}>
                    &copy; Restaurante Costa Fria. Todos os direitos reservados.
                </p>
                
                <div className={Styles.footerCreditos__logo}>
                    <a href="https://leonardovaldetaro.com.br">
                        <LogoCreditos />
                    </a>
                </div>
            </div>
        </footer>
    );
}