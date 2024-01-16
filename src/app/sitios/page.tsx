'use client'

import TurismoAsturias from '../components/TurismoAsturias';
import Maps from '../components/Maps';
import Link from 'next/link';


interface SitioTuristico {
    id: number;
    nombre: string;
    imagen: string;
    // Incluye aquí otras propiedades necesarias
}

interface SitiosProps {
    datos: SitioTuristico[];
}

const Sitios: React.FC<SitiosProps> = ({ datos }) => {
    // Lógica y renderizado del componente
    // ...

    return (
      <div>
      <TurismoAsturias />
    </div>
    );
};


export default Sitios;