import {useState} from "react";

const Summary = () => {
    const [activeTab, setActiveTab] = useState( 0)

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
      <div className="content">
          Summary
          <div className='tabs'>
              {tabItems.map((tabItem, index) => (
                  <button
                      key={tabItem.id}
                      className={`tab rounded-t-lg mr-5 p-2 text-black bg-white
                        ${
                          activeTab === index ? 'active-caliber' : ''
                      }`}
                      onClick={() => setSelectedActiveTab(index)}
                  >
                      {tabItem.text}
                  </button>
              ))}
          </div>
          <div className='tab-content'>
              {tabItems.map(
                  (tabItem, index) => {
                      activeTab === index && (
                          <textarea
                              key={tabItem.id}
                              className={`bg-white rounded-b-lg p-2`}
                              readOnly
                              cols='60'
                          />
                      )
                  }
              )}
          </div>
      </div>
  )
}

export default Summary
