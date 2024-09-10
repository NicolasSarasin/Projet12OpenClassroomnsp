import "../../project.css";
import React from "react";
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';

const data = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
];
const HexagonalChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Mike" dataKey="A" stroke="#8884D8" fill="#8884D8" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="B" stroke="#82CA9D" fill="#82CA9D" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
);
export default HexagonalChart;