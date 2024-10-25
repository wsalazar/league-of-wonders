import {useState} from "react";
import {OriginSummary} from "../Summaries/OriginSummary.jsx";
import {CaliberSummary} from "../Summaries/CaliberSummary.jsx";

const Summary = () => {
    const [activeTab, setActiveTab] = useState( 0)
    const selectedOriginId = parseInt(localStorage.getItem('activeOrigin'))
    const selectedCalibers = JSON.parse(localStorage.getItem('selectedCalibers'))



    const tabItems = [
        {
            id: 1,
            text: 'Origin',
        },
        {
            id: 2,
            text: 'Calibers',
        },
        {
            id: 3,
            text: 'Aspects & Primary Stats',
        },
        {
            id: 4,
            text: 'Gear',
        },
        {
            id: 5,
            text: 'Details',
        },
        {
            id: 6,
            text: 'Character Sheet Sample',
        }
    ];

    const setSelectedActiveTab = (index) => {
        setActiveTab(index)
        // localStorage.setItem('setTab', index)
    }
  return (
      <div className='flex-grow h-full '>
          <h3 className='font-bold uppercase'>Summary</h3>
          <div className='tabs '>
              {tabItems.map((tabItem, index) => (
                  <button
                      key={tabItem.id}
                      className={`tab rounded-t-lg mr-2 p-2 text-black bg-white w-48 text-center text-sm font-bold 
                        ${
                          activeTab === index ? 'active-caliber' : ''
                      }`}
                      onClick={() => setSelectedActiveTab(index)}
                  >
                      {tabItem.text}
                  </button>
              ))}
          </div>
          <div className='tab-content '>
              {tabItems.map(
                  (tabItem, index) => {
                      return (
                          activeTab === index && tabItem.text === 'Origin' && (<OriginSummary key={tabItem.id} selectedOriginId={selectedOriginId}/>) ||
                          activeTab === index && tabItem.text === 'Calibers' && (<CaliberSummary key={tabItem.id} selectedCalibers={selectedCalibers}/>)

                      )
                  }
              )}
          </div>
      </div>
  )
}

export default Summary
