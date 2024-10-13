import { armours } from '../../data'
import NavigationButtons from '../NavigationButtons'
import Select from "react-select";
import {useState} from "react";

const Armour = () => {



    const getAvailableOptions = (availableOptions) => {
        /**
         * todo have to figure out how to remove options that are already selected
         */
        return availableOptions.map(option => {
                return {value: option.id, label: option.label}
            }
        );
    };
    const [availableOptions, setAvailableOptions] = useState(getAvailableOptions(armours));

    const getSelectedArmour = () => {
        return JSON.parse(localStorage.getItem('selectedArmour')) || availableOptions[0]
    }

    const [armourSelection, setArmourSelection] = useState(getSelectedArmour());

    const handleArmourSelection = (option) => {
        setArmourSelection(() => {
            localStorage.setItem('selectedArmour', JSON.stringify({value: option.value, label: option.label}));
            return {value: option.value, label: option.label}
        })
    };

  return (
      <div className='flex-grow'>
          <h3  className='font-bold uppercase'>Armor</h3>
          <p className='subtitle mt-5'>SELECT AN Armor</p>
          <div className='flex'>
              <div className='w-6/12 mr-5 mt-5'>
                  <article>
                      Gear that protect the wearer from harm is known as armor. This gear can
                      reduce damage that is inflicted to you. Armor types are head, Outerwear,
                      chest, hands, legs, and feet. Only one gear per slot may be equipped.
                  </article>
              </div>
              <div className=' justify-center '>
                  <table className='border border-spacing-28 border-black'>
                      <thead>
                      <tr>
                          <th className='border border-black p-2 text-left'>Armour</th>
                          <th className='border border-black p-2 text-left'>Slot</th>
                          <th className='border border-black p-2 text-left'>Weight</th>
                          <th className='border border-black p-2 text-left'>Effect</th>
                      </tr>
                      </thead>
                      <tbody>
                      {armours.map((armour) => {
                          if (armour.id > 0)
                          return (
                              <tr key={armour.id}>
                                  <td className='border border-black p-2 text-left'>{armour.label}</td>
                                  <td className='border border-black p-2 text-left'>{armour.slot}</td>
                                  <td className='border border-black p-2 text-left'>{armour.weight}</td>
                                  <td className='border border-black p-2 text-left'>{armour.effect}</td>
                              </tr>
                          )
                      })}
                      </tbody>
                  </table>
                  <div className='flex mt-5 justify-center'>
                      <div className='w-7/12 '>
                          <Select
                              defaultValue={availableOptions[0]}
                              isClearable={true}
                              isSearchable={true}
                              id="weapons-1"
                              options={availableOptions}
                              placeholder='Select a weapon'
                              onChange={option => handleArmourSelection(option)}
                              value={armourSelection}
                          />
                      </div>
                  </div>
              </div>
          </div>
          <NavigationButtons backPath="/weapons" nextPath="/gadget"/>
      </div>
  )
}
export default Armour;