import { useFetchAmiibosQuery } from '@/features/amiibos/amiibos.api.slice'
import Spinner from '@/components/Spinner/Spinner.component'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { useEffect } from 'react'
import ProductsDataTableItem from './ProductsDataTableItem.component'

export default () => {
  const amiibosSearchFilter = useSelector<RootState, string>(
    (state) => state.amiibosFilters.search
  )

  const amiibosTypeFilter = useSelector<RootState, string>(
    (state) => state.amiibosFilters.type
  )

  const amiibosGameSeriesFilter = useSelector<RootState, string>(
    (state) => state.amiibosFilters.gameseries
  )

  const {
    data: amiibos = [],
    isFetching,
    isSuccess,
    isError,
    refetch
  } = useFetchAmiibosQuery({
    search: amiibosSearchFilter,
    type: amiibosTypeFilter,
    gameseries: amiibosGameSeriesFilter
  })

  useEffect(() => {
    refetch()
  }, [amiibosSearchFilter, amiibosTypeFilter, amiibosGameSeriesFilter])

  if (isFetching) {
    return <Spinner />
  } else if (isSuccess && amiibos.length === 0) {
    return <div>Your search doesnt bring any data</div>
  } else if (isError) {
    return <div>There was an error trying to bring data, please retry</div>
  } else if (isSuccess && amiibos.length > 0) {
    return (
      <div className="flex flex-row flex-wrap">
        {amiibos.map((amiibo, $index) => (
          <ProductsDataTableItem key={$index} item={amiibo} />
        ))}
      </div>
    )
  } else {
    return <div></div>
  }
}
