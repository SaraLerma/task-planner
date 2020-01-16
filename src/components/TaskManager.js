import React, { Component } from "react"; // asi no pones extends React.Component
import "../assets/css/TaskManager.css";

import { tasks } from "../tasks.json"


export default class TaskManager extends Component {
    constructor() {
        super(); 
        this.state = {
            tasks: tasks // es lo mismo q solo poner tasks
        }
    }

    render() {
        //renderizamos antes de mostarlo
        //recorro las atreas y creo una nueva interfaz por cada taerea
        //cada /task es una tarea y cada tarea es un objeto
        /*
        span: Es un contenedor en línea. Sirve para aplicar estilo al texto o agrupar elementos en línea.
        mark en negrita

        mt-4: margen top 4
        ml-2: margen left 2
        col-md-4:
        badge: para colocar circulo
        badge-pill: mas redondeado
        badge-danger: el circulo sea rojo
        */
        const tasks = this.state.tasks.map((task, indexTask) =>{
            return(
                <div className="col-md-4"> 
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{task.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">{task.priority}</span>
                        </div>
                        <div className="card-body">
                            <p>{task.description}</p>
                            <p><mark>{task.deadline}</mark></p>
                        </div>
                    </div>
                </div>
            )
        })
         // RETURN THE COMPONENT
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="" className="text-white">
                        Tasks

                    </a>
                </nav>
                <div className="container">
                    <div className="row mt-4"> 
                      {tasks}
                    </div>
                </div>
                
            </div>
        )
    }
}