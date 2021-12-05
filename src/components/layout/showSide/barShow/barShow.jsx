import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const BarShow = ({ data }) => {
  const tooltipStyle = {
    backgroundColor: "#1f232d"
  };
  const labelStyle = {
    textTransform: "uppercase",
    color: "#EE4540"
  };
  return (
    <ResponsiveContainer width="100%" height={200} barCategoryGap="50%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EE4540" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#2D142C" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <XAxis dataKey="false" />
        <YAxis tick={{ fill: "#ee4540" }} padding={{ top: 10 }} />
        <Tooltip
          offset={1}
          separator=" "
          itemStyle={labelStyle}
          contentStyle={tooltipStyle}
          cursor={{ fill: "#ffffff0a", strokeWidth: 2 }}
        />

        <Bar dataKey="pts" fill="url(#colorUv)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarShow;
