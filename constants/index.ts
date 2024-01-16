import { AlarmClock, CalendarDays, CastleIcon, NotebookPen } from "lucide-react"

export const NAV_LINKS = [
    { href: '/', key:'home', label: 'Home'},
    { href: '/servicios', key:'servicios', label: 'Servicios'},
    { href: '/contacts', key:'contactos', label: 'Contactos'},
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
                name: 'ciudad 01',
                href: '#',
                imageSrc: '/nav/imagen/asturias01.svg'
            },
            {
                name: 'ciudad 02',
                href: '#',
                imageSrc: '/nav/imagen/asturias02.svg'
            },
            {
                name: 'ciudad 03',
                href: '#',
                imageSrc: '/nav/imagen/asturias03.svg'
            },
        ],
    },
]