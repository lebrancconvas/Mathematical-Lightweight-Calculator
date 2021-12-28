import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Homepage from './pages/Homepage'; 
import GCDLCM from './pages/calculator/GCDLCM'; 
import IsPrime from './pages/calculator/IsPrime'; 
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} /> 
          <Route path="/gcdlcm" element={<GCDLCM />} />
          <Route path="/isprime" element={<IsPrime />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
