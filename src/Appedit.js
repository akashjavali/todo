import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            works: []
          };
    }


    add() {
        var title = this.refs.title.value;
        if(localStorage.getItem('works') == null) {
            var works = [];
            works.push(title);
            localStorage.setItem('works', JSON.stringify(works));

        } else {
            var works = JSON.parse(localStorage.getItem('works'));
            works.push(title);
            localStorage.setItem('works', JSON.stringify(works));
        }
        this.setState({
            works: JSON.parse(localStorage.getItem('works'))
        })
    }
    
    render() {
        return (
            <div>
                <h1>ToDo List</h1>
                <input type='text' 
                placeholder='Enter todo' 
                ref='title'
                />
                <input type='button'
                value='Add'
                onClick={this.add.bind(this)}
                />
                <br /> <br />
                <ul>
                    {this.state.works.map() }
                </ul>

            </div>
            
        );
    }
}

export default App;
