import "../../project.css";
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyCurveChart = (props) => {
	const {SessionsLentgh} = props;
  const data = [
    { Day: SessionsLentgh.sessions[0].day, sessionlength: SessionsLentgh.sessions[0].sessionLength },
    { Day: SessionsLentgh.sessions[1].day, sessionlength: SessionsLentgh.sessions[1].sessionLength },
    { Day: SessionsLentgh.sessions[2].day, sessionlength: SessionsLentgh.sessions[2].sessionLength },
    { Day: SessionsLentgh.sessions[3].day, sessionlength: SessionsLentgh.sessions[3].sessionLength },
    { Day: SessionsLentgh.sessions[4].day, sessionlength: SessionsLentgh.sessions[4].sessionLength },
    { Day: SessionsLentgh.sessions[5].day, sessionlength: SessionsLentgh.sessions[5].sessionLength },
    { Day: SessionsLentgh.sessions[6].day, sessionlength: SessionsLentgh.sessions[6].sessionLength },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
      >
        <XAxis dataKey="Day" />
        <YAxis domain={[0, 60]} />
        <Tooltip contentStyle={{ backgroundColor: '#E60000', color:'white'}}/>
        <Legend formatter={(value, entry, index) => <span className="text-color-class">{value}</span>}/>
        <Line type="monotone" dataKey="sessionlength" stroke="#d0d0d0" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MyCurveChart;