import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, DonationPage } from './pages/index';
// import HomeChatBox from './Views/Components/HomeChatBox/HomeChatBox';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/donation" element={<DonationPage />} />
          {/* <Route path="/chat" element={<HomeChatBox />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
