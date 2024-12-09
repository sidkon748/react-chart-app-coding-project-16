// Task 3 
// Implement Specific Chart Components

// Imports react and ChartComponent files
import React from 'react'
import ChartComponent from './ChartComponent';

// Processes datasets regarding months and sales data
const BarChart = ({ data }) => {
    const barChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.sales,
                backgroundColor: 'rgba(108, 117, 167, 0.5)',
                borderColor: 'rgba(108, 117, 167, 1)',
                borderWidth: 2,
            },
        ]
    }

// Configures financial bar chart axes
const barChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

return <ChartComponent type="bar" data={barChartData} options={barChartOptions}/> 


};

// Exports BarChart file for use in App file
export default BarChart