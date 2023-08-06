import React, { useEffect } from 'react';
import { fetchAsync } from './productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsAsync } from '../Carts/cartSlice';



export function Products() {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);


  return (
    <div className='mx-auto my-3 flex flex-col items-center gap-2'>
      <div className='text-3xl text-gray-500'>Product List</div>
      <div className='flex flex-col gap-4'>
        {products.map(p=>(
          <div key={p.id} className='w-[400px] flex flex-col gap-2 border-2 border-gray-400 rounded-lg bg-gray-200 p-3 items-center'>
            <img src={`${p.thumbnail}`} alt="" className='rounded-lg'/>
            <div className='text-lightbold'>{p.title}</div>
            <div>Price: ${p.price}</div>
            <div>{p.description}</div>
            <button className='p-3 border-2 border-gray-400 rounded-lg text-2xl' onClick={()=>dispatch(addItemsAsync(p))}>Add to Cart</button>
          </div>
        ))
        }
      </div>
    </div>
  );
}
