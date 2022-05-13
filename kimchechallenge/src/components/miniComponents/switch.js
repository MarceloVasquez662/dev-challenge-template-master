import React from "react";

function Switch(props) {
    return (
        <div className="form-check form-switch m-4">
            <input type="checkbox" className="form-check-input" role="switch" id={props.id} onChange={props.cambiarEstado} />
            <label className="form-check-label" htmlFor={props.id} >{props.texto}</label>
        </div>
    );
}

export default Switch;