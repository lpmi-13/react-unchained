import React from 'react';
import key from 'weak-key';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const UserResults = ({ users }) => {
  return (
    users.map((user) => {
      return (
        <TableRow className="user-row" key={key(user)}>
          <TableCell component="th" scope="row">
            {user.rank}
          </TableCell>
          <TableCell>{user.login}</TableCell>
          <TableCell>{user.contributions}</TableCell>
        </TableRow>
      );
    })
  )
}

UserResults.propTypes = {
    users: PropTypes.array.isRequired,
}

export default UserResults;