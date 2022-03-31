import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./page/Table";

class App extends Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ];
    return (
      <>
        <Header />
        <Table characterData={characters} />
      </>
    );
  }
}

export default App;
