import React from 'react'
import { Link } from 'react-router-dom'
import LabeNinjaLogo from '../img/LabeNinjaLogo.png';
import { CarrinhoContainer } from './estiloCarrinho';
import ItemCarrinho from './ItemCarrinho';


class Carrinho extends React.Component {

    render() {
        //map do carrinho
        const itensDoCarrinho = this.props.produtosOrdenadosCarrinho && this.props.produtosOrdenadosCarrinho.map((item) => {
            return <ItemCarrinho
                quantidade={item.quantidade}
                nome={item.name}
                onClick={() => console.log("fununcia")}
            />
        })
        return <div>
            <header id="container-header">
                <div id="menu-home">
                    <img src={LabeNinjaLogo} />
                    <div id="menu-horizontal">
                        <ul>
                            <li><Link to="/">Home</Link></li>  |
                            <li><Link to="Servicos">Serviços</Link></li>   |
                            <li><Link to="Cadastro">Cadastro</Link></li>  |
                            <li><Link to="Carrinho">Carrinho</Link></li>
                        </ul>

                    </div>
                </div>

            </header>

            <main>
                <div id="conteudo">
                    <div id="inicio-home">
                        <img class="footer navbar-fixed-bottom" id="foto-servico" />
                        <br />
                    </div>

                </div>
                <CarrinhoContainer>
                    <h2>Carrinho</h2>
                    <div>
                        {itensDoCarrinho}
                    </div>
                    <p>
                        Valor Total: R$ {this.props.valorTotal}
                    </p>
                </CarrinhoContainer>
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
                <div>

                </div>
            </footer>
        </div>

    }
}

export default Carrinho