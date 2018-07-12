import React, { Component, Fragment } from 'react';
import ChartStock from './ChartStock'
import { Button  } from 'react-materialize'


class Favorite extends Component {

    state = {
        allFavsdata: []
    }

    componentDidMount = () => {
      this.props.fetchFavs()
    }
    

    componentDidUpdate(prevProps) {        
        // console.log("p", prevProps.fav.length, "this", this.props.fav.length)
        if(prevProps.fav.length !== this.props.fav.length) {  
            this.setState({
                allFavsdata: []
            }, this.fetchFavsData)   
            
        }
    }
    
    fetchFavsData = () => {
        const API_URL = "http://localhost:4000/api/v1/stock_symbols/" 
        this.props.fav.forEach(element => {
            fetch(API_URL + element.stock_symbol).then(r => r.json())                
            .then( d => {this.setState({ allFavsdata: [...this.state.allFavsdata, d ] })            })
        });
    }
    

    handleDelete = (sym) => {
        const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).id;
   
        const API = 'http://localhost:4000/users/' + userId
           const config = {
               method: "PATCH",
               headers: {
                   'Content-Type': 'application/JSON',
                   'Authorization': localStorage.getItem('token')
               },
               body: JSON.stringify({
                   type: 'removeFavorite',
                   symbol: sym
               })
           }
   
         fetch(API, config).then(r => r.json())
         .then(this.props.fetchFavs)
         .then( () => 
           { this.setState({allFavsdata: []})
            this.fetchFavsData}
            )
       }

       displayFavs = () => {
        let i = 0       
        if (this.state.allFavsdata.length > 0 && this.state.allFavsdata.length === this.props.fav.length ) {
            return this.state.allFavsdata.map( data =>{
                return <ChartStock data={data} symbol={this.props.fav[i++].stock_symbol} handleDelete={this.handleDelete}/>
            })
        } else null
    }

    handleLogout = () => {
      localStorage.removeItem('token')
      this.props.history.push('/login')
    }
    

    render() {
        return (
            <Fragment>
                <hr/>
            <span>
            <Button onClick={this.handleLogout} waves='light'>Log Out</Button>
                <h4>Your Saved Charts</h4>
            </span>
            <br/><br/>
            <br/><br/>
            <div className="container" >
                {this.displayFavs()}
            </div>
            </Fragment>
        );
    }
}

export default Favorite;