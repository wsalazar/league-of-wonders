import { weapons } from '../../data'
import { useState } from 'react'
import NavigationButtons from "../NavigationButtons.jsx";
import Select from "react-select";


const Weapons = () => {
  const [availableWeapons] = useState(weapons);
  const getSelectedFirstWeapon = () => {
      return JSON.parse(localStorage.getItem('selectedFirstWeapon')) || availableWeapons[0]
  }

  const getSelectedSecondWeapon = () => {
      return JSON.parse(localStorage.getItem('selectedSecondWeapon')) || availableWeapons[0]
  }

  const [firstSelectedWeapon, setFirstSelectedWeapon] = useState(getSelectedFirstWeapon())
  const [secondSelectedWeapon, setSecondSelectedWeapon] = useState(getSelectedSecondWeapon())
  const getAvailableOptions = (availableWeapons) => {
    /**
     * todo have to figure out how to remove options that are already selected
     */
    return availableWeapons.map(weapon => {
          return {value: weapon.id, label: weapon.label}
        }
    );
  };
  const handleFirstSelectedWeapon = (option) => {
    setFirstSelectedWeapon(() => {
      localStorage.setItem('selectedFirstWeapon', JSON.stringify({value: option.value, label: option.label}));
      return {value: option.value, label: option.label}
    })
  };

  const handleSecondSelectedWeapon = (option) => {
    setSecondSelectedWeapon(() => {
      localStorage.setItem('selectedSecondWeapon', JSON.stringify({value: option.value, label: option.label}));
      return {value: option.value, label: option.label}
    })
  };

  return (
      <div className='flex-grow'>
        <h3 className='font-bold uppercase'>Weapons</h3>
        <p className='subtitle'>SELECT TWO WEAPONS</p>
        <div className='flex'>
          <div className='w-3/12 mr-5 mt-5'>
            <article>
              Gear that can deal damage and be equipped seamlessly while in
              combat. Depending on the gear, they may need to be wielded with one
              or two hands, and are either light or heavy in weight.
              <div className='pl-12'>
                <ul className='list-disc indent-0'>
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
              </div>
              *Note: If a two handed Weapon is selected, you will be unable to
              gain any mechanical benefit from shields.
            </article>
          </div>
          <div className=' justify-center '>
            <table className='border border-spacing-28 border-black'>
              <thead>
              <tr>
                <th className='border border-black p-2 text-left'>Weapons</th>
                <th className='border border-black p-2 text-left'>Hands</th>
                <th className='border border-black p-2 text-left'>Weight</th>
                <th className='border border-black p-2 text-left'>Effect</th>
                <th className='border border-black p-2 text-left'>Hit</th>
                <th className='border border-black p-2 text-left'>Range</th>
              </tr>
              </thead>
              <tbody>
              {weapons.map((weapon) => {
                if (weapon.id > 0)
                return (
                    <tr key={weapon.id}>
                      <td className='border border-black p-2 text-left '>{weapon.label}</td>
                      <td className='border border-black p-2 text-left '>{weapon.hand}</td>
                      <td className='border border-black p-2 text-left '>{weapon.weight}</td>
                      <td className='border border-black p-2 text-left '>{weapon.effect}</td>
                      <td className='border border-black p-2 text-left '>{weapon.hit}</td>
                      <td className='border border-black p-2 text-left '>{weapon.range}</td>
                    </tr>
                )
              })}
              </tbody>
            </table>
            <div className='flex mt-2'>
              <div className='w-7/12 mr-5 justify-center'>
                <Select
                    defaultValue={availableWeapons[0]}
                    isClearable={true}
                    isSearchable={true}
                    id="weapons-1"
                    options={getAvailableOptions(availableWeapons)}
                    placeholder='Select a weapon'
                    onChange={option => handleFirstSelectedWeapon(option)}
                    value={firstSelectedWeapon}
                />
              </div>
              <div className='w-7/12 justify-center'>
                <Select
                    defaultValue={availableWeapons[0]}
                    isClearable={true}
                    isSearchable={true}
                    id="weapons-2"
                    options={getAvailableOptions(availableWeapons)}
                    placeholder='Select a weapon'
                    onChange={option => handleSecondSelectedWeapon(option)}
                    value={secondSelectedWeapon}
                />
              </div>
            </div>
          </div>
        </div>
        <NavigationButtons backPath="/primary-stats" nextPath="/armour"/>
      </div>
  )
}
export default Weapons
