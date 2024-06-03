import HealthData from './pages/health-data/HealthData';
import Home from './pages/home/Home';
import Sprint from './pages/sprint/Sprint';
import { Page } from './types/page';
import { HomeIcon, SprintIcon, Svg } from './utils/Icons';
import healthdataicon from './assets/navigation/health-data.svg';

export const pages: Page[] = [
  {
    to: '/health-data',
    permissionLevel: 0,
    label: 'Hälsodata',
    icon: () => Svg({ src: healthdataicon }), // Health data icon is an image and not svg :(
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
