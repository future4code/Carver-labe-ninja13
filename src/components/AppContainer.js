import React, { Component } from 'react'
import Filtros from './Filtro'
import { pacoteDeProdutos } from '../pacoteDeProdutos'
import Ordenacao from './Ordenacao'

export class AppContainer extends Component {
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
  }

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
    )
  }
}
