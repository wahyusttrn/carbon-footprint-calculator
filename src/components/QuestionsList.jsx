import './QuestionsList.css';
import { QuestionContext } from '../context/questionContext';
import React, { useContext} from 'react';
import { QUESTIONS } from '../apis/questions';

const QuestionsList = () => {
  const {setTotalPoints} = useContext(QuestionContext);
  
  return (
    <div className="QuestionList">
        {QUESTIONS.map((question) => {
          return (
            <div key={question.id} className='question-wrapper'>
              <p className='question'>{question.question}</p>
              <div className="options-wrapper">
                {question.option.map((options) => {
                  return (
                    <>
                      <input name={question.id} id={options.label} type='radio' className='option' key={options.opt} onClick={() => setTotalPoints((prev) => prev + options.value)} />
                      <label className='label' for={options.label}>{options.label}</label>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default QuestionsList;