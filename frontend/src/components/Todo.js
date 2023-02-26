import React from "react"
import {FiCheck} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
class Todo extends React.Component{
    render(){
        return (
            <div className="todo-item">
                <div className="icon-buttons">
                    <FiCheck className="icon-complete" onClick={()=>{this.props.MarkCompleted(this.props.todo)}}/>
                    <AiOutlineClose className="icon-delete" onClick={()=>{this.props.MarkDelete(this.props.todo)}}/>
                </div>
                <h3>{this.props.todo.title}</h3>
                {this.props.todo.completed ? <div><FiCheck className="icon"/> <span >Completed</span></div>: <div><AiOutlineClose className="icon"/> <span> Uncompleted</span></div>}
                
                <div className="time">
                <span>Created at {this.props.todo.time}</span>
                </div>
            </div>      
        )
    }
}

export default Todo