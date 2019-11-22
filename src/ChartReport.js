import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts'


const SimpleBarChart = ({
    data, current
  }) => {
  let chartData = [];
  data[0].cities.map((item) => chartData.push({name: item.id, City_Population: item.population }));
  return (
    <BarChart width={600} height={300} data={chartData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
      <Bar dataKey="City_Population" fill="blue">
        {
          chartData.map((entry, index) => {
            const color = entry.name === current ? 'red' : 'blue';
            return <Cell fill={color} />;
          })
        }
      </Bar>
    </BarChart>
  )
};


export default SimpleBarChart


