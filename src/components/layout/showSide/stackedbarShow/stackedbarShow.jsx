import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./stackedbarShow.scss";

const StackedbarShow = ({ data }) => {
  const tooltipStyle = {
    backgroundColor: "#1f232d"
  };
  const labelStyle = {
    textTransform: "uppercase",
    display: "inline"
  };
  const names = ["2PT", "3PT", "FT"];
  const changeLabel = i => {
    return names[i];
  };
  return (
    <ResponsiveContainer width="100%" height={200} className="bar-c">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <XAxis dataKey="false" />
        <YAxis tick={{ fill: "#ee4540" }} />
        <Tooltip
          offset={1}
          separator=" "
          itemStyle={labelStyle}
          contentStyle={tooltipStyle}
          cursor={{ fill: "#ffffff0a", strokeWidth: 2 }}
          formatter={(value, name, props) => [value, ""]}
        />
        <Legend
          formatter={(value, entry, index) => {
            return changeLabel(index);
          }}
        />
        <Bar dataKey="fps" stackId="a" fill="#ee4540" />
        <Bar dataKey="tps" stackId="a" fill="#C72C41" />
        <Bar dataKey="fts" stackId="a" fill="#801336" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedbarShow;
