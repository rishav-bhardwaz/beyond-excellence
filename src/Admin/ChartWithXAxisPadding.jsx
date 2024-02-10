import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartWithXAxisPadding = ({data}) => {
  return (
         <div style={{ background: `linear-gradient(180deg, rgba(70,71,71,1) 0%, rgba(27,27,27,1) 100%)`, padding: '20px', borderRadius: '8px' }}>

    <LineChart width={400} height={220} data={data} margin={{ top: 10, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis stroke="#fff" dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Course" stroke="#fff" />
      </LineChart>
      </div>  )
}

export default ChartWithXAxisPadding