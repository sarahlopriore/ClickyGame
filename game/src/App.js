import React, { Component } from 'react';
import Header from "./components/Header/Header.js";
import Container from "./components/Container/Container.js";
import Card from "./components/Card/Card.js"
import lightning from "./lightning.json"
import './App.css';

class App extends Component {
  state = {
    lightning
  }

  render() {
    return (
      <Container>
        <Header />
        {this.state.lightning.map(bolt => (
          <Card 
          id={bolt.id}
          key={bolt.id}
          name={bolt.name}
          image={bolt.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;
