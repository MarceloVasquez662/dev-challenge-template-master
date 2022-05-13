import React from "react";
import CardPaises from "./cardPaises";

function PorIdioma(props) {

    let paises = []
    return (
        <div>
            <div className="paises row justify-content-center">
                {
                    // eslint-disable-next-line array-callback-return
                    props.paises.map(pais => {
                        // eslint-disable-next-line array-callback-return
                        pais.languages.map(idioma => {
                            if (idioma.name === props.textoIdioma) {
                                paises.push(pais)
                            }
                        })
                    })
                }
                {
                    paises.length > 0 &&
                    <div className="paises row justify-content-center text-center">
                        <div>
                            <h2 >{props.textoIdioma}</h2>
                        </div>
                        {paises.map(pais => {
                            return < CardPaises key={pais.name}
                                nombrePais={pais.name}
                                codigo={pais.code}
                                emoji={pais.emoji}
                                capital={pais.capital}
                                moneda={pais.currency}
                                continente={pais.continent.name}
                                idiomas={pais.languages} />
                        })}
                        <hr />
                    </div>
                }
            </div>
        </div>
    );
}

export default PorIdioma;