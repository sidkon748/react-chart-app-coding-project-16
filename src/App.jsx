// Task 4 
// Fetch Data for Charts
import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {

  const [chartData, setChartData] = useState(null);

  useEffect(() => {

    fetch('/financial_data.json') 
      .then((response) => response.json())
      .then((data) => setChartData(data)); 

  }, []);

// Task 5 
// Render Charts in the App

return (
  <div>
    <h1>Dynamic Financial Data Chart Dashboard </h1>
    <BarChart data={chartData} />
    <LineChart data={chartData} />
    <ScatterChart data={chartData} />
    <BubbleChart data={chartData} />
  </div>
);
};

export default App;