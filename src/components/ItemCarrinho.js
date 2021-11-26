import React from "react";
import { ConjuntoDeItens } from "../estiloItemCarrinho";



export class ItemCarrinho extends React.Component {
    render() {
        return (
            <ConjuntoDeItens>
                <p>{this.props.quantidade}</p>
                <p>{this.props.nome}</p>
                <button onClick={() => this.props.onClick}>Remover</button>
            </ConjuntoDeItens>
        )
    }
}

export default ItemCarrinho