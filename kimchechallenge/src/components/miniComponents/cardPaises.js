import React from "react";
import fondo from "../../imgs/fondoCard.jpg"

function CardPaises(props) {
    return (
        <div className="tarjeta text-center" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="cuerpo">
                <span>{props.emoji}</span>
                <br />
                <a href={`https://www.google.com/search?q=${props.nombrePais}`} target="_blank" rel="noopener noreferrer"><h2>{props.nombrePais}</h2></a>
                <p className="badge bg-warning text-dark m-1">Capital: {props.capital}</p>
                <p className="badge bg-info text-dark">Moneda: {props.moneda}</p>
            </div>
        </div >
    );
}

export default CardPaises;