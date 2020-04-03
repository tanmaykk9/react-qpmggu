import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      userInput: ''
    };
  }

inputChangedHandler = () => {
  this.setState({
    userInput: event.target.value
  })
}

  render() {
    const charList = this.state.userInput.map(ch => {
      return <Char character={ch} />;
    });
    return (
      <div className="App">
        <ul>
          <li>Create an input type text</li>
        </ul>
        <hr />
        <input type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          {charList}
      </div>
    );
  } 
}

render(<App />, document.getElementById('root'));
