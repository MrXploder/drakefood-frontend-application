import { addToCart } from '@/features/shopping-cart/shopping-cart.slice'
import { PlusIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import IProps from './ShoppingCartControls.interface'

export default ({ product }: IProps) => {
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: quantity }))
    setQuantity(0)
  }
  return (
    <section className="flex justify-center mt-6">
      <input
        type="number"
        className="rounded-[99px] w-[60%] mr-4"
        min="0"
        max="99"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button
        className="rounded-[99px] w-[40%] bg-primary text-white flex items-center justify-center disabled:bg-slate-50 disabled:text-black transition-all"
        disabled={quantity === 0}
        onClick={handleAddToCart}
      >
        <PlusIcon className="h-6 w-6" />
        <ShoppingBagIcon className="h-6 w-6" />
      </button>
    </section>
  )
}
