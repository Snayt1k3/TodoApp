import React from "react"
import axios from "axios"
import Todos from "./components/Todos"
import Header from "./components/Header"
import AddTodo from "./components/AddTodo"

const AllTodos = "http://localhost:8000/api/todo_list/"


class App extends React.Component {
    key = ""
    constructor (props){
      super(props)
      this.key = this.getCookie("key")
      if (this.key === undefined){
        document.cookie = "key=" + this.randomKeyGenerator()
        this.key = this.getCookie("key")  
      }
    
      axios.get(AllTodos, {params:{key: this.key}}).then((res)=>{
        this.setState({todos: res.data})
      })

      this.state = {
        todos: [],
      }
      
    }
    
    render () {
      return (<div>
        <Header/>
        <div>
        <AddTodo onAdd={this.Addtodo}/>
        </div>
        <Todos list={this.state.todos} MarkCompleted={this.MarkCompleted} MarkDelete={this.MarkDelete}/>
      </div>)
    }

    Addtodo(todo){
      axios.post(AllTodos, {"title": todo.todo_text, "key": todo.key})
    }

    MarkCompleted(todo){
      if (!todo.completed)
      axios.patch(AllTodos, {"id": todo.id})
    }

    MarkDelete(todo){
      axios.delete(AllTodos, {data:{id: todo.id}})
    }


    randomKeyGenerator() {
      const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
      let word = ''

      for (let i = 0; i < 15; i++) {
          word += letters.charAt(Math.floor(Math.random() * letters.length))
      }

      this.randomKey = word.substr(0, 5) + '-' + word.substr(5, 5) + '-' + word.substr(10, 5)

      return this.randomKey.toUpperCase()
    }

  getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
}

export default App