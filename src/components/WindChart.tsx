import { Group } from "@visx/group";
import { Arc } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";

import type { CurrentWeatherData } from "@/hooks/types";

type WindChartProps = {
  data: CurrentWeatherData | null;
};

export const WindChart = ({ data }: WindChartProps) => {
  const width = 400;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 3;

  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const CompassRose = directions.map((dir, i) => {
    const angle = (i * 45 * Math.PI) / 180;
    const x = centerX + Math.sin(angle) * (radius + 30);
    const y = centerY - Math.cos(angle) * (radius + 30);
    return (
      <text
        key={dir}
        x={x}
        y={y}
        textAnchor="middle"
        className="text-gray-600 font-semibold"
      >
        {dir}
      </text>
    );
  });

  if (!data) {
    return (
      <div className="h-[400px] w-full p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        No wind data available
      </div>
    );
  }

  // Convert wind direction to radians
  const windAngle = (data.wind.deg - 180) * (Math.PI / 180);

  const speedPercentage = Math.min((data.wind.speed / 32.7) * 100, 100);

  return (
    <div className="flex flex-col justify-center items-center h-[600px] w-full">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold">Current Wind Conditions</h3>
        <p>Wind Speed: {data.wind.speed.toFixed(1)} m/s</p>
        {data.wind.gust && <p>Wind Gust: {data.wind.gust.toFixed(1)} m/s</p>}
        <p>Wind Direction: {data.wind.deg}°</p>
      </div>

      <svg width={width} height={height}>
        <LinearGradient
          id="speed-gradient"
          from="#48BB78"
          to="#F56565"
          fromOpacity={0.5}
          toOpacity={0.8}
        />

        {/* Compass circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          className="fill-none stroke-gray-200"
          strokeWidth={2}
        />

        {/* Direction indicator */}
        <Group top={centerY} left={centerX}>
          <Arc
            startAngle={windAngle - 0.2}
            endAngle={windAngle + 0.2}
            outerRadius={radius * (0.5 + speedPercentage / 200)}
            innerRadius={0}
            fill="url(#speed-gradient)"
          />
        </Group>

        {/* Compass rose labels */}
        {CompassRose}
      </svg>
    </div>
  );
};
