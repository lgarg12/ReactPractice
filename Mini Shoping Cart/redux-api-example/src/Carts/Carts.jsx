import React, { useEffect } from 'react';
import {fetchCartAsync, removeItemsAsync} from './cartSlice'
import { useDispatch, useSelector } from 'react-redux';



export function Carts() {
  
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCartAsync());
  }, []);


  return (
    <div className='mx-auto my-3 flex flex-col gap-2 items-center'>
      <div className='text-3xl text-gray-500'>Cart</div>
      <div className='flex flex-col gap-4'>
        {items.map(p=>(
          <div key={p.id} className='w-[400px] flex flex-col gap-2 border-2 border-gray-400 rounded-lg bg-gray-200 p-3 items-center'>
            <img src={`${p.thumbnail}`} alt="" className='rounded-lg'/>
            <div className='text-lightbold'>{p.title}</div>
            <div>Price: ${p.price}</div>
            <div>{p.description}</div>
            <button className='p-3 border-2 border-gray-400 rounded-lg text-2xl' onClick={()=>dispatch(removeItemsAsync(p.id))}>Remove Cart</button>
          </div>
        ))
        }
      </div>
    </div>
  );
}
