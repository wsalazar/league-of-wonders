import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { origins } from '../../data'

const Origin = () => {
  const getSelectedOrigin = () => {
    return parseInt(localStorage.getItem('activeOrigin')) || null
  }

  const [activeOrigin, setActiveOrigin] = useState(getSelectedOrigin || null)

  const setSelectedOrigin = (originId) => {
    setActiveOrigin(originId)
    localStorage.setItem('activeOrigin', originId)
  }

  const selectActiveOrigin = (originId) => {
    if (originId === null) {
      let randomNumber = Math.random()
      let randomOriginId = Math.floor(randomNumber * (origins.length + 1))
      setSelectedOrigin(randomOriginId)
      return
    }
    setSelectedOrigin(originId)
  }

  return (
    <div className='flex-grow'>
      <h3 className='font-bold uppercase'>Origin</h3>
      <p className='subtitle uppercase'>Choose an origin</p>
      <article className='text-balance '>
        To choose an Origin, a player can either select Random Origin or select
        from the provided list. Selecting an origin provides more details about
        it. You may also select the back button after selecting to return to
        this page.
      </article>
      <div className='flex'>
        <div className='mt-5 mr-28'>
          <button
            className={`
                  block p-3 
                  rounded-lg border 
                  border-gray-200 
                  transition 
                  duration-300 
                  ease-in-out      
                  border-none text-center
                  text-white
                  bg-yellow-950 
                  hover:bg-yellow-custom 
                  hover:text-red-100 
                  active:text-red-100	
                  active:bg-violet-700 
                  focus:outline-none 
                  focus:ring 
                  focus:ring-violet-300
                  m-2
                  w-44
              `}
            onClick={() => selectActiveOrigin(null)}
          >
            Random Caliber
          </button>
          {origins.map((origin, index) => (
            <div key={origin.id}>
              <button
                className={`
                  block p-3 
                  rounded-lg border 
                  border-gray-200 
                  transition 
                  duration-300 
                  ease-in-out      
                  border-none text-center
                  text-white
                  bg-yellow-950 
                  hover:bg-yellow-custom 
                  hover:text-red-100 
                  active:text-red-100	
                  active:bg-violet-700 
                  focus:outline-none 
                  focus:ring 
                  focus:ring-violet-300
                  m-2
                  w-44
                  ${activeOrigin === index + 1 ? 'active-origin' : ''}
              `}
                onClick={() => selectActiveOrigin(origin.id)}
              >
                {origin.text}
              </button>
            </div>
          ))}
        </div>
        <div className='w-2/3 mt-20 justify-center'>
          <div>
            {origins.map((origin, index) => (
              <div key={origin.id}>
                {activeOrigin === index + 1 && index !== null && (
                  <div
                    className='p-5 bg-white h-10 overflow-y-scroll'
                    dangerouslySetInnerHTML={{ __html: origin.details }}
                  ></div>
                )}
              </div>
            ))}
          </div>
          {activeOrigin === null && (
            <table className=' border border-black'>
              <thead>
                <tr>
                  <th className='border border-black p-2 text-center'>%</th>
                  <th className='border border-black p-2 text-center'>
                    Origin
                  </th>
                  <th className='border border-black p-2 text-center'>
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-black p-2 text-center'>1 - 2</td>
                  <td className='border border-black p-2 text-center'>
                    The Hue
                  </td>
                  <td className='border border-black p-2 text-center'>
                    Science
                  </td>
                </tr>
                <tr>
                  <td className='border border-black p-2 text-center'>3 - 4</td>
                  <td className='border border-black p-2 text-center'>
                    Mythical
                  </td>
                  <td className='border border-black p-2 text-center'>
                    Almighty
                  </td>
                </tr>
                <tr>
                  <td className='border border-black p-2 text-center'>5 - 6</td>
                  <td className='border border-black p-2 text-center'>
                    Flux Agent
                  </td>
                  <td className='border border-black p-2 text-center'>
                    Cosmic
                  </td>
                </tr>
                <tr>
                  <td className='border border-black p-2 text-center'>7 - 8</td>
                  <td className='border border-black p-2 text-center'>
                    Lumen Fighter
                  </td>
                  <td className='border border-black p-2 text-center'>
                    Technique
                  </td>
                </tr>
                <tr>
                  <td className='border border-black p-2 text-center'>
                    9 - 10
                  </td>
                  <td className='border border-black p-2 text-center'>
                    Visionary
                  </td>
                  <td className='border border-black p-2 text-center'>Magic</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className='mt-20 flex justify-between items-center pb-4 px-4'>
        <Link
          to='/'
          className='
          bg-sky-400 
          rounded-full 
          border-gray-200 
          px-10 
          py-3 
          text-center	
          text-black 
          hover:bg-yellow-950
          hover:text-red-100
          '
        >
          Back
        </Link>
        <Link
          to='/calibers'
          className='
          bg-sky-400 
          rounded-full 
          border-gray-200 
          px-10 
          py-3 
          text-center	
          text-black 
          hover:bg-yellow-950
          hover:text-red-100
          '
        >
          Next
        </Link>
      </div>
    </div>
  )
}

export default Origin
