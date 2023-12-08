import React, { useState, createContext } from 'react';

import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import './App.css';
import Journey from './Journey';
import MethodsContext from './MethodsContext';

function App() {
  const [methods, setMethods] = useState([]);
  return (
    <MethodsContext.Provider value={{ methods, setMethods }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
      </BrowserRouter>
    </MethodsContext.Provider>
  );
}

export default App;
