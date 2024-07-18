import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

export enum GraphMode {
  BloodPressure,
  Weight,
}

interface DataPoint {
  date: string;
  value: number;
}

// Define the props type
interface GraphProps {
  mode?: GraphMode;
  data?: DataPoint[];
}

const Graph: React.FC<GraphProps> = ({ mode, data }) => {
  const [sampleData, setSampleData] = useState([
    { date: dayjs().subtract(6, 'month').format('MM/DD'), value: 130 / 91 },
    { date: dayjs().subtract(5, 'month').format('MM/DD'), value: 120 / 89 },
    { date: dayjs().subtract(4, 'month').format('MM/DD'), value: 127 / 83 },
    { date: dayjs().subtract(3, 'month').format('MM/DD'), value: 150 / 80 },
    { date: dayjs().subtract(2, 'month').format('MM/DD'), value: 140 / 94 },
    { date: dayjs().subtract(1, 'month').format('MM/DD'), value: 135 / 86 },
    { date: dayjs().format('MM/DD'), value: 160 / 70 },
  ]);

  // Function to calculate the domain based on the mode and the data (Y-axis)
  const calculateDomain = (): [string | number, string | number] => {
    if (!data) {
      return [0, 'auto'];
    }

    switch (mode) {
      case GraphMode.BloodPressure:
        return [Math.min(...data.map((point) => point.value)) + 0.2, Math.max(...data.map((point) => point.value)) - 0.2];
      case GraphMode.Weight:
        return [Math.min(...data.map((point) => point.value)) - 10, Math.max(...data.map((point) => point.value)) + 10];
      default:
        return [0, 'auto'];
    }
  };

  // Generate ticks for the past seven months (X-axis)
  const generateTicks = (): string[] => {
    const ticks = [];
    const currentDay = dayjs().date();
    for (let i = 6; i >= 0; i--) {
      ticks.push(dayjs().subtract(i, 'month').date(currentDay).format('MM/DD')); // Change 1 to the desired day
    }
    return ticks;
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data ? data : sampleData} margin={{ top: 10, right: 40, bottom: 10, left: -40 }} >
        <XAxis
          dataKey="date"
          stroke="#000" // Color of the X-axis line
          strokeWidth={4} // Thickness of the X-axis line 
          tickSize={5} // Width of the ticks
          interval="preserveStartEnd"
          ticks={generateTicks()} // Custom ticks
          tickFormatter={(tick) => dayjs(tick).format('MM/DD')} // Format the ticks as MM/DD
        />
        <YAxis
          tick={false}
          domain={calculateDomain()}
          stroke='#000'
          strokeWidth={4}
        />
        <CartesianGrid fill='#F6F5F4' horizontal={false} vertical={false} />
        <Tooltip />
        <Line type="linear" dataKey="value" stroke="#FBCEB1" strokeWidth={3} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;