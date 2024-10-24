import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main';
import FirstStudy from './components/FirstStudy/FirstStudy';
import SecondStudy from './components/SecondStudy/SecondStudy';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/firststudy" element={<FirstStudy />} />
          <Route path="/secondstudy" element={<SecondStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
