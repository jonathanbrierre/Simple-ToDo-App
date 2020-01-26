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
        completed: true
      }
    ]
  }
  
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
      })
    })
  }


  render(){
    return (
      <div className="App">
        < ToDos todos = {this.state.todos} markComplete ={this.markComplete}/>
      </div>
    );

  }
}

export default App;
