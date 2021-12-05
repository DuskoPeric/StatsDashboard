import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const AreaShow = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EE4540" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#2D142C" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="false" />
        <YAxis tick={{ fill: "#ee4540" }} padding={{ top: 10 }} />
        <Tooltip />
        <Area
          type="linear"
          dataKey="min"
          stroke="#C72C41"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaShow;
