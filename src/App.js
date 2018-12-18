import React, { Component } from 'react';
import Shuffle from 'shuffle-array';
import Header from "./components/Header/Header.js";
import Container from "./components/Container/Container.js";
import Card from "./components/Card/Card.js"
import lightning from "./lightning.json"
import './App.css';

class App extends Component {
  state = {
    images: lightning,
    score: 0,
    highScore: 0,
    clicked: [],
    guessResult: ""
  }

  updateScore = id => {
    const newScore = this.state.score + 1;
    this.setState({ score: newScore })
    if (newScore > this.state.highScore) {
      this.setState({ highScore : newScore })
    }
  }

  handleImageClick = id => {
    let newLightning = Shuffle(lightning);
    console.log(newLightning)
    this.setState({ images: newLightning })

    let imageClicked = this.state.clicked
    console.log(imageClicked)

    if (!this.state.clicked.includes(id)) {
      imageClicked.push(id)

      this.updateScore()

      this.setState({ 
        guessResult: "You guessed right!",
        clicked: imageClicked
      })
    } else {
      this.setState({
        score: 0,
        guessResult: "You guessed WRONG!",
        clicked: []
      })
    }
  }


  render() {
    return (
      <Container>
        <Header score={this.state.score} highScore={this.state.highScore} guessResult={this.state.guessResult} />
        {this.state.images.map(bolt => (
          <Card 
          id={bolt.id}
          key={bolt.id}
          name={bolt.name}
          image={bolt.image}
          onClick={this.handleImageClick}
          className="eachImage"
          />
        ))}
      </Container>
    );
  }
}

export default App;
