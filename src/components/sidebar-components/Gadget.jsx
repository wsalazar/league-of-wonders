import { Link } from 'react-router-dom'
import { gadgets } from '../../data'
import { useState } from 'react'

const Gadget = () => {
  return (
    <div className='content'>
      <h3>Gadget</h3>
      <p className='subtitle'>Select a Gadget</p>
      <div className='gadget-layout'>
        <div className='gadget-container'>
          <article>
            Gear that protect the wearer from harm is known as armor. This gear
            can reduce damage that is inflicted to you. Armor types are head,
            Outerwear, chest, hands, legs, and feet. Only one gear per slot may
            be equipped.
          </article>
        </div>
        <div className='gadget-container-layout'>
          <div className='gadget-table-container'>
            <table className='bordered-table'>
              <thead>
                <tr>
                  <th>Armour</th>
                  <th>Slot</th>
                  <th>Weight</th>
                  <th>Effect</th>
                </tr>
              </thead>
              <tbody>
                {armours.map((armour) => {
                  return (
                    <tr key={armour.id}>
                      <td>{armour.armour}</td>
                      <td>{armour.slot}</td>
                      <td>{armour.weight}</td>
                      <td>{armour.effect}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='gadget-selection-container'>
            <select>
              <option>Select an Gadget</option>
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
export default Gadget
