import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      list: ["test", "test1"]
    }
  }

  onUpdateInputField = (event) => {
    this.setState({input: event.target.value})
  }

  addTodo = (todo) => {
    this.setState({
      list: this.state.list.concat(todo)
    })
  }

  createList = (item, index) => {
    return <li key={index}>{item}</li>
  }

  onButtonSubmit = () => {
    this.addTodo(this.state.input);
  }

  render() {

    var entries = this.state.list;
    console.log(entries);
    const listItems = entries.map(this.createList);

    return (
      <div className="app">

        <div>
          <input onChange={this.onUpdateInputField} type="text" placeholder="I need to..."/>
          <button onClick={this.onButtonSubmit} type="button">Add todo</button>
        </div>

        <ul>
          {listItems}
        </ul>

      </div>
    );
  }
}

export default App;
