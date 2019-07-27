import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      superheroes: []
    };
  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/w8gn9")
      .then(response => response.json())
      .then(data => this.setState({ superheroes: data }));
  }
  render() {
    return (
      <div className="App">
        <CardList superheroes={this.state.superheroes} />
      </div>
    );
  }
}

export default App;
