import React from 'react'
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const lineChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Profits',
                data: data.profits,
                backgroundColor: 'rgba(75, 192, 192, .2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
        ]
    }


const lineChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

return <ChartComponent type="line" data={lineChartData} options={lineChartOptions}/> 


};

export default LineChart