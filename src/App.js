import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import characters from '../src/characters.json';
import Wrapper from './components/Wrapper';

class App extends Component{
  state={
    score: 0,
    highscore: 0,
    clickedCards: [],
    characters: characters,
//score is 0 because we defined it as 0, will get updated value from this.state.score
  }
  render(){
    return(
      <Wrapper>
      <Title score={this.state.score} highscore={this.state.score}></Title>
      {characters.map(
        characters =>(
          <Card 
          id={characters.id}
          key={characters.id}
          image={characters.image}
          />
        )
      )}
      </Wrapper>
    )
  }
}

export default App;
