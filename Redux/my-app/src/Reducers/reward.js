import { createAction, createReducer } from '@reduxjs/toolkit';

// Action
const increment = createAction('reward/increment');

// Initial State
const initialState = { points: 0 };

// Reducer
const rewardReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.points++;
  });
});

// Export the rewardReducer as the default export
export default rewardReducer;

// You can still export the increment action if needed
export { increment };
