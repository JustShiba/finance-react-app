import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { ADD_PURCHASE_ROUTE, ADD_PURCHASE_TITLE, STATISTICS_ROUTE, STATISTICS_TITLE } from '../../utils/constants';

const MainPage = () => (
  <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
    <ButtonGroup size="large" variant="outlined" aria-label="large button group">
      <Link to={ADD_PURCHASE_ROUTE} style={{ textDecoration: 'none' }}>
        <Button>{ADD_PURCHASE_TITLE}</Button>
      </Link>
      <Link to={STATISTICS_ROUTE} style={{ textDecoration: 'none' }}>
        <Button>{STATISTICS_TITLE}</Button>
      </Link>
    </ButtonGroup>
  </div>
);

export default MainPage;
