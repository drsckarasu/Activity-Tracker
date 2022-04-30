import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './pages/main';

const App = () => (
  <div className="wrapper">
    <BrowserRouter>
      <Routes>
        <Route path="/Activity-Tracker" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
