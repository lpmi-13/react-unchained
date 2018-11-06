import React from 'react';
import PropTypes from 'prop-types';

const UserRow = props => {
    const {props: { user } } = this;
  return <li>user: {user.login} / contributions: {user.contribs}</li>;
}

UserRow.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserRow;