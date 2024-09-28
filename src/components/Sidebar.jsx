import { navigation } from '../data'

// import {
//   Start,
//   Aspects,
//   Calibers,
//   Gear,
//   PrimaryStats,
//   Weapons,
//   Gadget,
//   Origin,
//   Summary,
//   Armour,
// } from '../components'

// import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Start />,
//   },
//   {
//     path: '/calibers',
//     element: <Calibers />,
//   },
//   {
//     path: '/aspects',
//     element: <Aspects />,
//   },
//   {
//     path: '/gear',
//     element: <Gear />,
//   },
//   {
//     path: '/primary-stats',
//     element: <PrimaryStats />,
//   },
//   {
//     path: '/weapons',
//     element: <Weapons />,
//   },
//   {
//     path: '/armour',
//     element: <Armour />,
//   },
//   {
//     path: '/gadget',
//     element: <Gadget />,
//   },
//   {
//     path: '/summary',
//     element: <Summary />,
//   },
//   {
//     path: '/origin',
//     element: <Origin />,
//   },
// ])

const Sidebar = () => {
  return (
    <div className='w-64 flex-none h-screen bg-red-300 border-r border-gray-200'>
      <nav className='p-4 border-none border-0'>
        <ul className='space-y-2 list-none'>
          {navigation.map((nav) => {
            return (
              <li className='bg-sky-400  rounded-full ' key={nav.id}>
                <Link
                  to={nav.url}
                  className='block p-3 rounded-lg border border-gray-200 transition duration-300 ease-in-out border-none text-center	text-black hover:bg-yellow-950		 hover:text-red-100	'
                  style={{
                    border: '2px solid #433d36',
                    borderRadius: '9999px',
                  }}
                >
                  {nav.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* <RouterProvider router={router} /> */}
    </div>

    //   <aside>
    // <ul style={{listStyleType: 'none', textAlign: 'left'}}>
    //   {navigation.map((nav) => {
    //     return (
    //       <li key={nav.id}><a href={nav.url}>{nav.text}</a></li>
    //     )
    //   })}
    // </ul>
    // </aside>
  )
}
export default Sidebar
