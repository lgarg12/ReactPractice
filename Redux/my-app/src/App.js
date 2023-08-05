import { useSelector } from 'react-redux';
import './App.css';
import Account from './Components/Account';
import Bonus from './Components/Bonus';
import Reward from './Components/Reward';

function App() {
  const amount = useSelector(state=>state.account.amount);
  const points = useSelector((state) => state.bonus.Points);
  return (
    <div className="App flex items-center flex-col gap-4">
      <div className='flex flex-col gap-3 items-center'>
        <div className='text-3xl '>App</div>
        <div className='text-xl text-gray-400'>Current Amount: {amount} </div>
        <div className='text-xl text-gray-400'>Total Bonus: {points} </div>
      </div>
      <Account/>
      <Bonus/>
      <Reward/>
    </div>
  );
}

export default App;
