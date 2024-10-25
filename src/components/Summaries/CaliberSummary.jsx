import { calibers } from '../../data'
import { useEffect, useState } from 'react'

export const CaliberSummary = ({ id, selectedCalibers }) => {
  const [allCalibers] = useState(calibers)
  // console.log(allCalibers)
  const [chosenCalibers, setChosenCalibers] = useState([])
  useEffect(() => {
    const filteredCalibers = allCalibers
      .filter((caliber) => selectedCalibers.includes(caliber.id))
      .map((caliber) => caliber)
    setChosenCalibers(filteredCalibers)
  }, [selectedCalibers, allCalibers])
  console.log(chosenCalibers)
  return (
    <div className='grid h-full grid-cols-3 gap-5   bg-white'>
      {chosenCalibers.map((chosenCaliber, index) => {
        return (
          <div className='flex flex-col pb-12 mt-5 mb-5 mr-5 h-100' key={index}>
            <div
              className='w-full '
              style={{
                background: '#433d36',
                padding: '10px',
                border: '1px solid #eead67',
                borderRadius: '9999px',
              }}
            >
              <legend
                className='text-2xl font-bold text-center uppercase'
                style={{ color: '#eead67' }}
              >
                {chosenCaliber.text}
              </legend>
            </div>
            <div
              className='flex-grow p-5 overflow-auto border border-black rounded-lg'>
              {chosenCaliber.levelDetails()}
            </div>
          </div>
        )
      })}
    </div>
  )
}
