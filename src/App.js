import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
    { name: 'Max', age: 28},
    { name: 'Ma', age: 23},
    { name: 'Ola', age: 27}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
   // console.log('Was clicked');
   // DON'T DO THIS this.state.persons[0].name = 'Alexa';
   this.setState({
     persons: [
      { name: 'Maximilian', age: 28},
      { name: 'Mauu', age: 23},
      { name: 'Ola', age: 45}
     ]
    })
  }

  render() {
  return (
<div className="App">
  <h1>Hi, I am first React Code</h1>
  <button onClick={this.switchNameHandler}>Switch Name</button>{"\n"} 
  <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
  <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
  <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
</div>   
   );
//  return React.createElement('div', null, React.createElement('h1', null, 'Does it work?'));
  }
}

export default App;
