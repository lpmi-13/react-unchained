// Vendor
import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="navbar navbar-default navbar-fixed-top navbar-inverse">
    <div className="navbar-header">
      <Button >
        <Link to='/'>
          <Glyphicon glyph='home' />
        </Link>
      </Button>
      <button type='button' className='btn btn-default navbar-btn'><Link to='/original_list'>Original List</Link></button>
      <button type='button' className='btn btn-default navbar-btn'><Link to='/updated_list'>Updated List</Link></button>
      <button type='button' className='btn btn-default navbar-btn'><Link to='/search'>Search</Link></button>
    </div>
  </div>
);

export default Header;
