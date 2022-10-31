import {
  ADD_PURCHASE_ROUTE,
  ADD_PURCHASE_DESCRIPTION,
  MAIN_ROUTE,
  MAIN_DESCRIPTION,
  STATISTICS_ROUTE,
  STATISTICS_DESCRIPTION, MAIN_TITLE, ADD_PURCHASE_TITLE, STATISTICS_TITLE,
} from './utils/constants';
import AddPurchasePage from './pages/addPurchasePage/AddPurchasePage';
import MainPage from './pages/mainPage/MainPage';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';

// eslint-disable-next-line import/prefer-default-export
export const publicRoutes = [
  {
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    title: ADD_PURCHASE_TITLE,
    description: ADD_PURCHASE_DESCRIPTION,
    path: ADD_PURCHASE_ROUTE,
    Component: AddPurchasePage,
  },
  {
    title: STATISTICS_TITLE,
    description: STATISTICS_DESCRIPTION,
    path: STATISTICS_ROUTE,
    Component: StatisticsPage,
  },
];
