import React, { Component } from 'react';
import LabeNinjaLogo from '../img/LabeNinjaLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import Filtros from './Filtro';
import Ordenacao from './Ordenacao';
import { BuscaOrdenacaoContainer } from './estiloBuscaOrdenacao';






export class Servicos extends React.Component {
  state = {
    produto: [],
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
    const pacotesFiltradosMinimo = this.state.produto.filter((produto) => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo
      } else {
        return produto
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
      return produto.title.includes(this.state.filtroBuscaPorNome)
    })

    return pacotesFiltrado
  }

  componentDidMount() {
    this.getServico()
  }


  getServico = () => {
    const url = " https://labeninjas.herokuapp.com/jobs"
    axios.get(url, {
      headers: {
        Authorization: "6336e3af-ae86-4984-a7b4-53ec08288dbe"
      }
    })
      .then((res) => {
        this.setState({ produto: res.data.jobs })
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente!", err)
      })
  }




  render() {

    //Renderização dos produtos filtrados
    const produtosFiltrados = this.filtrarProdutos()

    //Ordenação dos produtos
    const produtosOrdenados = produtosFiltrados.sort((produtoAtual, produtoSeguinte) => {
      switch (this.state.ordenacao) {
        case "Crescente":
          return produtoAtual.price - produtoSeguinte.price
        case "Decrescente":
          return  produtoSeguinte.price - produtoAtual.price
        case "OrdemAlfabetica":
          return produtoAtual.title.localeCompare(produtoSeguinte.title)
        case "Prazo":
          return new Date(produtoAtual.dueDate).getTime() - new Date(produtoSeguinte.dueDate).getTime()
        default:
          return alert("Algum erro inesperado ocorreu")
      }
    })
    console.log(produtosOrdenados)

    return (

      <div>
        <header id="container-header">
          <div id="menu-home">
            <img src={LabeNinjaLogo} />
            <div id="menu-horizontal">
              <ul>
                <li><Link to="/">Home</Link></li>  |
                <li><Link to="Servicos">Serviços</Link></li>   |
                <li><Link to="Cadastro">Cadastro</Link></li>
              </ul>

            </div>
          </div>
          <BuscaOrdenacaoContainer>
          <Filtros
            minimo={this.state.filtroMinimo}
            maximo={this.state.filtroMaximo}
            buscaPorNome={this.state.filtroBuscaPorNome}

            //Está ligado com o onChange dos inputs do componente filtro 
            onChangeMinimo={this.manipularValorDoFiltroMinimo}
            onChangeMaximo={this.manipularValorDoFiltroMaximo}
            onChangeBuscaPorNome={this.manipularValorDoFiltroBuscaPorNome}
            />
            <Ordenacao
            // ordenacao={}
            onChangeOrdenacao={this.manipularValorOrdenacao}
          />
          </BuscaOrdenacaoContainer>
          
        </header>

        <main>
          <div id="conteudo">

          </div>
          <div class="container">
            <div class="servicos-flex-container">
              {produtosOrdenados.map((produto) => (
                <div class="item-servico-flex">
                  {/* <a>
                   <img src={produto.image} alt="prestacao de servico" class="foto-servico"/> 
                </a> */}
                  <h3>{produto.title}</h3>
                  <br />
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
              <img class="imagem" src="" alt="" />
            </a>
            <a target="_blank" href="">
              <img class="imagem" src="" />
            </a>
          </div>

        </footer>
      </div>
    )
  }
}

export default Servicos
