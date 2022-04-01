import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="border border-slate-300 p-1">ID</th>
        <th className="border border-slate-300 p-1">Name</th>
        <th className="border border-slate-300 p-1">Time</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-slate-300 p-1">{item.id}</td>
        <td className="border border-slate-300 p-1">{item.title}</td>
        <td className="border border-slate-300 p-1">{item.time}</td>
        <td className="border border-slate-300 p-1">
          <button
            className="rounded-full border-2 bg-black text-white p-2"
            onClick={() => props.removeCharacter(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table className="text-center table-auto border-collapse border border-slate-400">
        <TableHead />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
