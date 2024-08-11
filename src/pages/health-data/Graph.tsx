import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useLanguage } from '../../contexts/LanguageContext';
import dayjs from 'dayjs';
import { useMetrics } from '../../contexts/MetricsContext';

export enum GraphMode {
  Systolic,
  Diastolic,
  Weight,
}

interface GraphProps {
  mode: GraphMode;
}

const Graph: React.FC<GraphProps> = ({ mode }) => {
  const { t } = useLanguage();
  const { bloodPressure, weight } = useMetrics();
  let data: Metric[] | undefined;
  const key =
    mode === GraphMode.Weight
      ? 'value'
      : mode === GraphMode.Systolic
        ? 'systolic'
        : 'diastolic';

  data = mode === GraphMode.Weight ? weight : bloodPressure;

  // Extracts systolic and diastolic values from blood pressure data
  if (mode !== GraphMode.Weight) {
    data?.map((entry: Metric) => {
      const sys_diast = entry.value.split('/');
      const systolic = Number(sys_diast[0]);
      const diastolic = Number(sys_diast[1]);
      (entry as BloodPressure).systolic = systolic;
      (entry as BloodPressure).diastolic = diastolic;
    });
  }

  // Filters data points older than 7 months and formats date
  data = data
    ? data
        .filter((entry: Metric) =>
          dayjs(entry.timeStamp).isAfter(dayjs().subtract(7, 'month'))
        )
        .map((entry: Metric) => {
          return {
            ...entry,
            date: dayjs(entry.timeStamp).format('MM/DD'),
          };
        })
    : [];

  // Generate domain for y-axis (STATIC FOR NOW!)
  const calculateDomain = (): [string | number, string | number] => {
    if (!data) {
      return [0, 'auto'];
    }

    switch (mode) {
      case GraphMode.Systolic:
        const systolicValues = data.map(
          (entry: Metric) => (entry as BloodPressure).systolic
        );
        return [Math.min(...systolicValues), Math.max(...systolicValues)];
      case GraphMode.Diastolic:
        const diastolicValues = data.map(
          (entry: Metric) => (entry as BloodPressure).diastolic
        );
        return [Math.min(...diastolicValues), Math.max(...diastolicValues)];
      case GraphMode.Weight:
        const weightValues = data.map((entry: Metric) => entry.value);
        return [Math.min(...weightValues), Math.max(...weightValues)];
    }
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
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#333"
          fontSize="0.8em"
        >
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
      case GraphMode.Systolic:
        text = `${t('systolic')}\n\n${t('high')}\n140 mmHg\nNormal\n120 mmHg`;
        break;
      case GraphMode.Diastolic:
        text = `${t('diastolic')}\n\n${t('high')}\n90 mmHg\nNormal\n80 mmHg`;
        break;
      case GraphMode.Weight:
        text = `${t('over')}\n90 kg\nNormal\n65 kg\nUnder\n50 kg`;
        break;
    }

    const textParts: string[] = text.split('\n');
    const highlightEvery = 2;

    return (
      <svg width="100px">
        <g>
          {textParts.map((part: string, index: number) => (
            <text
              key={`tspan-${part}`}
              textAnchor="start"
              x={mode === GraphMode.Weight ? 30 : index === 0 ? 10 : 20}
              y={25 + index * 16}
              style={{
                display: 'block',
                // Make title for systolic/diastolic graphs bigger
                fontSize: '0.8em',
                // Hightlight Over/Normal/Under and Title
                fontWeight:
                  mode !== GraphMode.Weight && index === 0
                    ? '700'
                    : index % highlightEvery === 0
                      ? '500'
                      : '300',
              }}
            >
              {part}
            </text>
          ))}
        </g>
      </svg>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
      }}
    >
      {ReferencePoints()}

      <ResponsiveContainer width="100%" height={130}>
        <LineChart
          data={data}
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
          <Line
            key={'plotted-line-' + key}
            type="monotone"
            dataKey={key}
            stroke="url(#colorGradient)"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
