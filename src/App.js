import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Profile } from './components/Profile';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className='formContainer'>
          <Profile />
          <Education />
          <Experience />
      </div>
    </div>
  );
}

export default App;
