import React from 'react';

import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cadastro from './components/Cadastro';
import Servicos from './components/Servicos';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Carrinho from './components/Carrinho';


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="Cadastro" element={<Cadastro/>}/>
      <Route path ="Servicos" element={<Servicos/>}/>
      <Route path ="Carrinho" element={<Carrinho/>}/>
    </Routes>
  </BrowserRouter>,rootElement
);



serviceWorker.unregister();
