import { configureStore } from '@reduxjs/toolkit'
import { apiSlice as amiibosApiSlice } from '@/features/amiibos/amiibos.api.slice'
import amiibosFilterReducer from '@/features/amiibos/amiibos.slice'
import shoppingCartReducer from '@/features/shopping-cart/shopping-cart.slice'

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    amiibosFilters: amiibosFilterReducer,
    [amiibosApiSlice.reducerPath]: amiibosApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(amiibosApiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
