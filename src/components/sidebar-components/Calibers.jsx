import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { calibers } from '../../data'

const Calibers = () => {
  const [selectedCalibers, setSelectedCalibers] = useState([])
  const [activeTab, setActiveTab] = useState(0)

  const handleCaliberLimit = (e, caliberId) => {
    setSelectedCalibers((previousSelected) => {
      if (previousSelected.length === 3) {
        e.target.checked = false
        // set an alert or toastr saying that the max has been reached
      }
      if (previousSelected.includes(caliberId)) {
        return previousSelected.filter((caliber) => caliber !== caliberId)
      } else if (previousSelected.length < 3) {
        return [...previousSelected, caliberId]
      }
      return previousSelected
    })
  }

  return (
    <div className='content'>
      <h3>Calibers</h3>
      <p className='subtitle'>Choose three Calibers</p>
      <p>
        CALIBERS define what acharacter is good at. All characters begin with{' '}
        <u>THREE</u> CALIBERS. When a new level is attained, the character must
        either increase the level of a known caliber or attain a new Caliber.
        The available CALIBERS are listed below:
      </p>
      <br />
      <br />
      <br />
      <div className='caliber-layout'>
        <div className='caliber-list-container'>
          <div className='caliber-list'>
            {calibers.map((caliber) => {
              return (
                <div className='calibers' key={caliber.id}>
                  <label className='caliber-label'>
                    <input
                      type='checkbox'
                      className='caliber-checkbox'
                      onChange={(e) => handleCaliberLimit(e, caliber.id)}
                    />
                    <span className='caliber-text'>{caliber.text}</span>
                  </label>
                </div>
              )
            })}
          </div>
        </div>
        <div className='caliber-details'>
          {selectedCalibers.length === 0 && (
            <textarea
              readOnly
              value='Select your first Caliber'
              className='empty-textarea'
            />
          )}
          <div className='tabs'>
            {selectedCalibers.map((caliberId, index) => (
              <button
                key={caliberId}
                className={`tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {calibers[caliberId - 1].text}
              </button>
            ))}
          </div>
          <div className='tab-content'>
            {selectedCalibers.map((caliberId, index) => (
              <textarea
                key={caliberId}
                className={`caliber-textarea ${
                  activeTab === index ? 'active' : ''
                }`}
                readOnly
                value={calibers[caliberId - 1].details}
              />
            ))}
          </div>
        </div>
      </div>
      Select Next at the bottom of the screen to continue
      <div className='navigation-links'>
        <Link to='/origin'>Back</Link>
        <span className='caliber-count'>
          {selectedCalibers.length} / 3 Selected
        </span>
        <Link to='/aspects'>Next</Link>
      </div>
    </div>
  )
}

export default Calibers
