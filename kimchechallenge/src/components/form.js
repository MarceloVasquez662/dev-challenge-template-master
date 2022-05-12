import React from 'react'

function Form(props) {
    return (
        <div>
            <div className='paisFormulario '>
                <form action="" className='formulario'>
                    <input type="text" name="pais" id="pais" placeholder='Busca tu país aquí' className='form-control' />
                </form>
            </div>
            <div className='agruparPor'>
                <h5>Agrupar por:</h5>
                <button className='btn btn-success m-3' >Por continente</button>
                <button className='btn btn-info m-1'>Por idioma</button>
            </div>
        </div>
    )

}

export default Form
