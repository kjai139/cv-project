import { Education } from './components/Education';
import { Profile } from './components/Profile';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className='formContainer'>
          <Profile />
          <Education />
      </div>
    </div>
  );
}

export default App;
