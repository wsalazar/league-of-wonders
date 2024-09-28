import { Link } from 'react-router-dom'
import { gadgets } from '../../data'
import { useState } from 'react'

const Armour = () => {
  return (
    <div className='content'>
      <h3>Gadget</h3>
      <p className='subtitle'>Select a Gadget</p>
      <div className='gadget-layout'>
        <div className='gadget-container'>
          <article>
            Versatile gear that is very situational. This gear can heal wounds,
            conceal your presence, or even cause harm to your enemies. You may
            have up to 3 gadgets at a time. Select one for now.
          </article>
        </div>
        <div className='gadget-container-layout'>
          <div className='gadget-table-container'>
            <table className='bordered-table'>
              <thead>
                <tr>
                  <th>Gadget</th>
                  <th>Slot</th>
                  <th>Effect</th>
                </tr>
              </thead>
              <tbody>
                {gadgets.map((gadget) => {
                  return (
                    <tr key={gadget.id}>
                      <td>{gadget.gadget}</td>
                      <td>{gadget.slot}</td>
                      <td>{gadget.effect}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='gadget-selection-container'>
            <select>
              <option>Select a Gadget</option>
              {gadgets.map((gadget) => {
                return <option key={gadget.id}>{gadget.gadget}</option>
              })}
            </select>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='navigation-links'>
        <Link to='/aspects'>Back</Link>
        <Link to='/gear'>Next</Link>
      </div>
    </div>
  )
}
export default Armour
