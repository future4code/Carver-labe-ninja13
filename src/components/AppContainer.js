import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Cadastro from './Cadastro';
import Servico from './Servicos';
import LabeNinjaLogo from '../img/LabeNinjaLogo.png';



export class AppContainer extends React.Component {
    

    


  

render() {
  
 
 

  return (
    
  <div>
      <header id= "container-header">
        <div id  ="menu-home">
          <img src={LabeNinjaLogo}/>
          <div id="menu-horizontal">
            <ul>
              <li><Link  to="/">Home</Link></li>  |
              <li><Link to="Servicos">Serviços</Link></li>   |
              <li><Link to="Cadastro">Cadastro</Link></li>   
            </ul>

          </div>
        </div>

      </header>

      <main>
        <div id= "conteudo">
          <div id= "inicio-home">
            <img class="footer navbar-fixed-bottom" id= "foto-servico"/>
            <br/>
          </div>

        </div>
        <div class="container">
            
        </div>
      </main>
      <footer id="container-footer">
        <p>junior Sposito 123, Cond.Mascarenhas 657 | (55) 4567 - 7898 | labeninja@contat.com</p>
        <p>Working Since *2021*</p>
        <div class="redes-sociais">
          <a target="_blank" href="">
            <img class="imagem" src="" alt=""/>
          </a>
          <a target="_blank" href="">
            <img class="imagem" src=""/>
          </a>
        </div>

      </footer>
  </div>
  )
}
}

export default AppContainer
