import React, { Component } from 'react'
import Switch from './miniComponents/switch';
import CardPaises from "./miniComponents/cardPaises";
import PorContinente from './miniComponents/porContinente';
import PorIdioma from './miniComponents/porIdioma';

class Form extends Component {
    state = { paises: [], porContinente: false, porIdioma: false, continentes: [], idiomas: [] };

    componentDidMount() {
        this.setState(state => ({ paises: this.props.data }))
        let listaIdiomas = []
        let listaContinentes = []
        // eslint-disable-next-line array-callback-return
        this.props.data.map(pais => {
            // eslint-disable-next-line array-callback-return
            pais.languages.map(idioma => {
                if (listaIdiomas.includes(idioma.name)) {
                } else {
                    listaIdiomas.push(idioma.name)
                }
            })

            if (listaContinentes.includes(pais.continent.name)) {
            }
            else {
                listaContinentes.push(pais.continent.name)
            }
        })
        this.setState(state => ({ idiomas: listaIdiomas, continentes: listaContinentes }))
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

    porContinente = () => {
        if (document.getElementById("porContinente").checked) {
            this.setState(state => ({ porContinente: true, porIdioma: false }))
            document.getElementById("porIdioma").checked = false
        } else {
            this.setState(state => ({ porContinente: false }))
        }
    }

    porIdioma = () => {
        if (document.getElementById("porIdioma").checked) {
            this.setState(state => ({ porContinente: false, porIdioma: true }))
            document.getElementById("porContinente").checked = false

        } else {
            this.setState(state => ({ porIdioma: false }))
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
                {
                    this.state.paises.length === 0 ?
                        <div className='text-center'>
                            <h1>
                                <span className='emoji' role="img" aria-label='emoji'>
                                    &#x1F972;
                                </span></h1>
                            <h2>No hay resultados para tu busqueda </h2>
                        </div>
                        :
                        <div className='agruparPor' id='agruparPor'>
                            <h5>Agrupar por:</h5>
                            <div className='switches justify-content-center'>
                                <Switch id={"porContinente"} texto="Por continente" cambiarEstado={this.porContinente} />
                                <Switch id={"porIdioma"} texto="Por idioma" cambiarEstado={this.porIdioma} />
                            </div>
                            <hr />
                        </div>
                }
                {
                    this.state.porContinente === false && this.state.porIdioma === false &&
                    <div>
                        <div className="paises row justify-content-center">
                            {this.state.paises.map(pais => {
                                return <CardPaises key={pais.name} nombrePais={pais.name} codigo={pais.code} emoji={pais.emoji} capital={pais.capital} moneda={pais.currency} continente={pais.continent.name} idiomas={pais.languages} />
                            })}
                        </div>
                    </div>
                }
                {
                    this.state.porContinente === true &&
                    <div>
                        {this.state.continentes.map(continente => {
                            return <PorContinente key={continente} paises={this.state.paises} textoContinente={continente}></PorContinente>
                        })}
                    </div>
                }
                {
                    this.state.porIdioma === true &&
                    <div>
                        {this.state.idiomas.map(idioma => {
                            return <PorIdioma key={idioma} paises={this.state.paises} textoIdioma={idioma}></PorIdioma>
                        })}
                    </div>
                }

            </ div >
        )
    }
}

export default Form
