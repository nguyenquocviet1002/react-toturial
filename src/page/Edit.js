import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Edit(props) {
  let { id } = useParams();
  useEffect(() => {
    props.handleDetail(id);
  }, []);

  let item = props.dataDetail;

  const initialState = {
    title: "",
    time: "",
  };

  const state = initialState;

  const handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  const submitForm = () => {
    props.handleEdit(state, id);
    this.setState(initialState);
  };

  const { title, time } = state;

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        className="border-2 p-2"
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder={item.title}
        onChange={handleChange}
      />
      <label htmlFor="job">Time</label>
      <input
        className="border-2 p-2"
        type="number"
        name="time"
        id="time"
        value={time}
        placeholder={item.time}
        onChange={handleChange}
      />
      <input
        className="border-2 p-2"
        type="button"
        value="Submit"
        onClick={submitForm}
      />
    </form>
  );
}

export default Edit;
