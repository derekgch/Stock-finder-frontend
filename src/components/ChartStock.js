import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import React, { Component } from 'react';


ReactChartkick.addAdapter(Chart)

class ChartStock extends Component {


   
    
    render() {
        console.log(this.props.mainChart);
        
        // const dataToDisplay = this.props.data.map(d => {[d.data]=d.close})
        let dataToDisplay 
        this.props.data.forEach(element => {
            dataToDisplay = {...dataToDisplay, [element.date] : element.close}}
        );
        // {"2017-01-01": 11, "2017-01-02": 6}
        const deleteButton = <div><button  onClick={() => this.props.handleDelete(this.props.symbol)}> Delete</button> <br/></div> 
        return (
            <div className=" column " >
                <span>{this.props.symbol ? this.props.symbol : null }{' '}
                { this.props.mainChart !== 'true' ? deleteButton : null  }
                    </span> 
                <LineChart data={dataToDisplay} name="whh" min={null} max={null} label="Price" />
            </div>
        );
    }
}

export default ChartStock;