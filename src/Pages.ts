import HealthData from './pages/health-data/HealthData';
import Home from './pages/home/Home';
import Sprint from './pages/sprint/Sprint';
import { Page } from './types/page';
import { HealthDataIcon, HomeIcon, SprintIcon } from './utils/Icons';

export const pages: Page[] = [
  {
    to: '/health-data',
    permissionLevel: 0,
    label: 'Hälsodata',
    icon: HealthDataIcon,
    isMenu: true,
    component: HealthData,
  },
  {
    to: '/',
    permissionLevel: 0,
    label: 'Hem',
    icon: HomeIcon,
    isMenu: true,
    component: Home,
  },
  {
    to: '/sprint',
    permissionLevel: 0,
    label: 'Sprint',
    icon: SprintIcon,
    isMenu: true,
    component: Sprint,
  },
];
