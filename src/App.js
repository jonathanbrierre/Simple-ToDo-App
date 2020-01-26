import React from 'react';
import './App.css';
import ToDos from './Components/ToDos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out tash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
      })
    })
  }

  // Deletes a todo
  deleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter((todo)=> todo.id !== id)})
    // this.setState({todos: [...this.state.todos.filter((todo)=> todo.id !== id)]})
  }


  render(){
    return (
      <div className="App">
        < ToDos todos = {this.state.todos} markComplete ={this.markComplete} deleteTodo = {this.deleteTodo}/>
      </div>
    );

  }
}

export default App;
