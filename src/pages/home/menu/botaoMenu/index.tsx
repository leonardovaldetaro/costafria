import React from "react";
import Styles from "./BotaoMenu.module.scss";
import { Link } from "react-router-dom";

type props = {
    children: string,
    type?: "button" | "submit" | "reset" | undefined,
    to?: string,
    href?: string, // Nova prop para suportar links externos ou downloads
    download?: boolean // Se true, faz o link ser tratado como download
}

class BotaoMenu extends React.Component<props> {
    render() {
        const { type = "button", to, href, download } = this.props;

        if (to) {
            // Renderiza o Link do React Router para navegação interna
            return (
                <Link to={to} className={Styles.botaoLink}>
                    {this.props.children}
                </Link>
            );
        } else if (href) {
            // Renderiza um <a> para links externos ou downloads
            return (
                <a href={href} className={Styles.botaoLink} download={download}>
                    {this.props.children}
                </a>
            );
        } else {
            // Renderiza um <button> para os outros casos
            return (
                <button type={type} className={Styles.botao}>
                    {this.props.children}
                </button>
            );
        }
    }
}

export default BotaoMenu;