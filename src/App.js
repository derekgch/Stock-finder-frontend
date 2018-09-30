import React, { Component, Fragment } from 'react';
import './App.css';
import ChartStock from './components/ChartStock'
import Search from './components/Search'
import Detail from './components/Detail'
import Login from './components/Login'
import {Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import Favorite from './components/Favorite'
import { TypeChooser } from "react-stockcharts/lib/helper";
import MainStockChart from "./components/MainStockChart";
import { getData } from "./components/utils";
import {URL, local_URL} from './Adapter';



class App extends Component {
  state = {
    searchTerm : '',
    stockSymbol : '',
    result: [],
    chartData: [],
    detailInfo: null,
    fav: [],
    data1: []
  }

  handleClickOnFavorite = (sym) => {
    // console.log('Cliked');
    
    this.setState({stockSymbol: sym}, ()=> {
      this.fetchMainChart();
     })
  }
  

  componentDidMount(){    
    this.fetchFavs()
    this.handleClickOnFavorite('DIA')
  }

  fetchMainChart = () => {

    getData(this.state.stockSymbol).then(
      data => {
        this.setState({ data1: data });
        // console.log("inside main chart");
        
      }
    ).then(this.fetchQuote)
  }

  fetchFavs = () => {
    if(localStorage.getItem('token')){
      const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).id;
      const url = local_URL+"users/" + userId;
      let config = {
        headers: {
            'Content-Type': 'application/JSON',
            'Authorization': localStorage.getItem('token')
        },
    }
      fetch(url,config).then(r =>r.json()).then(data => this.setState({ fav : data.user}))
    }
  }
  

  

  handleSearch= (event) =>{    
    if (event.target.value) {
      this.setState({ searchTerm: event.target.value.toUpperCase()}, this.fetchSymbols )
    }
    
  }

  handleSelect = (stockSymbol) => {
    const sym = stockSymbol.split(":")[0].trim()
    // const foundCompany= this.state.result.find( e => e.name.includes(stockSymbol))      
    this.setState({stockSymbol: sym, result:[], searchTerm: '' }, () => {
      this.fetchChart();
      this.fetchMainChart();
      this.fetchQuote(); })
  }

  removeFavorite = () => {
    let  emptyState = {
      searchTerm : '',
      stockSymbol : '',
      result: [],
      chartData: [],
      detailInfo: null,
      fav: []
    }
    this.setState(emptyState);
  }



  fetchSymbols= () =>{
    const API_URL = local_URL+ "api/v1/search/" + this.state.searchTerm
    if (this.state.searchTerm.length > 0 ) {
      fetch(API_URL).then(r => r.json()).then(data => this.setState({result: data}))
    } else { this.setState({result: [] }) }
  }

  fetchChart = () => {
    const API_URL = local_URL+ "api/v1/stock_symbols/" + this.state.stockSymbol
    if (this.state.stockSymbol.length > 0 ) {
      fetch(API_URL).then(r => r.json()).then(chartData => {
        this.setState({chartData})
      })
    }
  }

  fetchQuote = () => {
  const API_URL = local_URL+ "api/v1/quote/" + this.state.stockSymbol
  console.log("fetchQuote",this.state.stockSymbol);
  
    if (this.state.stockSymbol.length > 0 ) {
      fetch(API_URL).then(r => r.json()).then(detailInfo => {
        this.setState({detailInfo})
      })
    }
  }


  render() {  
    // console.log(this.state.data1)
    let mainChartToDisplay = 
      <TypeChooser>
      {type => <MainStockChart type={type} data={this.state.data1} width={window.innerWidth}/>}
      </TypeChooser>

    if(this.state.data1.length < 1){mainChartToDisplay = null}

    return (
      <div className="App" >
        <Switch>
          <Route path="/login" component={(props) => {
            return (
              < Fragment >
                <Login  { ...props }/>
                <SignUp  {...props}/>
              </Fragment>
            )
          }
          }/>
          <Route path="/" render={(props) => {
            if (!!localStorage.getItem('token') === false) {
              props.history.push('/login')
              return null
            } else {
              return (
                <React.Fragment>
                <Search 
               
                searchTerm={this.state.searchTerm} 
                handleSearch={this.handleSearch} 
                data = {this.state.result}
                handleSelect = {this.handleSelect} 
                { ...props }/>
                <Detail data={this.state.detailInfo} userId={this.state.userId} { ...props }
                  fetchFavs={this.fetchFavs}
                  
                />
                <div className="mainChart">
                {mainChartToDisplay}
                </div>
                {/* <ChartStock 
                data={this.state.chartData} 
                symbol={this.state.stockSymbol}
                mainChart="true"
                { ...props } 
                /> */}
  
                

                <Favorite  fav={this.state.fav} 
                fetchFavs={this.fetchFavs}  
                removeFavorite={this.removeFavorite}
                handleClickOnFavorite={this.handleClickOnFavorite}
                { ...props } />
                </React.Fragment>
              )
            }
            
          }
          }/>
        </Switch>
        {/* <Redirect to="/" /> */}
      </div>
    );
  }
}

export default App;
