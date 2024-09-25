import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
// import {
//   Start,
//   Aspects,
//   Calibers,
//   Gear,
//   PrimaryStats,
//   Summary
//  } from './components'

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Start />
//   }
//   ,{
//     path: '/calibers',
//     element: <Calibers />
//   },{
//     path: '/aspects',
//     element: <Aspects />
//   },{
//     path: '/gear',
//     element: <Gear />
//   },{
//     path: '/primary-stats',
//     element: <PrimaryStats />
//   },{
//     path: '/summary',
//     element: <Summary />
//   }
// ])

function App() {


  return (
    <div className="parent">
    <Sidebar />
    </div>
  )
}

export default App
