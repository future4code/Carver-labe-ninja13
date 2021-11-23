import React from 'react'

class Ordenacao extends React.Component {
    render() {
        return (
            <select onChange={this.props.onChangeOrdenacao}>
                <option value={"Crescente"}>Crescente</option>
                <option value={"Decrescente"}>Decrescente</option>
                <option value={"OrdemAlfabetica"}>Ordem alfabetica</option>
                <option value={"Prazo"}>Prazo</option>
            </select>
        )
    }
}
export default Ordenacao