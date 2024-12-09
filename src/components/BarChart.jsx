// Task 3 
// Implement Specific Chart Components

import React from 'react'
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
    const barChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.sales,
                backgroundColor: '(108, 117, 167, 0.5)',
                borderColor: 'rgba(108, 117, 167, 1)',
                borderWidth: 2,
            },
        ]
    }


const barChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

return <ChartComponent type="bar" data={barChartData} options={barChartOptions}/> 


};

export default BarChart