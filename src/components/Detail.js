import React, { Component } from 'react';

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


    render() {
        console.log(this.props.data);
        if(this.props.data){
            let {symbol, companyName,latestTime,week52High, week52Low, marketCap, changePercent, delayedPrice} = this.props.data
            return (
                <div>
                    symbol: {symbol} <br />
                     {companyName} <br />
                    marketCap: {this.intToString(marketCap)} <br />
                    latestTime: {latestTime} <br />
                    Price: {delayedPrice} <br />
                    changePercent: {changePercent} <br />
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