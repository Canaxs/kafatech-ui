import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/list" element={<List/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
