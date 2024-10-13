import { Link } from 'react-router-dom'
import NavigationButtons from "../NavigationButtons.jsx";

const Start = () => {
  return (
    <div className='flex-grow'>
      <h3 className='font-bold'>Character Creator - League of Wonders</h3>
      <br />
      <br />
      <article>
        Welcome to the League of Wonders, a tabletop roleplaying game that
        immerses you in the exciting world of superheroes.
      </article>
      <br />
      <br />
      You will be prompted to go through the following the steps to make your
      superhero:
      <br />
      <ol className='list-decimal pl-4'>
        <li>Choose an Origin.</li>
        <li>Choose Three Calibers.</li>
        <li>Allocate Aspect Values.</li>
        <li>Calculate Primary Stats.</li>
        <li>Grab your Initial Gear.</li>
      </ol>
      <br />
      Select Next at the bottom of the screen to continue
    <NavigationButtons nextPath="/origin"/>
    </div>
  )
}

export default Start
