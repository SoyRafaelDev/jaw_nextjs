import { CalendarDays, CastleIcon, NotebookPen } from "lucide-react"

export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/sitios', key: 'sitios', label: '¿Que Visitar?' },
]

export const PERKS = [
    {
        name: 'Visitas guiadas', description: 'Desde sitios históricos hasta joyas ocultas, te llevamos en un viaje fascinante para que disfrutes al máximo cada momento de tu visita.', Icon: CastleIcon,

    },

    {
        name: 'Fechas', description: 'Planifica tu aventura sin preocupaciones. Con nuestra amplia disponibilidad de fechas, te ofrecemos flexibilidad para elegir el momento perfecto para tus visitas guiadas.', Icon: CalendarDays,

    },
    {
        name: 'Planes', description: ' Ya sea que busques aventuras emocionantes, exploraciones culturales o momentos de relax, tenemos el plan perfecto para cada tipo de viajero. Descubre la libertad de elegir y personalizar tu experiencia de viaje con nosotros.', Icon: NotebookPen,
    },
]

export const PRODUCTS_CATEGORIES = [
    {
        label: 'Asturias',
        value: 'asturias_kit' as const,
        featured: [
            {
                name: 'Cudillero',
                href: '#',
                imageSrc: '/nav/imagen/asturias01.svg'
            },
            {
                name: 'Playa del Silencio',
                href: '#',
                imageSrc: '/nav/imagen/asturias02.svg'
            },
            {
                name: 'Gijon',
                href: '#',
                imageSrc: '/nav/imagen/asturias03.svg'
            },
        ],
    },
]

export const CITIES_MAIN = [

    {
        name: "Oviedo",
        description: "Oviedo, la capital de Asturias, es conocida por su impresionante casco antiguo, con calles empedradas y arquitectura medieval. La Catedral de San Salvador y la Universidad de Oviedo son hitos importantes. Además, la ciudad alberga esculturas modernas de renombrados artistas, como 'El Culis Monumentalibus' de Eduardo Chillida.",
        image: '/images/oviedo.jpg',
        featured: ["Catedral de San Salvador", "Plaza del Fontán", "Museo de Bellas Artes de Asturias"]
    },
    {
        name: "Gijón",
        description: "Gijón, ubicada en la costa, es famosa por sus playas, como la Playa de San Lorenzo. La ciudad también ofrece un animado ambiente cultural y cuenta con eventos y festivales a lo largo del año. El puerto deportivo y el Acuario de Gijón son lugares populares para visitar.",
        image: '/images/gijon.jpg',
        featured: ["Playa de San Lorenzo", "Puerto Deportivo de Gijón", "Jardín Botánico Atlántico"]
    },
    {
        name: "Avilés",
        description: "Avilés combina su rica historia con una renovación urbana moderna. El Centro Niemeyer, diseñado por Oscar Niemeyer, es un destacado centro cultural y artístico. El casco antiguo de Avilés, con plazas encantadoras y edificios históricos, atrae a los visitantes.",
        image: '/images/cares.jpg',
        featured: ["Centro Niemeyer", "Casco Antiguo de Avilés", "Iglesia de San Nicolás de Bari"]
    },
    {
        name: "Cangas de Onís",
        description: "Cangas de Onís es conocida como la puerta de entrada a los Picos de Europa. El Puente Romano es un símbolo icónico, y la ciudad ofrece un entorno pintoresco con el río Sella serpenteando por ella. Es un punto de partida ideal para explorar la naturaleza circundante.",
        image: '/images/cabo.jpg',
        featured: ["Puente Romano", "Santuario de Covadonga", "Lagos de Covadonga"]
    },
    {
        name: "Llanes",
        description: "Llanes es una pintoresca ciudad costera con un impresionante paisaje marino. Sus playas, como la Playa de Toró, son famosas por su belleza. El casco antiguo de Llanes cuenta con arquitectura medieval y coloridos edificios porticados, creando un encantador escenario.",
        image: '/images/llanes.jpg',
        featured: ["Paseo de San Pedro", "Playa de Toró", "Casco Antiguo de Llanes"]
    }
]
export const POLICIES = [
    { name: 'Aviso legal y condiciones de uso', href: '#', },
    { name: 'Política de privacidad', href: '#', },
    { name: 'Política de cookies', href: '#', },
    { name: 'Contactos', href: '/contacts', },
    { name: 'Quiénes somos', href: '#', },
]

export const MEDIA_LINKS = [
    {
        label: 'Media',
        imageSize: { height: 35, width: 35, },
        featured: [
            {
                name: 'Instagram',
                href: 'https://www.instagram.com/',
                imageSrc: 'images/rrss/instagram.svg',
            },
            {
                name: 'Whatsapp',
                href: '"https://www.whatsapp.com/?lang=es_LA',
                imageSrc: 'images/rrss/whatsapp.svg'
            },
            {
                name: 'Twitter',
                href: 'https://twitter.com/?lang=es',
                imageSrc: 'images/rrss/twitter.svg',
            },
            {
                name: 'Facebook',
                href: 'https://www.facebook.com/?locale=es_ES',
                imageSrc: 'images/rrss/facebook.svg'
            },
        ],
    },
]