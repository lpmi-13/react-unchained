// Vendor
import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ rowNumber, userName, contributions }) => {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{userName}</td>
      <td>{contributions}</td>
    </tr>
  );
}

TableRow.propTypes = {
  contributions: PropTypes.number.isRequired,
  rowNumber: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
}

export default TableRow;
