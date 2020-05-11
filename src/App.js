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

clickEvent=(id) =>{
  
}

clickedImage=(id) =>{

}

gameReset=() =>{
  this.setState({
    score: 0,
    clickedCards: [],
    characters:characters.map(character=>{
      character.clicked=false;
    })
  })
}

gameWin=() =>{
  if (this.state.characters.length === this.state.clickedCards.length) {
    alert("You Win Szilard!");
    this.gameReset();
  }
}

gameOver=() =>{
  alert("You LOST! Szilard is the Winner!");
  this.gameReset();
}

shuffleStarwars=() =>{

}
 
shuffleImages=(arr) =>{
  return arr.sort((a,b)=>Math.floor(Math.random()*1000)>500?1:-1);

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
          onClick={this.clickEvent}
          />
        )
      )}
      </Wrapper>
    )
  }
}

export default App;
