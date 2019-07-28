import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      superheroes: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/w8gn9")
      .then(response => response.json())
      .then(data => this.setState({ superheroes: data }));
  }
  // If we want to see or do something with our state right after we set it then
  // we have to do it inside the second argument in the setState function. Second callback
  //function will be called right after the setState function.
  //Javascript by default doesn't set its scope of this on function

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { superheroes, searchField } = this.state;
    const filterHeories = superheroes.filter(hero =>
      hero.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Super Hero</h1>
        <SearchBox placeholder="Search Name" handlechange={this.handleChange} />
        <CardList superheroes={filterHeories} />
      </div>
    );
  }
}

export default App;
