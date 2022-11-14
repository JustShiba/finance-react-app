import create from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: 'https://financial-api-228.herokuapp.com',
  headers: { apiKey: 'WER2QWEkjefwekjf$$%651321' },
});

export const useItemStore = create((set, get) => ({
  items: [],
  categories: [],
  names: [],
  isLoading: false,

  setLoading: (value) => set(() => ({ isLoading: value })),
  getIsLoading: () => get().isLoading,
  fetchAllItems: async () => {
    try {
      get().setLoading(true);

      const { data: { response: { items, categories, names }, status } } = await axiosInstance.get('/item');

      get().setLoading(false);

      if (status !== 200) throw new Error();

      return set(() => ({
        items,
        categories,
        names,
      }));
    } catch (error) {
      console.log(error);
      toast.error(error.message || 'Error');
    }
  },
  getItems: () => get().items,
}));

export const oneItemStore = create((set, get) => ({
  name: '',
  category: '',
  price: '',
  isLoading: false,

  setLoading: (value) => set(() => ({ isLoading: value })),
  getIsLoading: () => get().isLoading,
  setItemField: (field, value) => set({ [field]: value }),
  getItemFields: () => get(),
  clearItemFields: () => set({
    name: '',
    price: '',
  }),
  sendItem: async () => {
    try {
      get().setLoading(true);

      const { data: { response: { items: { name, category, price } }, status } } =
        await axiosInstance.post('/item', { name: get().name, category: get().category, price: get().price });

      get().setLoading(false);

      if (status !== 201) throw new Error();

      toast.success(`Транзакция ${name} - ${category} - ${price}Byn добавлена!`);

      get().clearItemFields();
    } catch (error) {
      console.log(error);
      toast.error(error.message || 'Error');
    }
  },
}));
