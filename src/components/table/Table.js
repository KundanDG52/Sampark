import React from "react";
import "./Table.css";

const Table = () => {
  // Sample data for 2 rows and 12 columns
  const columnName = [
    "Sr.No",
    "Action",
    "Mandal",
    "Sabha",
    "Sabha Date",
    "Total",
    "Regular",
    "Irregular",
    "Fresh",
    "Resume",
    "Shift In",
    "Attendence",
  ];

  const data = [
    [
      "1",
      "Edit",
      "Gunatit (Andheri)",
      "Santacruz Bal Sabha",
      "Nov 5, 23",
      "28",
      "19",
      "9",
      "0",
      "0",
      "0",
      "10",
    ],
    [
      "2",
      "Edit",
      "Gunatit (Andheri)",
      "Santacruz",
      "Nov 7, 23",
      "96",
      "74",
      "22",
      "0",
      "0",
      "0",
      "42",
    ],
  ];

  return (
    <table className="attendence-table" style={{ width: "80%" }}>
      <thead className="attendence-table-head">
        <tr>
          {columnName.map((cell, colIndex) => (
            <th
              key={colIndex}
              style={{
                // borderBottom: "2px solid black",
                // background: "aliceblue",
                padding: "12px",
              }}
            >
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className="attendence-table-data" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td className="attendence-table-data" key={colIndex}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
