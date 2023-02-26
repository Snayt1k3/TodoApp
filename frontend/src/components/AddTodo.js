import React from "react"

class AddTodo extends React.Component  {
    userAdd = {}
    date = new Date()
    constructor (props){
        super(props)
        this.state = {
            todo_text: "",
            data: "",
            key: ""
        }
    }

    render() {
        return (
        <form ref={(el)=> this.MyForm = el}>
            <input placeholder="What need to do" onChange={(e)=> this.setState({todo_text: e.target.value})}/>
            <button type="button" onClick={()=> {
            
                this.MyForm.reset() 
                this.userAdd = {
                    todo_text: this.state.todo_text,
                    data:this.state.data,
                    key:this.getCookie("key")
                }  
                this.props.onAdd(this.userAdd)}}>Add Todo</button>
        </form>
        ) 
    }
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
    }

export default AddTodo