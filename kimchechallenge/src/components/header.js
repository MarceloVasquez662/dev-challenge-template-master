import React from 'react'

const Header = () => {
    return (
        <div className='jumbotron text-center'>
            <h1>Buscador de paises
                <span role="img" aria-label='emoji'>
                    &#x1F30E;
                </span>
            </h1>
            <p>Utiliza el cuadro de busqueda y encuentra el país que desees
                <span className='emoji' role="img" aria-label='emoji'>
                    &#x1F60E;
                </span>
            </p>
            <p>Además, puedes presionar el nombre del pais para conseguir mas información <span className='emoji' role="img" aria-label='emoji'>
                &#x1F5FA;
            </span></p>
            <br />
            <br />
            <h4>Creado por Marcelo Vásquez <span className='emoji' role="img" aria-label='emoji'>
                &#x1F412;
            </span></h4>

        </div >
    )
}

export default Header