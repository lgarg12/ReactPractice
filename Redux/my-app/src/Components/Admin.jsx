import React from 'react'
import { useAddAccountMutation, useGetAccountsQuery,useDeleteAccountMutation } from '../Api/admin'

export default function Admin() {
    const {data,error,isLoading} = useGetAccountsQuery();
    const [addAccount] = useAddAccountMutation();
    const [deleteAccount] = useDeleteAccountMutation();
  return (
    <div className='flex flex-col gap-2 mt-3 items-center'>
        <div className='text-3xl'>Admin Component</div>
        <div className='text-2xl text-gray-400'>
            {
                data && data.map((accounts)=>(
                    <div>{accounts.id} : {accounts.amount}
                    <button className='p-3 bg-gray-500 border-2 border-gray-400 rounded-lg' onClick={()=>deleteAccount(accounts.id)}>Delete Account</button></div>
                ))
            }
        </div>
        <button className='p-3 bg-gray-500 border-2 border-gray-400 rounded-lg' onClick={()=>addAccount(101,data.length+1)}>Add Account</button>
    </div>
  )
}
