import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/accountSlice"
import bonusReducer from "./Slices/bonusSlice"
import rewardReducer from "../Reducers/reward";
import { adminApi } from "../Api/admin";

export const store = configureStore({
    reducer:{
        account: accountReducer,
        bonus: bonusReducer,
        reward: rewardReducer,
        [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
})