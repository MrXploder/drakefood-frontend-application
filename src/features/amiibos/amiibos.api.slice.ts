import type IAmiibo from './amiibos.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }

export const apiSlice = createApi({
  reducerPath: 'amiibos',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://www.amiiboapi.com/api'
  }),
  endpoints(builder) {
    return {
      fetchAmiibos: builder.query({
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
          return { url: `/amiibo`, method: "GET", params: urlParams }
        },
        transformResponse: (response: { amiibo: IAmiibo[] }) =>
          response.amiibo.map((amiibo) => ({
            ...amiibo,
            price: Math.floor(Math.random() * 1000) + 1,
            id: amiibo.head + amiibo.tail
          }))
      })
    }
  }
})

export const { useFetchAmiibosQuery } = apiSlice
