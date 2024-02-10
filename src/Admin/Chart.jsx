import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({data}) => {
  return (
     <div style={{ background: `linear-gradient(180deg, rgba(95,146,236,1) 0%, rgba(0,100,228,1) 100%)`, padding: '20px', borderRadius: '8px' }}>
    <LineChart width={400} height={220} data={data} margin={{ top: 10, right: 5, left: 5, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="name" stroke="#fff" />
      <YAxis stroke="#fff" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Amount"stroke="#7cb5ec" />
    </LineChart></div>
  )
}

export default Chart