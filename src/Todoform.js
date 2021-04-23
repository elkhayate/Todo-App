import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";
export default class todoform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task : ""
        }
    }
    handleChange =(evt) => {
        this.setState({[evt.target.name] : evt.target.value});
    }
    handleSubmit=(evt)=> {
        evt.preventDefault();
        const newtask = {...this.state, id : uuidv4(), completed : false};
        this.props.addtask(newtask);
        this.setState({
            task : ""
        })
    }
    render() {
        return(
            <div>
                <form className = "plus todoform" onSubmit = {this.handleSubmit}>
                    <input 
                    name = "task"
                    type = "text" 
                    id = "task"
                    value ={this.state.task}
                    onChange = {this.handleChange}
                    placeholder="Add a task..."
                    />
                    <button><i class="fas fa-plus"></i></button>
                </form>
            </div>
        )
    }
}