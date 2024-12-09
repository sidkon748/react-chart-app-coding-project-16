// Task 3 
// Implement Specific Chart Components

// Imports react and ChartComponent files
import React from 'react'
import ChartComponent from './ChartComponent';

// Processes datasets regarding months and profits data
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

// Configures financial line chart axes
const lineChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

return <ChartComponent type="line" data={lineChartData} options={lineChartOptions}/> 

};

// Exports LineChart file for use in App file
export default LineChart