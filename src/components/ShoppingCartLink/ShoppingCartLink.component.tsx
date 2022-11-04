import { RootState } from '@/app/store'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartPreview from '../ShoppingCartPreview/ShoppingCartPreview.component'

export default () => {
  const totalItemsInCart = useSelector<RootState, number>((state) => {
    const items = state.shoppingCart.items ?? []
    return items.reduce((accumulator, item) => {
      accumulator += item.qty ?? 1
      return accumulator
    }, 0)
  })

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="relative">
            <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
            <div className="w-4 h-4 rounded-[50%] bg-white text-xs text-black absolute top-0 right-0">
              {totalItemsInCart}
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[375px] max-w-sm -translate-x-[95%] transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="bg-gray-50 p-4">
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        Shopping cart
                      </span>
                    </span>
                    {totalItemsInCart === 0 && (
                      <span className="block text-sm text-gray-500">
                        Shopping cart is empty
                      </span>
                    )}
                    {totalItemsInCart > 0 && <ShoppingCartPreview />}
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
