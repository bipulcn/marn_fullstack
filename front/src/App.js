import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/navbar';
import Home from './pgs/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
