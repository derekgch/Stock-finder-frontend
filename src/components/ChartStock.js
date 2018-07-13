import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import React, { Component } from 'react';
import { Button  } from 'react-materialize'


ReactChartkick.addAdapter(Chart)

class ChartStock extends Component {


   
    
    render() {        
        // const dataToDisplay = this.props.data.map(d => {[d.data]=d.close})
        let dataToDisplay 
        this.props.data.forEach(element => {
            dataToDisplay = {...dataToDisplay, [element.date] : element.close}}
        );
        // {"2017-01-01": 11, "2017-01-02": 6}
        // const deleteButton = <div><button  onClick={() => this.props.handleDelete(this.props.symbol)}> Delete</button> <br/></div> 
        const deleteButton =  <Button waves='light'  onClick={() => this.props.handleDelete(this.props.symbol)} >Delete</Button>
       

        return (
            <div className=" column " onClick={() => {this.props.handleClickOnFavorite(this.props.symbol)}}>
                <span> <h5> {this.props.symbol ? this.props.symbol : null }{' '}</h5>
                { this.props.mainChart !== 'true' ? deleteButton : null  }
                    </span> 
                <LineChart data={dataToDisplay} name="whh" min={null} max={null} label="Price" />
            </div>
        );
    }
}

export default ChartStock;