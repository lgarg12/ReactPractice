import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCart , addItems , updateItems , deleteItems } from './cartAPI';

const initialState = {
  items: [],
  status: 'idle',
};

export const fetchCartAsync = createAsyncThunk(
  'cart/fetchitem',
  async () => {
    const response = await fetchCart();
    return response.data;
  }
);
export const addItemsAsync = createAsyncThunk(
  'cart/additem',
  async (item) => {
    const {id,thumbnail,title,price,description} = item;
    const response = await addItems({id,thumbnail,title,price,description});
    return response.data;
  }
);

export const removeItemsAsync = createAsyncThunk(
  'cart/deleteitem',
  async (id) => {
    await deleteItems(id);
    return id;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(removeItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item=>item.id === action.payload);
        state.items.splice(index,1);
      })
  },
});

export default cartSlice.reducer;
