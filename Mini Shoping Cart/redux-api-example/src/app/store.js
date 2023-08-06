import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Products/productSlice';
import cartReducer  from '../Carts/cartSlice';
export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer
  },
});
