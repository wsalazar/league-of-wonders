import { origins } from '../../data'
import { useState } from 'react'

export const OriginSummary = ({ id, selectedOriginId }) => {
  const [allOrigins] = useState(origins)
  const selectedOrigin = allOrigins.find(
    (origin) => origin.id === selectedOriginId
  )

  return (
    <div className='grid h-full grid-cols-2 gap-3   bg-white'>
      <div className='flex flex-col mt-5'>
        <div
          className='mb-4 rounded-full'
          style={{
            background: '#433d36',
            padding: '10px',
            border: '1px solid #eead67',
          }}
        >
          <legend
            className='text-2xl font-bold text-center uppercase'
            style={{ color: '#eead67' }}
          >
            {selectedOrigin.text}
          </legend>
        </div>
        <div
          className='flex-grow p-5 overflow-auto text-sm border border-black rounded-lg'

        >{selectedOrigin.levelDetails()}</div>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='text-center font-bold'>
          <h3>Origin Questions (Optional)</h3>
        </div>
        <div className='flex-grow p-5 overflow-auto text-sm border border-black rounded-lg'>
          <p>Your origin questions or content goes here.</p>
        </div>
      </div>
    </div>
  )
}
