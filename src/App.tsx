import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/Default/Default.layout'

import './App.css'

const LandingPage = React.lazy(() => import('./pages/Landing/Landing.page'))
const ProductsListPage = React.lazy(() => import("./pages/ProductsList/ProductsList.page"))
const ShoppingCardCheckoutPage = React.lazy(() => import("./pages/ShoppingCartCheckout/ShoppingCartCheckout.page"))

export default () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='amiibos' element={<ProductsListPage />} />
        <Route path='checkout' element={<ShoppingCardCheckoutPage />} />
      </Route>
    </Routes>
  </Suspense>
)