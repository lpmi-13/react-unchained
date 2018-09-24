// Vendor
import React from 'react';

const TableRow = ({ rowNumber, userName, contributions }) => {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{userName}</td>
      <td>{contributions}</td>
    </tr>
  );
}

export default TableRow;
