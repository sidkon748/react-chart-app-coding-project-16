// Task 3 
// Implement Specific Chart Components

// Imports react and ChartComponent files
import React from 'react'
import ChartComponent from './ChartComponent';

// Processes datasets regarding expenses and profits data
const ScatterChart = ({ data }) => {
    const scatterChartData = {
        labels: data.expenses,
        datasets: [
            {
                label: 'Expenses vs. Profits',
                data: data.profits,
                backgroundColor: 'rgba(128, 108, 171, 0.6)',
                borderColor: 'rgbargba(128, 108, 171, 1)',
                borderWidth: 3,
            },
        ]
    }

// Configures financial scatter chart axes
const scatterChartOptions = {
    scales: {
        y: {
            beginAtZero: false,
        },
    },
};

return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions}/> 


};

// Exports ScatterChart file for use in App file
export default ScatterChart;