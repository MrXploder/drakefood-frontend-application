import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar.component'

import './Default.layout.scss'

export default () => (
  <div className='bg-white'>
    <Navbar />
    <main className='container mx-auto py-16'>
      <Outlet />
    </main>
  </div>
)
