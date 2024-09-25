import {navigation}  from '../data'

import {
  Start,
  Aspects,
  Calibers,
  Gear,
  PrimaryStats,
  Origin,
  Summary
 } from '../components'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Start />
  }
  ,{
    path: '/calibers',
    element: <Calibers />
  },{
    path: '/aspects',
    element: <Aspects />
  },{
    path: '/gear',
    element: <Gear />
  },{
    path: '/primary-stats',
    element: <PrimaryStats />
  },{
    path: '/summary',
    element: <Summary />
  },{
    path: '/origin',
    element: <Origin />
  }
])

const Sidebar = () => {
  return (
    <>
      <nav>
        <ul style={{listStyleType: 'none', textAlign: 'left'}}>
        {navigation.map((nav) => {
          return (
            <li key={nav.id}><a href={nav.url}>{nav.text}</a></li>  
          )
        })}
      </ul>
      </nav>
      <RouterProvider router={router} />
    </>
      
    
    
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