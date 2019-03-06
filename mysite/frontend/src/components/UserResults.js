import React from 'react';
import key from 'weak-key';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { LazyImage } from 'react-lazy-images';

const UserResults = ({ users, styles }) => {

  const getStripedStyle = (index) => {
    return { background: index % 2 ? '#fafafa' : '#eee' };
  }

  return (
    users.map((user, index) => {
      return (
        <TableRow key={key(user)} style={ getStripedStyle(index) }>
          <TableCell style={styles.avatar}>
            <LazyImage
              alt="github avatar" 
              src={`https://github.com/${user.login}.png?size=40`}
              placeholder={({ ref }) => (
                <img ref={ref} src={`https://github.com/github.png?size=40`} alt={"github avatar"} />
              )}
              actual={({ imageProps }) => <img {...imageProps} />}
            />
          </TableCell>
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