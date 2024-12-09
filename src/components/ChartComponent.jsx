// Task 2 
// Create the Reusable ChartComponent

// Imports react and ChartComponent files
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Has ChartComponent able to use type, data, and options for the code, manages charts used in the program
const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type,
        data,
        options,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

// Exports ChartComponent file for use in App file
export default ChartComponent;