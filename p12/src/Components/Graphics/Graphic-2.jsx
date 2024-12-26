import "../../project.css";
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from "recharts";
const CustomBackground = ({ splitX, height }) => {
  return (
    <>
      {/* Left part */}
      <Rectangle
        x={0}
        y={0}
        width={splitX}
        height={height}
        fill="rgba(255, 0, 0, 1)" // Red with transparency
      />
    </>
  );
};

const MyCurveChart = (props) => {
  const { SessionsLength } = props;
  const [splitX, setSplitX] = useState(0);

  const handleMouseMove = (state) => {
    if (state.isTooltipActive) {
      setSplitX(state.activeCoordinate.x);
    }
  };
  
  return (
    <ResponsiveContainer width="100%" height={247}>
      <LineChart
        data={SessionsLength.sessions}
        margin={{ top: 10, right: 0, left: -60, bottom: 25 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSplitX(0)}
        width="100%"
        height={247}
      >
        {/*console.log(handleMouseMove)*/}
        <defs>
          <linearGradient id="d0d0d0ToWhite" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" tick={{fill:"#d0d0d0"}} />
        <YAxis domain={[0, 60]} display={"none"} />
        <Tooltip contentStyle={{ backgroundColor: "white", color: "black" }} />
        <CustomBackground splitX={splitX} height={247} />
        {/* Ligne de la courbe */}
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#d0d0d0ToWhite)"
          strokeWidth={2}
          activeDot={{ r: 4 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MyCurveChart;