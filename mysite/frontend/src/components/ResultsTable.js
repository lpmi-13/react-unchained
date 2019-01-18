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

const ResultsTable = ({ users, label }) => {
  return (
    <Paper classNames="results-table booyah">
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
                <TableCell>Rank</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Contributions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <UserResults users={users} />
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