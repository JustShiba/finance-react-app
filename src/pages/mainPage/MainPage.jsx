import './index.css';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const MainPage = ({ title }) => (
  <Typography textAlign="center">
    {title}
  </Typography>
);

MainPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainPage;
