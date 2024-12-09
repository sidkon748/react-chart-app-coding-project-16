// Task 3 
// Implement Specific Chart Components

// Imports react and ChartComponent files
import React from 'react'
import ChartComponent from './ChartComponent';

// Processes datasets regarding expense, profit, and sales data
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

    // Configures financial bubble chart axes
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

// Exports BubbleChart file for use in App file
export default BubbleChart;
