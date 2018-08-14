import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
      super()
      this.state = {
        todo: [],
        valueTodo: 0,
        inputfield: ''
      }
    }

    onInputChange = (event) => {
      this.setState({inputfield: event.target.value})
      event.preventDefault();
    }

    onClick = () => {
      let newObj = {
        id: this.state.valueTodo,
        todoName: this.state.inputfield,
        completed: false,
        time: new Date().toLocaleTimeString()
      }
      this.state.todo.push(newObj);
      this.setState({valueTodo: this.state.valueTodo + 1})
      }

      deleteFunc = (id) => {
        this.state.todo.map((val, key) => {
          if(val.id === id) {
            this.state.todo.splice(val, key)
          }
          return false;
        }) 
        return false;
      }

  render() {
    return (
      <div className="App">
      <h1>ToDo App</h1>
        <form>
          <input 
          type='text' 
          placeholder='Enter your ToDo'
          onChange = {this.onInputChange}
          />
        </form>
        <button 
        onClick = {this.onClick} 
        disabled ={!this.state.inputfield.length}
        text='text'>Add</button>
        {this.state.valueTodo !== 0 && 
        this.state.todo.map((value, key) => (
        <TodoList todo = {value} todokey = {key} deleteFunc={this.deleteFunc(value.id)} />
        
        ))
        }
      </div>
    );
  }
}

class TodoList extends Component{
  state = {
    counter: false
  }

  counterChange = () => {
    this.setState({counter: !this.state.counter})
  }

 


  render() {
    const props = this.props;
    return (
      <div key={props.todo.id} className='card' >
        <p  style={{textDecoration: this.state.counter ? 'line-through' : 'none'}}>{props.todo.todoName}</p>
        <p  >{props.todo.time}</p>
        <button onClick={
          this.counterChange
        }>Done</button>
      </div>
      )
  }
}

export default App;
