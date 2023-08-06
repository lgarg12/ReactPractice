import React from 'react'
import { useAddAccountMutation, useGetAccountsQuery,useDeleteAccountMutation, useUpdateAccountMutation } from '../Api/admin'

export default function Admin() {
    const {data} = useGetAccountsQuery();
    const [addAccount] = useAddAccountMutation();
    const [deleteAccount] = useDeleteAccountMutation();
    const [updateAccount] = useUpdateAccountMutation();
  return (
    <div className='flex flex-col gap-2 mt-3 items-center'>
        <div className='text-3xl'>Admin Component</div>
        <div className='text-2xl text-gray-400 flex flex-col gap-2'>
            {
                data && data.map((accounts)=>(
                    <div className='flex gap-2 items-center'>{accounts.id} : {accounts.amount}
                    <button className='p-3 bg-gray-500 border-2 border-gray-400 rounded-lg' onClick={()=>deleteAccount(accounts.id)}>Delete Account</button>
                    <button className='p-3 bg-gray-500 border-2 border-gray-400 rounded-lg'  onClick={()=>updateAccount({id:accounts.id,amount:77})}>Update Account</button>
                    </div>
                ))
            }
        </div>
        <button className='p-3 bg-gray-500 border-2 border-gray-400 rounded-lg' onClick={()=>addAccount(101,data.length+1)}>Add Account</button>
    </div>
  )
}
