import HealthData from './pages/health-data/HealthData';
import Home from './pages/home/Home';
import Sprint from './pages/sprint/Sprint';
import { Page } from './types/page';

export const pages: Page[] = [
  {
    to: '/health-data',
    permissionLevel: 0,
    label: 'health-data',
    isMenu: true,
    component: HealthData,
  },
  {
    to: '/',
    permissionLevel: 0,
    label: 'home',
    isMenu: true,
    component: Home,
  },
  {
    to: '/sprint',
    permissionLevel: 0,
    label: 'sprint',
    isMenu: true,
    component: Sprint,
  },
];
