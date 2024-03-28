import logo from './logo.svg';
import './App.css';
import { pupils } from './tutoringData/pupils';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          <ul>
            {
              pupils.map(pupil => (
                <li key={pupil.id}>
                  Name: {pupil.name} Price: {pupil.price} Form: {pupil.form}
                </li>
              ))
            }
          </ul>
        </p>
        
      </header>
    </div>
  );
}

export default App;
