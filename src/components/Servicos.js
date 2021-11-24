import React, { Component } from 'react';
import LabeNinjaLogo from '../img/LabeNinjaLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";





export class Servicos extends React.Component {
    state =  {
      produto: []
     }

     componentDidMount() {
        this.getServico()
    }
    

    getServico =() =>{
        const url = " https://labeninjas.herokuapp.com/jobs"
        axios.get(url, {
            headers: {
                Authorization: "6336e3af-ae86-4984-a7b4-53ec08288dbe"
            }
        })
        .then((res) => {
            this.setState({produto:res.data.jobs})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente!", err)
        })
      }


  

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
    
        </div>
        <div class="container">
          <div class="servicos-flex-container">
            {this.state.produto.map((produto) =>(
              <div class="item-servico-flex">
                {/* <a>
                   <img src={produto.image} alt="prestacao de servico" class="foto-servico"/> 
                </a> */}
                <h3>{produto.title}</h3>
                <br/>
                <p>{produto.description}</p>
                <h3>R$:{produto.price}</h3>
                <button class="botao-adc-carrinho" onClick={() => this.AdcionarSacola(produto)}>adcionar ao carrinho</button>
              </div>
            ))}
          </div>
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

export default Servicos
