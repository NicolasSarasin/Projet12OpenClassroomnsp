import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 349, pv: 4300, amt: 2100 },
];

const CustomOverlay = ({ viewBox }) => {
  const { x, y, width, height } = viewBox; // Extract chart dimensions from viewBox
  return (
    <Rectangle
      x={x}
      y={y}
      width={width / 2} // Cover half the width
      height={height} // Cover the full height
      fill="red"
      fillOpacity={0.3} // Semi-transparent
    />
  );
};

const Example = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      
      {/* Add the custom overlay */}
      <CustomOverlay viewBox={{ x: 0, y: 0, width: 600, height: 400 }} />
      
      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default Example;
