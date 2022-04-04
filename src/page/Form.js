import React, { Component } from "react";

class Form extends Component {
  initialState = {
    title: "",
    time: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { title, time } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          className="border-2 p-2"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Time</label>
        <input
          className="border-2 p-2"
          type="number"
          name="time"
          id="time"
          value={time}
          onChange={this.handleChange}
        />
        <input
          className="border-2 p-2"
          type="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    );
  }
}

export default Form;
