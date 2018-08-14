import React, { Component } from 'react';
import './App.css';
// import SimpleStorage from "react-simple-storage";



class App extends Component {
    constructor() {
      super();
      this.state = {  
        newItem: "",
        list: [],
        time: null
    }
  }

  updateInput(key, value) {
    this.setState({[key]: value}
    )
    console.log('akash');
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      time: new Date().toLocaleTimeString()
    }

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({list, newItem: "" });
    console.log(newItem)


  }

  delItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  // newDate() {
  //   const timestamp = Date.now(); // This would be the timestamp you want to format

  //   return new Intl.DateTimeFormat('en-US', 
  //   {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp))
  // }

  

  // componentWillUpdate() {
  //   localStorage.setItem('newItem', JSON.stringify(this.state.newItem))
  //   localStorage.setItem('time', JSON.stringify(this.state.time))
  // }


  // componentWillMount() {
  //   localStorage.getItem('newItem') && this.setState ({
  //     newItem: JSON.parse(localStorage.getItem('newItem')),
  //     isLoading: false  
  
  //   })
  // }

render() {
  return (
    <div className='App'>

      {/* <SimpleStorage parent={this} /> */}

      <h1>ToDo List</h1>
      <div className='bott'>
      <input
      type='text'
      placeholder='Add todo things'
      onChange={e => this.updateInput("newItem", e.target.value)}
      />
      <button
      onClick={()=> this.addItem()}
      disabled={!this.state.newItem.length}>
        &#43;Add
      </button>
      </div>
      <br />
      <div className='main'>
      <ul>
          {this.state.list.map(item => {
              return (
                <li key={item.id}> 
                Task: {item.value}
                <br />
                Time: {item.time}
                <br />
                <button
                onClick={() => this.delItem(item.id)}>
                Delete
                </button> 
                </li>
              );
            }
            )}
        </ul>
        </div>
    </div>
  )
}





}
export default App;