// Vendor
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Application
import UserResults from './UserResults';

const styles = {
  avatar: {
    maxWidth: '40px',
    minWidth: '40px',
    padding: '.5rem',
  },
  cells : {
    padding: '.5rem',
    whiteSpace: 'nowrap',
  },
  numeric: {
    padding: '.5rem',
    textAlign: 'right',
  },
  tableBody: {
    stripedRows: true,
  }
};

const ResultsTable = ({ users, label }) => {
  return (
    <Paper classNames="results-table">
      { <div className="table-title">
          <Typography variant="h6">
            {label ? label : ''}
          </Typography>
        </div> 
      }
        <Grid item xs={6}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={styles.cells}></TableCell>
                <TableCell style={styles.cells}>Rank</TableCell>
                <TableCell style={styles.cells}>User</TableCell>
                <TableCell style={styles.cells}>Contributions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <UserResults users={users} styles={styles} />
            </TableBody>
          </Table>
        </Grid>
    </Paper>
  )
}

ResultsTable.propTypes = {
  label: propTypes.string,
  users: propTypes.array.isRequired,
}

export default ResultsTable;