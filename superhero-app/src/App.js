import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      superheroes: []
    };
  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/zuh4h")
      .then(response => response.json())
      .then(data => this.setState({ superheroes: data }));
  }
  render() {
    return (
      <div className="App">
        {this.state.superheroes.map(hero => (
          <h1 key={hero.id}>{hero.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
