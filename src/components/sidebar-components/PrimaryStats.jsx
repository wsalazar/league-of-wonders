import { Link } from 'react-router-dom'
import { primaryStats } from '../../data'
import { useState } from 'react'

const PrimaryStats = () => {
  const [primaryStatValues, setPrimaryStatValues] = useState([
    'RESILIENCE = 45',
    '12',
    '6 SPACES',
  ])
  return (
    <div className='content'>
      <h3>Primary Stats</h3>
      <p className='subtitle'>CALCULATE PRIMARY STATS</p>
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
        {primaryStats.map((primaryStat) => {
          return (
            <div className='primary-stats-container' key={primaryStat.id}>
              <div className='primary-stats-container-header flex justify-between items-center'>
                <legend className='primary-stats-text'>
                  {primaryStat.text}
                </legend>
              </div>
              <p
                className='primary-stats-details'
                style={{ textAlign: 'center' }}
              >
                {primaryStat.details}
              </p>
            </div>
          )
        })}
      </div>
      <div className='primary-stats-values-layout'>
        {primaryStatValues.map((value, index) => {
          return (
            <div className='primary-stats-values-container' key={index + 1}>
              <p className='primary-stats-values-details'>
                {primaryStatValues[index]}
              </p>
            </div>
          )
        })}
      </div>
      <div className='navigation-links'>
        <Link to='/aspects'>Back</Link>
        <Link to='/gear'>Next</Link>
      </div>
    </div>
  )
}
export default PrimaryStats
