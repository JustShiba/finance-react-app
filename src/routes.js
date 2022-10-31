import { ADD_ITEM_ROUTE, MAIN_ROUTE } from './utils/constants';
import MainPage from './pages/addItemPage/MainPage';
import AddItemPage from './pages/mainPage/AddItemPage';

// eslint-disable-next-line import/prefer-default-export
export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: ADD_ITEM_ROUTE,
    Component: AddItemPage,
  },
];
