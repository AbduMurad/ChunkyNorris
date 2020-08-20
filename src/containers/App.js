import React, { Component } from 'react';
import './App.css';
import Joke from '../components/Joke';
import RefreshButton from '../components/RefreshButton';

class App extends Component {

  constructor() {
    super();
    this.state = {
      jokes: [],
    }
  }

  fetchJoke = () => {
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(Response => Response.json())
    .then(data => this.setState ({jokes: data}))

  }

  componentDidMount() {
    this.fetchJoke();
  }
  
  onClickRefresh = () => {
    this.fetchJoke();
  }

  render () {
    const {jokes} = this.state;
    
    return (
      <div className="App">
        <h1>Start Laughing</h1>
        <Joke joke={jokes.value} />
        <RefreshButton refreshPage={this.onClickRefresh}/>
      </div>
    )
  };
}

export default App;
