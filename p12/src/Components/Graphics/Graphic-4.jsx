import "../../project.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const MyRadialBarChart = (props) => {
  const {score} = props;
  const data = [
    { name: (score * 100) + " % de votre objectif", todayScore: score * 100 , fill: '#E60000'},
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="100%"
        startAngle={135}
        endAngle={-225}
        barSize={10}
        data={data}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          minAngle={0}
          background
          clockWise
          dataKey="todayScore"
          cornerRadius={10}
        />
        <Legend iconSize={0} layout="vertical" verticalAlign="middle" formatter={(value, entry, index) => <span className="text-color-class1">{value}</span>} />
        <Tooltip contentStyle={{ backgroundColor: '#E60000', color:'white'}}/>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default MyRadialBarChart;