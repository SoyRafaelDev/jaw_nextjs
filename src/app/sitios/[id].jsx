import React from 'react';
import { useRouter } from 'next/router';

const SitioDetalle = ({ sitio }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{sitio.nombre}</h1>
            <img src={sitio.imagen} alt={sitio.nombre} />
            <p>{sitio.descripcion}</p>
            {/* Aquí podrías integrar un mapa de Google con las coordenadas */}
        </div>
    );
};

export async function getStaticPaths() {
    // Aquí obtienes los ids de tus sitios, dependiendo de dónde estén almacenados
    const paths = tusDatos.map(sitio => ({
        params: { id: sitio.id.toString() },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    // Aquí cargas los detalles del sitio basándote en el id
    const sitio = tusDatos.find(s => s.id.toString() === params.id);

    return { props: { sitio } };
}

export default SitioDetalle;
