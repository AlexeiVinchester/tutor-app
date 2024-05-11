import './index.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Lessons from './Components/Lessons-components/Lessons';
import Students from './Components/Students-components/Students';
import Statistics from './Components/Statistics/Statistics';
import Contacts from './Components/Contacts/Contacts';
import NavBar from './Components/Navbar/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/students" element={<Students />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
