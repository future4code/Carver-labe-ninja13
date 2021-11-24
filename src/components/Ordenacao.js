import React from 'react'
import { EstiloOrdenacao, OrdenacaoContainer } from './estiloOrdenacao'

class Ordenacao extends React.Component {
    render() {
        return (
            <OrdenacaoContainer>
                <p>Ordenar por:</p>
                <EstiloOrdenacao onChange={this.props.onChangeOrdenacao}>                
                <option value={"Crescente"}>Crescente</option>
                <option value={"Decrescente"}>Decrescente</option>
                <option value={"OrdemAlfabetica"}>Ordem alfabetica</option>
                <option value={"Prazo"}>Prazo</option>
                </EstiloOrdenacao>
            </OrdenacaoContainer>
            
        )
    }
}
export default Ordenacao