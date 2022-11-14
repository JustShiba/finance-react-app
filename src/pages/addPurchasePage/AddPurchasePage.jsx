import { Autocomplete, Button, ButtonGroup, TextField } from '@mui/material';
import './index.css';
import { oneItemStore } from '../../store';

const AddPurchasePage = () => {
  const {
    setItemField,
    getItemFields,
    clearItemFields,
    sendItem,
  } = oneItemStore(({ setItemField,
    getItemFields,
    clearItemFields,
    sendItem }) =>
    ({ setItemField,
      getItemFields,
      clearItemFields,
      sendItem }));

  const { name, category, price } = getItemFields();

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }} className="add_purchase_inputs">
        <Autocomplete
          value={category || null}
          onChange={(event, newValue) => {
            setItemField('category', newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setItemField('category', newInputValue);
          }}
          isOptionEqualToValue={() => true}
          id="combo-box"
          options={['', 'Продукты питания', 'Алкоголь', 'Ресторанчики', 'Пиво', 'Бытовая химия']}
          sx={{ width: '35%' }}
          /* eslint-disable react/jsx-props-no-spreading */
          renderInput={(params) => (
            <TextField
              {...params}
              label="Type"
            />
          )}
        />
        <TextField
          sx={{ width: '35%' }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={name}
          onChange={(e) => setItemField('name', e.target.value)}
        />
        <TextField
          sx={{ width: '25%' }}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={price}
          onChange={(e) => setItemField('price', e.target.value)}
        />
      </div>
      <ButtonGroup style={{ display: 'flex', marginTop: '50px' }} variant="outlined" aria-label="large button group">
        <Button onClick={() => clearItemFields()}>Clear fields</Button>
        <Button onClick={() => {
          sendItem();
        }}
        >
          Add purchase
        </Button>
      </ButtonGroup>
    </>
  );
};

export default AddPurchasePage;
