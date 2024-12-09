import React from 'react'
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const bubbleChartData= {
        labels: data.expenses,
        datasets: [
            {
                label: 'Sales, Profits, and Expenses',
                data: data.expenses.map((expense, index) => ({
                    x: expense,
                    y: data.profits[index],
                    r: data.sales[index]/10
            })),
                backgroundColor: 'rgba(85, 172, 124, 0.8)',
                borderColor: 'rgba(85, 172, 124, 0.5)',
                borderWidth: 3,
            },
        ]
    }

    const bubbleChartOptions = {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      };
    
    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions}/> 
    


}

export default BubbleChart;
