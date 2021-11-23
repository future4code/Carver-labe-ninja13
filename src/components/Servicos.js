import React, { Component } from 'react';
import LabeNinjaLogo from '../img/LabeNinjaLogo.png';
import Cabeleleira from '../img/Cabeleleira.png';
import manicure from '../img/manicure.png';
import massagem from '../img/massagem.png';
import pedreiro from '../img/pedreiro.png';
import pintor from '../img/pintor.png';
import marceneiro from '../img/marceneiro.png';
import jardineiro from '../img/jardineiro.png';
import designInteriores from '../img/designInteriores.png';
import arquiteto from '../img/arquiteto.png';
import engenheiro from '../img/engenheiro.png';



export class Servicos extends React.Component {
    state =  {
      produto: [{
        id:1,
        name:"Cabeleleira",
        descrition:"Estética Capilar",
        value:90.00,
        image:Cabeleleira
      },
      {
        id:2,
        name:"Manicure",
        descrition:"Estética das Unhas",
        value:50.00,
        image:manicure
      },
      {
        id:3,
        name:"Massagem",
        descrition:"Bem estar e saude",
        value:90.00,
        image:massagem
      },
      {
        id:4,
        name:"Pedreiro",
        descrition:"A melhor reforma",
        value:1500.00,
        image:pedreiro
      },
      {
        id:5,
        name:"Pintor",
        descrition:"Pintura de qualidade",
        value:300.00,
        image:pintor
      },
      {
        id:6,
        name:"Marceneiro",
        descrition:"Reforma de telhado",
        value:90.00,
        image:marceneiro
      },
      {
        id:7,
        name:"Jardineiro",
        descrition:"Manutenção do seu jardim",
        value:150.00,
        image:jardineiro
      },
      {
        id:8,
        name:"Design de Interiores",
        descrition:"Decorando o seu lar",
        value:295.00,
        image:designInteriores
      },
      {
        id:9,
        name:"Arquiteto",
        descrition:"Pensando em cada canto da sua casa.",
        value:180.00,
        image:arquiteto
      },
      {
        id:10,
        name:"Engenheiro",
        descrition:"Construindo novos",
        value:2.500,
        image:engenheiro
      }

    ]
    }


  

render() {
  
 
 

  return (
    
  <div>
      <header id= "container-header">
        <div id  ="menu-home">
          <img src={LabeNinjaLogo}/>
          <div id="menu-horizontal">
            <ul>
              <li>Home</li>  |
              <li>Serviços</li>   |
              <li>Cadastro</li>   
            </ul>

          </div>
        </div>

      </header>

      <main>
        <div id= "conteudo">
          {/* <div id= "inicio-home">
            <img id= "foto-servico" src={Cabeleleira}/>
            <br/>
          </div> */}

        </div>
        <div class="container">
          <div class="servicos-flex-container">
            {this.state.produto.map((produto) =>(
              <div class="item-servico-flex">
                <a>
                  <img src={produto.image} alt="prestacao de servico" class="foto-servico"/>
                </a>
                <h3>{produto.name}</h3>
                <br/>
                <p>{produto.descrition}</p>
                <h3>R$:{produto.value}</h3>
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
