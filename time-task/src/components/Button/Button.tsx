import React, { Children } from "react";
import style from "./Button.module.scss";

type ButtonProps = {
    children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
    const { children } = props;
    return (
        <button className={style.botao}>
            {children}
        </button>
    )
}
