import { FC } from 'react';

export type Page = {
  to: string;
  path?: string;
  permissionLevel: number;
  label?: string;
  icon?: FC;
  isMenu: boolean;
  component: FC | null;
};
