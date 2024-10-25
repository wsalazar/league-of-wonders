import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Sidebar from './components/Sidebar'
import {
  Start,
  Aspects,
  Calibers,
  Gear,
  PrimaryStats,
  Weapons,
  Gadget,
  Origin,
  Summary,
  Armour,
} from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Start /> },
      { path: 'calibers', element: <Calibers /> },
      { path: 'aspects', element: <Aspects /> },
      { path: 'gear', element: <Gear /> },
      { path: 'primary-stats', element: <PrimaryStats /> },
      { path: 'weapons', element: <Weapons /> },
      { path: 'armour', element: <Armour /> },
      { path: 'gadget', element: <Gadget /> },
      { path: 'summary', element: <Summary /> },
      { path: 'origin', element: <Origin /> },
    ],
  },
])

function Root() {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <main className='flex-1 p-4 overflow-auto'>
        <div className='h-full p-4 bg-orange-100 rounded-xl text-neutral-950'>
          <Outlet />
        </div>
      </main>
      <ToastContainer position='top-center' />
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App
