import React, { Component } from 'react';
import './App.css';
import Joke from '../components/Joke';
import RefreshButton from '../components/RefreshButton';

class App extends Component {

  constructor() {
    super();
    this.state = {
      jokes: [],
      buttonValue: 'Start Laughing',
    }
  }

  fetchJoke = () => {
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(Response => Response.json())
    .then(data => this.setState ({jokes: data}))

  }

  componentDidMount() {
  }
  
  onClickRefresh = () => {
    this.fetchJoke();
    this.setState({buttonValue: 'Another Funny Joke'});
  }

  render () {
    const {jokes} = this.state;
    const {buttonValue} = this.state;
    return (
      <div className="App">
        <RefreshButton refreshPage={this.onClickRefresh} props={buttonValue}/>
        <Joke joke={jokes.value} />
      </div>
    )
  };
}

export default App;
