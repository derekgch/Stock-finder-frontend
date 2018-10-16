import React, { Component } from 'react';
import { Button  } from 'react-materialize';
import {URL, local_URL} from '../Adapter';

class Detail extends Component {

    intToString (value) {
        var suffixes = ["", "K", "Million", "Billion","T"];
        var suffixNum = Math.floor((""+value).length/3);
        var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
        if (shortValue % 1 != 0) {
            var shortNum = shortValue.toFixed(1);
        }
        return shortValue+suffixes[suffixNum];
    }

    handleClick= (event) => {
        event.preventDefault();
        const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).id;
        const url = local_URL + "users/" + userId;
        const config ={
            method: "PATCH",
            headers: {
                'Content-Type': 'application/JSON',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({symbolId: this.props.data.symbol})
        }
        
        fetch(url, config).then(r =>r.json()).then(this.props.fetchFavs)
    }

    render() {
        if(this.props.data){
            let {symbol, companyName,latestTime,week52High, week52Low, marketCap, changePercent, delayedPrice} = this.props.data
            return (
                <div>
                    <Button floating large className='red' waves='light' icon='add'  onClick={this.handleClick}/>
                    {/* <button
                        className="btn-floating btn-large waves-effect waves-light red"
                     onClick={this.handleClick}><i class="material-icons">+</i></button> <br/> */}
                    <p>Symbol: {symbol} {" "}
                    {companyName}
                    <br></br>
                    Price: {delayedPrice} {" "}
                    MarketCap: {this.intToString(marketCap)}{" "}
                    Change Percent: {(changePercent*100).toFixed(2)}{"% "}
                    LatestTime: {latestTime} {" "}

                    </p>
                </div>
            );
        }else{
            return (
                <div></div>
            )
        }

    }
}

export default Detail;