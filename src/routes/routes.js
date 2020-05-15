import ChangePassword from '../screens/changePassword/changePassword';
import HomePage from '../screens/homePage/homePage';
import JobInfoPage from '../screens/jobInfoPage/jobInfoPage';

export const routes = [
 {
   path: '/change',
   component: ChangePassword,
   exact: true
 },
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/searchFilter',
    component: HomePage,
    exact: true
  },
  {
    path: '/location',
    component: HomePage,
    exact: true
  },
  {
    path: '/jobInfo',
    component: JobInfoPage,
    exact: true
  },
];
