import { navigation } from '../data'
import {Link, useLocation} from 'react-router-dom'

const Sidebar = () => {
    const menu = useLocation()

  return (
    <div className='w-44 flex-none h-screen bg-red-300 border-r border-gray-200'>
      <nav className='p-4 border-none border-0'>
        <ul className='space-y-2 list-none'>
          {navigation.map((nav, index) => {
            return (
              <li className='bg-sky-400  rounded-full ' key={nav.id}>
                <Link
                  to={nav.url}
                  className={`
                    block p-3 
                    rounded-lg border 
                    border-gray-200 
                    transition 
                    duration-300 
                    ease-in-out      
                    border-none text-center
                  	text-black 
                    hover:bg-yellow-950 
                    hover:text-red-100 
                    active:text-red-100	
                    active:bg-violet-700 
                    focus:outline-none 
                    focus:ring 
                    focus:ring-violet-300
                    ${
                      menu.pathname === nav.url
                          ? 'active-menu-item'
                          : ''
                  }
                    `}
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
    </div>
  )
}
export default Sidebar
