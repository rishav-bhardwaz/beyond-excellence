import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 20 },
  { name: 'Apr', value: 20 },
  { name: 'May', value: 20 },
  { name: 'Jun', value: 20 },

];
const BarCharts = () => {
      const handleBarClick = (data, index) => {
    // Handle the click event, you can perform actions based on the data or index
    console.log('Bar Clicked:', data, index);
  };
  return (
   <div style={{ background: `linear-gradient(180deg, rgba(249,89,73,1) 0%, rgba(255,25,2,1) 100%)`, padding: '20px', borderRadius: '8px' }}>

    <BarChart width={400} height={220} data={data} margin={{ top: 10, right: 5, left: 5, bottom: 5 }}> 
         <CartesianGrid strokeDasharray="3 3"stroke="#444"  />
      <XAxis stroke="#fff"  dataKey="name" />
      <YAxis stroke="#fff"  />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#fff" onClick={handleBarClick}>
        {/* Add any customizations to the Bar here */}
      </Bar>
    </BarChart> 
    </div> )
}

export default BarCharts