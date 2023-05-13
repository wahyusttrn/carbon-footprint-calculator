import './Home.css';
import { setTime } from '../apis/setTime.js';
import { useNavigate } from 'react-router-dom';
import QuestionsList from '../components/QuestionsList'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="Home">
      <header>
        <h2>Good {setTime()}, <br /> this is your carbon footprint calculator</h2>
        <p>The ammount of points you will get is only measurement of your carbon production.</p>
      </header>
      <QuestionsList />
      <button className='check-button' onClick={() => navigate('/result')}>Check</button>
    </div>
  );
}

export default Home;