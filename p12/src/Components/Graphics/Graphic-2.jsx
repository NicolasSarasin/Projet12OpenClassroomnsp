import "../../project.css";
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from "recharts";

const MyCurveChart = (props) => {
  const { SessionsLength } = props;
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseMove = (e) => {
    if (e && e.activeTooltipIndex !== undefined) {
      setHoverIndex(e.activeTooltipIndex);
    }
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <ResponsiveContainer width="100%" height={247}>
      <LineChart
        data={SessionsLength.sessions}
        margin={{ top: 10, right: 0, left: -60, bottom: 25 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dégradé pour la ligne */}
        <defs>
          <linearGradient id="d0d0d0ToWhite" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>

        <XAxis dataKey="day" />
        <YAxis domain={[0, 60]} display={"none"} />
        <Tooltip contentStyle={{ backgroundColor: "white", color: "black" }} />

        {/* Rectangle dynamique à partir du point survolé */}
        {hoverIndex !== null && (
          <Rectangle
            x={`${(hoverIndex / SessionsLength.sessions.length) * 100}%`}
            y="0"
            width={`${((SessionsLength.sessions.length - hoverIndex) / SessionsLength.sessions.length) * 100}%`}
            height="100%"
            fill="rgba(24, 0, 0, 0.9)" // Couleur de fond semi-transparente
          />
        )}

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