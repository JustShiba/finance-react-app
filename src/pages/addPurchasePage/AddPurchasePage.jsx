import { Autocomplete, Button, ButtonGroup, TextField } from '@mui/material';
import './index.css';

const AddPurchasePage = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="add_purchase_inputs">
      <Autocomplete
        id="combo-box"
        options={['1', '2']}
        sx={{ width: '35%' }}
        /* eslint-disable react/jsx-props-no-spreading */
        renderInput={(params) => <TextField {...params} label="Type" />}
      />
      <TextField sx={{ width: '35%' }} id="outlined-basic" label="Title" variant="outlined" />
      <TextField sx={{ width: '25%' }} id="outlined-basic" label="Price" variant="outlined" />
    </div>
    <ButtonGroup style={{ display: 'flex', marginTop: '50px' }} variant="outlined" aria-label="large button group">
      <Button>Clear fields</Button>
      <Button>Add purchase</Button>
    </ButtonGroup>
  </>
);

export default AddPurchasePage;
