import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import React, { Component } from 'react';


ReactChartkick.addAdapter(Chart)

class ChartStock extends Component {
    render() {
        // const dataTodiplay = this.props.data.map(d => {[d.data]=d.close})
        let dataTodiplay 
        this.props.data.forEach(element => {
            dataTodiplay = {...dataTodiplay, [element.date] : element.close}}
        );
        // {"2017-01-01": 11, "2017-01-02": 6}
        console.log(dataTodiplay);

        return (
            <div>
                <LineChart data={dataTodiplay}  min={null} max={null}/>
            </div>
        );
    }
}

export default ChartStock;