import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartStock from './components/ChartStock'
import Search from './components/Search'
import _ from 'lodash'

class App extends Component {
  state = {
    searchTerm : '',
    stockSymbol : '',
    result: [],
    chartData: []
  }


  handleSearch= (event) =>{
    this.setState({ searchTerm: event.target.value}, _.debounce(this.fetchSymbols, 1000) )
  }

  handleSelect = (stockSymbol) => {
    this.setState({stockSymbol}, this.fetchChart)
  }


  fetchSymbols= () =>{
    const API_URL = "http://localhost:4000/api/v1/search/" + this.state.searchTerm
    fetch(API_URL).then(r => r.json()).then(data => this.setState({result: data}))
  }

  fetchChart = () => {
    const API_URL = "http://localhost:4000/api/v1/stock_symbols/" + this.state.stockSymbol
    fetch(API_URL).then(r => r.json()).then(chartData => this.setState({chartData}))

  }



  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="App">
        <Search searchTerm={this.state.searchTerm} 
        handleSearch={this.handleSearch} 
        data = {this.state.result}
        handleSelect = {this.handleSelect}/>
        <ChartStock data={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
