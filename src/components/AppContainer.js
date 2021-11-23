
import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Cadastro from './Cadastro';
import Servico from './Servicos';
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
import Filtros from './Filtro'
import { pacoteDeProdutos } from '../pacoteDeProdutos'
import Ordenacao from './Ordenacao'



export class AppContainer extends React.Component {
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
    state = {
    filtroMinimo: 0,
    filtroMaximo: 10000000,
    filtroBuscaPorNome: "",
    ordenacao: "Crescente"
  }

  //Manipulação dos inputs de filtro 
  manipularValorDoFiltroMinimo = (e) => {
    this.setState({
      filtroMinimo: e.target.value
    })
  }
  manipularValorDoFiltroMaximo = (e) => {
    this.setState({
      filtroMaximo: e.target.value
    })
  }
  manipularValorDoFiltroBuscaPorNome = (e) => {
    this.setState({
      filtroBuscaPorNome: e.target.value
    })
  }

  //Manipuação do select de ordenação
  manipularValorOrdenacao = (e) => {
    this.setState({
      ordenacao: e.target.value
    })
  }

  //Aqui é o script para filtro
  filtrarProdutos = () => {
    const pacotesFiltradosMinimo = pacoteDeProdutos.filter((produto) => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo
      }
    })
    const pacotesFiltradosMaximo = pacotesFiltradosMinimo.filter((produto) => {
      if (this.state.filtroMaximo) {
        return produto.price <= this.state.filtroMaximo
      } else {
        return produto
      }
    })
    const pacotesFiltrado = pacotesFiltradosMaximo.filter((produto) => {
      return produto.name.includes(this.state.filtroBuscaPorNome)
    })
    return pacotesFiltrado
 


  

render() {
  
 render() {
    //Renderização dos produtos filtrados
    const produtosFiltrados = this.filtrarProdutos()

    //Ordenação dos produtos
    const produtosOrdenados = pacoteDeProdutos.sort((produtoAtual, produtoSeguinte) => {
      switch (this.state.ordenacao) {
        case "Crescente":
          return produtoAtual.price - produtoSeguinte.price
        case "Decrescente":
          return produtoSeguinte.price - produtoAtual.price
        case "OrdemAlfabetica":
          return produtoAtual.name.localeCompare(produtoSeguinte.name)
        case "Prazo":
          return new Date(produtoAtual.dueDate).getTime() - new Date(produtoSeguinte.dueDate).getTime()
        default:
          return alert("Algum erro inesperado ocorreu")
      }
    })
    console.log(produtosOrdenados)
    console.log("ordenação",this.state.ordenacao)
 

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
          {/* <div id= "inicio-home">
            <img id= "foto-servico" src={Cabeleleira}/>
            <br/>
          </div> */}

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
        <div>
        <Ordenacao
          // ordenacao={}
          onChangeOrdenacao={this.manipularValorOrdenacao}
        />
        <Filtros
          minimo={this.state.filtroMinimo}
          maximo={this.state.filtroMaximo}
          buscaPorNome={this.state.filtroBuscaPorNome}

          //Está ligado com o onChange dos inputs do componente filtro 
          onChangeMinimo={this.manipularValorDoFiltroMinimo}
          onChangeMaximo={this.manipularValorDoFiltroMaximo}
          onChangeBuscaPorNome={this.manipularValorDoFiltroBuscaPorNome}
        />
      </div>
      </footer>
  </div>
  )
}
}

export default AppContainer
