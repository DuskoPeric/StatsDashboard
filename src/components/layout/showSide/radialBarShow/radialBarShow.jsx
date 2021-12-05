import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
  Cell,
  PolarAngleAxis
} from "recharts";

const RadialBarShow = ({ data }) => {
  const tooltipStyle = {
    backgroundColor: "#1f232d"
  };
  const numStyle = {
    textTransform: "uppercase",
    color: "#EE4540"
  };
  const labelStyle = {
    opacity: 0
  };
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
        background="true"
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EE4540" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#2D142C" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <Tooltip
          offset={1}
          separator=" "
          itemStyle={numStyle}
          contentStyle={tooltipStyle}
          labelStyle={labelStyle}
          cursor={{ fill: "#ffffff0a", strokeWidth: 2 }}
          formatter={(value, name, props) => [value, ""]}
        />
        <PolarAngleAxis type="number" domain={[0, 6]} tick="" />
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="fou"
          fill="red"
          background={{ fill: "transparent" }}
        >
          {data.map((entry, index) => (
            <Cell stroke="" key={`cell-${index}`} fill="url(#colorUv)" />
          ))}
        </RadialBar>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarShow;
