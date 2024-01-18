'use client'

import TurismoAsturias from '../components/TurismoAsturias';
import Maps from '../components/Maps';
import Link from 'next/link';
import MaxWidthWrapper from '../components/MaxWidhtWrapper';


interface SitioTuristico {
    id: number;
    nombre: string;
    imagen: string;
    descripcion: string;
    coordenadas: string;
    // Incluye aquí otras propiedades necesarias
}

interface SitiosProps {
    datos: SitioTuristico[];
}

const Sitios: React.FC<SitiosProps> = ({ datos }) => {
    // Lógica y renderizado del componente
    // ...

    return (
        <MaxWidthWrapper>
      <div>
        <h1 className='text-4xl text-center mb-10 font-bold tracking-tighter text-gray-900 sm:text-6xl'>
        Una experiencia que nunca {' '}<span className='text-green-900'>Olvidaras</span>.
        </h1>
      <TurismoAsturias />
      </div>
    </MaxWidthWrapper>
    );
};



export default Sitios;