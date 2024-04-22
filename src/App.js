import './index.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/ReactRouter/Main';
import Lessons from './Components/ReactRouter/Lessons';
import Students from './Components/ReactRouter/Students';
import Tutors from './Components/ReactRouter/Tutors';
import Contacts from './Components/ReactRouter/Contacts';
import NavBar from './Components/Navbar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/students" element={<Students />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
