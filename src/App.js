import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./page/Table";
import Form from "./page/Form";
import instance from "./api/APIconfig";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      .then((response) => {})
      .catch((error) => {
        this.setState({ error: true });
      });
  };

  handleSubmit = (characters) => {
    this.setState({ characters: [...this.state.characters, characters] });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Header isLoggedIn={true} />
        <Router>
          <Routes>
            <Route
              path="/add"
              element={<Form handleSubmit={this.handleSubmit} />}
            />
            <Route
              path="/list"
              element={
                <Table
                  characterData={data}
                  removeCharacter={this.removeCharacter}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
