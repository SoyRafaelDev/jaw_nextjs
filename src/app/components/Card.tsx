const Card = ({ nombre, imagen }) => {
   return (
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
           <img className="w-full" src={imagen} alt={nombre} />
           <div className="px-6 py-4">
               <div className="font-bold text-xl mb-2">{nombre}</div>
           </div>
       </div>
   );
};

export default Card;
