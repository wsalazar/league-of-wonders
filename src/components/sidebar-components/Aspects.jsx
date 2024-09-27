import { Link } from 'react-router-dom'
import { aspects } from '../../data'

const Aspects = () => {
  return (
    <>
      <div className='content'>
        <h3>Aspects</h3>
        <p className='subtitle'>ALLOCATE ASPECTS</p>
        <p>
          Aspects are a measure of a character's chance to complete a task and
          how well they interact with their environment. The higher the Aspect,
          the higher your base chance to overcome a difficult task. The Aspects
          are Strength, Impulse, Mind, Presence, Luck, and Endurance. The
          initial Aspects players have available is 1, 1, 2, 2, 3, 3. Select a
          values within each respective dropdown. After assigning the stats,
          press next to continue.
        </p>
        <div className='aspects-layout'>
          {aspects.map((aspect) => {
            return (
              <div className='aspect-container' key={aspect.id}>
                <div className='aspect-container-header flex justify-between items-center'>
                  <legend className='aspect-text'>{aspect.text}</legend>
                  <select className='aspect-select'>
                    <option value='1'>1</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='3'>3</option>
                  </select>
                </div>
                <p className='aspect-details'>{aspect.details}</p>
              </div>
            )
          })}
        </div>
        <div className='navigation-links'>
          <Link to='/calibers'>Back</Link>
          <Link to='/primary-stats'>Next</Link>
        </div>
      </div>
    </>
  )
}
export default Aspects
