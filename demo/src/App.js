import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import './App.css';
import Journey from './Journey';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
