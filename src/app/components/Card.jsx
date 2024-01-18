'use client';
// components/Card.jsx


const Card = ({ nombre, imagen }) => {
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />
            <div className="contenido">
                <h3>{nombre}</h3>
                {/* Otros detalles que quieras mostrar en la tarjeta */}
            </div>
        </div>
    );
};

export default Card;
