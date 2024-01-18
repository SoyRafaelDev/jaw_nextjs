- pages/
  - sitios/
    - [id].tsx
// pages/sitios/[id].tsx
// pages/sitios/[id].tsx
import { useRouter } from 'next/router';

const Detalles = ({ sitio }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Cargando...</div>;
    }

    // Asegúrate de que 'sitio' tiene los datos esperados
    return (
        <div>
            <h1>{sitio.nombre}</h1>
            <img src={sitio.imagen} alt={sitio.nombre} />
            <p>{sitio.descripcion}</p>
        </div>
    );
};

export async function getStaticPaths() {
    const data = await import('/data/astur.json');
    const paths = data.map(sitio => ({ params: { id: sitio.id.toString() } }));
    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const data = await import('/data/astur.json');
    const sitio = data.find(s => s.id.toString() === params.id);
    return { props: { sitio } };
}

export default Detalles;

