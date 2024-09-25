import React from 'react'
import { Link } from 'react-router-dom'
import { origins } from '../../data'

const Origin = () => {
  return (
    <div className='content'>
      <h3>Origin</h3>
      <p className='subtitle'>Choose an origin</p>
      <p>
        To choose an Origin, a player can either select Random Origin or select
        from the provided list. Selecting an origin provides more details about
        it. You may also select the back button after selecting to return to
        this page.
      </p>
      <div className='origin-layout'>
        <div className='origin-buttons'>
          {origins.map((origin) => (
            <div className='origin-container' key={origin.id}>
              <button className='origin-text'>{origin.text}</button>
            </div>
          ))}
        </div>
        <table className='origin-table'>
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
      <div className='navigation-links'>
        <Link to='/'>Back</Link>
        <Link to='/calibers'>Next</Link>
      </div>
    </div>
  )
}

export default Origin
