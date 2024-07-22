import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import dayjs from 'dayjs';

export enum GraphMode {
  BloodPressure,
  Weight,
}

interface DataPoint {
  date: string;
  value: number;
}

interface GraphProps {
  mode?: GraphMode;
  data?: DataPoint[];
}

const Graph: React.FC<GraphProps> = ({ mode, data }) => {
  const [sampleData] = useState([
    { date: dayjs().subtract(6, 'month').format('MM/DD'), value: 130 / 91 },
    { date: dayjs().subtract(5, 'month').format('MM/DD'), value: 120 / 89 },
    { date: dayjs().subtract(4, 'month').format('MM/DD'), value: 127 / 83 },
    { date: dayjs().subtract(3, 'month').format('MM/DD'), value: 150 / 80 },
    { date: dayjs().subtract(2, 'month').format('MM/DD'), value: 140 / 94 },
    { date: dayjs().subtract(1, 'month').format('MM/DD'), value: 135 / 86 },
    { date: dayjs().format('MM/DD'), value: 160 / 70 },
  ]);

  const calculateDomain = (): [string | number, string | number] => {
    if (!data) {
      return [0, 'auto'];
    }

    switch (mode) {
      case GraphMode.BloodPressure:
        return [
          Math.min(...data.map((point) => point.value)) + 0.2,
          Math.max(...data.map((point) => point.value)) - 0.2,
        ];
      case GraphMode.Weight:
        return [
          Math.min(...data.map((point) => point.value)) - 10,
          Math.max(...data.map((point) => point.value)) + 10,
        ];
      default:
        return [0, 'auto'];
    }
  };

  const generateTicks = (): string[] => {
    const ticks = [];
    const currentDay = dayjs().date();
    for (let i = 6; i >= 0; i--) {
      ticks.push(dayjs().subtract(i, 'month').date(currentDay).format('MM/DD'));
    }
    return ticks;
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data ? data : sampleData}
        margin={{ top: 10, right: 40, bottom: 10, left: -40 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsla(0, 100%, 50%, 1)" />
            <stop offset="33%" stopColor="hsla(47, 77%, 68%, 1)" />
            <stop offset="66%" stopColor="hsla(101, 77%, 68%, 1)" />
            <stop offset="100%" stopColor="hsla(50, 100%, 50%, 1)" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="date"
          stroke="#000"
          strokeWidth={4}
          tickSize={5}
          interval="preserveStartEnd"
          ticks={generateTicks()}
          tickFormatter={(tick) => dayjs(tick).format('MM/DD')}
        />
        <YAxis
          tick={false}
          domain={calculateDomain()}
          stroke="#000"
          strokeWidth={4}
        />
        <CartesianGrid fill="#F6F5F4" horizontal={false} vertical={false} />
        <Tooltip />
        <Line
          type="linear"
          dataKey="value"
          stroke="url(#colorGradient)"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
