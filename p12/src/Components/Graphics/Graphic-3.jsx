import "../../project.css";
import React from "react";
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';

const HexagonalChart = (props) => {
	const {RadarGrafics} = props;
  const data = [
    {
      subject: RadarGrafics.data[0].kind,
      A: RadarGrafics.data[0].value,
      fullMark: RadarGrafics.data[0].value,
    },
    {
      subject: RadarGrafics.data[1].kind,
      A: RadarGrafics.data[1].value,
      fullMark: RadarGrafics.data[1].value,
    },
    {
      subject: RadarGrafics.data[2].kind,
      A: RadarGrafics.data[2].value,
      fullMark: RadarGrafics.data[2].value,
    },
    {
      subject: RadarGrafics.data[3].kind,
      A: RadarGrafics.data[3].value,
      fullMark: RadarGrafics.data[3].value,
    },
    {
      subject: RadarGrafics.data[4].kind,
      A: RadarGrafics.data[4].value,
      fullMark: RadarGrafics.data[4].value,
    },
    {
      subject: RadarGrafics.data[5].kind,
      A: RadarGrafics.data[5].value,
      fullMark: RadarGrafics.data[5].value,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject"/>
        <PolarRadiusAxis angle={30} domain={[0, "fullMark"]} />
        <Radar name="Mike" dataKey="A" stroke="#E60000" fill="#E60000" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
};
export default HexagonalChart;