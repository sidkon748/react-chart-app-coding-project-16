import React from 'react'
import ChartComponent from './ChartComponent';

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


const scatterChartOptions = {
    scales: {
        y: {
            beginAtZero: false,
        },
    },
};

return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions}/> 


};

export default ScatterChart;