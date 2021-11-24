import React from 'react'
import { BoxFiltro, Filtro, GrupoDeFiltros } from './estiloDoFiltro'


class Filtros extends React.Component {
    
    
    render() {
        return <GrupoDeFiltros>
            <h2>Filtros</h2>
            <Filtro>
                Filtro mínimo:
                <BoxFiltro type={"number"}
                    value={this.props.minimo}
                    onChange={this.props.onChangeMinimo}
                />
            </Filtro>
            <Filtro>
                Filtro máximo:
                <BoxFiltro type={"number"}
                value={this.props.maximo}
                onChange={this.props.onChangeMaximo }
                />
            </Filtro>
            <Filtro>
                Busca por nome:
                <BoxFiltro type={"text"}
                value={this.props.buscaPorNome}
                onChange={this.props.onChangeBuscaPorNome}
                />
            </Filtro>
        </GrupoDeFiltros    >
        
    }
}
export default Filtros