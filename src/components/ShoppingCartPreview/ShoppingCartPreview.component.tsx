import { RootState } from '@/app/store'
import { useDispatch, useSelector } from 'react-redux'

import type Amiibo from '@/features/amiibos/amiibos.interface'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import {
  decrementItemInCart,
  incrementItemInCart
} from '@/features/shopping-cart/shopping-cart.slice'
import { useNavigate } from 'react-router-dom'

export default () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const shoppingCartItems = useSelector<
    RootState,
    Array<Amiibo & { qty?: number }>
  >((state) => state.shoppingCart.items)

  const totalItemsInCart = useSelector<RootState, number>((state) => {
    const items = state.shoppingCart.items ?? []
    return items.reduce((accumulator, item) => {
      accumulator += item.qty ?? 1
      return accumulator
    }, 0)
  })

  const totalPriceInCart = useSelector<RootState, number>((state) => {
    const items = state.shoppingCart.items ?? []
    return items.reduce((accumulator, item) => {
      accumulator += item.price * (item?.qty ?? 0)
      return accumulator
    }, 0)
  })

  const navigateToShoppingCartCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='flex flex-col'>
      {shoppingCartItems.map((item, $index) => (
        <div
          key="$index"
          className="flex flex-row mt-6 justify-start text-left"
        >
          <img className="h-24" src={item.image} />
          <div className="flex flex-col text-black">
            <div className="text-bold">{item.name}</div>
            <div>
              <span className="text-bold">Price: </span>$
              {item.price.toLocaleString()}
            </div>
            <div>Quantity in cart: {(item?.qty ?? 0).toLocaleString()}</div>
            <div>
              Subtotal: ${(item.price * (item?.qty ?? 0)).toLocaleString()}
            </div>
            <div className="flex flex-row">
              <button className="bg-stale-100">
                <PlusCircleIcon
                  className="w-8 h-8"
                  onClick={() => dispatch(incrementItemInCart(item))}
                />
              </button>
              <button className="bg-stale-100">
                <MinusCircleIcon
                  className="w-8 h-8"
                  onClick={() => dispatch(decrementItemInCart(item))}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col mt-6 justify-start text-left text-black">
        <div>
          <span className="text-bold">Total items in cart:</span>
          {totalItemsInCart.toLocaleString()}
        </div>
        <div>
          <span className="text-bold">Total price:</span>$
          {totalPriceInCart.toLocaleString()}
        </div>
      </div>

      <button
        className="bg-primary rounded-[99px] w-full mt-6"
        onClick={navigateToShoppingCartCheckout}
      >
        Checkout cart
      </button>
    </div>
  )
}
