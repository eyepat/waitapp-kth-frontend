import GeneralQuestions from './pages/general-questions/GeneralQuestions';
import HealthData from './pages/health-data/HealthData';
import Home from './pages/home/Home';
import Sprint from './pages/sprint/Sprint';
import Register from './pages/register/Register';
import { Page } from './types/page';
import { HealthDataIcon, HomeIcon, SprintIcon } from './utils/Icons';
import Settings from './pages/settings/Settings';
import KnowledgeBank from './pages/knowledge-bank/KnowledgeBank';
import BloodPressureTest from './pages/health-data/tests/BloodPressureTest';
import WeightTest from './pages/health-data/tests/WeightTest';
import WaistSizeTest from './pages/health-data/tests/WaistSizeTest';
import SprintChoice from './pages/sprint/choice/SprintChoice';
import FoodHabits from './pages/sprint/choice/food-habits/FoodHabits';
import PhysicalActivity from './pages/sprint/choice/physical-activity/PhysicalActivity';
import Alcohol from './pages/sprint/choice/alcohol-habits/AlcoholHabits';
import Recipes from './pages/knowledge-bank/recipes/Recipes';
import Profile from './pages/settings/Profile';
import Security from './pages/settings/Security';
import Forms from './pages/settings/Forms';
import Rapa from './pages/forms/Rapa';
import RapaForm from './pages/forms/RapaForm';
import KCLogin from './pages/login/KCLogin';
import LifestyleForm from './pages/forms/LifestyleForm';
import AfeqtForm from './pages/forms/AfeqtForm';

export enum AuthenticationLevels {
  NOT_LOGGED_IN,
  NO_DATA_PROVIDED,
  LOGGED_IN,
  HIGHER_AUTH_LEVEL,
}

export const pages: Page[] = [
  {
    to: '/health-data',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'health-data',
    icon: HealthDataIcon,
    isMenu: true,
    component: HealthData,
    header: {},
    showBottomNav: true,
    tabs: true,
    defaultTab: 'overview',
  },
  {
    to: '/',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'home',
    icon: HomeIcon,
    isMenu: true,
    component: Home,
    header: { expanded: true },
    showBottomNav: true,
  },
  {
    to: '/sprint',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'sprint',
    icon: SprintIcon,
    isMenu: true,
    component: Sprint,
    header: { expanded: true },
    showBottomNav: true,
  },
  {
    to: '/login',
    permissionLevel: AuthenticationLevels.NOT_LOGGED_IN,
    label: 'login',
    isMenu: false,
    component: KCLogin,
  },
  {
    to: '/register',
    permissionLevel: AuthenticationLevels.NOT_LOGGED_IN,
    label: 'register',
    isMenu: false,
    component: Register,
  },
  {
    to: '/general-questions',
    permissionLevel: AuthenticationLevels.NO_DATA_PROVIDED,
    label: 'general-questions',
    isMenu: false,
    component: GeneralQuestions,
    header: { help: true },
  },
  {
    to: '/settings',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'settings',
    isMenu: false,
    component: Settings,
    header: { expanded: false },
    showBottomNav: true,
  },
  {
    to: '/settings/profile',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'profile',
    component: Profile,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: '/settings/security',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'profile',
    component: Security,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: '/knowledge-bank',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'knowledge-bank',
    isMenu: false,
    component: KnowledgeBank,
    header: { expanded: false },
    showBottomNav: true,
  },
  {
    to: [
      '/health-data/tests/blood-pressure-test',
      '/health-data/overview/blood-pressure-test',
    ],
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'blood-pressure-test',
    component: BloodPressureTest,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: ['/health-data/tests/weight-test', '/health-data/overview/weight-test'],
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'weight-test',
    component: WeightTest,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: [
      '/health-data/tests/waist-size-test',
      '/health-data/overview/waist-size-test',
    ],
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'waist-size-test',
    component: WaistSizeTest,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: '/sprint/choice',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'sprint-choice',
    component: SprintChoice,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: '/sprint/choice/food-habits',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'sprint-food-habits',
    component: FoodHabits,
    header: { expanded: false, transparent: true },
    isMenu: false,
  },
  {
    to: '/sprint/choice/physical-activity',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'sprint-physical-activity',
    component: PhysicalActivity,
    header: { expanded: false, transparent: true },
    isMenu: false,
  },
  {
    to: '/sprint/choice/alcohol-habits',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'sprint-alcohol-habits',
    component: Alcohol,
    header: { expanded: false, transparent: true },
    isMenu: false,
  },
  {
    to: '/knowledge-bank/recipes',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'recipes',
    component: Recipes,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: 'settings/forms',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'forms',
    component: Forms,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: 'settings/forms/rapa',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'RAPA',
    component: Rapa,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: 'settings/forms/rapa/questions',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'RAPA',
    component: RapaForm,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: 'settings/forms/lifestyle/questions',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'LifestyleForm',
    component: LifestyleForm,
    header: { expanded: false },
    isMenu: false,
  },
  {
    to: 'settings/forms/afeqt/questions',
    permissionLevel: AuthenticationLevels.LOGGED_IN,
    label: 'AfeqtForm',
    component: AfeqtForm,
    header: { expanded: false },
    isMenu: false,
  },
];
