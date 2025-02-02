import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './pages/HomePage';
import StudyPython from './pages/StudyPython';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/studyPython' element={<StudyPython />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
