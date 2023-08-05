import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    amount: 0,
  },
  reducers: {
    increment: (state) => {
      state.amount += 1  // immer lib. do immutibale code
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer