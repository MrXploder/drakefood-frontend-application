import type { IOption } from '@/components/SelectFilter/SelectFilter.interface'

import { Fragment, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { GAME_SERIES_OPTIONS, TYPE_OPTIONS } from './ProductsList.constant'

import SearchBox from '@/components/SearchBox/SearchBox.component'
import SelectFilter from '@/components/SelectFilter/SelectFilter.component'
import ProductsDataTable from '@/components/ProductsDataTable/ProductsDataTable.component'
import { useDispatch, useSelector } from 'react-redux'
import {
  setGameSeriesFilter,
  setSearchFilter,
  setTypeFilter
} from '@/features/amiibos/amiibos.slice'
import { RootState } from '@/app/store'

export default () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  const amiibosTypeFilter = useSelector<RootState, string>(
    (state) => state.amiibosFilters.type
  )

  const amiibosGameSeriesFilter = useSelector<RootState, string>(
    (state) => state.amiibosFilters.gameseries
  )

  useEffect(() => {
    dispatch(setTypeFilter(searchParams.get('type') ?? ''))
    dispatch(setGameSeriesFilter(searchParams.get('gameseries') ?? ''))
  }, [searchParams])

  const handleQueryChange = (query: string) => {
    dispatch(setSearchFilter(query))
  }

  const handleTypeFilterChange = (selection: IOption | undefined) => {
    dispatch(setTypeFilter(selection?.value ?? ''))
  }

  const handleGameSeriesFilterChange = (selection: IOption | undefined) => {
    dispatch(setGameSeriesFilter(selection?.value ?? ''))
  }

  return (
    <Fragment>
      <section className="px-1">
        <SearchBox onQueryChange={handleQueryChange} />
        <div className="flex flex-wrap mt-6">
          <div className="w-full md:w-1/2 md:pr-1">
            <SelectFilter
              value={amiibosTypeFilter}
              label="Types"
              options={TYPE_OPTIONS}
              onSelectChange={handleTypeFilterChange}
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-1 mt-6 md:mt-0">
            <SelectFilter
              value={amiibosGameSeriesFilter}
              label="GameSeries"
              options={GAME_SERIES_OPTIONS}
              onSelectChange={handleGameSeriesFilterChange}
            />
          </div>
        </div>
      </section>
      <section className="text-center mt-16">
        <ProductsDataTable />
      </section>
    </Fragment>
  )
}
