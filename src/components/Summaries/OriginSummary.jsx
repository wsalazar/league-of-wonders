import { origins } from '../../data'
import { useState } from 'react'
import js from "@eslint/js";

export const OriginSummary = ({id,  selectedOriginId }) => {
    const [allOrigins] = useState(origins)
    const [originQuestion, setOriginQuestion] = useState(JSON.parse(localStorage.getItem('setQuestions') )|| [])
      const selectedOrigin = allOrigins.find(
        (origin) => origin.id === selectedOriginId
      )
    const setTextArea = (index, value) => {
        setOriginQuestion(prevQuest => {
            const newQuestion = [...prevQuest];
            newQuestion[index] = value;
            localStorage.setItem('setQuestions', JSON.stringify(newQuestion));
            return newQuestion;
        });
    };
    return (
    <div key={id} className='grid h-full grid-cols-2 gap-3   bg-white'>
      <div className='flex flex-col mt-5'>
        <div
          className='mb-4 rounded-full'
          style={{
            background: '#433d36',
            padding: '10px',
            border: '1px solid #eead67',
          }}
        >
          <legend
            className='text-2xl font-bold text-center uppercase'
            style={{ color: '#eead67' }}
          >
            {selectedOrigin.text}
          </legend>
        </div>
        <div
          className='flex-grow p-5 overflow-auto text-sm border border-black rounded-lg'

        >{selectedOrigin.levelDetails()}</div>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='text-center font-bold'>
          <h3>Origin Questions (Optional)</h3>
        </div>
        <div className='flex-grow p-5 overflow-auto text-sm border border-black rounded-lg'>
            {
                selectedOrigin.text === 'Flux Agent' && (
                    <ol>
                        {selectedOrigin.questions.map((question, index) => {
                            return (
                                <>
                                <li key={index}>{question.text}</li>
                                {/*    todo what is this text area for?*/}
                                <textarea></textarea>
                                </>
                            )
                        })}
                    </ol>
                    ) ||
                selectedOrigin.text === 'Visionary' && (
                    <ol>
                        {selectedOrigin.questions.map((question, index) => {
                            return (
                                <li key={index}>{question.text}</li>
                            )
                        })}
                    </ol>
                ) ||
                selectedOrigin.text === 'The Hue' && (
                    <ol>
                        {selectedOrigin.questions.map((question, index) => {
                            return (
                                <li key={index}>{question.text}</li>
                            )
                        })}
                    </ol>
                ) ||
                selectedOrigin.text === 'Mythical' && (
                    <ol>
                        {selectedOrigin.questions.map((question, index) => {
                            return (
                                <>
                                    <li key={index}>{question.text}</li>
                                    <textarea
                                        cols='60'
                                        className="p-2 w-full bg-white text-gray-800 border border-black rounded-lg"
                                        onChange={(e) => setTextArea(index, e.target.value)}
                                        value={originQuestion[index] || ''}
                                    />
                                </>
                            )
                        })}
                    </ol>
                ) ||
                selectedOrigin.text === 'Lumen Fighter' && (
                    <ol>
                    {selectedOrigin.questions.map((question, index) => {
                            return (
                                <li key={index}>{question.text}</li>
                            )
                        })}
                    </ol>
                )
            }
        </div>
      </div>
    </div>
  )
}
