import './App.css';
import './assets/css/animate.min.css';
import './assets/css/Style.css';
import './assets/bootstrap/css/bootstrap.min.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
