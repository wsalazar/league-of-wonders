import { Link } from 'react-router-dom'
import { weapons } from '../../data'
import { useState } from 'react'

const Weapons = () => {
  return (
    <div className='content'>
      <h3>Weapons</h3>
      <p className='subtitle'>SELECT TWO WEAPONS</p>
      <div className='weapons-layout'>
        <div className='weapons-container'>
          <article>
            Gear that can deal damage and be equipped seamlessly while in
            combat. Depending on the gear, they may need to be wielded with one
            or two hands, and are either light or heavy in weight.
            <ul>
              <li>
                One Handed Weapons: These weapons are wielded in one hand.
              </li>
              <li>
                Two handed Weapons*: These weapons are wielded with two hands.
              </li>
              <li>
                Light: The weapon is made of light weight material. (Able to
                Dual Wield)
              </li>
              <li>Heavy: The weapon is made of heavy materials.</li>
            </ul>
            *Note: If a two handed Weapon is selected, you will be unable to
            gain any mechanical benefit from shields.
          </article>
        </div>
        <div className='weapons-container-layout'>
          <div className='weapons-table-container'>
            <table className='bordered-table'>
              <thead>
                <tr>
                  <th>Weapons</th>
                  <th>Hands</th>
                  <th>Weight</th>
                  <th>Effect</th>
                  <th>Hit</th>
                  <th>Range</th>
                </tr>
              </thead>
              <tbody>
                {weapons.map((weapon) => {
                  return (
                    <tr key={weapon.id}>
                      <td>{weapon.weapon}</td>
                      <td>{weapon.hand}</td>
                      <td>{weapon.weight}</td>
                      <td>{weapon.effect}</td>
                      <td>{weapon.hit}</td>
                      <td>{weapon.range}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='weapons-selection-container'>
            <select>
              <option>Select Weapon 1</option>
              {weapons.map((weapon) => {
                return <option key={weapon.id}>{weapon.weapon}</option>
              })}
            </select>
            <select>
              <option>Select Weapon 2</option>
              {weapons.map((weapon) => {
                return <option key={weapon.id}>{weapon.weapon}</option>
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
export default Weapons
