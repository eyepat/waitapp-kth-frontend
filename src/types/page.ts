import { FC } from 'react';
import { HeaderOpts } from './headerOpts';

export type Page = {
  to: string | string[];
  path?: string;
  permissionLevel: number;
  label?: string;
  icon?: FC;
  isMenu: boolean;
  component: FC | null;
  showBottomNav?: boolean;
  header?: HeaderOpts;
  // Will create a path-variable ":tab" in the route, can be used with ´const { tab } = useParams()´
  tabs?: boolean;
  // Used in the Navigation bar to set the default tab
  defaultTab?: string;
};
