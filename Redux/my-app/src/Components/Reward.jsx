import React from 'react'
import { increment } from '../Reducers/reward'
import { useDispatch, useSelector } from 'react-redux'


export default function Reward() {
    const dispatch = useDispatch();
    const reward = useSelector((state)=>state.reward.points);
  return (
    <div className='flex flex-col items-center gap-2'>
        <div className='text-3xl'>Reward</div>
        <div className='flex flex-col items-center gap-3'>
            <div className='text-xl text-gray-400' >Total Reward: {reward}</div>
            <button className='border-2 border-gray-300 p-3 rounded-lg bg-gray-500' onClick={()=>dispatch(increment())}>Increment Reward +</button>
        </div>
        
    </div>
  )
}
