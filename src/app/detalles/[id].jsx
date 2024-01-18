- pages/
  - detalles/
    - [id].tsx  // o [id].tsx si estás usando TypeScript

    import React from 'react';
    import { useRouter } from 'next/router';
    
    // Importaciones adicionales que necesites
    
    const SitioDetalle = ({ sitio }) => {
        // Lógica para renderizar los detalles del sitio
        return (
            <div>
                {/* Renderizar los detalles del sitio aquí */}
            </div>
        );
    };
    
    export async function getStaticPaths() {
        // Cargar los datos de astur.json y generar los paths
        const data = require('/data/astur.json'); // Ajusta la ruta según sea necesario
        const paths = data.map(sitio => ({
            params: { id: sitio.id.toString() },
        }));
    
        return { paths, fallback: false };
    }
    
    export async function getStaticProps({ params }) {
        // Cargar los detalles del sitio basado en params.id
        const data = require('/data/astur.json'); // Ajusta la ruta según sea necesario
        const sitio = data.find(s => s.id.toString() === params.id);
    
        return { props: { sitio } };
    }
    
    export default SitioDetalle;
    ``
    