import React, { Component } from 'react';
import _ from 'lodash'

class Search extends Component {
    render() {
        const suggestResults = this.props.data.map(e => <p className="results-list" 
            onClick={()=>this.props.handleSelect(e.stock_symbol)}>{e.stock_symbol} : {e.name}</p>)

        console.log(suggestResults);
        return (            
            <div className="dropdown">
                <input id="myInput" type='text' placeholder="Search Stocks here"
                value={this.props.searchTerm} 
                onChange={this.props.handleSearch}/>
                <div id="myDropdown" className="dropdown-content">
                    {suggestResults}    
                </div>

            </div>
        );
    }
}

export default Search;