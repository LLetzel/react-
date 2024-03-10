import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Perfil from './pages/Perfil';
import Badge from './pages/Badge';
import Game from './pages/Game';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/perfil" element={<Perfil />}/>
          <Route path="/badge" element={<Badge />}/>
          <Route path="/Game" element={<Game />}/>


          
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
