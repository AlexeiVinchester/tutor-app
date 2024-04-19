import './index.css';
import LessonContainer from './Components/Lessons-components/LessonsContainer';
import PupilContainer from './Components/Pupils-components/PupilContainer';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {

  const [menuState, setMenuState] = useState('Lessons');
  const mainView = {
    'Menu': <h1>Main</h1>,
    'Pupils': <PupilContainer />,
    'Lessons': <LessonContainer />,
    'Tutors': 'Tutor',
    'Contacts': 'Contacts'
  }

  return (
    <div>
      <NavBar setMenuState={setMenuState}/>
      {
        mainView[menuState]
      }
    </div>
  );
}

export default App;
