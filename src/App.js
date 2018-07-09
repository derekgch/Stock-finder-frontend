import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartStock from './components/ChartStock'
import Search from './components/Search'
import Detail from './components/Detail'
import _ from 'lodash'

class App extends Component {
  state = {
    searchTerm : '',
    stockSymbol : '',
    result: [],
    chartData: [],
    detailInfo: null
  }


  handleSearch= (event) =>{
    this.setState({ searchTerm: event.target.value}, _.debounce(this.fetchSymbols, 300) )
  }

  handleSelect = (stockSymbol) => {
    this.setState({stockSymbol, result:[], searchTerm: '' }, () => {
      this.fetchChart();
      this.fetchQuote(); })
  }


  fetchSymbols= () =>{
    const API_URL = "http://localhost:4000/api/v1/search/" + this.state.searchTerm
    if (this.state.searchTerm.length > 0 ) {
      fetch(API_URL).then(r => r.json()).then(data => this.setState({result: data}))
    } else { this.setState({result: [] }) }
  }

  fetchChart = () => {
    const API_URL = "http://localhost:4000/api/v1/stock_symbols/" + this.state.stockSymbol
    if (this.state.stockSymbol.length > 0 ) {
      fetch(API_URL).then(r => r.json()).then(chartData => {
        this.setState({chartData})
      })
    }
  }

  fetchQuote = () => {
  const API_URL = 'http://localhost:4000/api/v1/quote/' + this.state.stockSymbol
    if (this.state.stockSymbol.length > 0 ) {
      fetch(API_URL).then(r => r.json()).then(detailInfo => {
        this.setState({detailInfo})
      })
    }
  }


  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="App">
        <Search searchTerm={this.state.searchTerm} 
        handleSearch={this.handleSearch} 
        data = {this.state.result}
        handleSelect = {this.handleSelect}/>


        <ChartStock data={this.state.chartData} symbol={this.state.stockSymbol}/>

        <Detail data={this.state.detailInfo}/>
      </div>
    );
  }
}

export default App;
