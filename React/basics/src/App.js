import React,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Greet from './Components/Greet'
import Message from './Components/Message';
//import Mycomponent from './Components/class'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        {/*<Greet name="Vidhya" heroname="Vijay"><p>This is children</p></Greet>
        <Greet name="Vidhya" heroname="SK"><button>Submit</button></Greet>
        /*<Mycomponent />*/}
      </div>
    );
  }
}


export default App;
