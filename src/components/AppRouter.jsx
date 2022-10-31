import { Route, Routes, Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/constants';

function AppRouter() {
  return (
    <Routes>
      {publicRoutes.map((({ path, Component, description }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography
                style={{ color: '#007fff', maxWidth: '60vw', marginBottom: '40px' }}
                variant="h5"
                textAlign="center"
              >
                {description}
              </Typography>
              <Component />
            </div>
          )}
          exact
        />
      )
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;
