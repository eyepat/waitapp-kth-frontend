import GeneralQuestions from './pages/general-questions/GeneralQuestions';
import HealthData from './pages/health-data/HealthData';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Sprint from './pages/sprint/Sprint';
import Register from './pages/register/Register';
import { Page } from './types/page';
import { HealthDataIcon, HomeIcon, SprintIcon } from './utils/Icons';
import Settings from './pages/settings/Settings';
import KnowledgeBank from './pages/knowledge-bank/KnowledgeBank';
import BloodPressureTest from './pages/tests/BloodPressureTest';
import WeightTest from './pages/tests/WeightTest';

export const pages: Page[] = [
  {
    to: '/health-data',
    permissionLevel: 1,
    label: 'health-data',
    icon: HealthDataIcon,
    isMenu: true,
    component: HealthData,
    showHeader: true,
    showBottomNav: true,
  },
  {
    to: '/',
    permissionLevel: 1,
    label: 'home',
    icon: HomeIcon,
    isMenu: true,
    component: Home,
    showExpandedHeader: true,
    showBottomNav: true,
  },
  {
    to: '/sprint',
    permissionLevel: 1,
    label: 'sprint',
    icon: SprintIcon,
    isMenu: true,
    component: Sprint,
    showExpandedHeader: true,
    showBottomNav: true,
  },
  {
    to: '/login',
    permissionLevel: 0,
    label: 'login',
    isMenu: false,
    component: Login,
  },
  {
    to: '/register',
    permissionLevel: 0,
    label: 'register',
    isMenu: false,
    component: Register,
  },
  {
    to: '/general-questions',
    permissionLevel: 0,
    label: 'general-questions',
    isMenu: false,
    component: GeneralQuestions,
    showHeader: true,
  },
  {
    to: '/settings',
    permissionLevel: 1,
    label: 'settings',
    isMenu: false,
    component: Settings,
    showHeader: true,
    showBottomNav: true,
  },
  {
    to: '/knowledge-bank',
    permissionLevel: 1,
    label: 'knowledge-bank',
    isMenu: false,
    component: KnowledgeBank,
    showHeader: true,
    showBottomNav: true,
  },
  {
    to: '/blood-pressure-test',
    permissionLevel: 1,
    label: 'blood-pressure-test',
    component: BloodPressureTest,
    showHeader: true,
    isMenu: false,
  },
  {
    to: '/weight-test',
    permissionLevel: 1,
    label: 'weight-test',
    component: WeightTest,
    showHeader: true,
    isMenu: false,
  },
];
