import { Gender } from '../api/BaseClient';

export function calcTargetWeight(
  firstWeight: number | undefined,
  height: number | undefined
): number | undefined {
  if (!firstWeight || !height) return undefined;
  const target_weight = (27 * height * height) / 10000;
  if (target_weight < firstWeight * 0.9) return Math.round(firstWeight * 0.9);
  return Math.round(target_weight);
}

export function calcTargetWaist(
  gender: Gender | undefined
): number | undefined {
  if (!gender) return undefined;
  if (gender == 'MALE') return 102;
  return 88;
}

export function calcTargetBloodPressure(): string {
  return '130/85';
}
