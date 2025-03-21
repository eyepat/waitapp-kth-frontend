import React, { useEffect, useState } from 'react';
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
import {
  useBloodPressureContext,
  useWaistSizeContext,
  useWeightContext,
} from '../../contexts/MetricsContext';
import {
  BloodPressureDTO,
  WaistSizeDTO,
  WeightDTO,
} from '../../api/BaseClient';

export enum GraphMode {
  Systolic,
  Diastolic,
  Weight,
  WaistSize,
}

interface GraphProps {
  mode: GraphMode;
}

type IGenericMetric = BloodPressureDTO | WeightDTO | WaistSizeDTO;

interface ExpandedBloodpressureDTO extends BloodPressureDTO {
  systolic: number;
  diastolic: number;
}

const Graph: React.FC<GraphProps> = ({ mode }) => {
  const { t } = useLanguage();
  const { getResources: getBPs, resources: bpResources } =
    useBloodPressureContext();
  const { getResources: getWs, resources: wResources } = useWeightContext();
  const { getResources: getWSs, resources: wsResouces } = useWaistSizeContext();
  const [data, setData] = useState<IGenericMetric[] | undefined>();
  const key =
    mode === GraphMode.Weight || mode === GraphMode.WaistSize
      ? 'value'
      : mode === GraphMode.Systolic
        ? 'systolic'
        : 'diastolic';

  useEffect(() => {
    if (mode === GraphMode.Weight) {
      getWs();
    } else if (mode === GraphMode.WaistSize) {
      getWSs();
    } else {
      getBPs();
    }
  }, []);

  useEffect(() => {
    setData(
      (mode === GraphMode.Weight
        ? wResources
        : mode === GraphMode.WaistSize
          ? wsResouces
          : bpResources
      )
        ?.filter((entry: IGenericMetric) =>
          dayjs(entry.timestamp).isAfter(dayjs().subtract(7, 'month'))
        )
        .map((entry: IGenericMetric) => ({
          ...entry,
          date: dayjs(entry.timestamp).format('MM/DD'),
        }))
    );
  }, [bpResources, wResources, wsResouces]);

  // Extracts systolic and diastolic values from blood pressure data
  if (mode === GraphMode.Systolic || mode === GraphMode.Diastolic) {
    data?.map((entry: IGenericMetric) => {
      // @ts-ignore if mode is bloodpressure this will be a string
      const sys_diast = entry.value?.split('/');
      const systolic = Number(sys_diast?.[0] || -1);
      const diastolic = Number(sys_diast?.[1] || -1);
      (entry as ExpandedBloodpressureDTO).systolic = systolic;
      (entry as ExpandedBloodpressureDTO).diastolic = diastolic;
    });
  }

  // Filters data points older than 7 months and formats date

  // Generate domain for y-axis (STATIC FOR NOW!)
  const calculateDomain = (): [string | number, string | number] => {
    if (!data) {
      return [0, 'auto'];
    }

    switch (mode) {
      case GraphMode.Systolic:
        return [90, 160];
      case GraphMode.Diastolic:
        return [60, 110];
      case GraphMode.Weight:
        return [40, 120];
      case GraphMode.WaistSize:
        return [40, 150];
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
        // ${t('systolic')}\n\n
        text = `${t('high')}\n140 mmHg\nNormal\n120 mmHg`;
        break;
      case GraphMode.Diastolic:
        // ${t('diastolic')}\n\n
        text = `${t('high')}\n90 mmHg\nNormal\n80 mmHg`;
        break;
      case GraphMode.Weight:
        text = `${t('over')}\n90 kg\nNormal\n65 kg\nUnder\n50 kg`;
        break;
      case GraphMode.WaistSize:
        text = `${t('over')}\n120 cm\nNormal\n90 cm\nUnder\n60 cm`;
        break;
    }

    const textParts: string[] = text.split('\n');
    const highlightEvery = 2;

    const startingY =
      mode === GraphMode.Weight || GraphMode.WaistSize ? 25 : 40;

    return (
      <svg width="100px">
        <g>
          {textParts.map((part: string, index: number) => (
            <text
              key={`tspan-${part}`}
              textAnchor="start"
              x={mode === GraphMode.Weight || GraphMode.WaistSize ? 30 : 20}
              y={startingY + index * 16}
              style={{
                display: 'block',
                // Make title for systolic/diastolic graphs bigger
                fontSize: '0.8em',
                // Hightlight Over/Normal/Under and Title
                fontWeight:
                  (mode === GraphMode.Systolic ||
                    mode === GraphMode.Diastolic) &&
                  index === 0
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
            allowDataOverflow={false}
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
