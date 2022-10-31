import './index.css';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const AddItemPage = ({ title }) => (
  <Typography textAlign="center">
    {title}
  </Typography>
);

AddItemPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AddItemPage;
