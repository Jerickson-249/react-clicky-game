import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import characters from '../src/characters.json';
import Wrapper from './components/Wrapper';

class App extends Component{ //setting a base case for this app
  state={ 
    score: 0,
    highscore: 0,
    clickedCards: [],
    characters: characters,
//score is 0 because we defined it as 0, will get updated value from this.state.score
  }

clickEvent=(id) =>{
  this.clickedImage(id);
}

clickedImage=(id) =>{
  this.setState({ //whenever you click on a image, you are updating the state
    characters:characters.map(character =>{ //mapping is bascially a for loop and you're mapping through the characters
      if(character.id === id && character.clicked === false) { //checking if the character has an id and if it's false
        character.clicked=true; //updating it to true, if we click on it twice, the game is lost
        this.setState({
          score:this.state.score+1, //score is growing by 1
          highscore:Math.max(this.state.score+1, this.state.highscore) //comparing which one is bigger, that will be the highscore
        })
        const clickedCardsCopy=this.state.clickedCards; //saved the state of clickedCards
        clickedCardsCopy.push(character.id) //pushing the id of the character into the array
        this.setState({clickedCards:clickedCardsCopy}) //clickedCards is an array, making sure they are equal
        this.gameWin();
      }
      else if(character.id === id && character.clicked === true) {
        this.gameOver();
        this.gameReset();
      }
    }) 
  })
 this.shuffleStarwars(); //need to shuffle the images again, regardless if you win or lose
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

//coming from characters.json which has 12 characters, push the id of the image into ClickedCards
gameWin=() =>{
  if (this.state.characters.length === this.state.clickedCards.length) { 
    alert("You Win!");
    this.gameReset();
  }
}

gameOver=() =>{
  alert("You LOST!");
  this.gameReset();
}

shuffleStarwars=(id) =>{
  this.setState({characters:this.shuffleImages(this.state.characters)}) //whatever order the images or clicking, they are shuffling
}
 
shuffleImages=(arr) =>{
  return arr.sort((a,b)=>Math.floor(Math.random()*1000)>500?1:-1);

}

  render(){
    return(
      <Wrapper>
      <Title score={this.state.score} highscore={this.state.highscore}></Title>
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
