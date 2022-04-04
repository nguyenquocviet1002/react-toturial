import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./page/Table";
import Form from "./page/Form";
import instance from "./api/APIconfig";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./page/Detail";
import Edit from "./page/Edit";

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
      .delete(`/course/${index}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  };

  handleSubmit = (data) => {
    const config = { headers: { "Content-Type": "application/json" } };
    instance
      .post("/course", data, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  };

  handleDetail = (id) => {
    instance
      .get(`course/${id}`)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  };

  handleEdit = (data, id) => {
    const config = { headers: { "Content-Type": "application/json" } };
    instance
      .post(`/course/${id}`, data, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        this.setState({ error: true });
      });
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
            <Route
              path="/:id"
              element={
                <Detail dataDetail={data} handleDetail={this.handleDetail} />
              }
            />
            <Route
              path="edit/:id"
              element={
                <Edit
                  dataDetail={data}
                  handleEdit={this.handleEdit}
                  handleDetail={this.handleDetail}
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
