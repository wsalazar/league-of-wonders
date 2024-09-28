import React from 'react'
import { Link } from 'react-router-dom'
import { origins } from '../../data'

const Origin = () => {
  return (
    <div className='flex-grow'>
      <h3 className='font-bold'>Origin</h3>
      <p className='subtitle'>Choose an origin</p>
      <article className='text-balance '>
        To choose an Origin, a player can either select Random Origin or select
        from the provided list. Selecting an origin provides more details about
        it. You may also select the back button after selecting to return to
        this page.
      </article>
      <div className='flex flex-col'>
        <div>
          {origins.map((origin) => (
            <div key={origin.id}>
              <button>{origin.text}</button>
            </div>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <th>%</th>
              <th>Origin</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 - 2</td>
              <td>The Hue</td>
              <td>Science</td>
            </tr>
            <tr>
              <td>3 - 4</td>
              <td>Mythical</td>
              <td>Almighty</td>
            </tr>
            <tr>
              <td>5 - 6</td>
              <td>Flux Agent</td>
              <td>Cosmic</td>
            </tr>
            <tr>
              <td>7 - 8</td>
              <td>Lumen Fighter</td>
              <td>Technique</td>
            </tr>
            <tr>
              <td>9 - 10</td>
              <td>Visionary</td>
              <td>Magic</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-auto flex justify-end pb-4 pr-4'>
        <Link
          to='/'
          className='bg-sky-400 rounded-full border-gray-200 px-10 py-3 text-center	text-black hover:bg-yellow-950		 hover:text-red-100'
        >
          Back
        </Link>
        <Link
          to='/'
          className='bg-sky-400 rounded-full border-gray-200 px-10 py-3 text-center	text-black hover:bg-yellow-950		 hover:text-red-100'
        >
          Next
        </Link>
      </div>
    </div>
  )
}

export default Origin
