
import { createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `account`,
      providesTags:['account'],
    }),
    addAccount : builder.mutation({
        query:(amount,id)=>({
            url: 'account',
            method:'POST',
            body:{
                amount,id
            }
        }),
        invalidatesTags:['account'],
    }),
    deleteAccount : builder.mutation({
        query:(id)=>({
            url: `account/${id}`,
            method:'DELETE',
        }),
        invalidatesTags:['account'],
    }),
    UpdateAccount : builder.mutation({
        query:({amount,id})=>({
            url: `account/${id}`,
            method:'PATCH',
            body:{amount}
        }),
        invalidatesTags:['account'],
    }),
}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountsQuery,useAddAccountMutation ,useDeleteAccountMutation ,useUpdateAccountMutation} = adminApi