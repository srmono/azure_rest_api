import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import About from './components/pages/About';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then( res => this.setState({todos: res.data}) )
  }

  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => { 
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then( res =>  this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }) )    
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(), 
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div>
          <div id='container'>
            <Header />
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todos={this.state.todos}  
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}
                  />
              </React.Fragment>
            )} />
            
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
