// Vendor
import React, { Component } from 'react';
import key from 'weak-key';
import PropTypes from 'prop-types';

// Application
import TableRow from './TableRow';

class ResultsTable extends Component {

    render() {
        const { fetching, users } = this.props;
    
        return (
            <table>
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">User</th>
                <th scope="col">Contributions</th>
              </tr>
            </thead>
            <tbody>
              { fetching ? <div>Loading...</div> : users.map((user, i) => ( <TableRow
                key={key(user)}
                rowNumber={i + 1}
                userName={user.login}
                contributions={user.contribs}
          />)) }
            </tbody>
          </table>
        )
    }
}

ResultsTable.propTypes = {
    fetching: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
}

export default ResultsTable;