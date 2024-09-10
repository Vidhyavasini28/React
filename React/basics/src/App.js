import React,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Greet from './Components/Greet'
//import Message from './Components/Message';
//import Mycomponent from './Components/class'
//import Counter from './Components/counter';
import Function from './Components/FunctionClick';
import ClassClick from './Components/classClick'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Function />
        <ClassClick />
        {/*
        <Counter />
        <Message />
        <Greet name="Vidhya" heroname="SK"><button>Submit</button></Greet>
        <Greet name="Vidhya" heroname="Vijay"><p>This is children</p></Greet>
        <Mycomponent />
        */}
      </div>
    );
  }
}


export default App;
