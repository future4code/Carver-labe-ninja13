import React, { Component } from 'react';
import { AppContainer } from "./AppContainer";
import LabeNinjaLogo from '../img/LabeNinjaLogo.png';
import { render } from 'react-dom';
import axios from 'axios';
import { Link } from "react-router-dom";



export class formularioCadastro extends React.Component
 {
    state = {
        titulo: "",
        valor: "",
        descricao: "",
        prazo: "",
        pagamento: ""
    }

    

    handleTitulo = (event) => {
        this.setState({ titulo: event.target.value })
    }
    handleValor = (event) => {
        this.setState({ valor: event.target.value })
    }
    handleDescricao = (event) => {
        this.setState({ descricao: event.target.value })
    }
    handlePrazo = (event) => {
        this.setState({ prazo: event.target.value })
    }
    handlePagamento = (event) => {
        this.setState({ pagamento: event.target.value })
    }

    fazerCadastro = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        const body = {
            title:this.state.titulo,
            description:this.state.descricao,
            price:parseFloat(this.state.valor),
            paymentMethods:[this.state.pagamento],
            dueDate:this.state.prazo
        }
        console.log(body)

        axios.post(url, body, {
            headers:{
                Authorization:"6336e3af-ae86-4984-a7b4-53ec08288dbe"
            }
        })

        .then((res) => {
            alert("Cadastro efetuado com sucesso!")
            console.log(res)            
        })

        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        const opcoes = [
            {
                label:"Debito",
                value:"Debito",
            },
            {
                label:"Credito",
                value:"Credito",
            },
            {
                label:"Pix",
                value:"Pix",
            },
            {
                label:"Boleto",
                value:"Boleto",
            }
        ]
        return (
            <div>
                <header id="container-header">
                    <div id="menu-home">
                        <img src={LabeNinjaLogo} />
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
                    <div class="formulario">
    
                        <br />
                            <div class="cadastro">
                            <h1>CADASTRE SEUS SERVIÇOS</h1>
                            <div class="campo-titulo">
                                <label for="titulo">Titulo</label>
                                <input type="text"
                                    placeholder="Qual serviço oferecido..."
                                    name="titulo"
                                    id="titulo" 
                                    value = {this.state.titulo}
                                    onChange = {this.handleTitulo}
                                />
                            </div>
                            <br />
    
                            <div class="campo-descricao">
                                <label for="idade"> Descrição</label>
                                <input type="text" 
                                    placeholder="Descrição..." 
                                    name="descricao" 
                                    id="descricao" 
                                    value = {this.state.descricao}
                                    onChange = {this.handleDescricao}
                                />
                            </div>
                            <br />
                            <div class="campo-valor">
                                <label for="valor">Valor</label>
                                <input type="number" 
                                    placeholder="Valor..." 
                                    name="valor" 
                                    id="valor"
                                    value={this.state.valor}
                                    onChange = {this.handleValor}
                                />
                            </div>
                            <br />
                            <div class="campo-prazo">
                                <label for="prazo">Prazo</label>
                                <input type="date"
                                    placeholder="Data de entrega..." 
                                    name="data"
                                    id="data"
                                    value={this.state.prazo}
                                    onChange={this.handlePrazo}
                                />
                            </div>
                            <br />
    
                            <div class="" campo-forma-de-pagamento>
                                <select value={this.state.pagamento} onChange={this.handlePagamento}>
                                    
                                    {opcoes.map((item) => (
                                        <option value={item.value}>{item.label}</option>
                                    ))}
                                </select>
    
                            </div>
                            <br></br>
                            <button onClick={this.fazerCadastro}> Cadastrar</button>
    
                       
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
        );
    }

    
}

export default formularioCadastro;