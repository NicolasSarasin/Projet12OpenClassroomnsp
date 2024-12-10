import "../../project.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyBarChart = (props) => {
	const {bars} = props;
  return (
    <ResponsiveContainer width="100%" height={300} style={{ display: "flex", flexDirection: "column"}}>
      <Legend wrapperStyle={{display: "flex",justifyContent: "right", marginBottom: "20px"}} iconType="circle" className="LegendGraphics1" formatter={(value, entry, index) => <span className="text-color-class">{value}</span>} 
      payload={[
        { value: "Poids (kg)", type: "icone", color: "#000000" },
        { value: "Calories brulées (cal)", type: "icone", color: "#E60000" },
      ]}/>
      <BarChart
        data={bars.sessions}
        margin={{
          top: 0, right: 10, left: 40, bottom: 5,
        }}
      > 
        <XAxis dataKey="index"/>
        <YAxis domain={[0, 600]} orientation="right"/>
        <Tooltip contentStyle={{ backgroundColor: '#E60000', color:'white'}}/>
        <Bar dataKey="kilogram" fill="#000000" barSize={10} radius={[10, 10, 0, 0]}/>
        <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default MyBarChart;

