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
                <LineChart data={dataToDisplay}  min={null} max={null}/>
            </div>
        );
    }
}

export default ChartStock;