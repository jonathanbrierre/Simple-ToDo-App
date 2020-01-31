import React from 'react';
import './App.css';
import ToDos from './Components/ToDos';
import Header from './Components/layout/Header'
import AddToDo from './Components/AddToDo';
import uuid from 'uuid'
import Search from './Components/Search';


class App extends React.Component {
  
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Mow Lawn',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Buy Groceries',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Take over the world',
        completed: false
      }
    ],
    search: ''
  }
  // Toggle complete
  markComplete = (id) => {
    this.setState(prevState => {
      const todosArray = prevState.todos.map((task)=>{
        if(task.id === id){
            task.completed = !task.completed
        }
        return task
        })
      return {todos: todosArray}
    })
  }

  // Deletes a todo
  deleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter((todo)=> todo.id !== id)})
  }

  addToDo = (newTask) => {
    //Something worth doing?
    newTask['id'] = uuid.v4()
    newTask['completed'] = false
    this.setState({todos: [...this.state.todos, newTask]})
  }

  changeStateSearch = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  dynamicSearch = () => {
    let filteredList = this.state.todos.filter(todo => todo.title.toLowerCase().includes(this.state.search.toLowerCase()))
    return filteredList
  }


  render(){
    return (
      <div className="App">
        <Header />
        <Search search = {this.state.search} changeStateSearch = {this.changeStateSearch}/>
        <AddToDo addToDo = {this.addToDo}/>
        <ToDos todos = {this.dynamicSearch()} markComplete ={this.markComplete} deleteTodo = {this.deleteTodo}/>
      </div>
    );

  }
}


export default App;
