import type Amiibo from '@/features/amiibos/amiibos.interface'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('shopping-cart') ?? '[]') as Array<
    Amiibo & { qty?: number }
  >
}

const shoppingCartSlice = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Amiibo & { qty: number }>) {
      const itemToPush = action.payload
      const itemInCart = state.items.find((item) => item.id === itemToPush.id)

      if (itemInCart) {
        if (typeof itemInCart.qty === 'number') {
          itemInCart.qty += itemToPush.qty
        } else {
          itemInCart.qty = itemToPush.qty
        }
      } else {
        state.items.push(itemToPush)
      }

      localStorage.setItem('shopping-cart', JSON.stringify(state.items))
    },
    incrementItemInCart(state, action: PayloadAction<Amiibo>) {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (itemInCart && typeof itemInCart.qty === 'number') {
        itemInCart.qty++
        localStorage.setItem('shopping-cart', JSON.stringify(state.items))
      } else {
        console.warn('how could this happen?')
      }
    },
    decrementItemInCart(state, action: PayloadAction<Amiibo>) {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (itemInCart && typeof itemInCart.qty === 'number') {
        if (itemInCart.qty === 1) {
          const index = state.items.findIndex(
            (item) => item.id === action.payload.id
          )
          state.items.splice(index, 1)
        } else {
          itemInCart.qty--
        }

        localStorage.setItem('shopping-cart', JSON.stringify(state.items))
      } else {
        console.warn('how could this happen?')
      }
    }
  }
})

export const { addToCart, incrementItemInCart, decrementItemInCart } =
  shoppingCartSlice.actions
export default shoppingCartSlice.reducer
