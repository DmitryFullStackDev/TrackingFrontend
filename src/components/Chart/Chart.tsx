import React, { useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { barColors } from './barColors'

export default function Chart({ data }) {
  const [deactivateBar, setDeactivateBar] = useState<any[]>([])

  const handleClick = e => {
    if (e.inactive) {
      setDeactivateBar(prev => prev.filter(el => el !== e.dataKey))
    } else {
      setDeactivateBar(prev => [...prev, e.dataKey])
    }
  }

  const legendData = Object.keys(data[0]).filter(item => item !== 'name')

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Legend onClick={handleClick} />

        {legendData.map((item, index) => (
          <Bar
            key={index}
            hide={deactivateBar.find(el => el === item)}
            dataKey={item}
            fill={barColors[index]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}
