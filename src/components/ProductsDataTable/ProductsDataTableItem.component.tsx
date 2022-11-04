import type IProps from './ProductsDataTable.interface'
import ShoppingCartControls from '../ShoppingCartControls/ShoppingCartControls.component'

export default ({ item: amiibo }: IProps) => {
  return (
    <div className="md:w-1/3 w-full p-3">
      <a className="flex flex-col items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 ">
        <img className="h-96 rounded-t-lg " src={amiibo.image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {amiibo.name}
          </h5>
          <p>${amiibo.price.toLocaleString()}</p>
          <ShoppingCartControls product={amiibo} />
        </div>
      </a>
    </div>
  )
}
