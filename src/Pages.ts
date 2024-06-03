import HealthData from './pages/health-data/HealthData';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Sprint from './pages/sprint/Sprint';
import { Page } from './types/page';
import { HealthDataIcon, HomeIcon, SprintIcon } from './utils/Icons';

export const pages: Page[] = [
  {
    to: '/health-data',
    permissionLevel: 0,
    label: 'health-data',
    icon: HealthDataIcon,
    isMenu: true,
    component: HealthData,
    showHeader: true,
    showBottomNav: true,
  },
  {
    to: '/',
    permissionLevel: 0,
    label: 'home',
    icon: HomeIcon,
    isMenu: true,
    component: Home,
    showHeader: true,
    showBottomNav: true,
  },
  {
    to: '/sprint',
    permissionLevel: 0,
    label: 'sprint',
    icon: SprintIcon,
    isMenu: true,
    component: Sprint,
    showHeader: true,
    showBottomNav: true,
  },
  {
    to: '/login',
    permissionLevel: 0,
    label: 'login',
    isMenu: false,
    component: Login,
  },
];
