import React, { useState } from 'react'
import { increment , decrement,incrementByAmount} from '../store/Slices/accountSlice';
import { useDispatch,useSelector } from 'react-redux';

export default function Account() {
  const [value,setValue] = useState(0);
  const dispatch = useDispatch();
  const amount = useSelector(state=>state.account.amount);
  return (
    <div className='mt-3 flex gap-2 flex-col items-center'>
        <div className='text-3xl'>ACCOUNT PAGE</div>
        <div className='flex gap-2'>
          <button className='bg-gray-500 border-2 border-gray-300 p-3 rounded-lg' onClick={()=> dispatch(increment())}>Increment +</button>
          <div className='border-gray-400 border-2 p-3 rounded-lg bg-gray-500'>{amount}</div>
          <button className='bg-gray-500 border-2 border-gray-300 p-3 rounded-lg' onClick={()=>dispatch(decrement())}>Decrement -</button>
          <input type="number" onChange={(e)=>{setValue(+e.target.value)}} className='border-2 border-gray-300 p-3 rounded-lg'/>
          <button className='bg-gray-500 border-2 border-gray-300 p-3 rounded-lg' onClick={()=>dispatch(incrementByAmount(value))}>Increment by Amount {value}</button>
        </div>
    </div>
  )
}
