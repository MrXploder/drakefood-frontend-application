import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  type: '',
  gameseries: ''
}

const amiibosSlice = createSlice({
  name: 'amiibos-filters',
  initialState,
  reducers: {
    setSearchFilter(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    setTypeFilter(state, action: PayloadAction<string>) {
      state.type = action.payload
    },
    setGameSeriesFilter(state, action: PayloadAction<string>) {
      state.gameseries = action.payload
    }
  }
})

export const { setSearchFilter, setTypeFilter, setGameSeriesFilter } =
  amiibosSlice.actions
export default amiibosSlice.reducer
