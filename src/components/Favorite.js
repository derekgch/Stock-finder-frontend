import React, { Component } from 'react';
import ChartStock from './ChartStock'

class Favorite extends Component {

    state = {
        allFavsdata: []
    }

    componentDidUpdate(prevProps) {
        // console.log("p", prevProps.fav.length, "this", this.props.fav.length)
        if(prevProps.fav.length !== this.props.fav.length) {     
            const API_URL = "http://localhost:4000/api/v1/stock_symbols/" 
            this.props.fav.forEach(element => {
                fetch(API_URL + element.stock_symbol).then(r => r.json())                
                .then( d => { console.log('d', d);this.setState({ allFavsdata: [...this.state.allFavsdata, d ] })            })
            });
        }
    }
    
    displayFavs = () => {
        return this.state.allFavsdata.map( data => <ChartStock data={data} /> )
    }

    render() {
        console.log("allFavsdata", this.state.allFavsdata)
        return (
            <div>
                {this.displayFavs()}
            </div>
        );
    }
}

export default Favorite;