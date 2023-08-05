import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../store/Slices/bonusSlice';

export default function Bonus() {
    const bonus = useSelector((state)=>(state.bonus.Points));
    const dispatch = useDispatch();
  return (
    <div className='mt-3 flex flex-col items-center'>
        <div className='text-3xl'>
            Bonus
        </div>
        <div className='flex flex-col gap-2 items-center mt-3'>
            <div className='text-xl text-gray-400'>Bonus: {bonus}</div>
            <button className='border-2 border-gray-300 p-3 rounded-lg bg-gray-500' onClick={()=>dispatch(increment())}>Increment Bonus +</button>
        </div>
    </div>
  )
}
