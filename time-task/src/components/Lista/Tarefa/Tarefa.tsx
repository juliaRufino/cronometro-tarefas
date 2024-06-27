import style from "../Lista.module.scss";

type TarefaProps = {
    name: string;
    time: string;
}

export default function Tarefa(props: TarefaProps) {
    const { name, time } = props
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}