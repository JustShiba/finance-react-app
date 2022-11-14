import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import MyTable from '../../components/table/Table';
import { useItemStore } from '../../store';

const StatisticsPage = () => {
  const [items, setItems] = useState([]);
  const { fetchAllItems, getItems, getIsLoading } =
    useItemStore(({ fetchAllItems, getItems, getIsLoading }) =>
      ({ fetchAllItems, getItems, getIsLoading }));

  useEffect(() => {
    const fetchItems = async () => {
      await fetchAllItems();
      const allItems = getItems();
      setItems(allItems);
    };

    fetchItems();
  }, [fetchAllItems, getItems]);

  useEffect(() => {
  }, [getItems]);

  return (
    <Box sx={{ width: '80%' }}>
      <Paper sx={{ width: '100%', mb: 2 }} />

      {getIsLoading() ? (
        <Audio
          wrapperStyle={{ justifyContent: 'center' }}
          height="80"
          width="80"
          radius="9"
          color="rgb(0, 127, 255)"
          ariaLabel="loading"
        />
      ) :
        <MyTable rows={items} />}
    </Box>
  );
};

export default StatisticsPage;
