import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import { QuestionContext } from './context/questionContext'
import { useMemo, useState } from 'react'
import './App.css'
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const [totalPoints, setTotalPoints] = useState(0);
  const providerTotalPoints = useMemo(() => ({totalPoints, setTotalPoints}), [totalPoints, setTotalPoints])

  return (
    <QuestionContext.Provider value={providerTotalPoints}>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
      <Analytics />
    </QuestionContext.Provider>
  )
}

export default App