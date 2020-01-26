import React from 'react';
import './App.css';
import ToDos from './Components/ToDos';
import Header from './Components/layout/Header'
import AddToDo from './Components/AddToDo';
import uuid from 'uuid'


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
    ]
  }
  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((task)=>{
      if(task.id === id){
        task.completed = !task.completed
      }
      return task
      })
    })
  }

  // Deletes a todo
  deleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter((todo)=> todo.id !== id)})
    // whats the difference?
    // this.setState({todos: [...this.state.todos.filter((todo)=> todo.id !== id)]})
  }

  addToDo = (newTask) => {
    newTask['id'] = uuid.v4()
    newTask['completed'] = false
    this.setState({todos: [...this.state.todos, newTask]})
  }


  render(){
    return (
      <div className="App">
        < Header />
        <AddToDo addToDo = {this.addToDo}/>
        < ToDos todos = {this.state.todos} markComplete ={this.markComplete} deleteTodo = {this.deleteTodo}/>
      </div>
    );

  }
}

export default App;
