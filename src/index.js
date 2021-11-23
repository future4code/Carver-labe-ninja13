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


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="Cadastro" element={<Cadastro/>}/>
      <Route path ="Servicos" element={<Servicos/>}/>
    </Routes>
  </BrowserRouter>,rootElement
);


serviceWorker.unregister();
