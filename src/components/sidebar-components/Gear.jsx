import React from 'react'
import { Link } from 'react-router-dom'

const Gear = () => {
  return (
    <div className='content'>
      <h3>Gear</h3>
      <p className='subtitle'>Your Gear</p>
      <p>
        The Primary Stats are Resilience, Life, and Movement. Resilience
        represents how much willpower the hero has, Life determines if a hero is
        healthy, while movement determines how fast they are. The Primary Stats
        are automatically calculated based on the Aspect allocation. Press next
        if you like the values, or press back if you need to change your
        Aspects.
      </p>
      <br />
      <br />
      <br />
      <div className='primary-stats-layout'>
        return (
        <div className='primary-stats-container'>
          <div className='primary-stats-container-header flex justify-between items-center'>
            <legend className='primary-stats-text'></legend>
          </div>
          <p
            className='primary-stats-details'
            style={{ textAlign: 'center' }}
          ></p>
        </div>
        )
      </div>
      <div className='navigation-links'>
        <Link to='/aspects'>Back</Link>
        <Link to='/gear'>Next</Link>
      </div>
    </div>
  )
}

export default Gear
