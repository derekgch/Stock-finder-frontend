import React, { Component } from 'react';
import _ from 'lodash'

class Search extends Component {
    render() {
        const suggestResults = this.props.data.map(e => <li onClick={()=>this.props.handleSelect(e.stock_symbol)}>{e.stock_symbol}</li>)
        return (
            <div>
                <input type='text' value={this.props.searchTerm} onChange={this.props.handleSearch}/>
                {suggestResults}
            </div>
        );
    }
}

export default Search;