import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";
import { calculateRadarData } from "../../../../utils";
import "./radarShow.scss";
const RadarShow = ({ games }) => {
  const data = calculateRadarData(games);
  return (
    <ResponsiveContainer width="100%" height={220} className="radar-label">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#ffffff59" />
        <PolarAngleAxis dataKey="name"></PolarAngleAxis>

        <Radar
          name="Mike"
          dataKey="value"
          stroke="#C72C41"
          fill="#EE4540"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarShow;
