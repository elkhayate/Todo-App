import React, { Component } from 'react';
import "./TodoList.css"
export default class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isEditing : false,
             task : this.props.task,
             completed : this.props.taskk
        }
    }
    edit=()=>{
        this.setState({isEditing : !this.state.isEditing});
    }
    handleChange =(evt) => {
        this.setState({[evt.target.name] : evt.target.value});
    }
    handleSubmit=(evt)=>{
        evt.preventDefault();
        this.props.update(this.props.id , this.state.task);
        this.setState({isEditing : false})

    }
    line = (evt) => {
        evt.preventDefault();
        this.setState({...this.state, completed : !this.state.completed})
    }
    
    render() {
        var result;
        if(this.state.isEditing) {
            result = (<div className="todo">
                <form className = "todoform" onSubmit = {this.handleSubmit}>
                    <input 
                    name = "task"
                    id = "task"
                    type = "text"
                    value = {this.state.task}
                    onChange = {this.handleChange}
                    />
                    <button>save</button>
                </form>
                </div>
            )} else {
                result = (<div className = "todo">
                    <li onClick={this.line} className={this.state.completed ? "todotask completed" : "todotask"}>{this.state.task}</li>
                    <div className="todobuttons">
                    <button onClick={this.edit}><i class = "fas fa-pen"/></button>
                    <button onClick={this.props.delete}><i class = "fas fa-trash"/></button>
                    </div>
                </div>)
            }
        
        return (
            [result]
        )
    }
}
//