import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="border border-slate-300">State</th>
        <th className="border border-slate-300">City</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const row = props.characterData.map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-slate-300">{item.name}</td>
        <td className="border border-slate-300">{item.job}</td>
      </tr>
    );
  });
  return <tbody>{row}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData } = this.props;
    return (
      <table className="table-auto border-collapse border border-slate-400">
        <TableHead />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;
