import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./page/Table";
import Form from "./page/Form";
import instance from "./api/APIconfig";
import { data } from "autoprefixer";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    instance
      .get("/course")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }
  removeCharacter = (index) => {
    instance
      .delete("/course/" + index)
      .then((response) => {
        let i = response.data.id;
        console.log(data);
        this.setState({
          data: data.filter((character, i) => {
            return i !== data.id;
          }),
        });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  };

  handleSubmit = (characters) => {
    this.setState({ characters: [...this.state.characters, characters] });
  };
  render() {
    // const { characters } = this.state;
    const { data } = this.state;
    return (
      <>
        <Header />
        <Table characterData={data} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default App;
