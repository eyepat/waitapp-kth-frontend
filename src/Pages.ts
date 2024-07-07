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
import SprintChoice from './pages/sprint-choice/SprintChoice';
import FoodHabits from './pages/sprint-choice/food-habits/FoodHabits';
import PhysicalActivity from './pages/sprint-choice/physical-activity/PhysicalActivity';
import Alcohol from './pages/sprint-choice/alcohol/Alcohol';

export const pages: Page[] = [
  {
    to: '/health-data',
    permissionLevel: 1,
    label: 'health-data',
    icon: HealthDataIcon,
    isMenu: true,
    component: HealthData,
    header: {},
    showBottomNav: true,
  },
  {
    to: '/',
    permissionLevel: 1,
    label: 'home',
    icon: HomeIcon,
    isMenu: true,
    component: Home,
    header: { expanded: true },
    showBottomNav: true,
  },
  {
    to: '/sprint',
    permissionLevel: 1,
    label: 'sprint',
    icon: SprintIcon,
    isMenu: true,
    component: Sprint,
    header: { expanded: true },
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
    header: { expanded: false },
  },
  {
    to: '/settings',
    permissionLevel: 1,
    label: 'settings',
    isMenu: false,
    component: Settings,
    header: { expanded: false },
    showBottomNav: true,
  },
  {
    to: '/knowledge-bank',
    permissionLevel: 1,
    label: 'knowledge-bank',
    isMenu: false,
    component: KnowledgeBank,
    header: { expanded: false },
    showBottomNav: true,
  },
  {
    to: '/blood-pressure-test',
    permissionLevel: 1,
    label: 'blood-pressure-test',
    component: BloodPressureTest,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: '/weight-test',
    permissionLevel: 1,
    label: 'weight-test',
    component: WeightTest,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: '/sprint-choice',
    permissionLevel: 1,
    label: 'sprint-choice',
    component: SprintChoice,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: '/sprint-food-habits',
    permissionLevel: 1,
    label: 'sprint-food-habits',
    component: FoodHabits,
    header: { expanded: false, transparent: true },
    isMenu: false,
  },
  {
    to: '/sprint-physical-activity',
    permissionLevel: 1,
    label: 'sprint-physical-activity',
    component: PhysicalActivity,
    header: { expanded: false, transparent: true },
    isMenu: false,
  },
  {
    to: '/sprint-alcohol-habits',
    permissionLevel: 1,
    label: 'sprint-alcohol-habits',
    component: Alcohol,
    header: { expanded: false, transparent: true },
    isMenu: false,
  },
];
