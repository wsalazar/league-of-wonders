import { primaryStats } from '../../data'
import { useState } from 'react'
import NavigationButtons from "../NavigationButtons.jsx";

const PrimaryStats = () => {
    const getSelectedPrimaryStatValues = () => {
        return JSON.parse(localStorage.getItem('selectedAspects')) || {}
    }

    const [primaryStatValues, setPrimaryStatValues] = useState(getSelectedPrimaryStatValues())
  return (
      <div className='flex-grow'>
          <h3 className='font-bold uppercase'>Primary Stats</h3>
          <p className='subtitle'>CALCULATE PRIMARY STATS</p>
          <article className='text-balance '>
              The Primary Stats are Resilience, Life, and Movement. Resilience
              represents how much willpower the hero has, Life determines if a hero is
              healthy, while movement determines how fast they are. The Primary Stats
              are automatically calculated based on the Aspect allocation. Press next
              if you like the values, or press back if you need to change your
              Aspects.
          </article>
          <br/>
          <div className='grid grid-cols-3 gap-4 mt-5'>
              {primaryStats.map((primaryStat) => {
                  return (
                      <div className='flex flex-col h-44 mb-1' key={primaryStat.id}>
                          <div
                              className='w-full  items-center flex justify-between'
                              style={
                              {
                                  background: '#52aab1',
                                  padding: '10px',
                              }}
                          >
                              <legend className='w-full font-bold'>
                                  {primaryStat.text}
                              </legend>
                          </div>
                          <article className='text-white h-36' style={
                              {
                                  textAlign: 'center',
                                  background: '#2d2721',
                                  lineHeight: '7.5',
                              }}>
                              {primaryStat.details}
                          </article>
                      </div>
                  )
              })}
          </div>
          <div className='grid grid-cols-3 gap-4 mt-5'>
              <div className='flex flex-col h-44 mb-1'>
                  <div
                      className='rounded-full p-2'
                      style={
                          {
                              background: '#d39884',
                              margin: '5px',
                          }}
                  >
                      <p className='text-black font-bold text-center'>
                          RESILIENCE = 45
                      </p>
                  </div>
              </div>
              <div className='flex flex-col h-44 mb-1'>
                  <div
                      className='rounded-full p-2'
                      style={
                          {
                              background: '#d39884',
                              margin: '5px',
                          }}
                  >
                      <p className='text-black font-bold text-center'>
                          LIFE = {parseInt(primaryStatValues['6']) +10}
                      </p>
                  </div>
              </div>
              <div className='flex flex-col h-44 mb-1'>
                  <div
                      className='rounded-full p-2'
                      style={
                          {
                              background: '#d39884',
                              margin: '5px',
                          }}
                  >
                      <p className='text-black font-bold text-center'>
                          MOVEMENT = {parseInt(primaryStatValues['2']) + 5}
                      </p>
                  </div>
              </div>
          </div>
          <NavigationButtons backPath="/aspects" nextPath="/weapons"/>
      </div>
  )
}
export default PrimaryStats
