// Vendor
import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
            <div>
                <input
                type='text'
                ref={ref => (this.query = ref)}
                />
                <input
                type='submit'
                className='btn btn-primary'
                value='search users'
                onClick={this.handleSearch}
                />
            </div>
        )
    }
}

export default Search;