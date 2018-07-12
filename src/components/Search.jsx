import React, { Component, Fragment } from 'react';
import { Row, Autocomplete } from 'react-materialize'


class Search extends Component {

    render() {
        // const suggestResults = this.props.data.map(e => <p className="results-list" 
        //     onClick={()=>this.props.handleSelect(e.stock_symbol)}>{e.stock_symbol} : {e.name}</p>)
        // console.log(suggestResults);
            let suggestResultsObj = {}
            this.props.data.forEach(e => {
                let key =e.stock_symbol + " : " + e.name
                suggestResultsObj = {...suggestResultsObj, [key]: null} 
            })

        console.log(this.props.data);

        
        return (    
            <Fragment >      
            
                <Row>
                <Autocomplete
                     onAutocomplete={(e)=>this.props.handleSelect(e)}
                    s={12}
                    title='Company'
                    data={suggestResultsObj}
                    value={this.props.searchTerm} 
                    onChange={this.props.handleSearch}

                />
                </Row>  
            {/* <div>
                <h1>New dropdown</h1>
                <div className="row">
                    <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <input type="text" id="autocomplete-input" className="autocomplete"/>
                        <label for="autocomplete-input">Search Stock</label>
                        </div>
                    </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="dropdown1"   >
                <input 
                    
                    id="myInput"
                    type='text' 
                    placeholder="Search Stocks here"
                    value={this.props.searchTerm} 
                    onChange={this.props.handleSearch}
                    />
                    <div id="myDropdown" className="dropdown-content">
                        {suggestResults}    
                    </div>
            </div> */}
            </ Fragment >    
        );
    }
}

export default Search;