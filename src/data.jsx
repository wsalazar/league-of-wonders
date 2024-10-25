import Select from "react-select";
import {useState} from "react";

const MythicalSelect = () => {
  const selectedFirstWeapon = JSON.parse(localStorage.getItem('selectedFirstWeapon'))
  const selectedSecondWeapon = JSON.parse(localStorage.getItem('selectedSecondWeapon'))

  const options = [
    selectedFirstWeapon,
    selectedSecondWeapon,
  ]
  const getSelectedDivineWeapon = () => {
    const selectedDivineWeapon = localStorage.getItem('selectedDivineWeapon')
    if (selectedDivineWeapon) {
      return JSON.parse(selectedDivineWeapon).value
    }
    return null
  }

  const [selectedDivineWeapon, setSelectedDivineWeapon] = useState(getSelectedDivineWeapon())

  const handleSelectChange = (e) => {
    const selectedValue = e.value
    localStorage.setItem('selectedDivineWeapon', JSON.stringify({value: selectedValue}))
    setSelectedDivineWeapon(selectedValue)
  }

  return <Select
      defaultValue={null}
      isClearable={true}
      isSearchable={true}
      name="fencer-weapon"
      options={options}
      placeholder='Select a divine weapon'
      className='fencer-select overflow-visible'
      onChange={(e) => handleSelectChange(e)}
      value={options.find(opt => opt.value === selectedDivineWeapon)

      }
  />
}

const FencerSelect = () => {
  const getSelectedFencerWeapon = () => {
      const selectedFencerWeapon = localStorage.getItem('selectedFencerWeapon')
      if (selectedFencerWeapon) {
          return JSON.parse(selectedFencerWeapon).value
      }
      return null
  }
  const [selectedCaliber, setSelectedCaliber] = useState(getSelectedFencerWeapon())
  const fencerWeaponOptions =
      [
        { value: 'saber', label: 'Saber', id: 1},
        { value: 'dagger', label: 'Dagger', id: 2},
        { value: 'longSword', label: 'Long Sword', id: 3},
      ]
  const handleSelectChange = (e) => {
      const selectedValue = e.value
      localStorage.setItem('selectedFencerWeapon', JSON.stringify({value: selectedValue}))
      setSelectedCaliber(selectedValue)
  }
  return <Select
      defaultValue={null}
      isClearable={true}
      isSearchable={true}
      name="fencer-weapon"
      options={[
        { value: 'saber', label: 'Saber' },
        { value: 'dagger', label: 'Dagger' },
        { value: 'longSword', label: 'Long Sword' },
      ]}
      placeholder='Select a fencer weapon'
      className='fencer-select overflow-visible'
      onChange={(e) => handleSelectChange(e)}
      value={fencerWeaponOptions.find(opt => opt.value === selectedCaliber)

  }
  />
}

export const navigation = [
  {
    id: 1,
    url: '/',
    text: 'Start',
  },
  {
    id: 2,
    url: '/origin',
    text: 'Origin',
  },
  {
    id: 3,
    url: '/calibers',
    text: 'Calibers',
  },
  {
    id: 4,
    url: '/aspects',
    text: 'Aspects',
  },
  {
    id: 5,
    url: '/primary-stats',
    text: 'Primary Stats',
  },
  {
    id: 6,
    url: '/weapons',
    text: 'Weapons',
  },
  {
    id: 7,
    url: '/armour',
    text: 'Armour',
  },
  {
    id: 8,
    url: '/gadget',
    text: 'Gadget',
  },
  {
    id: 9,
    url: '/gear',
    text: 'Gear',
  },
  {
    id: 10,
    url: '/summary',
    text: 'Summary',
  },
]

export const origins = [
  {
    id: 1,
    text: 'Flux Agent',
    details:
      '<strong>Flux Agents</strong> are highly skilled in the use of firearms and explosives.',
  },
  {
    id: 2,
    text: 'The Hue',
    details:
      '<strong>The Hue</strong> are highly skilled in the use of firearms and explosives.',
  },
  {
    id: 3,
    text: 'Mythical',
    details:
      '<strong>Mythical</strong> are highly skilled in the use of firearms and explosives.',
    levelDetails: () => (
        <>
            <h3 className="uppercase ">Abilities</h3>
            <div style={{color:'#52aab1'}}><strong>Divine Weapon</strong></div>
            Level 1<br/>
            Choose any one weapon noted in the Gear section. The chosen weapon is now considered a Divine Weapon.
            Divine Weapons can only <br/>
            be wielded by their chosen MYTHICAL and are indestructible. The Mythical must pray to their deity for 3
            hours to remove the Divine descriptor from one weapon and add it to another. Divine Weapons Inflict an
            additional 3<br/>
            Absolute Damage. <br/>
            <MythicalSelect />
        </>
    )
  },
  {
    id: 4,
    text: 'Lumen Fighter',
    details:
      '<strong>Lumen Fighter</strong> are highly skilled in the use of firearms and explosives.',
  },
  {
    id: 5,
    text: 'Visionary',
    details:
      '<strong>Visionary</strong> are highly skilled in the use of firearms and explosives.',
  },
]

export const calibers = [
  {
    id: 1,
    text: 'Archer',
    details:
      'Archers use Longbows, Crossbows, and Hand-Crossbows to ensnare their targets and deal effective damage.',
  },
  {
    id: 2,
    text: 'Brawler',
    details: 'Trained in the art of unarmed combat and battle tactics.',
  },
  {
    id: 3,
    text: 'Chronologer',
    details:
      'A Chronologer relies on their vast knowledge of time and imposing presence to manipulate their foes and support their allies.',
    levelDetails: () => (
        <>
            <div style={{color:'#52aab1'}}><strong>FRACTURE</strong></div>
            Level 1<br/>
          You fracture the personal time of a target to<br/>
          inflict MIND Dice universal damage to them.<br/>
            <strong>Range</strong>: Nearby<br/><strong>Action</strong>: Instant
        </>
    )
  },
  {
    id: 4,
    text: 'Clever',
    details:
      'A highly intelligent person who uses their mind to form plans and assess SITUATIONS.',
  },
  {
    id: 5,
    text: 'Defender',
    details:
      'Defenders are defensive combat experts who use their abilities to mitigate damage from not only themselves, but also their allies.',
  },
  {
    id: 6,
    text: 'Driver',
    details: 'You have a need, a need for speed!',
  },
  {
    id: 7,
    text: 'Esper',
    details:
      'Empathic and telepathic beings. They can create illusions, read minds, and speak telepathically.',
  },
  {
    id: 8,
    text: 'Fencer',
    details: 'You are proficient at using Sabers, daggers, and Long Swords.',
    levelDetails: () => (
        <>
            <div style={{color:'#52aab1'}}><strong>EN GARDE</strong></div>
            Level 1<br/>
            When you use a Saber, Dagger, or Long Sword, you may add your Fencer Level to
            the damage. Choose either a Saber, Dagger, or Long Sword to add to your
            inventory. <br/>
            <strong>Action</strong>: Passive <br/>
            <FencerSelect />

        </>
    )
  },
  {
    id: 9,
    text: 'Forcer',
    details: 'You have the power of telekinesis.',
  },
  {
    id: 10,
    text: 'Gambler',
    details: 'You are incredibly lucky and bend probability to your whims.',
  },
  {
    id: 11,
    text: 'Glitter',
    details: 'You are amazingly beautiful, inside, and out, but mostly out.',
  },
  {
    id: 12,
    text: 'Improviser',
    details:
      'Improvisers are experts at turning mundane items into effective tools. They can defuse bombs with a piece of chewing gum or craft a communications device with a wire hanger.',
  },
  {
    id: 13,
    text: 'Inspirer',
    details:
      'Inspirers are the heart of the team. They motivate their allies to do their best and love to play a supportive role.',
  },
  {
    id: 14,
    text: 'Manifester',
    details:
      'Manifesters can create matter at will. Food, equipment, and creature creation are just a few examples.',
  },
  {
    id: 15,
    text: 'Mightier',
    details: 'You are strong, super strong even.',
  },
  {
    id: 16,
    text: 'Spacer',
    details:
      'Spacers use fast hand movements and hand signs akin to sign language to manipulate space to their will.',
  },
  {
    id: 17,
    text: 'Speedster',
    details: 'You are incredibly fast.',
    levelDetails: () => (
        <>
            <div style={{color:'#52aab1'}}><strong>JOGGER</strong></div>
            Level 1<br/>
            You can move incredibly fast; your base Impulse is increased by 1.<br/>
            <strong>Action</strong>: Passive
        </>
    )
  },
  {
    id: 18,
    text: 'Tougher',
    details: 'You are incredibly tough.',
  },
  {
    id: 19,
    text: 'Tumbler',
    details:
      'Tumblers are acrobats, who can maneuver gracefully and narrowly escape harm.',
  },
  {
    id: 20,
    text: 'Wrestler',
    details: 'Wrestlers are trained in the art of Strikes, throws, and holds.',
  },
]

export const aspects = [
  {
    id: 1,
    text: 'STRENGTH',
    details:
      'Determines how much weight can be lifted and effectiveness of Strength based abilities.',
  },
  {
    id: 2,
    text: 'IMPULSE',
    details:
      'Determines the speed of the hero and effectiveness of Impulse based abilities.',
  },
  {
    id: 3,
    text: 'MIND',
    details:
      'Determines how intelligent the hero is and the effectiveness of Mind based abilities',
  },
  {
    id: 4,
    text: 'PRESENCE',
    details:
      'Determines how beautiful and persuasive your hero is and the effectiveness of Presence Abilities.',
  },
  {
    id: 5,
    text: 'LUCK',
    details:
      'Determines the effectiveness of critical hits and Luck based abilities.',
  },
  {
    id: 6,
    text: 'ENDURANCE',
    details:
      'Determines a heroes survivability, toughness, and effectiveness of Endurance based abilities.',
  },
]

export const primaryStats = [
  {
    id: 1,
    text: 'RESILIENCE',
    details: 'RESILIENCE = Level x 15',
  },
  {
    id: 2,
    text: 'LIFE',
    details: 'LIFE = ENDURANCE + 10',
  },
  {
    id: 3,
    text: 'MOVEMENT',
    details: 'MOVEMENT Spaces = IMPULSE + 5',
  },
]

export const allWeapons = [

  {
    id: 1,
    label: 'Saber',
  },
  {
    id: 2,
    label: 'Dagger',
  },
  {
    id: 3,
    label: 'Knuckles',
  },
  {
    id: 4,
    label: 'Hand Crossbow',
  },
  {
    id: 5,
    label: 'Crossbow',
  },
  {
    id: 6,
    label: 'Staff',
  },
  {
    id: 7,
    label: 'Longsword',
  },
  {
    id: 8,
    label: 'Longbow',
  },
  {
    id: 9,
    label: 'Sphere',
  },
  {
    id: 10,
    label: 'Chakram',
  },
  {
    id: 11,
    label: 'Sling',
  },
]

export const weapons = [
  {
    id: -1,
    label: 'Please select a weapon',
    hand: '',
    weight: '',
    effect: '',
    hit: '',
    range: '',
  },
  {
    id: 1,
    label: 'Saber',
    hand: 'One',
    weight: 'Light',
    effect: 'Strength Dice Slashing damage.',
    hit: 'Strength',
    range: 'Adjacent',
  },
  {
    id: 2,
    label: 'Dagger',
    hand: 'One',
    weight: 'Light',
    effect: 'Impulse Dice Piercing damage.',
    hit: 'Impulse',
    range: 'Adjacent',
  },
  {
    id: 3,
    label: 'Knuckles',
    hand: 'One',
    weight: 'Light',
    effect: 'Strength Dice Bludgeoning damage.',
    hit: 'Strength',
    range: 'Adjacent',
  },
  {
    id: 4,
    label: 'Hand Crossbow',
    hand: 'One',
    weight: 'Heavy',
    effect: 'Impulse Dice Piercing damage.',
    hit: 'Impulse',
    range: 'Adjacent',
  },
  {
    id: 5,
    label: 'Crossbow',
    hand: 'Two',
    weight: 'Heavy',
    effect: '2 + Impulse Dice Piercing damage.',
    hit: 'Impulse',
    range: 'Nearby',
  },
  {
    id: 6,
    label: 'Staff',
    hand: 'Two',
    weight: 'Heavy',
    effect: '2 + Strength Dice Bludgeoning damage.',
    hit: 'Strength',
    range: 'Adjacent',
  },
  {
    id: 7,
    label: 'Longsword',
    hand: 'Two',
    weight: 'Heavy',
    effect: '4 + Strength Dice Slashing damage.',
    hit: 'Strength',
    range: 'Nearby',
  },
  {
    id: 8,
    label: 'Longbow',
    hand: 'Two',
    weight: 'Heavy',
    effect: '4 + Impulse Dice Piercing damage.',
    hit: 'Impulse',
    range: 'Far',
  },
  {
    id: 9,
    label: 'Sphere',
    hand: 'One',
    weight: 'Heavy',
    effect: '4 + Impulse Dice Bludgeoning damage.',
    hit: 'Strength',
    range: 'Far',
  },
  {
    id: 10,
    label: 'Chakram',
    hand: 'One',
    weight: 'Light',
    effect: '4 + Impulse Dice Slashing damage.',
    hit: 'Impulse',
    range: 'Far',
  },
  {
    id: 11,
    label: 'Sling',
    hand: 'Two',
    weight: 'Light',
    effect: '2 + Strength Dice Bludgeoning damage.',
    hit: 'Impulse',
    range: 'Far',
  },
]

export const armours = [
  {
    id: -1,
    label: 'Please select your armor',
    slot: '',
    weight: '',
    effect: '',
  },{
    id: 1,
    label: 'Leather Mask',
    slot: 'Head',
    weight: 'Light',
    effect: 'Reduces damage taken from critical hits by 6.',
  },
  {
    id: 2,
    label: 'Hooded Cloak',
    slot: 'Outerwear',
    weight: 'Light',
    effect: 'Reduces Bludgeoning, Piercing, and Slashing damage by 3.',
  },
  {
    id: 3,
    label: 'Armoured Cloak',
    slot: 'Outerwear',
    weight: 'Light',
    effect:
      'Reduces Bludgeoning, Piercing, and Slashing damage by 5. While equipped, your speed is halved (Round Down, minimum 1).',
  },
  {
    id: 4,
    label: 'Spandex Suit',
    slot: 'Outerwear',
    weight: 'Light',
    effect: 'Reduces Fire, Electric, and Universal Damage by 3.',
  },
  {
    id: 5,
    label: 'Buckler',
    slot: 'One Hand',
    weight: 'Light',
    effect:
      'Your shield has a defense of 1. When wielded, reduce damage taken by 1. Note: You do not gain the benefit of this Buckler if you have a 2 handed weapon in your possession.',
  },
]

export const gadgets = [
  {
    id: -1,
    label: 'Please select your armor',
    slot: '',
    weight: '',
    effect: '',
  },
  {
    id: 1,
    label: 'Medicine Kit',
    slot: 'Utility',
    effect:
      'Restores 1d10 Life to a target. This item has a total of 3uses before it breaks. Range: Adjacent; Action: Instant',
  },
  {
    id: 2,
    label: 'Grappling Hook',
    slot: 'Utility',
    effect:
      'Fire a grappling hook and line to a panel to pull yourself to that panel. This item can be used 3 times before breaking. Range: Far; Action: Instant',
  },
  {
    id: 3,
    label: 'Smoke Bomb',
    slot: 'Utility',
    effect:
      'You obscure the panel you are on, inflicting a bane on all attacks made on and to that panel. After use the item breaks. Action: Instant',
  },
  {
    id: 4,
    label: 'Low Power Grenade',
    slot: 'Utility',
    effect:
      'You throw a low powered grenade that deals 5 fire damage to all those on a nearby panel of your choice. Once used, this item is destroyed. Hit: IMPULSE; Range: Nearby; Action: Instant',
  },
]
