import React, { Component } from 'react'
import CardPaises from "./miniComponents/cardPaises";

class Form extends Component {
    state = { paises: [] };

    componentDidMount() {
        this.setState(state => ({ paises: this.props.data }))
    }

    buscarPais = () => {
        let paisBuscado = document.getElementById("pais").value
        let listaPaises = []

        if (paisBuscado.trim() !== "") {
            // eslint-disable-next-line array-callback-return
            this.props.data.map(pais => {
                if (pais.name.toLowerCase().includes(paisBuscado.toLowerCase())) {
                    listaPaises.push(pais)
                }
            })
            this.setState(state => ({ paises: listaPaises }))
        }
        else {
            this.componentDidMount();
        }
    }


    render() {
        return (
            < div >
                <div className='paisFormulario'>
                    <form className='formulario'>
                        <input type="text" name="pais" id="pais" placeholder='Busca tu país aquí' className='form-control' onChange={this.buscarPais} />
                    </form>
                </div>
                <div className='agruparPor' id='agruparPor'>
                    <h5>Agrupar por:</h5>
                    <button className='btn btn-success m-3' >Por continente</button>
                    <button className='btn btn-info m-1'>Por idioma</button>
                </div>
                <div className="paises row justify-content-center">
                    {
                        this.state.paises.map(pais => {
                            return <CardPaises key={pais.name} nombrePais={pais.name} codigo={pais.code} emoji={pais.emoji} capital={pais.capital} moneda={pais.currency} />
                        })
                    }
                </div>
            </ div>
        )
    }
}

export default Form
