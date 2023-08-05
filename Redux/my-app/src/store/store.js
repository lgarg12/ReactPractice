import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/accountSlice"
import bonusReducer from "./Slices/bonusSlice"
import rewardReducer from "../Reducers/reward";

export const store = configureStore({
    reducer:{
        account: accountReducer,
        bonus: bonusReducer,
        reward: rewardReducer,
    }
})