
import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Cadastro from './Cadastro';
import Servico from './Servicos';
import LabeNinjaLogo from '../img/LabeNinjaLogo.png';




export class AppContainer extends React.Component {
    


    
    
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
