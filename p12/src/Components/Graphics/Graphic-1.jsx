import "../../project.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyBarChart = (props) => {
	const {bars} = props;
  const data = [
    { day: bars.sessions[0].day, cal: bars.sessions[0].calories, kg: bars.sessions[0].kilogram },
    { day: bars.sessions[1].day, cal: bars.sessions[1].calories, kg: bars.sessions[1].kilogram },
    { day: bars.sessions[2].day, cal: bars.sessions[2].calories, kg: bars.sessions[2].kilogram },
    { day: bars.sessions[3].day, cal: bars.sessions[3].calories, kg: bars.sessions[3].kilogram },
    { day: bars.sessions[4].day, cal: bars.sessions[4].calories, kg: bars.sessions[4].kilogram },
    { day: bars.sessions[5].day, cal: bars.sessions[5].calories, kg: bars.sessions[5].kilogram },
    { day: bars.sessions[6].day, cal: bars.sessions[6].calories, kg: bars.sessions[6].kilogram },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 0, bottom: 5,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis domain={[0, 400]}/>
        <Tooltip contentStyle={{ backgroundColor: '#E60000', color:'white'}}/>
        <Legend formatter={(value, entry, index) => <span className="text-color-class">{value}</span>} />
        <Bar dataKey="kg" fill="#000000" barSize={10} radius={[10, 10, 0, 0]}/>
        <Bar dataKey="cal" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default MyBarChart;