import React, { Component } from "react"; 
import "../assets/css/TaskForm.css";

export default class TaskForm extends Component {
    constructor () {
        super();
        this.state = {
          title: '',
          deadline: '',
          description: '',
          priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const {value, name} = event.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();//no se refresque la pantalla
        // onAddTask es la propiedad q estamos recibiendo de donde se le invoca, por lo q le paso la tarea(this.state)
        this.props.onAddTask(this.state);
        this.setState({
            title: '',
            deadline: '',
            description: '',
            priority: 'low'
          });
    }

    render() {
        return (
          <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Title"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="deadline"
                  className="form-control"
                  value={this.state.deadline}
                  onChange={this.handleInputChange}
                  placeholder="Deadline"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Description"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        )
      }
}