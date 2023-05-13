import './Result.css'
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { QuestionContext } from '../context/questionContext';
import ChatBot from '../components/ChatBot';

const Result = () => {
  const navigate = useNavigate()
  let {totalPoints} = useContext(QuestionContext)
  const back = '<' //lol

  // number-styling
  const getFinalResult = () => {
    let finalResult;
    if (totalPoints < 10) {
      finalResult = '0' + totalPoints;
    } else if (totalPoints => 10) {
      finalResult = totalPoints
    }
    return finalResult
  }

  const getDesc = () => {
    let desc;
    if (totalPoints === 0) {
      desc = 'Please fill out the questions first!';
    } else if (totalPoints < 40) {
      desc = 'You are saving this planet because of your minimum contributions on the global carbon production.';
    } else if (totalPoints >= 40) {
      desc = 'With this point, you should start doing something to reduce your carbon production at home.';
    }
    return desc;
  }

  return (
    <div className="Result">
      <button className='back-button' onClick={() => navigate('/')}>{back}</button>
      <div className="result-wrapper">
        <h2>Your points:</h2>
        <h1>{getFinalResult()}</h1>
        <p className='description'>{getDesc()}</p>
      </div>
      <ChatBot />
    </div>
  )
}

export default Result;