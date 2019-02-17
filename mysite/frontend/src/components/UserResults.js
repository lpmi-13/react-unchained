import React from 'react';
import key from 'weak-key';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const UserResults = ({ users, styles }) => {
  return (
    users.map((user) => {
      return (
        <TableRow key={key(user)}>
          <TableCell component="th" scope="row" style={styles.numeric}>
            {user.rank}
          </TableCell>
          <TableCell style={styles.cells}>{user.login}</TableCell>
          <TableCell style={styles.numeric}>{user.contributions}</TableCell>
        </TableRow>
      );
    })
  )
}

UserResults.propTypes = {
    users: PropTypes.array.isRequired,
}

export default UserResults;