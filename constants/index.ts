import { AlarmClock, CalendarDays, CastleIcon, NotebookPen } from "lucide-react"

export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/servicios', key: 'servicios', label: 'Servicios' },
    { href: '/contacts', key: 'contactos', label: 'Contactos' },
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