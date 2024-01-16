'use client'
import Card from '../components/Card';
import { useState, useEffect } from 'react';


const Sitios = ({ datos }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {datos.map(item => (
                <Card key={item.id} nombre={item.nombre} imagen={item.imagen} />
            ))}
        </div>
    );
};

export default Sitios;
