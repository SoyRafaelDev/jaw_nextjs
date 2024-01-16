import React, { useState, useEffect } from 'react';

const TurismoAsturias = () => {
    const [datos, setDatos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const resultadosPorPagina = 9;

    useEffect(() => {
        // Aquí es donde cargarías tus datos desde el JSON
        // Por ejemplo, usando fetch si el archivo está en la carpeta 'public'
        fetch('/data/astur.json')
            .then(response => response.json())
            .then(data => setDatos(data))
            .catch(error => console.error('Error al cargar datos:', error));
    }, []);

    const indiceFinal = paginaActual * resultadosPorPagina;
    const indiceInicial = indiceFinal - resultadosPorPagina;
    const elementosActuales = datos.slice(indiceInicial, indiceFinal);
    const totalPaginas = Math.ceil(datos.length / resultadosPorPagina);

    const paginar = (numeroPagina) => setPaginaActual(numeroPagina);

    return (
        <div>
            <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4">
                {elementosActuales.map((item) => (
                    <div key={item.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200">
                        <img className="w-full" src={item.imagen} alt={item.nombre} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-1">{item.nombre}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <div className="flex justify-center mt-4">
                {[...Array(totalPaginas).keys()].map((num) => (
                    <button 
                        key={num} 
                        onClick={() => paginar(num + 1)} 
                        className="mx-1 px-3 py-2 border rounded hover:bg-gray-200"
                    >
                        {num + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TurismoAsturias;


