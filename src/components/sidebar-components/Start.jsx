import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='content'>
      <h3>Character Creator - League of Wonders</h3>
      <br />
      <br />
      Welcome to the League of Wonders, a tabletop roleplaying game that
      immerses you in the exciting world of superheroes.
      <br />
      <br />
      You will be prompted to go through the following the steps to make your
      superhero:
      <br />
      <ol className='custom-list'>
        <li>Choose an Origin.</li>
        <li>Choose Three Calibers.</li>
        <li>Allocate Aspect Values.</li>
        <li>Calculate Primary Stats.</li>
        <li>Grab your Initial Gear.</li>
      </ol>
      Select Next at the bottom of the screen to continue
      <Link to='/origin'>Next</Link>
    </div>
  )
}
export default Start
