import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapComponent = ({ coordenadas }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (loadError) return <div>Error al cargar el mapa.</div>;
    if (!isLoaded) return <div>Cargando mapa...</div>;

    return (
        <GoogleMap
            zoom={15}
            center={coordenadas}
            mapContainerStyle={{ width: '100%', height: '400px' }}
        >
            <Marker position={coordenadas} />
        </GoogleMap>
    );
};

export default MapComponent;


