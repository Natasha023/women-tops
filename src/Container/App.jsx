import React, { Component } from 'react';
import Header from '../Component/Header/Header';
import MainScreen from '../Component/MainScreen/MainScreen';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      size: 'All'
    }
  }
  onSizeChange(size){
    console.log(`Cloth size: ${size}`);
    this.setState({
      size 
    })
  }

  render() {
    return (
      <div className="App">
       <Header onSizeChange={this.onSizeChange.bind(this)} />

      <MainScreen className="mainScreen" size={this.state.size}/>
       
      </div>
    );
  }
}

export default App;
