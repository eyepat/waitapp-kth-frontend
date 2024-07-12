import { FC } from 'react';
import { HeaderOpts } from './headerOpts';

export type Page = {
  to: string;
  path?: string;
  permissionLevel: number;
  label?: string;
  icon?: FC;
  isMenu: boolean;
  component: FC | null;
  showBottomNav?: boolean;
  header?: HeaderOpts;
  tabs?: boolean;
  defaultTab?: string;
};
