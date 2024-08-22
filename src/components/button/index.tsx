import React from "react";
import Styles from "./Button.module.scss"
import { Link } from "react-router-dom";

type props  = {
    children: string,
    type?: "button" | "submit" | "reset" | undefined,
    to?: string
}

class Botao extends React.Component<props> {
    render() {
        const { type="button", to } = this.props;

        return to ? (
            <Link to={to} className={Styles.botaoLink}>
                {this.props.children}
            </Link>
        ) : (
            <button type={type} className={Styles.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Botao;