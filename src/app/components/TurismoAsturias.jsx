import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidhtWrapper';
import Image from 'next/image';

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
    <><MaxWidthWrapper><div>
            <React.Fragment>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 m-3">
                        {elementosActuales.map((item) => (
                            <div key={item.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-700">
                                <Image className="w-full" src={item.imagen} alt={item.nombre} width={350} height={350}/>
                                <Link href={`/turismo-asturias/${item.id}`}>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-1">{item.nombre}</div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
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
        </MaxWidthWrapper>
        </>
    );
};

export default TurismoAsturias;


