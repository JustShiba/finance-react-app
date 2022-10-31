import { ADD_ITEM_ROUTE, MAIN_ROUTE } from './utils/constants';
import AddItemPage from './pages/addItemPage/AddItemPage';
import MainPage from './pages/mainPage/MainPage';

// eslint-disable-next-line import/prefer-default-export
export const publicRoutes = [
  {
    title: 'Main',
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    title: 'Add item',
    path: ADD_ITEM_ROUTE,
    Component: AddItemPage,
  },
];
