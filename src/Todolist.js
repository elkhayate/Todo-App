import React, { Component } from 'react';
import Todoform from "./Todoform";
import Task from "./Task";
export default class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tasks : []
        }
    }
    additem = (item) => {
        this.setState({tasks : [...this.state.tasks, item]})
    }
    updatetask=(id , newform)=>{
        const updatedtask = this.state.tasks.map(task => 
            {if(task.id === id){
                return {...task, task : newform}
            }else{
                return task;
            }}
            )
            this.setState({tasks : updatedtask});

    }
    delete=(id)=>{
        this.setState({
            tasks : this.state.tasks.filter(task => task.id !== id)
        })
    }
    
    render() {
        const mylist = this.state.tasks.map(task => 
           <li> <Task 
            task = {task.task}
            key = {task.id}
            id = {task.id}
            update = {this.updatetask}
            delete = {() => this.delete(task.id)}
            
            taskk = {task.completed}
            /></li>
            )
        return(
            <div className="todolist">
                <h1>Todo List <span>A Simple Todo App.</span></h1>
                <ul>{mylist}</ul>
                <Todoform addtask = {this.additem}/>
            </div>
        )
    }
}