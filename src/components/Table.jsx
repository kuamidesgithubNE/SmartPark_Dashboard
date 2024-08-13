import React, { useState } from "react";


  return (
    <table>
      <caption>{PageTitle}</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Header 2</th>
          <th>Header 3</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.col1}</td>
            <td>{item.col2}</td>
            <td>{item.col3}</td>
            <td>
              <button
                className="btn edit-btn"
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
