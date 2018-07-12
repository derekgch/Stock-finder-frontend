import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import React, { Component } from 'react';


ReactChartkick.addAdapter(Chart)

class ChartStock extends Component {


   
    
    render() {
        // const dataToDisplay = this.props.data.map(d => {[d.data]=d.close})
        let dataToDisplay 
        this.props.data.forEach(element => {
            dataToDisplay = {...dataToDisplay, [element.date] : element.close}}
        );
        // {"2017-01-01": 11, "2017-01-02": 6}
        return (
            <div>
               <span>{this.props.symbol ? this.props.symbol : null }{' '}
                <button  onClick={() => this.props.handleDelete(this.props.symbol)}> Delete</button> <br/>
                </span> 
                <LineChart data={dataToDisplay} name="whh" min={null} max={null} label="Price" />
            </div>
        );
    }
}

export default ChartStock;