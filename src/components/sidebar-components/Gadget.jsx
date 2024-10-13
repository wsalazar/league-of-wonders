import { Link } from 'react-router-dom'
import {gadgets} from '../../data'
import { useState } from 'react'
import Select from "react-select";
import NavigationButtons from "../NavigationButtons.jsx";

const Gadget = () => {
    const getSelectedGadget = () => {
        return JSON.parse(localStorage.getItem('selectedGadget')) || availableOptions[0]
    }

    const getAvailableOptions = (availableOptions) => {
        /**
         * todo have to figure out how to remove options that are already selected
         */
        return availableOptions.map(option => {
                return {value: option.id, label: option.label}
            }
        );
    };

    const [availableOptions, setAvailableOptions] = useState(getAvailableOptions(gadgets));
    const [gadgetSelection, setGadgetSelection] = useState(getSelectedGadget());

    const handleGadgetSelection = (option) => {
        setGadgetSelection(() => {
            localStorage.setItem('selectedGadget', JSON.stringify({value: option.value, label: option.label}));
            return {value: option.value, label: option.label}
        })
    };

  return (
      <div className='flex-grow'>
          <h3 className='font-bold uppercase'>Gadget</h3>
          <p className='subtitle mt-5'>Select a Gadget</p>
          <div className='flex'>
              <div className='w-6/12 mr-5 mt-5'>
                  <article>
                      Versatile gear that is very situational. This gear can heal wounds, conceal your presence, or even
                      cause harm to your enemies. You may have up to 3 gadgets at a time. Select one for now.
                  </article>
              </div>
              <div className=' justify-center '>
                  <table className='border border-spacing-28 border-black'>
                      <thead>
                        <tr>
                            <th className='border border-black p-2 text-left'>Gadget</th>
                            <th className='border border-black p-2 text-left'>Slot</th>
                            <th className='border border-black p-2 text-left'>Effect</th>
                        </tr>
                        </thead>
                          <tbody>
                          {gadgets.map((gadget) => {
                          if (gadget.id > 0)
                            return (
                              <tr key={gadget.id}>
                                <td className='border border-black p-2 text-left'>{gadget.label}</td>
                                <td className='border border-black p-2 text-left'>{gadget.slot}</td>
                                <td className='border border-black p-2 text-left'>{gadget.effect}</td>
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
                              onChange={option => handleGadgetSelection(option)}
                              value={gadgetSelection}
                          />
                      </div>
                  </div>
              </div>
          </div>
          <NavigationButtons backPath="/armour" nextPath="/gear"/>
      </div>
  )
}
export default Gadget
