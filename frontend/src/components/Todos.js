import React from "react"
import Todo from "./Todo"
class Todos extends React.Component{
    render(){
        if (typeof(this.props.list['uncompleted']) !== "undefined" | typeof(this.props.list['completed']) !== "undefined"){
            if (this.props.list['uncompleted'].length > 0 | this.props.list['completed'].length > 0){
            
                return (<div>
                    
                    <h2 className="todo-header">Uncompleted Todos</h2>
                    {this.props.list['uncompleted'].map((el) => (
                        <Todo todo={el} key={el.id} MarkCompleted={this.props.MarkCompleted} MarkDelete={this.props.MarkDelete}/>
                    ))}
                    <h2 className="todo-header">Completed Todos</h2>
                    {this.props.list['completed'].map((el) => (
                        <Todo todo={el} key={el.id} MarkCompleted={this.props.MarkCompleted} MarkDelete={this.props.MarkDelete}/>
                    ))}

                </div>)}
                else {
                    return (<div className="todo-item"><h3>Your Todos does not exists</h3></div>) 
                }
            }
        else {
            return (<div className="todo-item"><h3>Your Todos does not exists</h3></div>) 
        }
    } 
}

export default Todos