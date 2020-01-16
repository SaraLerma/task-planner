import React, { Component } from "react"; // asi no pones extends React.Component
import "../assets/css/TaskManager.css";

import { tasks } from "../tasks.json";

import TaskForm from "./TaskForm";


export default class TaskManager extends Component {
    constructor() {
        super(); 
        this.state = {
            tasks: tasks // es lo mismo q solo poner tasks
        }
        this.handleAddTask  = this.handleAddTask.bind(this);
        //this.removeTask  = this.removeTask.bind(this);
    }

    handleAddTask(task) {
        this.setState({
            //añade una tarea
            tasks: [...this.state.tasks, task] 
        })
    }
    removeTask(indexTask){
        //window.confirm evento confirm de la ventana del navegador
        if(window.confirm('Are you sure you want to delete it?')){
            //recuerda q empieza desde 0
            this.setState({
                //añade una tarea. filter para recorrerlos. recorre 1 a 1 todos los elemetos y si un dato no cumple una condicion no lo introduce 
                //map para recorrerlos 1 a 1. al final devuelve un arreglo con muchos objetos
                tasks: this.state.tasks.filter((tasks, idxTask) => {
                    return idxTask !== indexTask
                })
            });
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
        navbar: Barra nacegacion
        navbar-dark
        bg-dark
        */
        const tasks = this.state.tasks.map((task, indexTask) =>{
            //en cada iteracion obtenemos el indice de la tarea key={indexTask}
            return(
                <div className="col-md-4" key={indexTask}> 
                    <div className="cardTask card mt-4 ">
                        <div className="card-header">
                            <h3>{task.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">{task.priority}</span>
                        </div>
                        <div className="card-body">
                            <p>{task.description}</p>
                            <p><mark>{task.deadline}</mark></p>
                        </div>
                        <div className="card-footer">
                            <button 
                                className="but btn-danger"
                                onClick={this.removeTask.bind(this, indexTask)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
         // RETURN THE COMPONENT
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="/" className="text-white">
                        Tasks
                        <span className= "badge badge-pill badge-light ml-2">
                            {this.state.tasks.length}
                        </span>
                    </a>
                </nav>
                <div className="container">
                    <div className="row mt-4"> 
                        <TaskForm  onAddTask={this.handleAddTask}></TaskForm>
                        <div className="wrapTasks">
                        {tasks}
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}