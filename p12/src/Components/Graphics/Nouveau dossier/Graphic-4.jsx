import "../../project.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const MyRadialBarChart = (props) => {
  const {score} = props;
  const data = [
    { name: (score * 100)+" %", todayScore: score * 100 , fill: '#E60000'},
  ];
  return (
    <ResponsiveContainer width="100%" height={247}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="100%"
        startAngle={180}
        endAngle={-180}
        barSize={10}
        data={data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
        className="FillScore"
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          minAngle={0}
          clockWise
          dataKey="todayScore"
          cornerRadius={10}
        />
        <Legend iconSize={0} layout="vertical" verticalAlign="middle" formatter={(value, entry, index) => <span className="text-color-class1">{value}<p className="p-text-color-class1">de votre objectif</p></span>} />
        <Tooltip contentStyle={{ backgroundColor: '#E60000', color:'white'}}/>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default MyRadialBarChart;