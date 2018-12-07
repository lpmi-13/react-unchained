// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UserResults from './UserResults';

const ResultsTable = props => {

  return (
    <Paper classNames="results-table">
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
              <UserResults users={props} />
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ResultsTable;