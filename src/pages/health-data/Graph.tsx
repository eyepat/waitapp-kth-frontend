import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useLanguage } from '../../contexts/LanguageContext';
import dayjs from 'dayjs';

export enum GraphMode {
  BloodPressure,
  Weight,
}

interface BloodPressure {
  date: string;
  systolic: number;
  diastolic: number;
}

interface Weight {
  date: string;
  weight: number;
}

interface GraphProps {
  mode: GraphMode;
  data?: BloodPressure[] | Weight[];
}

const Graph: React.FC<GraphProps> = ({ mode, data }) => {
  const { t } = useLanguage();
  const [sampleData] = useState<any>(() => {
    // Check if mode is BloodPressure or Weight and generate sample data accordingly
    return mode === GraphMode.BloodPressure
      ? [
        { date: dayjs().subtract(6, 'month').subtract(13, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(6, 'month').subtract(5, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(6, 'month').format('MM/DD'), systolic: 130, diastolic: 91 },
        { date: dayjs().subtract(5, 'month').subtract(13, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(5, 'month').subtract(5, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(5, 'month').format('MM/DD'), systolic: 120, diastolic: 89 },
        { date: dayjs().subtract(4, 'month').subtract(13, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(4, 'month').subtract(5, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(4, 'month').format('MM/DD'), systolic: 127, diastolic: 83 },
        { date: dayjs().subtract(3, 'month').subtract(13, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(3, 'month').subtract(5, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(3, 'month').format('MM/DD'), systolic: 150, diastolic: 80 },
        { date: dayjs().subtract(2, 'month').subtract(13, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(2, 'month').subtract(5, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(2, 'month').format('MM/DD'), systolic: 140, diastolic: 94 },
        { date: dayjs().subtract(1, 'month').subtract(13, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(1, 'month').subtract(5, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(1, 'month').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(13, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().subtract(5, 'days').format('MM/DD'), systolic: 135, diastolic: 86 },
        { date: dayjs().format('MM/DD'), systolic: 150, diastolic: 80 }
      ]
      : mode === GraphMode.Weight
        ? [
          { date: dayjs().subtract(6, 'month').format('MM/DD'), weight: 50 },
          { date: dayjs().subtract(5, 'month').format('MM/DD'), weight: 68 },
          { date: dayjs().subtract(4, 'month').format('MM/DD'), weight: 72 },
          { date: dayjs().subtract(3, 'month').format('MM/DD'), weight: 45 },
          { date: dayjs().subtract(2, 'month').format('MM/DD'), weight: 73 },
          { date: dayjs().subtract(1, 'month').format('MM/DD'), weight: 90 },
          { date: dayjs().subtract(5, 'days').format('MM/DD'), weight: 76 },
          { date: dayjs().format('MM/DD'), weight: 76 },
        ]
        : [];
  });

  // Use sample data if no data is provided (TEMPORARY)
  // Else, format date to MM/DD
  if (!data) {
    data = sampleData;
  } else {
    data = data.map((entry: any) => {
      return {
        date: dayjs(entry.date).format('MM/DD'),
        ...entry
      };
    });
  }

  // Generate domain for y-axis (TODO: Implement dynamic domain calculation?)
  const calculateDomain = (): [string | number, string | number] => {
    if (!data) {
      return [0, 'auto'];
    }

    return mode === GraphMode.BloodPressure ? [60, 170] : [30, 100];
  };

  // Generate monthly ticks for x-axis
  const generateTicks = (): string[] => {
    const ticks = [];
    for (let i = 6; i >= 0; i--) {
      ticks.push(dayjs().subtract(i, 'month').format('MM/DD'));
    }
    return ticks;
  };

  // Styling for x-axis ticks
  const CustomTick = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#333" fontSize="0.8em">
          {payload.value}
        </text>
      </g>
    );
  };

  // Will create reference points of displayed data to indicate
  // low / normal / high values in the graph
  const ReferencePoints = () => {
    let text: string;

    switch (mode) {
      case GraphMode.BloodPressure:
        text = `${t("systolic")}\n${t("high")} 140\nNormal 120\n${t("diastolic")}\n${t("high")} 90\nNormal 80`;
        break;
      case GraphMode.Weight:
        text = `${t("over")}\n90 kg\nNormal\n65 kg\nUnder\n50 kg`;
        break;
    }

    const textParts: string[] = text.split("\n");
    const highlightEvery = mode == GraphMode.BloodPressure ? 3 : 2;

    return (
      <svg width="100px" >
        <g>
          {textParts.map((part: string, index: number) => (
            <text
              key={`tspan-${index}`}
              textAnchor="start"
              x={mode === GraphMode.BloodPressure ? 10 : 30}
              y={25 + index * 16}
              style={{
                display: "block",
                fontSize: "0.8em",
                fontWeight: index % highlightEvery === 0 ? '500' : '300',
              }}
            >
              {part}
            </text>
          ))}
        </g>
      </svg>
    );
  };

  // Create lines for every given data key (variable name of plotted data)
  const getLines = (dataKeys: string[]) => {
    return (
      <>
        {dataKeys.map((key) => {
          return (
            <Line
              type="monotone"
              dataKey={key}
              stroke="url(#colorGradient)"
              strokeWidth={3}
              dot={false}
            />
          );
        })}
      </>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%" }}>
      {ReferencePoints()}

      <ResponsiveContainer width="100%" height={130}>
        <LineChart
          data={data ? data : sampleData}
          margin={{ top: 0, right: 40, bottom: 0, left: -50 }}
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
            strokeWidth={6}
            interval="preserveStartEnd"
            tick={CustomTick}
            tickLine={false}
            ticks={generateTicks()}
          />
          <YAxis
            domain={calculateDomain()}
            stroke="#000"
            strokeWidth={6}
            tick={false}
          />
          <CartesianGrid fill="#F6F5F4" horizontal={false} vertical={false} />
          <Tooltip />
          {getLines(mode === GraphMode.BloodPressure ? ["systolic", "diastolic"] : ["weight"])}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
