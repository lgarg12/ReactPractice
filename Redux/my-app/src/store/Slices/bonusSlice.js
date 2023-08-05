import { createSlice ,createAction} from '@reduxjs/toolkit'

const incrementByAmount = createAction('account/incrementByAmount');

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState: {
    Points: 0,
  },
  reducers: {
    increment: (state) => {
      state.Points += 1  // immer lib. do immutibale code
    },
  },
  extraReducers:(builder)=>{
        builder.addCase(incrementByAmount,(state,action)=>{
            if(action.payload >= 100){
                state.Points+=1
            }
        })
    }
})


export const { increment } = bonusSlice.actions

export default bonusSlice.reducer