import React from "react";
import style from "./Lista.module.scss";
import Tarefa from "./Tarefa/Tarefa";

export default function Lista() {
    const tarefas = [{
        name: "React",
        time: "02:00",
    },
    {
        name: "JavaScript",
        time: "03:00",
    
    }, 
    {
        name: "HTML",
        time: "01:00",
    }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Tarefa key={index} {...tarefa}/>
                ))}
            </ul>
        </aside>
    )
}