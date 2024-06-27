import Button from "../Button/Button";
import Relogio from "./Relogio/Relogio";
import style from "./Cronometro.module.scss";
export default function Cronometro() {
    return (
        <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio />
        </div>
        <Button>Começar</Button>
        </div>
    );
}