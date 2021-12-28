import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Homepage from './pages/Homepage'; 
import GCDLCM from './pages/calculator/GCDLCM'; 
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} /> 
          <Route path="/gcdlcm" element={<GCDLCM />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
