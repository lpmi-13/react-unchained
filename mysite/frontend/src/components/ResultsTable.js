// Vendor
import React, { Component } from 'react';
import key from 'weak-key';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = ({
  root: {
    flexgrow: 1,
    marginTop: '.15em',
    overflowX: 'auto',
  },
});

class ResultsTable extends Component {

  render() {
    const { users } = this.props;

    return (
      <Paper className={styles.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Contributions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, i) => {
                  return (
                    <TableRow key={key(user)}>
                      <TableCell component="th" scope="row">
                        {i+1}
                      </TableCell>
                      <TableCell>{user.login}</TableCell>
                      <TableCell>{user.contribs}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

ResultsTable.propTypes = {
    fetching: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
}

export default ResultsTable;