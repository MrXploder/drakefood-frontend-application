import type IAmiibo from './amiibos.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'amiibos',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.amiiboapi.com/api/'
  }),
  endpoints(builder) {
    return {
      fetchAmiibos: builder.query<
        IAmiibo[],
        { search?: string; type?: string; gameseries?: string } | void
      >({
        query: (params) => {
          console.log(params)
          const urlParams = new URLSearchParams()
          if (params) {
            if (params.type) {
              urlParams.set('type', params.type)
            }

            if (params.gameseries) {
              urlParams.set('amiiboSeries', params.gameseries)
            }

            if (params.search) {
              urlParams.set('name', params.search)
            }
          }
          return `/amiibo?${urlParams.toString()}`
        },
        transformResponse: (response: { amiibo: IAmiibo[] }) =>
          response.amiibo.map((amiibo) => ({
            ...amiibo,
            price: Math.floor(Math.random() * 1000) + 1,
            id: amiibo.head + amiibo.tail
          })),
      })
    }
  }
})

export const { useFetchAmiibosQuery } = apiSlice
