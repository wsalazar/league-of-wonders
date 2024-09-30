import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { calibers } from '../../data'
import { toast } from 'react-toastify'

const Calibers = () => {
  const getCalibers = () => {
    return JSON.parse(localStorage.getItem('selectedCalibers')) || []
  }

  const getCaliberTab = () => {
    return parseInt(localStorage.getItem('setCaliberTab')) || 0
  }

  const [selectedCalibers, setSelectedCalibers] = useState(getCalibers)
  const [activeTab, setActiveTab] = useState(getCaliberTab || 0)

  const setSelectedCaliberTab = (index) => {
    setActiveTab(index)
    localStorage.setItem('setCaliberTab', index)
  }

  const setChosenCalibers = (chosenCalibers) => {
    localStorage.setItem('selectedCalibers', JSON.stringify(chosenCalibers))
  }

  const setSelectedActiveTab = (index) => {
    setActiveTab(index)
    localStorage.setItem('setCaliberTab', index)
  }

  const handleCaliberLimit = (e, caliberId) => {
    setSelectedCalibers((previousSelected) => {
      if (previousSelected.length === 3) {
        e.target.checked = false
        toast.error('You can only select three calibers')
      }
      if (previousSelected.includes(caliberId)) {
        const newSelected = previousSelected.filter(
          (caliber) => caliber !== caliberId
        )
        setActiveTab(newSelected.length - 1)
        setChosenCalibers([...newSelected])
        setSelectedCaliberTab(newSelected.length - 1)
        return newSelected
      } else if (previousSelected.length < 3) {
        setSelectedCaliberTab(previousSelected.length)
        setChosenCalibers([...previousSelected, caliberId])
        return [...previousSelected, caliberId]
      }
      setSelectedCaliberTab(activeTab)
      setChosenCalibers([...previousSelected])
      return previousSelected
    })
  }

  return (
    <div className='flex-grow'>
      <h3 className='font-bold uppercase'>Calibers</h3>
      <p className='subtitle'>Choose three Calibers</p>
      <article className='text-balance '>
        CALIBERS define what acharacter is good at. All characters begin with{' '}
        <u>THREE</u> CALIBERS. When a new level is attained, the character must
        either increase the level of a known caliber or attain a new Caliber.
        The available CALIBERS are listed below:
      </article>
      <div className='flex'>
        <div className='mt-5 mr-40'>
          <div className='overflow-y-scroll h-96 w-48 caliber-list-container text-white p-5 rounded-lg'>
            {calibers.map((caliber) => {
              return (
                <div className='calibers' key={caliber.id}>
                  <label className='caliber-label'>
                    <input
                      type='checkbox'
                      checked={selectedCalibers.includes(caliber.id)}
                      onChange={(e) => handleCaliberLimit(e, caliber.id)}
                    />
                    <span className='pl-2'>{caliber.text}</span>
                  </label>
                </div>
              )
            })}
          </div>
        </div>
        <div className='w-auto mt-20 justify-center'>
          {selectedCalibers.length === 0 && (
            <textarea
              readOnly
              value='Select your first Caliber'
              className='bg-white empty-textarea text-center text-black'
              cols='60'
            />
          )}
          <div className='tabs'>
            {selectedCalibers.map((caliberId, index) => (
              <button
                key={caliberId}
                className={`tab rounded-t-lg mr-5 p-2 text-black bg-white ${
                  activeTab === index ? 'active-caliber' : ''
                }`}
                onClick={() => setSelectedActiveTab(index)}
              >
                {calibers[parseInt(caliberId) - 1].text}
              </button>
            ))}
          </div>
          <div className='tab-content'>
            {selectedCalibers.map(
              (caliberId, index) =>
                activeTab === index && (
                  <textarea
                    key={caliberId}
                    className={`bg-white rounded-b-lg p-2`}
                    readOnly
                    value={calibers[parseInt(caliberId) - 1].details}
                    cols='60'
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className='mt-20 flex justify-between items-center pb-4 px-4'>
        <Link
          to='/origin'
          className='
          bg-sky-400 
          rounded-full 
          border-gray-200 
          px-10 
          py-3 
          text-center	
          text-black 
          hover:bg-yellow-950
          hover:text-red-100
          '
        >
          Back
        </Link>
        <span className='caliber-count font-bold rounded-full p-2 w-40 text-center'>
          {selectedCalibers.length} / 3 Selected
        </span>
        <Link
          to='/aspects'
          className='
          bg-sky-400 
          rounded-full 
          border-gray-200 
          px-10 
          py-3 
          text-center	
          text-black 
          hover:bg-yellow-950
          hover:text-red-100
          '
        >
          Next
        </Link>
      </div>
    </div>
  )
}

export default Calibers
