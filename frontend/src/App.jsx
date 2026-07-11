import './App.css'
import Home from './components/Home'
import Item from './components/Item'
import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/"
    },
    {
      element: <Item />,
      path: "/item/:id"
    }
  ])
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}
