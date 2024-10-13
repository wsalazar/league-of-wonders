import { aspects } from '../../data'
import Select from 'react-select'
import NavigationButtons from "../NavigationButtons.jsx";
import {useState} from "react";

const Aspects = () => {

  const getSelectedAspects = () => {
      return JSON.parse(localStorage.getItem('selectedAspects')) || {}
  }

  const allOptions = [
    {value: '1', label: '1', id: 1},
    {value: '1', label: '1', id: 2},
    {value: '2', label: '2', id: 3},
    {value: '2', label: '2', id: 4},
    {value: '3', label: '3', id: 5},
    {value: '3', label: '3', id: 6},
  ];
  const [selectedValues, setSelectedValues] = useState(getSelectedAspects());
  const getAvailableOptions = (aspectId) => {
    /**
     * todo have to figure out how to remove options that are already selected
     */
    return allOptions.filter(option => {
          return !Object.keys(selectedValues).includes(option.id) &&
          selectedValues[aspectId] !== option.value
        }
    );
  };
  const handleSelectChange = (e, aspect) => {
    setSelectedValues((prev) => {
      localStorage.setItem('selectedAspects', JSON.stringify({...prev, [aspect.id]: e ? e.value : null}));
      return {...prev, [aspect.id]: e ? e.value : null}
    });
  };

  return (
      <div className='flex-grow'>
        <h3 className='font-bold uppercase'>Aspects</h3>
        <p className='subtitle'>ALLOCATE ASPECTS</p>
        <article className='text-balance '>
          Aspects are a measure of a character's chance to complete a task and
          how well they interact with their environment. The higher the Aspect,
          the higher your base chance to overcome a difficult task. The Aspects
          are Strength, Impulse, Mind, Presence, Luck, and Endurance. The
          initial Aspects players have available is 1, 1, 2, 2, 3, 3. Select a
          values within each respective dropdown. After assigning the stats,
          press next to continue.
        </article>
        <div className='grid grid-cols-3 gap-4 mt-5'>
        {aspects.map((aspect) => {
            return (
                <div className='flex flex-col h-44 mb-1' key={aspect.id}>
                    <div className='w-full  items-center aspect-header '>
                      <legend className='w-full font-bold'>{aspect.text}</legend>
                        <Select
                            className='aspect-array'
                            defaultValue='0'
                            isClearable={true}
                            isSearchable={true}
                            name="aspects"
                            options={getAvailableOptions(aspect.id)}
                            placeholder='Select a number'
                            onChange={(e) => handleSelectChange(e, aspect)}
                            value={allOptions.find(opt => opt.value === selectedValues[aspect.id])}
                        />
                    </div>
                    <article className='p-5 text-wrap flex-grow aspect-details' >{aspect.details}</article>
                </div>
            )
          })}
        </div>
        <NavigationButtons backPath="/calibers" nextPath="/primary-stats"/>
      </div>
  )
}
export default Aspects
