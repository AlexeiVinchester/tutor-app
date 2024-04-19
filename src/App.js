import './index.css';
import LessonContainer from './Components/Lessons-components/LessonsContainer';
import PupilContainer from './Components/Pupils-components/PupilContainer';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <NavBar />
      <LessonContainer></LessonContainer>
      <Footer />
    </div>
  );
}

export default App;
