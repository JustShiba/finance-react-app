import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/constants';

function AppRouter() {
  return (
    <Routes>
      {publicRoutes.map((({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;
