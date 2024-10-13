import NavigationButtons from "../NavigationButtons.jsx";

const Gear = () => {

    const selectedFirstWeapon = JSON.parse(localStorage.getItem('selectedFirstWeapon'))
    const selectedSecondWeapon = JSON.parse(localStorage.getItem('selectedSecondWeapon'))
    const selectedArmour = JSON.parse(localStorage.getItem('selectedArmour'))
    const selectedGadget = JSON.parse(localStorage.getItem('selectedGadget'))

    console.log(selectedFirstWeapon, selectedSecondWeapon, selectedArmour, selectedGadget)
  return (
      <div className='flex-grow '>
          <h3 className='font-bold uppercase'>Gear</h3>
          <p className='subtitle mt-5'>Your Gear</p>
          <article className='text-balance '>
              Here are your selected Weapons, Armor and Gadget.
          </article>
          <br/>
          <div className='grid grid-cols-3 gap-4 mt-5'>
              <div className='flex flex-col h-44 mb-1'>
                  <div
                      className='w-full rounded-full  items-center flex justify-between'
                      style={
                          {
                              backgroundColor: '#eead67',
                              textAlign: 'center',
                              background: '#eead67',
                              padding: '10px',
                          }}
                  >
                      <legend className='w-full font-bold'>
                          Weapons
                      </legend>
                  </div>
                  <article className='text-white h-36 flex items-center justify-center' style={
                      {
                          backgroundColor: '#b3512e',
                          textAlign: 'center',
                          background: '#b3512e',
                      }}>
                      {selectedFirstWeapon.label} <br/>
                      {selectedSecondWeapon.label}

                  </article>
              </div>
              <div className='flex flex-col h-44 mb-1'>
                  <div
                      className='w-full rounded-full  items-center flex justify-between'
                      style={
                          {
                              backgroundColor: '#eead67',
                              textAlign: 'center',
                              background: '#eead67',
                              padding: '10px',
                          }}
                  >
                      <legend className='w-full font-bold'>
                          Armour
                      </legend>
                  </div>
                  <article className='text-white h-36 flex items-center justify-center' style={
                      {
                          backgroundColor: '#b3512e',
                          textAlign: 'center',
                          background: '#b3512e',
                      }}>
                      {selectedArmour.label}
                  </article>
              </div>
              <div className='flex flex-col h-44 mb-1'>
                  <div
                      className='w-full rounded-full  items-center flex justify-between'
                      style={
                          {
                              backgroundColor: '#eead67',
                              textAlign: 'center',
                              background: '#eead67',
                              padding: '10px',
                          }}
                  >
                      <legend className='w-full font-bold'>
                          Gadget
                      </legend>
                  </div>
                  <article className='text-white h-36 flex items-center justify-center' style={
                      {
                          backgroundColor: '#b3512e',
                          textAlign: 'center',
                          background: '#b3512e',
                      }}>
                      {selectedGadget.label}
                  </article>
              </div>
          </div>
          <NavigationButtons backPath="/gadget" nextPath="/summary"/>
      </div>
  )
}

export default Gear
