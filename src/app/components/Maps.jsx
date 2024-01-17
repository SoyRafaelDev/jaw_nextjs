import React from 'react';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Maps = () => {
    // ...

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Acceder a la API key
    });

    // Comprobar si el mapa está cargado
    if (loadError) return <div>Error al cargar el mapa.</div>;
    if (!isLoaded) return <div>Cargando mapa...</div>;

    // Renderizar el mapa
    // ...

    return (
        <div>
            {/* Tu componente de mapa aquí */}
        </div>
    );
};

export default Maps;


