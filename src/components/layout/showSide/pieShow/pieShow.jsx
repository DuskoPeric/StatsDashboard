import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./pieShow.scss";
import { getPercentage, getCustomPercentage } from "../../../../utils";

const PieShow = ({ games, valueOne, valueTwo, custom }) => {
  const pr = custom
    ? getCustomPercentage(games)
    : getPercentage(games, valueOne, valueTwo);
  const x = pr / 10;
  const y = 10 - x;
  const data = [{ name: "Group A", value: x }, { name: "Group B", value: y }];
  const COLORS = ["#EE4540", "#ffffff26", "#801336"];
  const renderCustomizedLabel = () => {
    return (
      <text
        className="percentage"
        x="50%"
        y="55%"
        fill="#EE4540"
        textAnchor="middle"
      >
        {`${pr}%`}
      </text>
    );
  };
  return (
    <ResponsiveContainer className="raised" width="100%" height="100%">
      <PieChart width="100%" height="100%">
        <Pie
          data={data}
          labelLine={false}
          outerRadius="80%"
          innerRadius="60%"
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell
              stroke=""
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieShow;
