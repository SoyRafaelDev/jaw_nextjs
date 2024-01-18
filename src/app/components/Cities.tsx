import { error } from "console";
import { useEffect, useState } from "react"
import MaxWidthWrapper from "./MaxWidhtWrapper";
import Image from "next/image";

const Cities: React.FC = () => {
    const [cities, setCities] = useState ([]);

    useEffect(() => {
        fetch('src\app\cities-description.json')
        .then(response => response.json())
        .then(data => setCities(data.cities))
        .catch(error => console.error('Error al cargar el Json:', error))
    }, []);

  return (
    <div>
        <MaxWidthWrapper>
            <h2>Ciudades Turisticas de Asturias</h2>
                <div>
                    {cities.map(city => (
                        <>
                            <div key={city.name}>
                                <Image
                                    src={city.image} alt={city.name}>
                                </Image>
                            </div><h3>{city.name}</h3>
                            <p>{city.description}</p>
                        </>
                    ))}
                </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Cities